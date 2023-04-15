# PocketLab HMH Ed Sandbox
## Deployment ##
Set the `PL_CODEBUILD` env var to false. This will cause utils to be installed locally.
Using my AWS sandbox account / credentials profile.

`$ cd ~/dev/pocketlab-sandbox`

`$ export AWS_PROFILE=sandbox`

`$ export PL_CODEBUILD=false`

`$ npm run test`

### package:zip generates an zip archive that includes the lambda code files and pl-utils depedency. It initiates a chain of node scripts that equate to: ###

`$ npm run package:zip`

    prepackage:zip
    precompile      $ npm run clean => rm -rf ./dist
    compile         $ tsc --outDir dist src/actions/*.ts src/domains/*.ts
                    $ npm run install:utils
                    $ bash scripts/check-env.sh
    package:        $ cd dist
                    $ zip -r dist.zip .
                    $ cd ..

### deployment scripts call the scripts/stack.sh bash script which packages and deploys the CloudFormation templates in stacks/*.yaml using the AWS SAM CLI: ###

`$ npm run package:redirect-gateway-lambdas`

`$ npm run deploy:redirect-gateway-lambdas`

## CloudFormation deployed resources ##
`arn:aws:cloudformation:us-east-1:742951340522:stack/redirect-gateway-lambdas-services-stack-dev/f438fa30-d8ad-11ed-b682-0a41fe0ace1b`

    Stack name                   : redirect-gateway-lambdas-services-stack-dev
    Region                       : us-east-1
    Confirm changeset            : False
    Deployment s3 bucket         : amplify-amplifyeval-dev-143416-deployment
