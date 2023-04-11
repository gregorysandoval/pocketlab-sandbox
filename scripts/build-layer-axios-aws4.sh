#!/bash/bin

RD=./dist
NM=node_modules
T=./$RD/nodejs/node_modules
mkdir ./$RD/nodejs
mkdir $T
cp -r ./$NM/aws4-axios $T
mkdir $T/@aws-sdk
cp -r ./$NM/@aws-sdk/client-sts $T/@aws-sdk
mkdir $T/@types
cp -r ./$NM/@types/aws4 $T/@types
cp -r ./$NM/aws4 $T
cp -r ./$NM/axios $T
cp -r ./$NM/follow-redirects $T
cp -r ./$NM/tslib $T
echo 'zipping os-lib.zip...'
cd $RD
zip os-lib.zip -r ./nodejs
cd ..
