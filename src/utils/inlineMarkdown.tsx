import { type ReactNode } from 'react';

/**
 * Converts inline markdown tokens to React elements.
 *
 * Supported syntax:
 *   **text**  → <strong>text</strong>
 *   *text*    → <em>text</em>
 *   `text`    → <code>text</code>
 *
 * Processes patterns in order (bold before italic) so **bold** is consumed
 * before the single-asterisk pass runs. Handles all realistic portfolio content.
 */

const PATTERNS: { regex: RegExp; wrap: (content: string, key: string) => ReactNode }[] = [
    {
        regex: /\*\*(.+?)\*\*/g,
        wrap: (content, key) => <strong key={key}>{content}</strong>,
    },
    {
        regex: /\*(.+?)\*/g,
        wrap: (content, key) => <em key={key}>{content}</em>,
    },
    {
        regex: /`(.+?)`/g,
        wrap: (content, key) => <code key={key}>{content}</code>,
    },
];

export function renderInlineMarkdown(text: string): ReactNode[] {
    let fragments: ReactNode[] = [text];

    for (const { regex, wrap } of PATTERNS) {
        const next: ReactNode[] = [];

        for (const fragment of fragments) {
            if (typeof fragment !== 'string') {
                next.push(fragment);
                continue;
            }

            let lastIndex = 0;
            let match: RegExpExecArray | null;
            const localRegex = new RegExp(regex.source, regex.flags);

            while ((match = localRegex.exec(fragment)) !== null) {
                if (match.index > lastIndex) {
                    next.push(fragment.slice(lastIndex, match.index));
                }
                next.push(wrap(match[1], `md-${match.index}-${match[1]}`));
                lastIndex = localRegex.lastIndex;
            }

            if (lastIndex < fragment.length) {
                next.push(fragment.slice(lastIndex));
            }
        }

        fragments = next;
    }

    return fragments;
}
