import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Networking } from './networking';
import { DocumentManagementAPI } from './api';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import { DocumentManagementWebserver } from './webserver';


export class TypescriptCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here


    const bucket = new s3.Bucket(this, 'DocumentsBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED
    });

    /* This code snippet is creating a new `BucketDeployment` construct in the AWS CDK stack. The purpose
    of this construct is to deploy files from a local directory to an S3 bucket during the deployment
    process. */
    new s3Deploy.BucketDeployment(this, 'DocumentsDeployment', {
      sources: [
        s3Deploy.Source.asset('./documents')
      ],

      destinationBucket: bucket,
      memoryLimit: 512
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

    const api = new DocumentManagementAPI(this, 'DocumentManagementAPI', {
      documentBucket: bucket
    });
    cdk.Tags.of(api).add('Module', 'API');

    const webserver = new DocumentManagementWebserver(this, 'DocumentManagementWebserver',{
      vpc: networkingStack.vpc,
      api: api.httpApi
    });
    cdk.Tags.of(webserver).add('Module', 'Webserver');

    
  }
}
