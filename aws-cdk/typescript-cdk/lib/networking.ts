import * as cdk from 'aws-cdk-lib'; // Import the main CDK library
import { Construct } from 'constructs'; // Import Construct base class from constructs
import * as ec2 from 'aws-cdk-lib/aws-ec2'; // Import ec2 module from aws-cdk-lib

// Define the NetworkingProps interface that takes maxAzs as input
export interface NetworkingProps {
    maxAzs: number;
}

// Define the Networking construct, which sets up the VPC
export class Networking extends Construct {

    // Expose the VPC as a public property for use outside the construct
    public readonly vpc: ec2.IVpc;

    constructor(scope: Construct, id: string, props: NetworkingProps) {
        super(scope, id); // Call the base class constructor

        // Create the VPC with CIDR range and subnets (Public and Private)
        this.vpc = new ec2.Vpc(this, 'AppVPC', {
            //cidr: '10.0.0.0/16',
            ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
            maxAzs: props.maxAzs, // Use the maxAzs value from props
            subnetConfiguration: [
                {
                    cidrMask: 24, // Public subnet with /24 CIDR block
                    name: 'Public',
                    subnetType: ec2.SubnetType.PUBLIC
                },
                {
                    cidrMask: 24, // Private subnet with /24 CIDR block
                    name: 'Private',
                    //subnetType: ec2.SubnetType.PRIVATE_WITH_NAT
                    subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
                }
            ],
        });
    }
}
