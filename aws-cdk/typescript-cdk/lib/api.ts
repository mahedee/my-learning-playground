import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs'; // Import Construct base class from constructs
// import path module
import * as path from 'path';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as apig from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';

export interface DocumentManagementAPIProps {
    /* The line `documentBucket: s3.IBucket;` in the `DocumentManagementAPIProps` interface is defining
    a property named `documentBucket` of type `s3.IBucket`. This property is used to pass an S3
    bucket object as a parameter when creating an instance of the `DocumentManagementAPI` class.
    This allows the `DocumentManagementAPI` class to interact with the specified S3 bucket for
    document management operations. */
    documentBucket: s3.IBucket;
}

export class DocumentManagementAPI extends Construct {

    public readonly httpApi: apig.HttpApi;

    constructor(scope: Construct, id: string, props: DocumentManagementAPIProps) {
        super(scope, id);

        const getDocumentsFunction = new lambda.NodejsFunction(this, 'GetDocumentsFunction', {
            entry: path.join(__dirname, '..', 'api', 'getDocuments', 'index.ts'),
            handler: 'getDocuments',
            runtime: Runtime.NODEJS_14_X,
            environment: {
                DOCUMENTS_BUCKET_NAME: props.documentBucket.bucketName
            },
            bundling: {
                externalModules: [
                    'aws-sdk'
                ]
            }
        });

        // // Grant the Lambda function read access to the S3 bucket
        // props.documentBucket.grantRead(getDocumentsFunction);

        /* The code snippet you provided is creating an IAM policy statement to allow the Lambda
        function (`getDocumentsFunction`) to list objects in the specified S3 bucket
        (`props.documentBucket`). Here's a breakdown of what each part of the code is doing: */
        // Create an IAM policy statement to allow the Lambda function to list objects in the S3 bucket
        const bucketPermission = new iam.PolicyStatement();
        /* The line `bucketPermission.addResources(`${props.documentBucket.bucketArn}/*`);` is adding a
        resource-based permission to the IAM policy statement `bucketPermission`. */
        bucketPermission.addResources(`${props.documentBucket.bucketArn}/*`);
        bucketPermission.addActions('s3:GetObject', 's3:PutObject');
        getDocumentsFunction.addToRolePolicy(bucketPermission);

        /* The code snippet you provided is creating an IAM policy statement to allow the Lambda function
        (`getDocumentsFunction`) to list the contents of the specified S3 bucket (`props.documentBucket`). */

        const bucketContainerPermission = new iam.PolicyStatement();
        bucketContainerPermission.addResources(props.documentBucket.bucketArn);
        bucketContainerPermission.addActions('s3:ListBucket');
        getDocumentsFunction.addToRolePolicy(bucketContainerPermission);


        // Purpose of the following code snippet is
        // to create an HTTP API using the AWS CDK's HttpApi construct.
        // This API will be used to interact with the Lambda function created above.
        this.httpApi = new apig.HttpApi(this, 'HttpAPI', {
            apiName: 'document-management-api',
            createDefaultStage: true,
            corsPreflight: {
                allowOrigins: ['*'],
                allowMethods: [apig.CorsHttpMethod.GET],
                maxAge: cdk.Duration.days(10),
            }
        })

        // // Purpose of the following code snippet is
        // // to create a Lambda proxy integration for the HTTP API.
        // const integration = new apig.LambdaProxyIntegration({
        //     handler: getDocumentsFunction
        // });

        // Purpose of the following code snippet is
        // to create a Lambda proxy integration for the HTTP API.
        const integration = new HttpLambdaIntegration('GetDocumentsIntegration', getDocumentsFunction);


        // Purpose of the following code snippet is 
        // to add a route to the HTTP API that maps the GET method to the Lambda integration.
        this.httpApi.addRoutes({
            path: '/getDocuments',
            methods: [apig.HttpMethod.GET],
            integration: integration
        })

        // Purpose of the following code snippet is
        new cdk.CfnOutput(this, 'APIEndPoint', {
            value: this.httpApi.url!,
            exportName: 'APIEndPoint'

        })
    }
}
