'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const response = require('../libs/response');


module.exports.create = (event, context, callback) => {
  
  try{
    const body = event;//JSON.parse(JSON.stringify(event)); 

    const params = {
      TableName: process.env.dynamo_db_table, //'dev-log',
      Item: {
      log_id: uuid(),
      user_id: body.user_id,
      log_data: body.log_data,
      createdate: new Date().toISOString(),
      updatedate: new Date().toISOString(),
      },
    };
  
    dynamoDb.put(params, (error) => {    
      if (error) {     
        callback(null, response.failure('Log Couldn\'t create the item'));
      }    
      callback(null, response.success(params.Item));
    });
  }
  catch(error){
    callback(null, response.failure('log error: '+error));
  }
};
