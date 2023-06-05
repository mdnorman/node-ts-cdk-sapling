import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EnvironmentConfig } from '../config';

export class MainStack extends Stack {
  constructor(scope: Construct, id: string, { stage, logRetention }: EnvironmentConfig, props?: StackProps) {
    super(scope, id, props);
  }
}
