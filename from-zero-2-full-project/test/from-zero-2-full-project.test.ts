import * as cdk from 'aws-cdk-lib';
import * as FromZero2FullProject from '../lib/from-zero-2-full-project-stack';

test('SQS Queue Created', () => {
    const app = new cdk.App();
     // WHEN
    const stack = new FromZero2FullProject.FromZero2FullProjectStack(app, 'MyTestStack');
     // THEN
    expect(stack).toMatchSnapshot();

});
