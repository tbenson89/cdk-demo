import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// Importing EC2 Module
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // We have created the VPC obj from the VPC class
    new ec2.Vpc(this, 'mainVPC', {
      // This is where you can define how many AZ's(timezones) yo uwant to use
      maxAzs: 2,
      // this is where you can define the subnet config per AZ(timezones)
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public-subnet',
          subnetType: ec2.SubnetType.PUBLIC,
        }
      ]
    });
  }
}
