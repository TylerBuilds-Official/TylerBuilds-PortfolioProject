import type { ExperienceGroup } from '../types';

export const experience: ExperienceGroup[] = [

    {
        company: 'Enterprise Manufacturing Company',
        role: 'Data Manager & Developer',
        description: 'Designed and shipped internal software tools as the sole developer on each project. Built and own systems across the full stack: database engineering, backend APIs, desktop and web applications, automation tooling, and an enterprise AI platform.',
        initiatives: [
            {
                title: 'Enterprise AI Platform',
                description: 'Designed and built a full AI platform from the ground up, giving the organization conversational access to operational data. Dual AI provider support, 30+ custom tools, streaming chat, and Azure AD authentication.',
                techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'WebSockets', 'OpenAI', 'Anthropic'],
                highlights: [
                    'Dual-provider architecture supporting OpenAI and Anthropic models',
                    '30+ custom MCP tools for real-time data access',
                    'WebSocket-based agent system with local filesystem execution',
                    'Role-based access control with Azure AD SSO',
                ],
            },
            {
                title: 'Database & Backend Engineering',
                description: 'Designed and maintain the database layer and API services powering every internal tool. Multi-database architecture spanning MySQL, MSSQL, and legacy systems.',
                techStack: ['MySQL', 'MSSQL', 'Python', 'FastAPI', 'Azure AD'],
                highlights: [
                    'Multi-database connection pooling across MySQL, MSSQL, and legacy systems',
                    'Stored procedure architecture with strict naming conventions',
                    'FastAPI services with Azure AD authentication',
                    'Schema design and data modeling across all internal tools',
                ],
            },
            {
                title: 'Automation & Desktop Tooling',
                description: 'Built a suite of Python and C# tools that replaced hours of manual work per project: file classification, batch processing, PDF analysis, and desktop applications for non-technical users.',
                techStack: ['Python', 'C#', 'WPF', 'PyQt', 'AI/ML', 'PDF Parsing'],
                highlights: [
                    'AI-driven document classification for architectural, structural, and MEP documents',
                    'WPF and PyQt desktop apps with clean Python-C# integration',
                    'PDF cross-referencing APIs for automated production decisions',
                    'Batch file processing, renaming, and organization utilities',
                ],
            },
            {
                title: 'Infrastructure & Deployment',
                description: 'Built the infrastructure layer that ties individual tools into a cohesive ecosystem: MCP tool framework, deployment automation, and a local agent bridging web platforms with desktop filesystems.',
                techStack: ['Python', 'MCP', 'WebSockets', 'FastAPI'],
                highlights: [
                    'Extensible MCP tool ecosystem with composable, self-contained tools',
                    'Local Agent Executor: persistent WebSocket bridge between web platform and desktop',
                    'UpdateSuite: single-click deployment with version bumping, health checks, and rollback',
                    'Self-hosted bare-metal server infrastructure for all services',
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
