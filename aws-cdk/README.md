## Note
- VPC - Virtual Private Network
- Install cdk in your machine 
    - run the following command in terminal npm install aws-cdk -g 
- Create a cdk app
    - cdk init app --language=typescript

- Test project
    - Go to root directory
    - Run the following command
    - npm test

- bin->typescript-cdk.ts is the entry point of the cdk
- lib-> is the main directory for cdk stack
- Type the following command for cdk docs
    - cdk docs
    - https://docs.aws.amazon.com/cdk/api/v2/

- Install package for s3 bucket
    - Run the following command
    - npm install @aws-cdk/aws-s3 --save

- CFN-Resources are called L1 Constructs
- CDK-Resources are called L2 Constructs
- vpc - virtual private cloud
- ec2 - elastic compute cloud
- Infrasturcture as code
- CDK - Cloud Development Kit
- Tutorial is in CDK version 1 and I am working on CDK version 2

## Commands
- `cdk docs` - This will open the latest documentation of cdk
- `npm install @aws-cdk/aws-s3 --save` - Install aws-s3 module 
- `cdk version` - Echo command line cdk version
- `cdk init TEMPLATE --lanugage LANGUAGE` - Create a new CDK Project
- `cdk synth` - Synthesize the cdk project
- `cdk deploy` - Deploy the cdk project
- `cdk destroy` - Destroy the cdk project
- `cdk diff` - Compare local and deployed stack
- `cdk bootstrap` - Bootstrap the cdk project
- `cdk init app --language=typescript` - Create a new CDK Project in types
- `npm install` - Install the latest version of everything that matches the ranges in 'package.json'
- `npm ci` - Install the same exact dependency versions as recorded in 'package-lock.json'
- `aws configure` - to set up and store the AWS CLI configuration on your local machine
- `aws sts get-caller-identity` - to get the caller identity of the current AWS
- `aws iam get-user` - to get the user details of the current AWS
- `aws iam list-users` - to list all the users in the current AWS
- `aws --version` - to get the version of aws cli
- `cdk bootstrap YourAccountID/region` - bootstrap the cdk project
- `cdk synth --output=./templates` - synthesizes an AWS CloudFormation template from your AWS CDK app and saves the generated templates in the specified ./templates directory.
- `cdk list` - displays a list of all the AWS CloudFormation stacks defined in your AWS CDK app.
- `aws cloudformation list-exports` - command retrieves a list of all exported output values from your AWS CloudFormation stacks
- `npm install @aws-cdk/aws-ec2 --save` - installs the AWS CDK EC2 module and adds it as a dependency in the project's package.json file.
- `npm install --save @types/aws-lambda` - - Install TypeScript type definitions for AWS Lambda functions
- `npm i aws-sdk` - Install the AWS SDK to interact with AWS services from your Node.js application
- `npm install @aws-cdk/aws-lambda-nodejs @aws-cdk/aws-lambda --save` - Install AWS CDK libraries to define and manage AWS Lambda functions, including Node.js specific support
- `npm install parcel@2.0.0-beta.1 --save-dev --save-exact` - Install the exact beta version (2.0.0-beta.1) of Parcel as a dev dependency, ensuring no future updates change the version 






## Keywords
CDK, region, vpc

Course: https://app.pluralsight.com/library/courses/aws-infrastructure-typescript-getting-started/table-of-contents
Completed up to: 5.4 - Implementing a Lambda Function in the CDK


## References:
* [Install or update the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
* [Youtube - aws cdk bootstrap](https://www.youtube.com/watch?v=98I8wk6S0FQ)
* https://github.com/aws-samples/aws-refarch-wordpress
