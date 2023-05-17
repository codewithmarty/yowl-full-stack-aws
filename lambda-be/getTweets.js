const aws = require('aws-sdk')
aws.config.update({ 
    accessKeyId: process.env.ACCESS_KEY_ID, 
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
})

exports.handler = async (event) => {
    const dynamoDB = new aws.DynamoDB()
    const params = {
        TableName: 'yowl-tweets'
    }
    const response = await dynamoDB.scan(params).promise()
    if (response.Items) {
        return { 
            "statusCode": 200,
            "body": JSON.stringify(response.Items)
        }
    }
}
