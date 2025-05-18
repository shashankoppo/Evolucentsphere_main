export * from './capabilities';
export * from './core';

import { aiCore } from './core';

// Initialize the AI system
aiCore.process({ 
  type: 'system_init',
  content: 'initialize'
}).catch(console.error);