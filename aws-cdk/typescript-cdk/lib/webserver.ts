import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs'; // Import Construct base class from constructs
import * as path from 'path';
import {DockerImageAsset} from 'aws-cdk-lib/aws-ecr-assets'; 
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as escp from 'aws-cdk-lib/aws-ecs-patterns';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as apig from 'aws-cdk-lib/aws-apigatewayv2';


export interface DocumentManagementWebserverProps {
    vpc: ec2.IVpc
    api:apig.HttpApi

}

export class DocumentManagementWebserver extends Construct {
    constructor(scope: Construct, id: string, props: DocumentManagementWebserverProps) {
        super(scope, id);


        /**
         * Creates a Docker image asset for the webserver.
         * 
         * This code snippet initializes a new `DockerImageAsset` named `WebserverDockerAsset`.
         * It specifies the directory containing the Dockerfile and other necessary files
         * to build the Docker image for the webserver. The directory path is constructed
         * by joining the current directory with the relative path to the 'webserver' folder.
         * 
         * @param this - The scope in which this resource is defined.
         * @param 'WebserverDockerAsset' - The logical ID for the Docker image asset.
         * @param directory - The directory containing the Dockerfile and other resources.
         */
        const webserverDocker = new DockerImageAsset(this, 'WebserverDockerAsset', {
            directory: path.join(__dirname, '..', 'containers', 'webserver')
        });

        const fargetService = new escp.ApplicationLoadBalancedFargateService(this, 'WebserverService',{
            vpc: props.vpc,
            taskImageOptions:{
                image: ecs.ContainerImage.fromDockerImageAsset(webserverDocker),
                environment:{
                    SERVER_PORT: '8080',
                    API_BASE: props.api.url!

                },
                // purpose of the following 
                containerPort: 8080
            }
        });

        new cdk.CfnOutput(this, "WebserverHost", {
            exportName: 'WebserverHost',
            value: fargetService.loadBalancer.loadBalancerDnsName
        });

    }
}