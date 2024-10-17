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


        const webserverDocker = new DockerImageAsset(this, 'WebserverDockerAsset', {
            directory: path.join(__dirname, '..', 'container', 'webserver')
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