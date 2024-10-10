import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Networking } from './networking';
import { DocumentManagementAPI } from './api';


export class TypescriptCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here


    const bucket = new s3.Bucket(this, 'DocumentsBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED
    });

    // Outputs the name of the S3 bucket and exports it with the name 'DocumentsBucketName'.
    // This allows the bucket name to be referenced by other CloudFormation stacks or external services.

    new cdk.CfnOutput(this, 'DocumentsBucketNameExport', {
      value: bucket.bucketName,
      exportName: 'DocumentsBucketName'
    });

    // Create a new instance of the Networking construct
    const networkingStack = new Networking(this, 'Networking', {
      maxAzs: 2
    });

    cdk.Tags.of(networkingStack).add('Module', 'Networking');
    const api = new DocumentManagementAPI(this, 'DocumentManagementAPI');
    cdk.Tags.of(api).add('Module', 'API');
  }
}
