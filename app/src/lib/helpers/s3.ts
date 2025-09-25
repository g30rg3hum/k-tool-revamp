import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "../clients/s3";

interface UploadResult {
  success: boolean;
  error?: string;
}
export async function uploadFileToR2(
  bucketName: string,
  key: string,
  file: File
): Promise<UploadResult> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const params = {
      Body: buffer,
      Bucket: bucketName,
      Key: key,
      ContentType: file.type,
      ContentLength: file.size,
    };

    const command = new PutObjectCommand(params);

    await S3.send(command);

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function getFileFromR2(
  bucketName: string,
  key: string
): Promise<Buffer | null> {
  try {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    const command = new GetObjectCommand(params);

    const response = await S3.send(command);

    if (!response.Body) return null;

    const byteArray = await response.Body.transformToByteArray();

    return Buffer.from(byteArray);
  } catch {
    // Failed to get file.
    return null;
  }
}
