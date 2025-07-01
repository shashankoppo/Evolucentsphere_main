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
  private crossDomainUrls: SitemapUrl[];

  constructor(baseUrl: string = 'https://elsxglobal.cloud') {
    this.baseUrl = baseUrl;
    this.initializeUrls();
  }

  private initializeUrls() {
    // Main site URLs
    this.staticUrls = [
      {
        loc: `${this.baseUrl}/`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 1.0,
        images: [{
          loc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          title: 'ELSxGlobal - Enterprise IT Solutions and Digital Transformation',
          caption: 'Leading provider of AI-powered business solutions and digital transformation services'
        }]
      },
      {
        loc: `${this.baseUrl}/about`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${this.baseUrl}/services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9,
        images: [{
          loc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
          title: 'ELSxGlobal Services - Comprehensive Business Solutions'
        }]
      },
      {
        loc: `${this.baseUrl}/technologies`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${this.baseUrl}/case-studies`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: `${this.baseUrl}/blog`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.7
      },
      {
        loc: `${this.baseUrl}/investor-relations`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.6
      },
      {
        loc: `${this.baseUrl}/contact`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${this.baseUrl}/ai-lab`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${this.baseUrl}/careers`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      // Division pages
      {
        loc: `${this.baseUrl}/it-services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${this.baseUrl}/bpo-services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${this.baseUrl}/kpo-services`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${this.baseUrl}/consultancy`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${this.baseUrl}/enterprise-it`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      }
    ];

    // Cross-domain URLs for SEO linking
    this.crossDomainUrls = [
      // Parent company
      {
        loc: 'https://evolucentsphere.com/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 1.0
      },
      {
        loc: 'https://evolucentsphere.com/about',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: 'https://evolucentsphere.com/services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: 'https://evolucentsphere.com/contact',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      },
      // Division sites
      {
        loc: 'https://tech.elsxglobal.cloud/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.9
      },
      {
        loc: 'https://tech.elsxglobal.cloud/services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: 'https://bpo.elsxglobal.cloud/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.9
      },
      {
        loc: 'https://bpo.elsxglobal.cloud/services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: 'https://kpo.elsxglobal.cloud/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.9
      },
      {
        loc: 'https://kpo.elsxglobal.cloud/services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: 'https://consultancy.elsxglobal.cloud/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: 0.9
      },
      {
        loc: 'https://consultancy.elsxglobal.cloud/services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
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
            title: study.title,
            caption: `${study.industry} case study showcasing business transformation results`
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

      // Add service-specific landing pages
      const servicePages = [
        { path: '/services/ai-solutions', priority: 0.8, keywords: 'AI Solutions, Machine Learning, Artificial Intelligence' },
        { path: '/services/cloud-computing', priority: 0.8, keywords: 'Cloud Computing, Cloud Migration, AWS, Azure' },
        { path: '/services/cybersecurity', priority: 0.8, keywords: 'Cybersecurity, Security Solutions, Threat Protection' },
        { path: '/services/data-analytics', priority: 0.8, keywords: 'Data Analytics, Business Intelligence, Big Data' },
        { path: '/services/digital-transformation', priority: 0.9, keywords: 'Digital Transformation, Business Modernization' },
        { path: '/industries/banking', priority: 0.7, keywords: 'Banking Solutions, Financial Services, Fintech' },
        { path: '/industries/healthcare', priority: 0.7, keywords: 'Healthcare IT, Medical Technology, Health Analytics' },
        { path: '/industries/manufacturing', priority: 0.7, keywords: 'Manufacturing Solutions, Industry 4.0, IoT' },
        { path: '/industries/retail', priority: 0.7, keywords: 'Retail Technology, E-commerce Solutions, Customer Analytics' }
      ];

      servicePages.forEach(page => {
        dynamicUrls.push({
          loc: `${this.baseUrl}${page.path}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: page.priority
        });
      });

    } catch (error) {
      console.error('Error fetching dynamic URLs for sitemap:', error);
    }

    return dynamicUrls;
  }

  public async generateSitemap(): Promise<string> {
    const dynamicUrls = await this.getDynamicUrls();
    const allUrls = [...this.staticUrls, ...this.crossDomainUrls, ...dynamicUrls];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
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

  public async generateSitemapIndex(): Promise<string> {
    const lastmod = new Date().toISOString().split('T')[0];
    
    let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${this.baseUrl}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://evolucentsphere.com/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://tech.elsxglobal.cloud/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://bpo.elsxglobal.cloud/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://kpo.elsxglobal.cloud/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://consultancy.elsxglobal.cloud/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;

    return sitemapIndex;
  }

  public async updateSitemapFile(): Promise<void> {
    try {
      const sitemapContent = await this.generateSitemap();
      const sitemapIndex = await this.generateSitemapIndex();
      
      console.log('Generated sitemap content:', sitemapContent);
      console.log('Generated sitemap index:', sitemapIndex);
      
      return Promise.resolve();
    } catch (error) {
      console.error('Error updating sitemap file:', error);
      throw error;
    }
  }

  // Generate robots.txt with cross-domain references
  public generateRobotsTxt(): string {
    return `# Robots.txt for ELSxGlobal - Part of EvolucentSphere
User-agent: *
Allow: /

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /_next/
Disallow: /node_modules/

# Sitemap locations - Main and cross-domain
Sitemap: ${this.baseUrl}/sitemap.xml
Sitemap: ${this.baseUrl}/sitemap-index.xml
Sitemap: https://evolucentsphere.com/sitemap.xml
Sitemap: https://tech.elsxglobal.cloud/sitemap.xml
Sitemap: https://bpo.elsxglobal.cloud/sitemap.xml
Sitemap: https://kpo.elsxglobal.cloud/sitemap.xml
Sitemap: https://consultancy.elsxglobal.cloud/sitemap.xml

# Crawl optimization
Crawl-delay: 1
Request-rate: 1/1
Visit-time: 0600-2300

# Allow faster access for major search engines
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 0

User-agent: Slurp
Crawl-delay: 0

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Additional directives for SEO
Host: ${this.baseUrl}
`;
  }
}

// Export singleton instance
export const sitemapGenerator = new SitemapGenerator();

// Utility function to trigger sitemap regeneration
export const regenerateSitemap = async (): Promise<string> => {
  return await sitemapGenerator.generateSitemap();
};

// Generate sitemap index for multi-domain setup
export const generateSitemapIndex = async (): Promise<string> => {
  return await sitemapGenerator.generateSitemapIndex();
};

// Generate robots.txt
export const generateRobotsTxt = (): string => {
  return sitemapGenerator.generateRobotsTxt();
};