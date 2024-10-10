import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs'; // Import Construct base class from constructs
// import path module
import * as path from 'path';

export interface DocumentManagementAPIProps {

}

export class DocumentManagementAPI extends Construct {
    constructor(scope: Construct, id: string, props?: DocumentManagementAPIProps) {
        super(scope, id);

        const getDocumentsFunction = new lambda.NodejsFunction(this, 'GetDocumentsFunction', {
            //entry: 'src/handlers/getDocuments.ts',
            entry: path.join(__dirname, '..', 'api', 'getDocuments', 'index.ts'),
            //handler: 'handler',
            handler: 'getDocuments',
            bundling: {
                externalModules: [
                    'aws-sdk'
                ]
            }
        });
}
}