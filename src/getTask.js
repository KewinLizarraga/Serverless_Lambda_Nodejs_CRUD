const AWS = require("aws-sdk");

const getTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const result = await dynamoDB
    .get({
      TableName: "TaskTable",
      Key: { id: event.pathParameters.id },
    })
    .promise();

  return {
    status: 200,
    body: { task: result.Item },
  };
};

module.exports = { getTask };
