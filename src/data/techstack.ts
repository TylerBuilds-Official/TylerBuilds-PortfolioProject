import type { TechCategory } from '../types';

export const techStack: TechCategory[] = [
    {
        name: 'Languages',
        items: ['Python', 'TypeScript', 'C#', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
        name: 'Frontend',
        items: ['React', 'WPF / .NET 8.0', 'Vite', 'MaterialDesign XAML', 'PyQt'],
    },
    {
        name: 'Backend',
        items: ['FastAPI', '.NET', 'uvicorn', 'WebSockets', 'SSE'],
    },
    {
        name: 'Databases',
        items: ['MySQL', 'MSSQL', 'Stored Procedures', 'Connection Pooling'],
    },
    {
        name: 'AI / ML',
        items: ['OpenAI API', 'Anthropic API', 'MCP Tools', 'Classification Engines', 'Streaming'],
    },
    {
        name: 'Auth & Security',
        items: ['Azure AD / Entra ID', 'MSAL', 'Role-Based Access Control', 'SSO'],
    },
    {
        name: 'Infrastructure',
        items: ['Linux Mint', 'Bare Metal Server', 'RAID Storage', 'Netlify', 'GitHub Actions'],
    },
    {
        name: 'Desktop',
        items: ['WPF', 'MVVM', 'CommunityToolkit.Mvvm', 'PyQt6', 'PyInstaller'],
    },
    {
        name: 'DevOps & Tooling',
        items: ['Git', 'Custom Deployment Automation', 'Health Checks', 'Version Management'],
    },
];
