import type { Project } from '../types';

const imageModules = import.meta.glob('../assets/images/*/*.{png,jpg,jpeg,webp,avif,svg}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

function normalizeKey(value: string) {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function buildFolderImageMap() {
    const map: Record<string, string[]> = {};

    for (const [path, imageUrl] of Object.entries(imageModules)) {
        const pathParts = path.split('/');
        const folderName = pathParts[pathParts.length - 2];
        const folderKey = normalizeKey(folderName);

        if (!map[folderKey]) {
            map[folderKey] = [];
        }

        map[folderKey].push(imageUrl);
    }

    for (const key of Object.keys(map)) {
        map[key].sort();
    }

    return map;
}

const folderImageMap = buildFolderImageMap();

function resolveFolderKey(project: Project) {
    const baseTitle = project.title.replace(/\bai\b/gi, '').trim();
    const candidateKeys = [project.slug, project.title, baseTitle]
        .map(normalizeKey)
        .filter(Boolean);

    for (const key of candidateKeys) {
        if (folderImageMap[key]?.length) {
            return key;
        }
    }

    for (const key of candidateKeys) {
        const partialMatch = Object.keys(folderImageMap).find(
            folderKey => folderKey.includes(key) || key.includes(folderKey)
        );

        if (partialMatch && folderImageMap[partialMatch]?.length) {
            return partialMatch;
        }
    }

    return undefined;
}

export function getProjectImages(project: Project) {
    const key = resolveFolderKey(project);
    return key ? folderImageMap[key] : [];
}
