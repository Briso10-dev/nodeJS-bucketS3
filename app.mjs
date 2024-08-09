import { S3Client, PutObjectCommand, ListObjectsCommand } from "@aws-sdk/client-s3"
import 'dotenv/config';
import pkg from 'env-var';
const { get } = pkg;

//configurating an S3client
const s3Client = new S3Client({
  endpoint:get("END_POINT").required().asString(), 
  region: get("REGION").required().asString(), 
  credentials: {
    accessKeyId: get("ACCESS_KEY").required().asString(), 
    secretAccessKey: get("SECRET_KEY").required().asString()
  },
  forcePathStyle: true
});

//uploading file
async function uploadFile(bucketName, key, body) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: body
  });

  try {
    const response = await s3Client.send(command);
    console.log("File uploaded successfully", response);
  } catch (err) {
    console.error("Error uploading file", err);
  }
}
// listing the object in bucket
async function listObjects(bucketName) {
  const command = new ListObjectsCommand({
    Bucket: bucketName
  });

  try {
    const response = await s3Client.send(command);
    console.log("Objects in bucket:", response.Contents);
  } catch (err) {
    console.error("Error listing objects", err);
  }
}

// main
const bucketName = "briso-bucket"; // my bucket
uploadFile(bucketName, "test-file.txt", "Hello World!");
listObjects(bucketName);