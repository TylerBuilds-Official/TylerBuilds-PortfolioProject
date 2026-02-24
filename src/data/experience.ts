import type { ExperienceGroup } from '../types';

export const experience: ExperienceGroup[] = [

    {
        company: 'Mid-Sized Fabrication & Construction Company',
        role: 'Data Manager & Developer',
        description: 'Sole developer responsible for designing and shipping internal software tools across the organization — from standalone automation utilities to a full enterprise AI platform. Every project listed below was built from scratch, deployed to production, and is actively used by project managers, estimators, coordinators, and leadership.',
        initiatives: [
            {
                title: 'AI Platform Development',
                description: 'Designed and built a full enterprise AI platform from the ground up, providing the entire organization with AI-powered access to operational data through natural language. Dual AI provider support, 30+ custom tools, streaming chat, data visualization, user memory, admin controls, and Azure AD authentication.',
                techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'MSSQL', 'Azure AD', 'WebSockets', 'OpenAI', 'Anthropic'],
                highlights: [
                    'Dual-provider architecture supporting OpenAI and Anthropic models',
                    '30+ custom MCP tools for real-time access to production, job, and employee data',
                    'Data sessions with lineage tracking for reproducible analytics',
                    'WebSocket-based agent system with local filesystem execution',
                    'Multi-database pooling across MySQL, MSSQL, and legacy systems',
                    'Role-based access control with Azure AD SSO',
                ],
            },
            {
                title: 'Document Classification & Automation',
                description: 'Built an AI-driven document classification suite for construction drawings and specifications, plus a collection of automation tools that eliminated hours of manual file handling per project. Evolved from individual scripts into a multi-repository classification system with a desktop GUI.',
                techStack: ['Python', 'C#', 'WPF', 'AI/ML', 'PDF Parsing', 'CLI', 'PyQt'],
                highlights: [
                    'AI-driven classification for architectural, structural, and MEP documents',
                    'Specialized engines for both specifications and plan drawings',
                    'WPF desktop app with embedded Python orchestrator EXE',
                    'SmartRename: extensible batch file renaming with regex-based suggestions',
                    'TransmitPro: automated transmittal assembly from zip files, later converted to MCP tool',
                    'JobScan: recursive file scanner organizing by finish, mainmark, and part',
                ],
            },
            {
                title: 'Integration & Infrastructure',
                description: 'Built the connective tissue that ties individual tools into a cohesive ecosystem — MCP tool framework, deployment automation, cross-system APIs, and a local agent bridging web platforms with desktop filesystems.',
                techStack: ['Python', 'FastAPI', 'MCP', 'PDF Parsing'],
                highlights: [
                    'MCP tool ecosystem with 30+ composable tools',
                    'CombineAPI: cutlist analysis against PDF drawings for metal tag rule matching',
                    'Local Agent Executor: bridges web AI platform with user filesystem securely',
                    'UpdateSuite: single-click deployment with version bumping, health checks, and rollback',
                    'Drawing Coordinator MCP for transmittal and revision tracking workflows',
                ],
            },
        ],
    },

    {
        company: 'TylerBuilds',
        role: 'Founder & Developer',
        description: 'Software engineering practice focused on business automation, AI integration, and custom tooling for mid-sized companies. Every project serves double duty — real production software and a showcase of end-to-end development capabilities.',
        initiatives: [
            {
                title: 'Business Management Software',
                description: 'Built a full desktop business management application for tracking clients, jobs, invoices, expenses, and revenue analytics. End-to-end ownership from database schema and stored procedures through REST API to WPF desktop app with modern MVVM architecture.',
                techStack: ['C#', 'WPF', '.NET 8.0', 'Python', 'FastAPI', 'MySQL', 'Azure AD'],
                highlights: [
                    '31+ stored procedures with strict naming conventions',
                    'Client and job pipeline management with status tracking',
                    'Invoice system with automatic overdue detection',
                    'Dashboard with revenue charting and activity feeds',
                    'Azure AD authentication with MSAL token caching',
                    'Self-hosted API on bare-metal Linux server',
                ],
            },
            {
                title: 'AI Chat Platform',
                description: 'Built a complete AI chat platform with provider-agnostic streaming, tool execution, and conversation persistence. Functions as both a real product and a capability demonstration for potential clients.',
                techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'MySQL', 'Anthropic', 'OpenAI'],
                highlights: [
                    'Provider-agnostic architecture supporting multiple AI models',
                    'Real-time token streaming with tool execution loops',
                    'Database-backed conversation persistence with search',
                    'Custom tool framework with transparent context retrieval',
                    'Rich markdown rendering with syntax-highlighted code blocks',
                ],
            },
            {
                title: 'Client Work & Web Presence',
                description: 'Custom automation solutions for clients alongside building the TylerBuilds web presence. Client work focuses on replacing manual processes with clean, maintainable software.',
                techStack: ['Python', 'React', 'TypeScript', 'Excel Automation'],
                highlights: [
                    'Built custom Excel-to-database automation replacing manual data entry workflows',
                    'TylerBuilds.net: company website with interactive project estimator and process visualization',
                    'Rebuilt site from static CSS to React + TypeScript for better maintainability',
                ],
            },
        ],
    },

];

export const education = {
    degree: 'B.S. Software Engineering',
    school: 'Western Governors University',
    status: 'Actively completing program',
};
