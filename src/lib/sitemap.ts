import { dbOperations } from './db';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    loc: string;
    title: string;
    caption?: string;
  }>;
}

export class SitemapGenerator {
  private baseUrl: string;
  private staticUrls: SitemapUrl[];

  constructor(baseUrl: string = 'https://elsxglobal.cloud') {
    this.baseUrl = baseUrl;
    this.staticUrls = [
      {
        loc: `${baseUrl}/`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 1.0,
        images: [{
          loc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          title: 'ELSxGlobal - Enterprise IT Solutions'
        }]
      },
      {
        loc: `${baseUrl}/about`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9,
        images: [{
          loc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
          title: 'ELSxGlobal Services'
        }]
      },
      {
        loc: `${baseUrl}/technologies`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/case-studies`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/blog`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.7
      },
      {
        loc: `${baseUrl}/investor-relations`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/contact`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/ai-lab`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/careers`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      // Division pages
      {
        loc: `${baseUrl}/it-services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/bpo-services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/kpo-services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/consultancy`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/enterprise-it`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      }
    ];
  }

  private async getDynamicUrls(): Promise<SitemapUrl[]> {
    const dynamicUrls: SitemapUrl[] = [];

    try {
      // Get blog posts
      const blogPosts = await dbOperations.getBlogPosts();
      blogPosts.forEach(post => {
        dynamicUrls.push({
          loc: `${this.baseUrl}/blog/${post.id}`,
          lastmod: new Date(post.created_at).toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: 0.6
        });
      });

      // Get case studies
      const caseStudies = await dbOperations.getCaseStudies();
      caseStudies.forEach(study => {
        dynamicUrls.push({
          loc: `${this.baseUrl}/case-studies/${study.id}`,
          lastmod: new Date(study.created_at).toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: 0.7,
          images: [{
            loc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            title: study.title
          }]
        });
      });

      // Get investor resources
      const investorResources = await dbOperations.getInvestorResources();
      investorResources.forEach(resource => {
        dynamicUrls.push({
          loc: `${this.baseUrl}/investor-relations/${resource.id}`,
          lastmod: new Date(resource.created_at).toISOString().split('T')[0],
          changefreq: 'yearly',
          priority: 0.5
        });
      });
    } catch (error) {
      console.error('Error fetching dynamic URLs for sitemap:', error);
    }

    return dynamicUrls;
  }

  public async generateSitemap(): Promise<string> {
    const dynamicUrls = await this.getDynamicUrls();
    const allUrls = [...this.staticUrls, ...dynamicUrls];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

    allUrls.forEach(url => {
      sitemap += `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`;

      if (url.images && url.images.length > 0) {
        url.images.forEach(image => {
          sitemap += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>`;
          if (image.caption) {
            sitemap += `
      <image:caption>${image.caption}</image:caption>`;
          }
          sitemap += `
    </image:image>`;
        });
      }

      sitemap += `
  </url>

`;
    });

    sitemap += `</urlset>`;
    return sitemap;
  }

  public async updateSitemapFile(): Promise<void> {
    try {
      const sitemapContent = await this.generateSitemap();
      
      // In a real application, you would write this to the public folder
      // For now, we'll log it and provide instructions for manual update
      console.log('Generated sitemap content:', sitemapContent);
      
      // You can also trigger a download or API call to update the file
      return Promise.resolve();
    } catch (error) {
      console.error('Error updating sitemap file:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const sitemapGenerator = new SitemapGenerator();

// Utility function to trigger sitemap regeneration
export const regenerateSitemap = async (): Promise<string> => {
  return await sitemapGenerator.generateSitemap();
};