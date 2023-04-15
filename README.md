# PocketLab HMH Ed Sandbox
## Deployment ##

Use my AWS sandbox account / credentials profile.

`$ cd ~/dev/pocketlab-sandbox`

`$ export AWS_PROFILE=sandbox`

Set the `PL_CODEBUILD` env var to false. This will cause utils to be installed locally.

`$ export PL_CODEBUILD=false`

Call package:zip to generate a zip archive with the lambda code files and pl-utils depedency.

`$ yarn run test`

`$ yarn run package:zip`

    Initiates a series of scripts that equate to:

    prepackage:zip
    > precompile      $ npm run clean => rm -rf ./dist
    > compile         $ tsc --outDir dist src/actions/*.ts src/domains/*.ts
                      $ npm run install:utils => bash scripts/check-env.sh
    package:zip       $ cd dist
                      $ zip -r dist.zip .
                      $ cd ..

Deployment scripts call the stack.sh bash script to package and deploy the CloudFormation templates in stacks/*.yaml using the AWS SAM CLI:

`$ yarn run package:redirect-gateway-lambdas`

`$ yarn run deploy:redirect-gateway-lambdas`

### CloudFormation Resources ###
`arn:aws:cloudformation:us-east-1:742951340522:stack/redirect-gateway-lambdas-services-stack-dev/f438fa30-d8ad-11ed-b682-0a41fe0ace1b`

    Stack name                   : redirect-gateway-lambdas-services-stack-dev
    Region                       : us-east-1
    Confirm changeset            : False
    Deployment s3 bucket         : amplify-amplifyeval-dev-143416-deployment

## Launch UI ##

`$ yarn run serve`
