import { AI_CAPABILITIES } from './ai/capabilities';
import { aiCore } from './ai/core';

export { AI_CAPABILITIES, aiCore };

export const generateAIResponse = async (
  input: string,
  context: {
    previousInteractions?: string[];
    userProfile?: {
      role?: string;
      expertise?: string;
    };
  } = {}
) => {
  const response = await aiCore.process({
    type: 'user_input',
    content: input,
    context: {
      previousMessages: context.previousInteractions?.map(msg => ({
        role: 'user',
        content: msg
      }))
    }
  });

  return {
    response: response.result.reasoning,
    confidence: response.confidence,
    capabilities: Object.keys(AI_CAPABILITIES),
    metrics: response.metrics
  };
};

export const getAISystemStatus = async () => {
  return {
    status: 'operational',
    metrics: {
      uptime: '99.999%',
      latency: '45ms',
      accuracy: '98.7%',
      qubits: '1M active'
    },
    load: {
      cpu: '45%',
      memory: '62%',
      quantum_utilization: '78%',
      neural_load: '65%'
    },
    subsystems: {
      quantum_core: 'optimal',
      neural_engine: 'learning',
      knowledge_base: 'updated'
    }
  };
};