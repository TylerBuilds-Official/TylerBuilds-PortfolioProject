import type { ExperienceGroup } from '../types';

export const experience: ExperienceGroup[] = [

    {
        company: 'Mid-Sized Fabrication & Construction Company',
        role: 'Data Manager & Developer',
        description: 'Designed and shipped internal software tools as the sole developer on each project. From standalone automation utilities to a full enterprise AI platform, every system was built from scratch, deployed to production, and is actively used across the company.',
        initiatives: [
            {
                title: 'AI Platform Development',
                description: 'Designed and built a full enterprise AI platform from the ground up, giving the organization conversational access to operational data. Dual AI provider support, 30+ custom tools, streaming chat, and Azure AD authentication.',
                techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'MSSQL', 'Azure AD', 'WebSockets', 'OpenAI', 'Anthropic'],
                highlights: [
                    'Dual-provider architecture supporting OpenAI and Anthropic models',
                    '30+ custom MCP tools for real-time data access',
                    'WebSocket-based agent system with local filesystem execution',
                    'Multi-database pooling across MySQL, MSSQL, and legacy systems',
                    'Role-based access control with Azure AD SSO',
                ],
            },
            {
                title: 'Document Classification & Automation',
                description: 'Built an AI-driven document classification suite for construction drawings and specifications, plus automation tools that eliminated hours of manual file handling per project.',
                techStack: ['Python', 'C#', 'WPF', 'AI/ML', 'PDF Parsing', 'CLI', 'PyQt'],
                highlights: [
                    'AI-driven classification for architectural, structural, and MEP documents',
                    'Specialized engines for both specifications and plan drawings',
                    'WPF desktop app with clean Python-C# integration',
                    'JobScan: recursive file scanner organizing by finish, ID, and part',
                ],
            },
            {
                title: 'Integration & Infrastructure',
                description: 'Built the connective tissue tying individual tools into a cohesive ecosystem: MCP tool framework, deployment automation, cross-system APIs, and a local agent bridging web platforms with desktop filesystems.',
                techStack: ['Python', 'FastAPI', 'MCP', 'PDF Parsing', 'WebSockets'],
                highlights: [
                    'Extensible MCP tool ecosystem with composable, self-contained tools',
                    'CombineAPI: material list cross-referencing against PDF drawings for tag decisions',
                    'Local Agent Executor: persistent WebSocket bridge between web platform and desktop',
                    'UpdateSuite: single-click deployment with version bumping, health checks, and rollback',
                ],
            },
        ],
    },

    {
        company: 'TylerBuilds',
        role: 'Founder & Developer',
        description: 'Software engineering practice focused on business automation, AI integration, and custom tooling for mid-sized companies.',
        initiatives: [
            {
                title: 'Business Management Software',
                description: 'Built a full desktop business management application for tracking clients, jobs, invoices, expenses, and revenue analytics. End-to-end ownership from database schema through REST API to WPF desktop app.',
                techStack: ['C#', 'WPF', '.NET 8.0', 'Python', 'FastAPI', 'MySQL', 'Azure AD'],
                highlights: [
                    '79+ stored procedures with strict naming conventions',
                    'Client and job pipeline management with status tracking',
                    'Invoice system with automatic overdue detection',
                    'Dashboard with revenue charting and income-per-job analytics',
                    'Azure AD authentication with MSAL token caching',
                ],
            },
            {
                title: 'AI Chat Platform',
                description: 'Built a full-stack AI chat platform with provider-agnostic streaming, custom RAG tooling, conversation persistence, and 4-tier RBAC.',
                techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'MySQL', 'Anthropic', 'OpenAI'],
                highlights: [
                    'Provider-agnostic architecture supporting OpenAI and Anthropic',
                    'Real-time SSE streaming with multi-round tool execution',
                    'Custom RAG tooling for internal context retrieval',
                    '4-tier RBAC with personas, projects, and admin controls',
                ],
            },
            {
                title: 'Client Work & Web Presence',
                description: 'Custom automation solutions for clients alongside building the TylerBuilds web presence. Focused on replacing manual processes with clean, maintainable software.',
                techStack: ['Python', 'React', 'TypeScript', 'Excel Automation'],
                highlights: [
                    'Built custom Excel-to-database automation replacing manual data entry workflows',
                    'TylerBuilds.net: company website with outcome-focused messaging and interactive demos',
                    'Self-hosted infrastructure on bare-metal server (dual Xeon, 40TB RAID)',
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
