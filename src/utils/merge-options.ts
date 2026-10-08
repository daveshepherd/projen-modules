const isPlainObject = (obj: unknown): obj is Record<string, unknown> => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  return proto === Object.prototype || proto === null;
};

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation. Only plain objects
 * are merged recursively, class instances in `options` replace the default.
 *
 * @param  objects - Objects to merge
 * @returns  New object with merged key/values
 */
export function mergeOptions<
  Defaults extends Record<string, any>,
  Options extends Record<string, any>,
>(defaults: Defaults, options?: Options): Defaults & Options {
  return [defaults, options].reduce<Record<string, any>>((prev, obj) => {
    if (obj === undefined) {
      return prev;
    }

    const result: Record<string, any> = { ...prev };
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        result[key] = [...pVal, ...oVal];
      } else if (isPlainObject(pVal) && isPlainObject(oVal)) {
        result[key] = mergeOptions(pVal, oVal);
      } else {
        result[key] = oVal;
      }
    });

    return result;
  }, {}) as Defaults & Options;
}
