import { RetentionDays } from 'aws-cdk-lib/aws-logs';

export interface EnvironmentConfig {
  stage: string;
  logRetention: RetentionDays;
}

const logRetentions: { [stage: string]: RetentionDays } = {
  test: RetentionDays.TWO_MONTHS,
  prod: RetentionDays.TEN_YEARS,
};

export const buildEnvironmentConfig = (stage: string): EnvironmentConfig => ({
  stage,
  logRetention: logRetentions[stage],
});
