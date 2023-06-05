#!/usr/bin/env ts-node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import { buildEnvironmentConfig } from './config';
import { MainStage } from './stage';

const deploy = () => {
  const app = new App();

  buildMainStage(app, 'test');
  buildMainStage(app, 'prod');

  app.synth();
};

const buildMainStage = (app: App, stage: string) =>
  new MainStage(app, stage, buildEnvironmentConfig(stage), {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
  });

deploy();
