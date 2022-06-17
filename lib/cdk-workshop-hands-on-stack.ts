import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from "aws-cdk-lib/aws-sns-subscriptions";


export class CdkWorkshopHandsOnStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    //Let's Try building some basic stack
    //Step-1 Create a SNS-Topic
    //Step-2 Create a Queue
    //Step-3 Subscribe Your Email and Queue to your SNS Topic.

    const topic = new sns.Topic(this, 'cdk-workshop-topic',{
      topicName: 'cdk-workshop-queue',
      displayName: 'cdk-workshop-queue'
    });

    const queue = new sqs.Queue(this, 'cdk-workshop-queue', {
      queueName: 'cdk-workshop-queue'
    });

    topic.addSubscription(new subs.SqsSubscription(queue))
    topic.addSubscription(new subs.EmailSubscription('sahilg9810@gmail.com'))

  }
}
