import apiFetch from '@wordpress/api-fetch';

export const wordpressConfig = {
  baseUrl: 'https://your-wordpress-site.com/wp-json/wp/v2',
  endpoints: {
    posts: '/posts',
    pages: '/pages',
    media: '/media'
  }
};

export const wordpress = {
  async getPosts() {
    try {
      const posts = await apiFetch({ path: wordpressConfig.endpoints.posts });
      return { data: posts, error: null };
    } catch (error) {
      console.error('WordPress API error:', error);
      return { data: null, error };
    }
  },

  async getPages() {
    try {
      const pages = await apiFetch({ path: wordpressConfig.endpoints.pages });
      return { data: pages, error: null };
    } catch (error) {
      console.error('WordPress API error:', error);
      return { data: null, error };
    }
  }
};