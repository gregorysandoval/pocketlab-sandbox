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

### Backend Resources ###
`arn:aws:cloudformation:us-east-1:742951340522:stack/redirect-gateway-lambdas-services-stack-dev/f438fa30-d8ad-11ed-b682-0a41fe0ace1b`

    Stack name                   : redirect-gateway-lambdas-services-stack-dev
    Region                       : us-east-1
    Confirm changeset            : False
    Deployment S3 bucket         : amplify-amplifyeval-dev-143416-deployment

## Launch Frontend App (localhost) ##

`$ yarn run serve`

## Deploy Frontend App ##

Deploying via S3 and CloudFront (required to make app available over https?)

1. Build/generate deployment files, output directory: `dist/app-pocketlab-sandbox`:

`$ ng build --configuration=production`

2. S3: Created a new bucket `arn:aws:s3:::app-lti.thepocketlab.com`

  - Enable permissions via object ACL's and bucket policy

  - Set Object Ownership to default to Object Writer

  - Allow public access (uncheck all Block Public Access options)

  - Configure CORS (copied from other S3 endpoint bucket)

  - Enable Static website hosting with "index.html" default documents

  - Bucket website endpoint: `http://app-lti.thepocketlab.com.s3-website-us-east-1.amazonaws.com`

3. CloudFront: Created a new distribution with S3 origin

  - Add new legacy Origin Access Identity `E13TAPADQHPAJP`

  - Add new distribution with origin domain `app-lti.thepocketlab.com.s3.us-east-1.amazonaws.com`  
  
  - Enable "Legacy access identities" option and choose the newly-added OAI

  - Leave other settings at defaults

  - Distribution Name: `https://d1qtwcp2teuqea.cloudfront.net`

  - Distribution ARN: `arn:aws:cloudfront::603658197836:distribution/E18U0JCXU1QY2W`

## REFERENCE ##

[Getting started with a simple CloudFront distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.SimpleDistribution.html)

[Restricting access to an Amazon S3 origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)

### Not Used ###
[Restricting S3 Origin using OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
