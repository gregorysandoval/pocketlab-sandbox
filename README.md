# pocketlab-sandbox
Override the PL_CODEBUILD env var from true to false. This will cause utils to be installed locally instead of from the deployment bucket.

  $ cd ~/dev/pl-services-sandbox
  $ export AWS_PROFILE=sandbox
  $ export PL_CODEBUILD=false

  $ npm run test

  $ npm run package:zip

## NOTE: package:zip generates the distribution package. It initiates a chain of node pre-scripts and scripts that equate to: ##
  > prepackage:zip
    > prebuild
      > clean
    > build
    > preinstall:utils <-- calls check env
    > install:utils
  > package:zip

  $ npm run package:redirect-gateway-lambdas
  $ npm run deploy:redirect-gateway-lambdas

## CloudFormation resources ##
arn:aws:cloudformation:us-east-1:742951340522:stack/redirect-gateway-lambdas-services-stack-dev/f438fa30-d8ad-11ed-b682-0a41fe0ace1b

	Stack name                   : redirect-gateway-lambdas-services-stack-dev
	Region                       : us-east-1
	Confirm changeset            : False
	Deployment s3 bucket         : amplify-amplifyeval-dev-143416-deployment
