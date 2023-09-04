const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  await dynamoDB.delete({ TableName: "TaskTable", Key: { id: event.pathParameters.id } }).promise();

  return {
    status: 200,
    body: JSON.stringify({
      message: "Task deleted",
    }),
  };
};

module.exports = { deleteTask };
