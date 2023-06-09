#!/bin/bash


function package()
{
    if [ -z "$1" ]
    then
        echo "missing stack filename"
        return 1
    fi
    sam package --template-file ./stacks/$1.yaml  --output-template-file ./dist/$1-packaged.yaml --s3-bucket pocketlab-20190131214151-deployment
}

# stack name will be [stack name]-services-stack-[environment]
function deploy()
{
    if [ -z "$1" -o -z "$2" ]
    then
        echo "missing stack name or env"
        return 1
    fi
    echo "stack $1 $2"
    sam deploy --no-fail-on-empty-changeset --template-file ./dist/$1-packaged.yaml --stack-name $1-services-stack-$2 --capabilities CAPABILITY_IAM --s3-bucket pocketlab-20190131214151-deployment --parameter-overrides $(cat ./stacks/$1.$2.properties)
}

function dry_deploy()
{
    if [ -z "$1" -o -z "$2" ]
    then
        echo "missing stack name or env"
        return 1
    fi
    sam deploy --no-execute-changeset --no-fail-on-empty-changeset --template-file ./dist/$1-packaged.yaml --stack-name $1-services-stack-$2 --capabilities CAPABILITY_IAM --s3-bucket pocketlab-20190131214151-deployment --parameter-overrides $(cat ./stacks/$1.$2.properties)
}

# stack name will be [environment]-[stack name]-services-stack
function deploy_prepend_env()
{
    if [ -z "$1" -o -z "$2" ]
    then
        echo "missing stack name or env"
        return 1
    fi
    sam deploy --no-fail-on-empty-changeset --template-file ./dist/$1-packaged.yaml --stack-name $2-$1-services-stack --capabilities CAPABILITY_IAM --s3-bucket pocketlab-20190131214151-deployment --parameter-overrides $(cat ./stacks/$1.$2.properties)
}

# pass a third parameter to override the stack name
# stack name will be [environment]-[stack name]
function legacy_deploy()
{
    if [ -z "$1" -o -z "$2" ]
    then
        echo "missing stack name or env"
        return 1
    fi
    stack=$1
    if [[ -n $3 ]]
    then
        stack=$3
    fi
    sam deploy --no-fail-on-empty-changeset --template-file ./dist/$1-packaged.yaml --stack-name $2-$stack --capabilities CAPABILITY_IAM --s3-bucket pocketlab-20190131214151-deployment --parameter-overrides $(cat ./stacks/$1.$2.properties)
}

case "$1" in
    "package" )
        package $2
        ;;
    "deploy" )
        deploy $2 $3
        ;;
    "drydeploy" )
        dry_deploy $2 $3
        ;;
    "deploy_prepend_env" )
        deploy_prepend_env $2 $3
        ;;
    "legacy_deploy" )
        legacy_deploy $2 $3 $4
        ;;
esac
