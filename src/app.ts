import * as AWS from 'aws-sdk';

function ddbInstance(): AWS.DynamoDB.DocumentClient {
  return new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
  });
}

function s3Instance() {
  return new AWS.S3({
    apiVersion: '2006-03-01',
  });
}
