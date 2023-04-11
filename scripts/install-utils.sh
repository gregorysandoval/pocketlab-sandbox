#!/bash/bin

function installUtils()
{
    echo "Using $1 utils..."
    rm -rf ./dist/node_modules
    yarn add https://pocketlab-firmware.s3.amazonaws.com/utils/$1/archive.tgz --prod
    mkdir -p dist/node_modules
    cp -r ./node_modules/pocketlab-utils dist/node_modules/pocketlab-utils
    rm -fr ./dist/node_modules/pocketlab-utils/node_modules
}

function installLocalUtils()
{
    echo "Using local utils..."
    rm -rf ./dist/node_modules
    mkdir -p ./dist/node_modules/pocketlab-utils
    cp ../../dev/pocketlab-utils/package.json dist/node_modules/pocketlab-utils
    cp -r ../../dev/pocketlab-utils/dist dist/node_modules/pocketlab-utils
}

if [[ "$PL_CODEBUILD" != "true" ]]
then
    echo "Using LOCAL utils."
    echo "For a different environment export PL_CODEBUILD=true and set PL_ENV=[dev|staging|prod|beta|branch]"
    installLocalUtils
else
    installUtils $(echo "$PL_ENV" | sed 's/[^ ]*/\u&/')
fi
