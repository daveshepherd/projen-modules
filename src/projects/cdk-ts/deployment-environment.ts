/**
 * An environment that the release workflow deploys the CDK app to
 */
export interface DeploymentEnvironment {
  /**
   * The GitHub environment the deploy job runs in, which also names the job `deploy_<environment>`
   *
   * Only letters, digits, `_` and `-` are allowed, so that it makes a valid job id.
   */
  readonly environment: string;
  /**
   * The AWS region to deploy to
   */
  readonly region: string;
  /**
   * The secret holding the ARN of the IAM role that the deploy job assumes, through GitHub's OIDC provider
   *
   * @default 'AWS_DEPLOYMENT_ROLE_ARN'
   */
  readonly roleSecret?: string;
  /**
   * Environment variables for the deploy step, whose values may reference secrets, e.g. `${{ secrets.ALERT_EMAIL }}`
   *
   * @default {}
   */
  readonly env?: { [key: string]: string };
  /**
   * The display name of the deploy job
   *
   * @default 'Deploy to <Environment>'
   */
  readonly name?: string;
  /**
   * The `--require-approval` level passed to `cdk deploy`
   *
   * @default 'never'
   */
  readonly requireApproval?: string;
}
