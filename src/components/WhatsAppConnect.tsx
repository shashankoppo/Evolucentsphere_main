import React from 'react';
import { MessageCircle, Phone, Clock, Globe, Users } from 'lucide-react';

export default function WhatsAppConnect() {
  const whatsappNumber = '+917247558873';
  const whatsappNumber2 = '+918770422622';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const whatsappLink2 = `https://wa.me/${whatsappNumber2}`;

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col space-y-3">
      {/* Second WhatsApp Button */}
      <div className="relative group">
        <a
          href={whatsappLink2}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Connect on WhatsApp - Business Line"
        >
          <Users className="h-7 w-7 text-white" />
          
          {/* Ping Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
        </a>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white p-4 rounded-lg shadow-xl w-64">
            <h3 className="font-semibold text-gray-900 mb-2">Business WhatsApp</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>{whatsappNumber2}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Business Hours Support</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span>Enterprise Solutions</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </div>
      <div className="relative group">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
       

      {/* Original WhatsApp Button */}
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white p-4 rounded-lg shadow-xl w-64">
            <h3 className="font-semibold text-gray-900 mb-2">Support WhatsApp</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>{whatsappNumber}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span>Technical Support</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </div>
    </div>
  )
  );
}