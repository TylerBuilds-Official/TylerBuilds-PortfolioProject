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
        tagline: 'Enterprise AI platform with 30+ tools, dual-provider support, and real-time data access.',
        category: 'flagship',
        techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'MSSQL', 'Azure AD', 'WebSockets', 'OpenAI', 'Anthropic'],
        problem: 'A mid-sized fabrication company had critical operational data siloed across multiple legacy systems — job tracking in one database, production metrics in another, employee info scattered, and no unified way for managers to get answers without running manual reports or asking IT.',
        solution: 'Built a full enterprise AI platform from the ground up with dual AI provider support (OpenAI + Anthropic), 30+ custom MCP tools for real-time data access, database-backed conversation persistence, a data session and artifact system for generating visualizations through natural language, per-user memory, an admin center with role-based access, Azure AD SSO, WebSocket-based agent execution, multi-database pooling (MySQL, MSSQL, and legacy systems), and a React frontend with streaming chat, data visualization, and light/dark mode.',
        impact: 'Project managers get instant answers about job status, shipping dates, and resource allocation without waiting for reports. Leadership has on-demand visibility into production metrics, overtime costs, and project pipeline. Common queries that took hours of manual report generation now return results in seconds.',
        highlights: [
            'Dual AI provider architecture — OpenAI and Anthropic models, switchable per user',
            '30+ custom MCP tools providing real-time access to production, job, and employee data',
            'Data sessions with lineage tracking for reproducible analytics',
            'Per-user memory system with full CRUD operations',
            'WebSocket-based agent system with registry pattern',
            'Multi-database pooling across MySQL, MSSQL, and legacy Voltron databases',
            '261+ source files, 51+ commits — built and maintained by a single developer',
        ],
        metrics: [
            { label: 'Custom Tools', value: '30+', isPlaceholder: false },
            { label: 'Source Files', value: '261+', isPlaceholder: false },
            { label: 'Report Time Reduction', value: '~95%', isPlaceholder: true },
            { label: 'Active Users', value: 'TBD', isPlaceholder: true },
        ],
        hasDetailPage: true,
    },

    {
        slug: 'pdf-classifier',
        title: 'PDF Classifier',
        tagline: 'AI-driven construction document classification suite spanning 5 repositories.',
        category: 'flagship',
        techStack: ['Python', 'C#', 'WPF', 'AI/ML', 'PDF Parsing', 'CLI', 'PyQt'],
        problem: 'Construction projects generate hundreds of PDF documents — drawings, specifications, submittals, RFIs. Sorting and classifying these documents was entirely manual, eating up hours of project coordinator time per project and prone to misfiling errors.',
        solution: 'Built a multi-stage AI classification suite spanning 5 repositories: an initial rule-based engine, an upgraded AI-driven classifier, a WPF desktop application for visual classification workflows, and specialized engines for both specification and plan/drawing classification. The system includes a Python backend orchestrator designed to be embedded as an EXE within the C# frontend, keeping the Python and C# boundaries clean and deployment self-contained.',
        impact: 'Reduced document classification time from hours to minutes per project. Improved filing accuracy and freed project coordinators to focus on higher-value work. Handles both drawings and specifications with domain-specific logic for architectural, structural, and MEP document types.',
        highlights: [
            'Evolved across 5 repositories from script to full classification suite',
            'Both AI-driven and rule-based classification approaches',
            'WPF desktop GUI with embedded Python orchestrator EXE',
            'Specialized engines for specs (divisions/sections) and plans (architectural/structural/MEP)',
            'Clean Python-C# boundary via CLI orchestrator pattern',
        ],
        metrics: [
            { label: 'Repositories', value: '5', isPlaceholder: false },
            { label: 'Classification Time', value: 'Hours → Minutes', isPlaceholder: false },
            { label: 'Documents Processed', value: 'TBD', isPlaceholder: true },
            { label: 'Accuracy Improvement', value: 'TBD', isPlaceholder: true },
        ],
        hasDetailPage: true,
    },

    {
        slug: 'job-tracker',
        title: 'JobTracker',
        tagline: 'Full-stack desktop business management application with dashboard analytics.',
        category: 'flagship',
        techStack: ['C#', 'WPF', '.NET 8.0', 'MaterialDesign XAML', 'MVVM', 'Python', 'FastAPI', 'MySQL', 'Azure AD', 'MSAL'],
        problem: 'Needed a comprehensive tool to manage clients, jobs, invoices, expenses, and business analytics — and wanted it to double as a real-world showcase of end-to-end desktop application development.',
        solution: 'Built a full desktop business management application with client management (companies and individuals with contacts), a job pipeline with status tracking and quick-action updates, an invoice system with line items and automatic overdue detection, dashboard analytics with revenue summary cards and income-per-job charting, dark/light theming with MaterialDesign styling, Azure AD authentication with token caching, and a FastAPI backend hosted on self-managed Linux infrastructure with 31+ stored procedures.',
        impact: 'Complete business management from a single application. Automatic invoice total recalculation, overdue detection, and revenue aggregation eliminate manual bookkeeping overhead. Demonstrates end-to-end ownership from database schema design through stored procedures, REST API, and desktop application with modern MVVM architecture.',
        highlights: [
            'End-to-end ownership: database schema → stored procedures → REST API → desktop app',
            '31+ stored procedures with strict naming conventions',
            'MVVM architecture with CommunityToolkit.Mvvm',
            'Azure AD authentication with MSAL token caching',
            'Income-per-job charting with month/year toggle',
            'Automatic overdue invoice detection on data load',
        ],
        metrics: [
            { label: 'Stored Procedures', value: '31+', isPlaceholder: false },
            { label: 'Stack Layers', value: '4 (DB → API → Backend → Desktop)', isPlaceholder: false },
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
        problem: 'Wanted to build a showcase platform demonstrating AI integration capabilities — but built it as a real, fully-featured product rather than a throwaway demo.',
        solution: 'Built a complete AI chat platform with provider-agnostic streaming supporting both Anthropic and OpenAI models, a custom tool execution framework with transparent context retrieval, database-backed conversation persistence with search and project organization, user-configurable model selection, rich markdown rendering with code highlighting, and a responsive design that works across desktop and mobile.',
        impact: 'Serves as both a functional product and a capability demonstration. Proves the same architecture patterns used in the enterprise FabCore platform scale to client-facing products. The platform is fully featured — not a demo in name or in function.',
        highlights: [
            'Provider-agnostic architecture supporting OpenAI and Anthropic',
            'Real-time token streaming with tool execution loops',
            'Database-backed conversation persistence with search',
            'Custom tool framework with transparent internal context retrieval',
            'Rich markdown rendering with syntax-highlighted code blocks',
        ],
        metrics: [
            { label: 'AI Providers', value: '2 (OpenAI + Anthropic)', isPlaceholder: false },
            { label: 'Streaming', value: 'Real-time SSE', isPlaceholder: false },
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
        tagline: 'Transmittal automation — from zip file to sorted, distributable document packages.',
        category: 'enterprise',
        techStack: ['Python', 'MCP'],
        problem: 'Construction projects require transmittals — formal packages of documents sent to subcontractors and vendors. Assembling these from zip files of mixed documents was tedious and error-prone.',
        solution: 'Built an automation tool that accepts zip files, visualizes contents for review, sorts and packages based on configurable rules, and optionally distributes to recipients. Later converted into an MCP tool for integration with the FabCore AI platform.',
        impact: 'Eliminated manual transmittal assembly. Configurable rules handle different project and recipient requirements. MCP conversion demonstrates how standalone utilities compose into larger platform ecosystems.',
        highlights: [
            'Visual content review before processing',
            'Rule-based sorting and packaging',
            'Evolved from standalone tool to MCP integration',
        ],
        metrics: [
            { label: 'Time Saved', value: 'TBD per package', isPlaceholder: true },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'job-scan',
        title: 'JobScan',
        tagline: 'Package file scanner that collects and organizes project files by finish, mainmark, and part.',
        category: 'enterprise',
        techStack: ['Python'],
        problem: 'Project managers and subcontractors needed to quickly find and organize files related to specific packages. Manual searching through project directories was slow and inconsistent.',
        solution: 'Built a scanning utility that crawls project file structures, identifies and collects related files, and organizes them by finish type, mainmark, and part number for easy access by PMs and subcontractors.',
        impact: 'Fast, consistent file organization that previously required manual directory browsing. Ensures the right files reach the right people without human sorting errors.',
        highlights: [
            'Recursive file structure crawling',
            'Multi-criteria organization (finish, mainmark, part)',
            'Built for non-technical end users',
        ],
        metrics: [
            { label: 'Time Saved', value: 'TBD per scan', isPlaceholder: true },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'combine-api',
        title: 'CombineAPI',
        tagline: 'API that analyzes fabrication cutlists against PDF drawings for metal tag rule matching.',
        category: 'enterprise',
        techStack: ['Python', 'FastAPI', 'PDF Parsing'],
        problem: 'Metal fabrication requires checking cutlists against PDF drawings to determine finish types and match them to tag rules — combine, no combine, no tags. This was done manually piece by piece.',
        solution: 'Built an API that parses cutlist data, scans associated PDFs for finish information, and automatically matches finishes to metal tag rules, returning combine/no-combine/no-tag decisions per piece.',
        impact: 'Automated a tedious manual cross-referencing process. Consistent rule application eliminates human judgment errors on tag decisions.',
        highlights: [
            'Cutlist parsing with PDF cross-referencing',
            'Automated tag rule matching for multiple finish types',
            'RESTful API surface for integration flexibility',
        ],
        metrics: [
            { label: 'Manual Hours Eliminated', value: 'TBD', isPlaceholder: true },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'smart-rename',
        title: 'SmartRename',
        tagline: 'Extensible file renaming utility with regex-based AI suggestions.',
        category: 'enterprise',
        techStack: ['Python'],
        problem: 'Files from external sources often have inconsistent naming — revision suffixes, extra characters, encoding artifacts. Manually cleaning hundreds of filenames per project was tedious.',
        solution: 'Built a renaming utility with multiple modes: strip characters from start/end, remove or replace exact strings, and regex-based intelligent revision removal suggestions. Features a user-extensible architecture for adding custom suggestion rules.',
        impact: 'Batch file renaming that previously required manual per-file edits. The extensible rule system means new naming patterns are handled by adding rules, not writing new code.',
        highlights: [
            'Multiple renaming modes (strip, replace, regex suggest)',
            'User-extensible suggestion architecture',
            'Batch processing for large file sets',
        ],
        metrics: [
            { label: 'Time Saved', value: 'TBD per batch', isPlaceholder: true },
        ],
        hasDetailPage: false,
        githubUrl: 'https://github.com/TylerBuilds-Official/SmartRename',
    },

    {
        slug: 'drawing-coordinator-mcp',
        title: 'Drawing Coordinator MCP',
        tagline: 'MCP tool for construction drawing coordination and transmittal workflows.',
        category: 'enterprise',
        techStack: ['Python', 'MCP'],
        problem: 'Drawing coordination across multiple trades and stakeholders involves tracking revisions, distributions, and transmittal status — a workflow that benefits heavily from AI-assisted automation.',
        solution: 'Built an MCP tool that integrates with the FabCore AI platform to handle drawing coordination workflows, transmittal management, and cross-trade document tracking.',
        impact: 'AI-assisted drawing coordination reduces manual tracking overhead and ensures transmittal workflows stay organized across complex multi-trade projects.',
        highlights: [
            'Integrated with FabCore AI platform',
            'Handles transmittal and revision tracking workflows',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    {
        slug: 'toolbox-agent-executor',
        title: 'Local Agent Executor',
        tagline: 'Desktop executable bridging web-based AI platforms with user filesystems.',
        category: 'enterprise',
        techStack: ['Python'],
        problem: 'Web-based AI platforms cannot interact with local filesystems. Enterprise users needed the AI to read, process, and organize files on their machines without uploading everything to the cloud.',
        solution: 'Built a local executable agent that bridges the FabCore web platform with the user\'s desktop filesystem. Enables the AI to interact with local files, run processes, and execute tasks securely on the user\'s machine.',
        impact: 'Solves the web-to-desktop gap without requiring cloud uploads of sensitive files. Users get AI-powered file operations that work on their local data.',
        highlights: [
            'Bridges web platform to local filesystem securely',
            'Enables AI-powered local file operations',
            'Non-trivial architecture solving a real deployment constraint',
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
        problem: 'Wanted to systematically evaluate cryptocurrency trading strategies with historical data rather than relying on intuition or untested approaches.',
        solution: 'Built a backtesting infrastructure for strategy definition, historical data ingestion, systematic testing across multiple timeframes and data sets, and performance metric analysis.',
        impact: 'Data-driven strategy evaluation replacing guesswork. Comprehensive testing across different market conditions and timeframes validates or invalidates approaches before risking real capital.',
        highlights: [
            'Systematic multi-timeframe backtesting',
            'Strategy parameterization and comparison',
            'Shows analytical and algorithmic thinking beyond web/app development',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    // ============================================
    // TIER 3 — Infrastructure & Tooling
    // ============================================

    {
        slug: 'carl-infrastructure',
        title: 'Carl — Server Infrastructure',
        tagline: 'Self-hosted bare-metal server running all databases and API services.',
        category: 'infrastructure',
        techStack: ['Linux Mint', 'Dual Xeon', 'MySQL', 'FastAPI', 'RAID Storage'],
        problem: 'Needed reliable, self-managed infrastructure for hosting databases and API services across multiple projects without cloud dependency.',
        solution: 'Built and maintain a bare-metal server with dual Xeon CPUs and 40TB RAID storage running Linux Mint. Hosts MySQL database instances and FastAPI services for JobTracker, the assistant platform, and other APIs. LAN-accessible from the Windows 11 development workstation.',
        impact: 'Full ownership of the infrastructure stack. No cloud dependency for development and internal services. Demonstrates infrastructure management alongside application development.',
        highlights: [
            'Dual Xeon CPUs with 40TB RAID storage',
            'Hosts MySQL + FastAPI for multiple projects',
            'Full infrastructure ownership — no cloud dependency',
        ],
        metrics: [
            { label: 'Storage', value: '40TB RAID', isPlaceholder: false },
            { label: 'Services Hosted', value: '5+', isPlaceholder: true },
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
        impact: 'Consistent, reliable deployments across every project. Health checks catch issues immediately. Rollback capability provides a safety net for production updates.',
        highlights: [
            'Single-click deployment with minimal arguments',
            'Automatic version bumping',
            'Health checks and rollback capabilities',
            'Used across all enterprise and personal projects',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    {
        slug: 'mcp-tool-ecosystem',
        title: 'MCP Tool Ecosystem',
        tagline: 'Extensible Model Context Protocol tools for data reporting, file management, and more.',
        category: 'infrastructure',
        techStack: ['Python', 'MCP'],
        problem: 'AI platforms need structured access to external data and services. Building one-off integrations for each data source doesn\'t scale.',
        solution: 'Built an extensible MCP tool ecosystem covering data reporting, file organization, drawing coordination, transmittal processing, and more. Architecture supports rapid tool creation — new data sources and capabilities are added by building new tools against a consistent interface.',
        impact: 'Scalable integration layer between AI platforms and enterprise data. New tools are additive — they compose into the existing platform without modifying core systems.',
        highlights: [
            'Consistent tool interface for rapid development',
            'Covers data reporting, file management, and document workflows',
            'Composable — tools integrate into larger platforms seamlessly',
        ],
        metrics: [
            { label: 'Tools Built', value: '30+', isPlaceholder: false },
        ],
        hasDetailPage: false,
    },

    {
        slug: 'tylerbuilds-website',
        title: 'TylerBuilds.net',
        tagline: 'Company website with interactive demos, project estimator, and business-friendly messaging.',
        category: 'infrastructure',
        techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
        problem: 'Needed a professional web presence for TylerBuilds that communicates value to non-technical business owners, not just developers.',
        solution: 'Built a company website in React + TypeScript with business-friendly messaging focused on outcomes over technical jargon, an interactive project estimator tool, a process stepper visualization, responsive design across all devices, and case study showcases.',
        impact: 'Professional web presence that speaks the language of potential clients. Interactive elements demonstrate capabilities without requiring technical understanding.',
        highlights: [
            'Business-friendly messaging over technical jargon',
            'Interactive project estimator',
            'Rebuilt from CSS-only to React + TypeScript',
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
        tagline: 'Safe PDF unlocking utility for needlessly locked construction plans.',
        category: 'utility',
        techStack: ['Python'],
        problem: 'Construction plans frequently arrive as locked PDFs that prevent annotation, measurement, and markup — essential tasks for field teams and coordinators.',
        solution: 'Built a utility that safely unlocks PDF restrictions without modifying content, enabling annotation and markup workflows on construction documents.',
        impact: 'Eliminates a recurring friction point in construction document workflows. Quick, safe, and purpose-built.',
        highlights: [
            'Purpose-built for construction workflow needs',
            'Safe unlocking without content modification',
        ],
        metrics: [],
        hasDetailPage: false,
        githubUrl: 'https://github.com/TylerBuilds-Official/OpenPDF',
    },

    {
        slug: 'leed-format-tool',
        title: 'LeedFormatTool',
        tagline: 'Tekla DataDump parser that transforms raw exports into clean, readable DataFrames.',
        category: 'utility',
        techStack: ['Python'],
        problem: 'Tekla DataDumps export in a raw format that requires manual cleanup before the data is usable for analysis or reporting.',
        solution: 'Built a parsing tool that ingests raw Tekla DataDumps and transforms them into clean, structured DataFrames ready for analysis.',
        impact: 'Turns an unusable raw export into analysis-ready data automatically. Saves manual cleanup time on every export.',
        highlights: [
            'Raw export to structured DataFrame pipeline',
            'Domain-specific parsing logic for Tekla format',
        ],
        metrics: [],
        hasDetailPage: false,
    },

    {
        slug: 'email-service',
        title: 'TylerBuilds Email Service',
        tagline: 'Backend email service for TylerBuilds platform communications.',
        category: 'utility',
        techStack: ['Python'],
        problem: 'TylerBuilds platform needed automated email capabilities for notifications and communications.',
        solution: 'Built a Python email service handling platform email needs.',
        impact: 'Automated email communications for the TylerBuilds ecosystem.',
        highlights: [
            'Integrated with TylerBuilds platform',
        ],
        metrics: [],
        hasDetailPage: false,
    },
];
