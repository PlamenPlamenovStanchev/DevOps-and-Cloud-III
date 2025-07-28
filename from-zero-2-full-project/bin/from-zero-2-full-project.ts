#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FromZero2FullProjectStack } from '../lib/from-zero-2-full-project-stack';

const app = new cdk.App();
new FromZero2FullProjectStack(app, 'FromZero2FullProjectStack', {
  env: {
    region: 'eu-central-1'
  }
});