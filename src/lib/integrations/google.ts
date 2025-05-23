import { google } from 'googleapis';
import { Storage } from '@google-cloud/storage';
import { ImageAnnotatorClient } from '@google-cloud/vision';

export const googleConfig = {
  credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: process.env.GOOGLE_PROJECT_ID,
  services: {
    drive: google.drive('v3'),
    sheets: google.sheets('v4'),
    vision: new ImageAnnotatorClient(),
    storage: new Storage()
  }
};

export const googleServices = {
  async analyzePDF(fileBuffer: Buffer) {
    try {
      const [result] = await googleConfig.services.vision.documentTextDetection({
        image: { content: fileBuffer }
      });
      return { data: result, error: null };
    } catch (error) {
      console.error('Google Vision API error:', error);
      return { data: null, error };
    }
  },

  async uploadToStorage(bucket: string, file: File) {
    try {
      const storage = googleConfig.services.storage;
      await storage.bucket(bucket).upload(file.name, {
        metadata: {
          contentType: file.type
        }
      });
      return { success: true, error: null };
    } catch (error) {
      console.error('Google Storage error:', error);
      return { success: false, error };
    }
  }
};