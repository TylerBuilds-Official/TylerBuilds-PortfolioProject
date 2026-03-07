import type { Project } from '../types';

/**
 * Portfolio project data — sourced from content bible.
 * Metrics marked with isPlaceholder: true need real values before launch (see TODO.md).
 * githubUrl audit complete — only public repos linked, private repos have no URL.
 */

export const projects: Project[] = [

    // ============================================
    // TIER 1 — Flagship
    // ============================================

    {
        slug: 'fabcore-ai',
        title: 'FabCore AI',
        tagline: 'Enterprise AI platform that gives managers instant, conversational access to data trapped in legacy systems.',
        category: 'flagship',
        techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'MSSQL', 'Azure AD', 'WebSockets', 'OpenAI', 'Anthropic'],
        problem: 'A mid-sized fabrication company had critical data **scattered across disconnected legacy systems**. Getting answers meant manual reports, IT requests, and hours of waiting, even for straightforward questions about job status or shipping dates.',
        solution: 'Built a full AI platform from scratch. A **conversational interface** backed by **30+ custom tools** that query production databases, employee systems, and legacy data sources in real time. Supports both OpenAI and Anthropic models, streams responses live, and includes role-based access, Azure AD SSO, conversation persistence, and an admin center for org-wide configuration.',
        impact: 'Project managers get **instant answers** about job status, shipping, and resource allocation. Leadership has on-demand visibility into production metrics and costs. Queries that took **hours of manual reporting** now return in seconds.',
        highlights: [
            'Dual AI provider architecture supporting both **OpenAI and Anthropic**',
            '**30+ custom MCP tools** with real-time access to production, job, and employee data',
            'Role-based access control with **Azure AD SSO**',
            'WebSocket-based agent execution with streaming responses',
            'Built and maintained by a **single developer** across 261+ source files',
        ],
        metrics: [
            { label: 'Custom Tools', value: '30+', isPlaceholder: false },
            { label: 'Source Files', value: '261+', isPlaceholder: false },
            { label: 'AI Providers', value: '2', isPlaceholder: false },
            { label: 'Auth', value: 'Azure AD SSO', isPlaceholder: false },
        ],
        hasDetailPage: true,
    },

    {
        slug: 'pdf-classifier',
        title: 'PDF Classifier',
        tagline: 'AI-driven construction document classification suite spanning 5 repositories.',
        category: 'flagship',
        techStack: ['Python', 'C#', 'WPF', 'AI/ML', 'PDF Parsing', 'CLI', 'PyQt'],
        problem: 'Construction projects generate hundreds of PDFs: drawings, specs, submittals, RFIs. Sorting them was entirely manual, eating hours of coordinator time per project and prone to misfiling.',
        solution: 'Built an AI classification suite with specialized engines for both specifications and plan drawings, a WPF desktop app for visual classification workflows, and domain-specific logic for architectural, structural, and MEP document types.',
        impact: 'Classification time dropped from **hours to minutes** per project. Coordinators spend their time on higher-value work instead of manual sorting.',
        highlights: [
            'Evolved across **5 repositories** from script to full classification suite',
            'Both **AI-driven and rule-based** classification approaches',
            'Specialized engines for specs and plans with domain-specific logic',
            'WPF desktop GUI with clean **Python–C# integration**',
        ],
        metrics: [
            { label: 'Repositories', value: '5', isPlaceholder: false },
            { label: 'Classification Time', value: 'Hours → Minutes', isPlaceholder: false },
            { label: 'Pages Processed', value: '1,000s', isPlaceholder: false },
        ],
        hasDetailPage: true,
    },

    {
        slug: 'job-tracker',
        title: 'JobTracker',
        tagline: 'Desktop business management platform. Clients, jobs, invoices, expenses, and analytics in one app.',
        category: 'flagship',
        techStack: ['C#', 'WPF', '.NET 8.0', 'MaterialDesign XAML', 'MVVM', 'Python', 'FastAPI', 'MySQL', 'Azure AD', 'MSAL'],
        problem: 'Running a business means juggling clients, jobs, invoices, expenses, and revenue tracking across separate tools. Needed a single platform that handled all of it and could grow alongside the business.',
        solution: 'Built a full-stack desktop application covering the entire business lifecycle: client and job pipeline management, invoicing with automatic overdue detection, expense tracking, and a dashboard with revenue analytics. Backed by a FastAPI service on self-hosted infrastructure with **79+ stored procedures**.',
        impact: 'This is my daily driver — the platform I actually run TylerBuilds on. It grows with the business, and every layer from database schema to desktop UI is mine.',
        highlights: [
            '**End-to-end ownership**: database → stored procedures → REST API → desktop app',
            'MVVM architecture with **CommunityToolkit.Mvvm**',
            '**Azure AD** authentication with MSAL token caching',
            'Dashboard analytics with **income-per-job** charting',
        ],
        metrics: [
            { label: 'Stored Procedures', value: '79+', isPlaceholder: false },
            { label: 'Stack Depth', value: '4 Layers', isPlaceholder: false },
            { label: 'Auth', value: 'Azure AD SSO', isPlaceholder: false },
        ],
        hasDetailPage: true,
        githubUrl: 'https://github.com/TylerBuilds-Official/TylerBuilds-TrackerFrontend',
    },

    {
        slug: 'tylerbuilds-assistant',
        title: 'TylerBuilds Assistant',
        tagline: 'AI chat platform with streaming responses, tool execution, and conversation persistence.',
        category: 'flagship',
        techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'MySQL', 'Anthropic', 'OpenAI', 'SSE'],
        problem: 'Existing AI chat tools are either locked into a single provider or lack the flexibility to customize tools, personas, and workflows. I wanted a platform built exactly the way I wanted it.',
        solution: 'Built a full-stack AI chat platform with **provider-agnostic streaming**, a custom tool execution framework with built-in context retrieval, conversation persistence with search, and role-based access control across four permission levels.',
        impact: 'A fully featured AI platform I own end-to-end — not a wrapper, not a demo. Every layer from database to UI is custom, and it\'s built to extend.',
        highlights: [
            '**Provider-agnostic** architecture supporting OpenAI and Anthropic',
            'Real-time **SSE streaming** with multi-round tool execution',
            'Custom **RAG tooling** for internal context retrieval',
            '**4-tier RBAC** with personas, projects, and admin controls',
        ],
        metrics: [
            { label: 'AI Providers', value: '2', isPlaceholder: false },
            { label: 'Streaming', value: 'Real-time SSE', isPlaceholder: false },
            { label: 'RBAC Roles', value: '4', isPlaceholder: false },
        ],
        hasDetailPage: true,
        githubUrl: 'https://github.com/TylerBuilds-Official/TylerBuildsDemoFrontend',
    },

    // ============================================
    // TIER 2 — Enterprise / Supporting
    // ============================================

    {
        slug: 'transmit-pro',
        title: 'TransmitPro',
        tagline: 'End-to-end transmittal processing, from ZIP extraction to classified, distributed document packages.',
        category: 'enterprise',
        techStack: ['Python', 'MCP', 'Microsoft Graph API'],
        problem: 'Engineering firms send transmittal packages as ZIPs containing hundreds to **1,700+ files**: fab drawings, erection drawings, NC1 cutting data, DXF files, model data, and more. Every file needs to be classified, sorted into the correct folder structure, and distributed to the right destination. Doing it manually took **15–30 minutes per package** and a single mis-sorted NC1 file could mean the wrong part gets cut.',
        solution: 'Built a processing pipeline that handles the full transmittal workflow: extracts nested ZIPs, classifies every file by type, builds the correct output folder structure, distributes files to their destinations, patches XML imports, and generates a cover sheet, all from a single command. Includes email integration via **Microsoft Graph API** to scan for incoming transmittals.',
        impact: 'What took **15–30 minutes of manual sorting** now runs in seconds. Handles packages up to **1,700+ files** without errors.',
        highlights: [
            'Full pipeline: extraction → classification → distribution → cover sheet',
            'Handles **nested ZIPs** and **1,700+ file** packages',
            'Email integration via **Microsoft Graph API**',
            'XML import patching for internal system compatibility',
        ],
        metrics: [
            { label: 'Processing Time', value: '15–30 min → Seconds', isPlaceholder: false },
            { label: 'Max Package Size', value: '1,700+ Files', isPlaceholder: false },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'job-scan',
        title: 'JobScan',
        tagline: 'Package file scanner that collects and organizes project files by finish, ID, and part.',
        category: 'enterprise',
        techStack: ['Python'],
        problem: 'Project managers and subcontractors needed to quickly find and organize files related to specific packages. Manually searching through project directories was slow, inconsistent, and ate up **45 minutes** each time.',
        solution: 'Built a scanning utility that crawls project file structures, identifies and collects related files, and organizes them by finish type, ID, and part number for easy access by project managers and subcontractors.',
        impact: 'What took **45 minutes of manual browsing** now runs in seconds. The right files reach the right people without human sorting errors.',
        highlights: [
            'Recursive file structure crawling',
            'Multi-criteria organization (finish, ID, part)',
            'Built for **non-technical end users**',
        ],
        metrics: [
            { label: 'Processing Time', value: '45 min \u2192 Seconds', isPlaceholder: false },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'combine-api',
        title: 'CombineAPI',
        tagline: 'API that cross-references material lists against PDF drawings to automate tag decisions.',
        category: 'enterprise',
        techStack: ['Python', 'FastAPI', 'PDF Parsing', 'MySQL'],
        problem: 'When a material list was imported, someone had to manually open every drawing, check the finish type and quantity, and decide whether to combine or separate tags. The people doing it often didn\'t fully understand the drawings, and mistakes meant **hundreds of wasted tags**, literally burning money.',
        solution: 'Built an API that pulls the material list from the database, locates the corresponding drawings, **parses each PDF** for finish type and quantity, and makes the combine/separate decision automatically.',
        impact: 'Eliminated a tedious, error-prone manual process. Consistent automated decisions mean **no more wasted tags** from misread drawings.',
        highlights: [
            'Pulls material data from DB, cross-references against **PDF drawings**',
            'Automated **combine/separate** decisions per piece',
            'RESTful API surface for integration flexibility',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    {
        slug: 'smart-rename',
        title: 'SmartRename',
        tagline: 'Simple batch file renaming utility. Strip, replace, and clean filenames in bulk.',
        category: 'utility',
        techStack: ['Python', 'PyQt6'],
        problem: 'Files from external sources come with inconsistent naming: revision suffixes, extra characters, encoding artifacts. Cleaning hundreds of filenames by hand is tedious and error-prone.',
        solution: 'Built a desktop utility with a PyQt6 interface supporting multiple modes: strip characters from the start or end, remove or replace exact strings, and batch process entire directories. Deployed as a single-file executable.',
        impact: 'Bulk filename cleanup that used to require manual per-file edits. Simple, universal, and still in regular use.',
        highlights: [
            'Multiple renaming modes (strip, replace, batch)',
            '**PyQt6 desktop app** deployed as a single-file executable',
            'Universal, works across any project or file set',
        ],
        metrics: [],
        hasDetailPage: false,
        githubUrl: 'https://github.com/TylerBuilds-Official/SmartRename',
    },


    {
        slug: 'toolbox-agent-executor',
        title: 'Local Agent Executor',
        tagline: 'Desktop executable that bridges web AI platforms with local filesystems over a persistent WebSocket.',
        category: 'enterprise',
        techStack: ['Python', 'WebSockets'],
        problem: 'Web-based AI platforms can\'t touch local filesystems. Users needed the AI to read, process, and organize files on their machines without uploading everything to the cloud.',
        solution: 'Built a desktop executable that launches on startup and maintains a **persistent WebSocket keepalive** to the web platform. The AI calls an MCP function, the command routes over the socket to the agent, executes locally, and returns the result in real time. Includes **one-click auto-update** architecture.',
        impact: 'Bridges the web-to-desktop gap without cloud uploads. Users get **AI-powered local file operations** on sensitive data that never leaves their machine.',
        highlights: [
            'Persistent **WebSocket keepalive**: launches on startup, always connected',
            'MCP function → socket command → local execution → result',
            '**One-click auto-update** with force-update support',
            'Sensitive files **never leave the user\'s machine**',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    {
        slug: 'crypto-backtesting',
        title: 'Crypto Backtesting Platform',
        tagline: 'Algorithmic trading strategy backtesting with systematic multi-timeframe analysis.',
        category: 'supporting',
        techStack: ['Python', 'Data Analysis'],
        problem: 'Testing trading strategies by hand is slow, biased, and impossible to do rigorously across multiple timeframes. No way to know if an approach actually works without systematic historical evaluation.',
        solution: 'Built a backtesting infrastructure for strategy definition, historical data ingestion, systematic testing across multiple timeframes and data sets, and performance metric analysis.',
        impact: 'Data-driven strategy evaluation replacing guesswork. Every approach is **validated or killed** with real historical data before risking capital.',
        highlights: [
            'Systematic **multi-timeframe** backtesting',
            'Strategy parameterization and comparison',
            'Historical data ingestion and **performance metric analysis**',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    // ============================================
    // TIER 3 — Infrastructure & Tooling
    // ============================================

    {
        slug: 'carl-infrastructure',
        title: 'Carl',
        tagline: 'Self-hosted bare-metal server running all databases and API services.',
        category: 'infrastructure',
        techStack: ['Linux Mint', 'Dual Xeon', 'MySQL', 'FastAPI', 'RAID Storage'],
        problem: 'Needed reliable, self-managed infrastructure for hosting databases and API services across multiple projects without cloud dependency.',
        solution: 'Built and maintain a bare-metal server with **dual Xeon CPUs** and **40TB RAID storage** running Linux Mint. Hosts MySQL instances and FastAPI services for JobTracker, the assistant platform, and other projects. LAN-accessible from the development workstation.',
        impact: 'Full ownership of the infrastructure stack. Every database, every API, every service runs on hardware I built and manage.',
        highlights: [
            '**Dual Xeon** CPUs with **40TB RAID** storage',
            'Hosts **MySQL + FastAPI** for multiple projects',
            'Full infrastructure ownership, **no cloud dependency**',
        ],
        metrics: [
            { label: 'Storage', value: '40TB RAID', isPlaceholder: false },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'update-suite',
        title: 'UpdateSuite',
        tagline: 'Deployment automation framework for single-click multi-project updates.',
        category: 'infrastructure',
        techStack: ['Python'],
        problem: 'Deploying updates across multiple projects required manual steps, version bumping, and validation for each one. Tedious and error-prone at scale.',
        solution: 'Built a deployment automation framework with single-click deployment, automatic version bumping, post-deployment health checks, and rollback capabilities. Used across all enterprise tools and TylerBuilds projects.',
        impact: 'Consistent, reliable deployments across every project. Health checks catch issues immediately and **rollback** provides a safety net for production.',
        highlights: [
            '**Single-click** deployment with minimal arguments',
            'Automatic **version bumping**',
            'Health checks and **rollback** capabilities',
            'Used across **all enterprise and personal** projects',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    {
        slug: 'mcp-tool-ecosystem',
        title: 'MCP Tool Ecosystem',
        tagline: 'The collective output of building extensible MCP tool architectures across multiple projects, ~200 tools and counting.',
        category: 'infrastructure',
        techStack: ['Python', 'MCP'],
        problem: 'AI platforms need structured access to external data and services. Every project has different data sources and workflows, but the integration pattern is the same.',
        solution: 'Across multiple projects, built the same composable MCP architecture: **self-contained tools** against consistent interfaces that bolt onto any MCP-compatible platform. Each ecosystem is purpose-built for its project, but the pattern is repeatable.',
        impact: '**~200 MCP tools** built across multiple projects. The architecture scales. New tools snap in without touching existing systems.',
        highlights: [
            '**~200 tools** across multiple project ecosystems',
            'Same **composable pattern**, purpose-built per project',
            'New tools bolt on without modifying core systems',
        ],
        metrics: [
            // FIXME: Tildes look bad — find a better visual treatment
            { label: 'Total Tools Built', value: '~200', isPlaceholder: false },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'tylerbuilds-website',
        title: 'TylerBuilds.net',
        tagline: 'Company website built to speak to business owners, not developers.',
        category: 'infrastructure',
        techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
        problem: 'Needed a professional web presence for TylerBuilds that communicates value to non-technical business owners, not just developers.',
        solution: 'Built a React + TypeScript site with **outcome-focused messaging**, interactive demos, process stepper visualization, and responsive design across all devices.',
        impact: 'A professional web presence that speaks the language of potential clients, not a developer portfolio, a **business tool**.',
        highlights: [
            '**Outcome-focused** messaging over technical jargon',
            'Interactive **demos** showcasing real capabilities',
            'Fully **responsive** across all devices',
        ],
        metrics: [],
        hasDetailPage: false,
        githubUrl: 'https://github.com/TylerBuilds-Official/TylerBuildsNetReact',
    },

    // ============================================
    // TIER 3 — Utilities
    // ============================================

    {
        slug: 'open-pdf',
        title: 'OpenPDF',
        tagline: 'Safe PDF unlocking utility for needlessly restricted documents.',
        category: 'utility',
        techStack: ['Python'],
        problem: 'PDFs frequently arrive with restrictions that prevent annotation, measurement, and markup, even when you legitimately need to work with them.',
        solution: 'Built a utility that saves a clean copy with usage restrictions removed. Intentionally **does not touch** fully signed or encrypted documents.',
        impact: 'Removes a recurring friction point from document workflows. Quick, safe, and responsible.',
        highlights: [
            'Removes usage restrictions only, **no encryption cracking**',
            'Content is never modified',
        ],
        metrics: [],
        hasDetailPage: false,
        githubUrl: 'https://github.com/TylerBuilds-Official/OpenPDF',
    },


    {
        slug: 'email-service',
        title: 'TylerBuilds Email Service',
        tagline: 'Custom email backend for contact forms and notifications. No SaaS fees.',
        category: 'utility',
        techStack: ['Python'],
        problem: 'Email services like SendGrid and Mailgun charge monthly fees that scale with volume. For contact forms and notifications, that\'s an unnecessary recurring cost.',
        solution: 'Built a custom email service that powers contact forms across TylerBuilds websites and handles automated notifications, **no per-message costs**, no third-party dependency.',
        impact: 'Scalable email infrastructure without a growing monthly bill. One service, all sites.',
        highlights: [
            '**No SaaS fees**, fully custom email backend',
            'Powers **contact forms** across all TylerBuilds sites',
            'Scales at **near-zero cost**',
        ],
        metrics: [],
        hasDetailPage: false,
    },
];
