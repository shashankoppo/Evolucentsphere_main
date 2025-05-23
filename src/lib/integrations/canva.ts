import { CanvaAPI } from '@canva/api';

export const canvaConfig = {
  apiKey: process.env.CANVA_API_KEY,
  templates: {
    socialMedia: 'template-id-1',
    presentations: 'template-id-2',
    marketing: 'template-id-3'
  }
};

export const canva = {
  api: new CanvaAPI(canvaConfig.apiKey),

  async createDesign(template: string, data: any) {
    try {
      const design = await this.api.designs.create({
        templateId: template,
        ...data
      });
      return { data: design, error: null };
    } catch (error) {
      console.error('Canva API error:', error);
      return { data: null, error };
    }
  }
};