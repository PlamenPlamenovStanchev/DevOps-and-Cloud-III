import * as cdk from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import { CfnOutput, Tags } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FromZero2FullProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const errorTopic = new Topic(this, 'ErrorTopic');

    const successTopic = new Topic(this, 'Success Topic')

   Tags.of(errorTopic).add('administrator', 'Nasko'); 

   Tags.of(successTopic).add('administrator', 'Nasko');

   new CfnOutput(this, 'SuccessTopicArn', {
    value: successTopic.topicArn,
    exportName: 'SuccessFromStackA'
   })

  }
}
