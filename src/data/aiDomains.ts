export type AiDomain = {
  slug: string
  title: string
  tagline: string
}

/** Homepage technology capability chips — aligned with BRIEF AI domains (8). */
export const aiDomains: AiDomain[] = [
  {
    slug: 'generative-ai-llms',
    title: 'Generative AI & LLMs',
    tagline: 'Knowledge, copilots, and RAG',
  },
  {
    slug: 'agentic-ai',
    title: 'Agentic AI',
    tagline: 'Multi-step workflow orchestration',
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    tagline: 'Prediction, classification, optimisation',
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    tagline: 'Visual intelligence and inspection',
  },
  {
    slug: 'ai-iot-iiot',
    title: 'AI + IoT / IIoT',
    tagline: 'Connected operations and edge',
  },
  {
    slug: 'cybersecurity-ai',
    title: 'Cybersecurity AI',
    tagline: 'Detection, analysis, and response',
  },
  {
    slug: 'healthcare-ai',
    title: 'Healthcare AI',
    tagline: 'Digital health experiences',
  },
  {
    slug: 'intelligent-automation',
    title: 'Intelligent Automation',
    tagline: 'Process automation and orchestration',
  },
]