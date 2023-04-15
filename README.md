# PocketLab HMH Ed Sandbox
## Deployment ##
Set the `PL_CODEBUILD` env var to false. This will cause utils to be installed locally.
Using my AWS sandbox account / credentials profile.

`$ cd ~/dev/pocketlab-sandbox`
`$ export AWS_PROFILE=sandbox`
`$ export PL_CODEBUILD=false`
`$ npm run test`
`$ npm run package:zip`

### NOTE: package:zip generates the distribution package. It initiates a chain of node (pre-)scripts that equate to: ###
    `prepackage:zip`
    `prebuild`
    `clean`
    `build`
    `preinstall:utils (calls check env bash script)`
    `install:utils`
    `package:zip`

`$ npm run package:redirect-gateway-lambdas`
`$ npm run deploy:redirect-gateway-lambdas`

## CloudFormation deployed resources ##
`arn:aws:cloudformation:us-east-1:742951340522:stack/redirect-gateway-lambdas-services-stack-dev/f438fa30-d8ad-11ed-b682-0a41fe0ace1b`

    Stack name                   : redirect-gateway-lambdas-services-stack-dev
    Region                       : us-east-1
    Confirm changeset            : False
    Deployment s3 bucket         : amplify-amplifyeval-dev-143416-deployment
