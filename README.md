# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

### Important DIR's

* **bin/cdk-demo.ts** - This is the entry point fo your CDK app - this will load/create all the stacks we dfine under lib/
* **lib/cdk-demo-stack.ts** - This is where your main CDK app stack is defined. Your resources and it's properties go here.
* **package.json** - This is where you defin your peoject depedencies, as well as some additional info, and build scripts. 'build' 'test' 'watch'
* **cdk.json** - This file tells the toolkit how to run your app and also contains additional settings and params related to CDK and your project.

# Deployment/Builds

Run `npm run build` to check for errors and validate -> compile TS -> JS

IF no errors run the `cdk deploy`

# Cleanup / Destroy

If we want to remove the resource from AWS we can run
The `cdk destroy` cmd

This will remove all resources via the CloudFormation stack it created earlier.
![alt](https://cdn.discordapp.com/attachments/870990908869464134/1029149105022312498/unknown.png)