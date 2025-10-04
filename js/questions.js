// Question Database for Sentient Riddler
// Multiple question sets for each difficulty level

export const questionsData = {
  version: "1.0",
  lastUpdated: "2025-10-04",
  questions: [
    {
      id: "q001",
      category: "Sentient Basics",
      difficulty: "beginner",
      question: "What does OML stand for in Sentient's framework?",
      options: [
        "Open Machine Learning",
        "Open, Monetizable, and Loyal",
        "Optimal Model Learning",
        "Online Meta Learning"
      ],
      correctAnswer: 1,
      explanation: "OML stands for Open, Monetizable, and Loyal - the three core principles that define Sentient's approach to AI development.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q002",
      category: "Sentient Basics",
      difficulty: "beginner",
      question: "What is Sentient's primary mission?",
      options: [
        "To create the most powerful AI model",
        "To build open, community-owned AGI",
        "To compete directly with OpenAI",
        "To sell AI services to enterprises"
      ],
      correctAnswer: 1,
      explanation: "Sentient's mission is to build the world's first open, community-built AGI that serves the broader community.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q003",
      category: "Sentient Basics",
      difficulty: "beginner",
      question: "How much did Sentient raise in its seed funding round?",
      options: [
        "$25 million",
        "$50 million",
        "$85 million",
        "$100 million"
      ],
      correctAnswer: 2,
      explanation: "Sentient raised $85 million in its seed round, one of the largest seed rounds in AI history.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q004",
      category: "OML Framework",
      difficulty: "intermediate",
      question: "What does 'Open' mean in the OML framework?",
      options: [
        "Open source code only",
        "Models can be downloaded and used locally",
        "Free to use for everyone",
        "Open API access"
      ],
      correctAnswer: 1,
      explanation: "In OML, 'Open' means models can be downloaded and run locally, giving users full control.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q005",
      category: "OML Framework",
      difficulty: "intermediate",
      question: "What does 'Monetizable' enable in OML?",
      options: [
        "Selling models for a one-time fee",
        "Tracking and monetizing model usage remotely",
        "Charging for API calls only",
        "Subscription-based access"
      ],
      correctAnswer: 1,
      explanation: "Monetizable means models can track and monetize usage even when run locally through cryptographic fingerprinting.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q006",
      category: "Technology",
      difficulty: "intermediate",
      question: "What does ROMA stand for?",
      options: [
        "Recursive Open Meta Agent",
        "Remote Open Model Architecture",
        "Robust Optimization Meta Algorithm",
        "Recursive Optimization Agent"
      ],
      correctAnswer: 0,
      explanation: "ROMA stands for Recursive Open Meta Agent, enabling AI agents to recursively improve themselves.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q007",
      category: "Team & Community",
      difficulty: "beginner",
      question: "Who is the Princeton professor and co-founder of Sentient?",
      options: [
        "Sandeep Nailwal",
        "Himanshu Tyagi",
        "Pramod Viswanath",
        "Sewoong Oh"
      ],
      correctAnswer: 2,
      explanation: "Pramod Viswanath is the Forrest G. Hamrick Professor at Princeton and co-founder of Sentient.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q008",
      category: "Team & Community",
      difficulty: "beginner",
      question: "Which blockchain platform's co-founder also co-founded Sentient?",
      options: [
        "Ethereum",
        "Polygon",
        "Solana",
        "Cardano"
      ],
      correctAnswer: 1,
      explanation: "Sandeep Nailwal, co-founder of Polygon, is also a co-founder of Sentient.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q009",
      category: "Ecosystem",
      difficulty: "beginner",
      question: "Where can you access Sentient's AI chat interface?",
      options: [
        "chat.openai.com",
        "chat.sentient.xyz",
        "sentient.ai/chat",
        "talk.sentient.io"
      ],
      correctAnswer: 1,
      explanation: "Sentient's AI chat interface is available at chat.sentient.xyz.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q010",
      category: "Technology",
      difficulty: "intermediate",
      question: "What is OpenDeepSearch designed to do?",
      options: [
        "Search for AI models",
        "Close the gap between proprietary and open-source search AI",
        "Provide deep learning tutorials",
        "Index blockchain transactions"
      ],
      correctAnswer: 1,
      explanation: "OpenDeepSearch is an open-source AI search system designed to compete with proprietary search systems.",
      points: 20,
      timeLimit: 45
    },
    // More Beginner Questions
    {
      id: "q011",
      category: "Sentient Basics",
      difficulty: "beginner",
      question: "What is The GRID in Sentient's ecosystem?",
      options: [
        "A blockchain network",
        "A network of intelligence for AI agents",
        "A data storage system",
        "A mining protocol"
      ],
      correctAnswer: 1,
      explanation: "The GRID is Sentient's network of intelligence that connects and monetizes AI agents across real-world environments.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q012",
      category: "Sentient Basics",
      difficulty: "beginner",
      question: "What makes Sentient different from closed AI platforms?",
      options: [
        "It's faster",
        "It's open and community-owned",
        "It's cheaper",
        "It uses more data"
      ],
      correctAnswer: 1,
      explanation: "Sentient is open and community-owned, unlike closed platforms controlled by corporations.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q013",
      category: "Ecosystem",
      difficulty: "beginner",
      question: "Where can you find Sentient's AI models?",
      options: [
        "GitHub only",
        "HuggingFace",
        "AWS Marketplace",
        "Google Cloud"
      ],
      correctAnswer: 1,
      explanation: "Sentient hosts its AI models and datasets on HuggingFace at huggingface.co/SentientAGI.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q014",
      category: "Team & Community",
      difficulty: "beginner",
      question: "What is the Sentient Builder Program?",
      options: [
        "A construction management tool",
        "A program to support developers building on Sentient",
        "An AI training program",
        "A blockchain validator program"
      ],
      correctAnswer: 1,
      explanation: "The Builder Program supports developers building applications and tools on the Sentient platform.",
      points: 10,
      timeLimit: 30
    },
    {
      id: "q015",
      category: "Sentient Basics",
      difficulty: "beginner",
      question: "What does AGI stand for?",
      options: [
        "Advanced Graphics Interface",
        "Artificial General Intelligence",
        "Automated Grid Intelligence",
        "Algorithmic Growth Index"
      ],
      correctAnswer: 1,
      explanation: "AGI stands for Artificial General Intelligence - AI that can understand and learn any intellectual task that humans can.",
      points: 10,
      timeLimit: 30
    },
    // More Intermediate Questions
    {
      id: "q016",
      category: "OML Framework",
      difficulty: "intermediate",
      question: "What does 'Loyal' mean in the OML framework?",
      options: [
        "Models are loyal to their creators only",
        "Models are locked for usage that doesn't conform to safe, ethical values",
        "Models always return the same results",
        "Models prioritize speed over accuracy"
      ],
      correctAnswer: 1,
      explanation: "Loyal means models are locked for usage that doesn't conform to safe, ethical values espoused by the model owner.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q017",
      category: "Technology",
      difficulty: "intermediate",
      question: "What is the primary purpose of model fingerprinting in OML?",
      options: [
        "To encrypt models",
        "To prove ownership and track usage of open AI models",
        "To compress model size",
        "To speed up inference"
      ],
      correctAnswer: 1,
      explanation: "Fingerprinting allows proving ownership and tracking usage of models even when they're downloaded and run locally.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q018",
      category: "Technology",
      difficulty: "intermediate",
      question: "What is The GRID's main advantage over traditional AI marketplaces?",
      options: [
        "It's faster",
        "It's developer-led and open to all",
        "It's cheaper",
        "It has more models"
      ],
      correctAnswer: 1,
      explanation: "The GRID is developer-led, open to all, and allows builders to monetize agents across open environments.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q019",
      category: "Ecosystem",
      difficulty: "intermediate",
      question: "How many AI agents were available on The GRID at launch?",
      options: [
        "Over 20",
        "Over 30",
        "Over 40",
        "Over 50"
      ],
      correctAnswer: 2,
      explanation: "The GRID launched with over 40 specialized AI agents from various sources.",
      points: 20,
      timeLimit: 45
    },
    {
      id: "q020",
      category: "OML Framework",
      difficulty: "intermediate",
      question: "What technology does OML 1.0 use for fingerprinting?",
      options: [
        "Blockchain hashing",
        "Backdoor attacks repurposed as security",
        "Quantum encryption",
        "Neural signatures"
      ],
      correctAnswer: 1,
      explanation: "OML 1.0 uses backdoor attacks in ML, repurposed as a fingerprinting security solution.",
      points: 20,
      timeLimit: 45
    },
    // Advanced Questions
    {
      id: "q021",
      category: "Technology",
      difficulty: "advanced",
      question: "What is the key innovation of AI-native cryptography?",
      options: [
        "Using blockchain for verification",
        "Leveraging sample complexity and intrinsic hardness of AI tasks",
        "Quantum-resistant encryption",
        "Zero-knowledge proofs"
      ],
      correctAnswer: 1,
      explanation: "AI-native cryptography leverages sample complexity and intrinsic hardness of AI tasks for security.",
      points: 30,
      timeLimit: 60
    },
    {
      id: "q022",
      category: "Technology",
      difficulty: "advanced",
      question: "What is the purpose of Sentient Enclaves Framework?",
      options: [
        "To create isolated testing environments",
        "To provide Trusted Execution Environments for secure AI computation",
        "To encrypt model weights",
        "To manage user authentication"
      ],
      correctAnswer: 1,
      explanation: "Sentient Enclaves provides TEEs for secure AI computation, crucial for implementing the 'Loyal' aspect of OML.",
      points: 30,
      timeLimit: 60
    },
    {
      id: "q023",
      category: "Research",
      difficulty: "advanced",
      question: "What problem does context manipulation attack research address?",
      options: [
        "SQL injection",
        "Adversarial attacks on AI model context windows",
        "Blockchain 51% attacks",
        "DDoS attacks"
      ],
      correctAnswer: 1,
      explanation: "This research addresses how adversaries can manipulate LLM context windows to produce harmful outputs.",
      points: 30,
      timeLimit: 60
    },
    {
      id: "q024",
      category: "OML Framework",
      difficulty: "advanced",
      question: "How does OML differ from traditional open-source AI?",
      options: [
        "It's faster",
        "It adds monetization and loyalty mechanisms while staying open",
        "It's more accurate",
        "It uses less compute"
      ],
      correctAnswer: 1,
      explanation: "OML adds cryptographic mechanisms for monetization and loyalty while maintaining openness.",
      points: 30,
      timeLimit: 60
    },
    {
      id: "q025",
      category: "Technology",
      difficulty: "advanced",
      question: "What enables composability between agents on The GRID?",
      options: [
        "Shared memory and real-time coordination",
        "Blockchain smart contracts",
        "API gateways",
        "Load balancers"
      ],
      correctAnswer: 0,
      explanation: "The GRID enables composability through shared memory and real-time coordination between agents.",
      points: 30,
      timeLimit: 60
    },
    // Expert Questions
    {
      id: "q026",
      category: "Research",
      difficulty: "expert",
      question: "What distinguishes AI-native cryptography from traditional cryptography?",
      options: [
        "It uses quantum computers",
        "It focuses on continuous data and probabilistic guarantees vs discrete data and binary security",
        "It's faster",
        "It doesn't require keys"
      ],
      correctAnswer: 1,
      explanation: "AI-native cryptography works with continuous data and probabilistic guarantees, unlike traditional cryptography's discrete data and binary security.",
      points: 50,
      timeLimit: 90
    },
    {
      id: "q027",
      category: "OML Framework",
      difficulty: "expert",
      question: "What are the canonical OML constructions mentioned in the whitepaper?",
      options: [
        "Blockchain and smart contracts",
        "Obfuscation, Fingerprinting, TEEs, and Cryptography",
        "Neural networks and transformers",
        "APIs and microservices"
      ],
      correctAnswer: 1,
      explanation: "The OML whitepaper describes Obfuscation, Fingerprinting, TEEs, and Cryptography as canonical constructions.",
      points: 50,
      timeLimit: 90
    },
    {
      id: "q028",
      category: "Research",
      difficulty: "expert",
      question: "What is the 'Melange' construction in OML?",
      options: [
        "A new AI model",
        "An OML construction with a mixture of security guarantees",
        "A blockchain consensus mechanism",
        "A data preprocessing technique"
      ],
      correctAnswer: 1,
      explanation: "Melange is an OML construction that combines multiple security approaches for mixed guarantees.",
      points: 50,
      timeLimit: 90
    },
    {
      id: "q029",
      category: "Technology",
      difficulty: "expert",
      question: "How does ROMA enable recursive self-improvement?",
      options: [
        "Through blockchain rewards",
        "Through meta-learning that allows agents to improve themselves recursively",
        "Through human feedback",
        "Through data augmentation"
      ],
      correctAnswer: 1,
      explanation: "ROMA uses meta-learning frameworks that enable AI agents to recursively improve their own capabilities.",
      points: 50,
      timeLimit: 90
    },
    {
      id: "q030",
      category: "Research",
      difficulty: "expert",
      question: "What is the relationship between OML and Trusted Execution Environments?",
      options: [
        "TEEs are optional",
        "TEEs provide secure computation environments for enforcing loyalty",
        "TEEs are only for encryption",
        "TEEs replace fingerprinting"
      ],
      correctAnswer: 1,
      explanation: "TEEs provide secure, verifiable computation environments crucial for enforcing the 'Loyal' aspect of OML.",
      points: 50,
      timeLimit: 90
    }
  ]
};
