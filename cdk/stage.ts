import { Stage, StageProps, Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EnvironmentConfig } from './config';
import { MainStack } from './stacks/main';

export class MainStage extends Stage {
  constructor(scope: Construct, id: string, config: EnvironmentConfig, props?: StageProps) {
    super(scope, id, props);
    Tags.of(this).add('STAGE', config.stage);
    Tags.of(this).add('SUBSYSTEM', 'CHANGEME');

    new MainStack(this, 'CHANGEME', config, props);
  }
}
