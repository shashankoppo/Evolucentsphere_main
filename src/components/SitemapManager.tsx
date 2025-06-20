import React, { useState } from 'react';
import { Download, RefreshCw, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { sitemapGenerator, regenerateSitemap } from '../lib/sitemap';
import { trackSitemapGeneration } from '../lib/analytics';

export default function SitemapManager() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<Date | null>(null);
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleGenerateSitemap = async () => {
    setIsGenerating(true);
    setStatus('idle');
    
    try {
      const startTime = performance.now();
      const sitemap = await regenerateSitemap();
      const endTime = performance.now();
      
      setSitemapContent(sitemap);
      setLastGenerated(new Date());
      setStatus('success');
      
      // Track sitemap generation
      const urlCount = (sitemap.match(/<url>/g) || []).length;
      trackSitemapGeneration(urlCount, endTime - startTime);
      
    } catch (error) {
      console.error('Error generating sitemap:', error);
      setStatus('error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadSitemap = () => {
    if (!sitemapContent) return;
    
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Globe className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Sitemap Manager</h3>
        </div>
        <div className="flex items-center space-x-2">
          {status === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
          {status === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700">Generate an updated sitemap with all current pages and content</p>
            {lastGenerated && (
              <p className="text-sm text-gray-500 mt-1">
                Last generated: {lastGenerated.toLocaleString()}
              </p>
            )}
          </div>
          <button
            onClick={handleGenerateSitemap}
            disabled={isGenerating}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors"
          >
            {isGenerating ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            {isGenerating ? 'Generating...' : 'Generate Sitemap'}
          </button>
        </div>

        {sitemapContent && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Generated Sitemap</h4>
              <button
                onClick={handleDownloadSitemap}
                className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>
            <div className="bg-gray-50 rounded-md p-4 max-h-64 overflow-y-auto">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                {sitemapContent.substring(0, 1000)}
                {sitemapContent.length > 1000 && '...'}
              </pre>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Total size: {(sitemapContent.length / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-700">Sitemap generated successfully!</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-700">Error generating sitemap. Please try again.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}