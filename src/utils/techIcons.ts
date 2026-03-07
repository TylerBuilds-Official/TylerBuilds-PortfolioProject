/**
 * Maps tech stack display names to Devicon CSS class names.
 * Returns null for techs without a Devicon icon (rendered as text-only tags).
 */

const TECH_ICON_MAP: Record<string, string> = {
    'Python': 'devicon-python-plain colored',
    'FastAPI': 'devicon-fastapi-plain colored',
    'React': 'devicon-react-original colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'MySQL': 'devicon-mysql-plain colored',
    'MSSQL': 'devicon-microsoftsqlserver-plain colored',
    'Azure AD': 'devicon-azure-plain colored',
    'C#': 'devicon-csharp-plain colored',
    '.NET 8.0': 'devicon-dotnetcore-plain colored',
    'PyQt': 'devicon-qt-original colored',
    'Linux Mint': 'devicon-linux-plain colored',
    'Vite': 'devicon-vitejs-plain colored',
    'CSS': 'devicon-css3-plain colored',
};

export function getTechIconClass(tech: string): string | null {
    return TECH_ICON_MAP[tech] ?? null;
}
