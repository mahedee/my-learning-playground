import { APIGatewayProxyEventV2, Context, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import { S3 } from 'aws-sdk';

const s3 = new S3();

/* `process.env.DOCUMENTS_BUCKET_NAME` is accessing an environment variable named
`DOCUMENTS_BUCKET_NAME`. Environment variables are often used to store
configuration settings or sensitive information that can be accessed by the
application during runtime. In this case, `DOCUMENTS_BUCKET_NAME` likely stores
the name of an S3 bucket where documents are stored or retrieved from. */
const bucketName = process.env.DOCUMENTS_BUCKET_NAME

// Handler
//  The handler function is the entry point of the Lambda function. It's where the 
//  execution starts when the Lambda function is invoked. The handler function takes
//  two parameters: event and context. The event parameter contains information about
//  the event that triggered the Lambda function, while the context parameter provides

export const getDocuments = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log(`Bucket Name: ${bucketName}`)

  try{
    if (!bucketName) {
        throw new Error("DOCUMENTS_BUCKET_NAME environment variable is not defined");
    }
    const { Contents: results } = await s3.listObjects({ Bucket: bucketName }).promise();
    const documents = await Promise.all(results!.map(async r => generateSingedURL(r)))
    return {
      statusCode: 200,
      body: JSON.stringify(documents)
    }
  }
  catch(err){
    return {
      statusCode: 500,
      body: (err as Error).message 
    }
  }
}

async function generateSingedURL(object: S3.Object): Promise<{ filename: string; url: string; }> {
  const url = await s3.getSignedUrlPromise('getObject', {
    Bucket: bucketName,
    // The exclamation mark (!) is a TypeScript-specific operator known as the non-null 
    //assertion operator. It tells the TypeScript compiler that you are certain the value 
    //of object.Key is neither null nor undefined. This can be useful when you are confident 
    //about the existence of the property but the compiler cannot infer it
    Key: object.Key!,
    Expires: (60 * 60) // one hour
  })
  return { 
    filename: object.Key!,
    url: url
  }
}