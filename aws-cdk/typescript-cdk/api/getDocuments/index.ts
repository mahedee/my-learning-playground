import {APIGatewayProxyEventV2, Context, APIGatewayProxyStructuredResultV2} from 'aws-lambda'

// Handler
export const getDocuments = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log('Received event:', JSON.stringify(event, null, 2))
  return {
    statusCode: 200,
    body: 'Success'
    // body: JSON.stringify({
    //   message: 'Hello from getDocuments',
    //   event,
    // }),
  }
}