const aws = require('aws-sdk');
aws.config.update({ 
    accessKeyId: process.env.ACCESS_KEY_ID, 
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
});

exports.handler = async (event) => {
    const dynamoDB = new aws.DynamoDB();
    const params = {
        TableName: 'yowl-tweets',
        Item: {
            id: { S: Date.now().toString() },
            user: { S: event.user || 'unknown' },
            date: { S: new Date().toISOString() },
            content: { S: event.content || 'empty tweet' },
        },
    };

    await dynamoDB.putItem(params).promise();
    const response = await dynamoDB.scan({ TableName: 'yowl-tweets' }).promise();
    return { 
        "statusCode": 200,
        "body": JSON.stringify(response.Items)
    }
};