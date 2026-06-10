# ELSxGlobal Ecosystem Structure

## Organization Hierarchy

```
EvolucentSphere Pvt. Ltd. (Parent Company)
├── ELSxGlobal (Flagship Division) - elsxglobal.com
│   ├── ELSxTech (Technology & Innovation)
│   │   ├── Cloud & Infrastructure
│   │   ├── Cybersecurity Solutions
│   │   ├── Software Development
│   │   ├── Data, AI & Analytics
│   │   ├── Digital Transformation
│   │   ├── Digital Experience & Marketing
│   │   ├── IoT & Emerging Technologies
│   │   ├── Managed IT Services
│   │   └── Enterprise Software Solutions
│   ├── ELSxBPO (Business Process Outsourcing)
│   │   ├── Customer Experience
│   │   ├── Back Office Operations
│   │   └── Financial Operations
│   ├── ELSxKPO (Knowledge Process Outsourcing)
│   │   ├── Financial Services Research
│   │   ├── Legal Services
│   │   └── Research & Analytics
│   └── ELSxConsultancy (Strategic Consulting)
│       ├── Digital Transformation
│       ├── Technology Consulting
│       └── Business Strategy
└── EdgeFeed (EdTech Flagship) - edgefeed.space
    ├── Learning Platform (AI-powered LMS)
    ├── Content Studio (Creation & Curation)
    ├── Analytics Engine (Performance Insights)
    └── Enterprise Training (Corporate Solutions)
```

## Site Map & URL Structure

### Primary Navigation (Main Website)
- `/` - Homepage (Value proposition & overview)
- `/about` - Company history & mission
- `/services` - All services overview
- `/technologies` - Tech stack & capabilities
- `/case-studies` - Success stories
- `/blog` - Knowledge hub
- `/investor-relations` - Investor information
- `/careers` - Job opportunities
- `/contact` - Contact & support

### Division Pages (ELSxGlobal Services)
- `/it-services` - Technology services hub
  - `/it-services/cloud-infrastructure` - Cloud solutions
  - `/it-services/cybersecurity` - Security services
  - `/it-services/digital-transformation` - DX consulting
  - `/it-services/software-development` - Custom software
  - `/it-services/ai-analytics` - AI & ML services
  - `/it-services/digital-marketing` - Digital experience
  - `/it-services/iot-emerging-tech` - IoT solutions
  - `/it-services/managed-it` - IT management
  - `/it-services/enterprise-software` - Enterprise apps

- `/bpo-services` - BPO solutions hub
- `/kpo-services` - KPO solutions hub
- `/consultancy` - Business consulting hub

### Industry Solutions
- `/industries/banking` - Banking & finance
- `/industries/healthcare` - Healthcare
- `/industries/manufacturing` - Manufacturing
- `/industries/retail` - Retail & e-commerce

### Special Pages
- `/ai-lab` - Innovation & research hub
- `/edgefeed` - EdTech platform highlight
- `/search` - Search functionality
- `/sitemap` - XML sitemap reference

### Legal & Policy
- `/privacy-policy` - Privacy statement
- `/terms-of-service` - Terms & conditions
- `/cookie-policy` - Cookie management

## Content Strategy

### Service Hierarchy (3-Level)
1. **Vertical** (Divisions: BPO, KPO, IT, Consultancy)
2. **Category** (Within each division)
3. **Specific Service** (Detailed offerings)

### Industry Verticals Served
- Banking & Financial Services
- Healthcare & Life Sciences
- Manufacturing & Industry 4.0
- Retail & E-commerce
- Insurance
- Government
- Education & EdTech
- Telecommunications

## Information Flow

### Customer Journey
1. **Awareness** → Homepage & Brand messaging
2. **Education** → Services & Solutions pages
3. **Evaluation** → Case studies & Technologies
4. **Decision** → Contact & Consultancy pages
5. **Engagement** → Projects & Careers

### Content Types
- **Overview Pages**: Service/industry level intro
- **Detail Pages**: Specific solution deep-dives
- **Case Studies**: Proof & ROI examples
- **Blog**: Thought leadership & education
- **Resource Hub**: Whitepapers & research

## Component Organization

### Reusable Components
- Hero sections (various styles)
- Services grid
- CTA banners
- Features comparison
- Stats displays
- FAQ sections
- Testimonials
- Contact forms

### Layout Templates
- Landing page template
- Service page template
- Industry page template
- Blog template
- Detail page template

## Data Architecture

### Config-Driven
All service/product/industry data centralized in:
- `src/lib/config.ts` - Main configuration
- Services, products, industries, technologies
- Cross-domain links & ecosystem mapping

### Dynamic Pages
- `/blog/:id` - Blog post details
- `/case-studies/:id` - Case study details
- `/investor-relations/:id` - Investor resources

## SEO Strategy

### Technical SEO
- Breadcrumb navigation (all pages)
- Schema.org markup (organization, service, article, FAQ, local business)
- Structured internal linking
- Canonical URLs
- Meta tags & Open Graph

### Content SEO
- Keyword optimization per vertical
- Industry-specific content
- Service-specific landing pages
- Blog strategy for thought leadership

## Cross-Domain Navigation

### Primary Domain: elsxglobal.com
- Main brand website
- Service hub
- Corporate information
- Client resources

### Secondary Domains
- edgefeed.space - EdTech platform
- (Future) Vertical-specific subdomains

## Logical Navigation Flow

### Homepage → Service Vertical
Home → ELSxTech (IT Services) → Cloud Infrastructure

### Homepage → Industry Vertical
Home → Industries → Banking → Relevant Services

### Service → Related Services
Cloud Infrastructure → Digital Transformation → Managed IT

### Service → Industries
Cloud Infrastructure → Industries → Healthcare, Banking, Manufacturing
