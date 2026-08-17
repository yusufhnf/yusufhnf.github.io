const policyModules = import.meta.glob('../public/privacypolicy/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface PrivacyPolicyEntry {
  slug: string;
  title: string;
  path: string;
  content: string;
}

const extractTitleFromMarkdown = (content: string) => {
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (!headingMatch) {
    return undefined;
  }

  return headingMatch[1]
    .replace(/^Privacy Policy for\s+/i, '')
    .trim();
};

const titleFromSlug = (slug: string) =>
  slug
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export const privacyPolicies: PrivacyPolicyEntry[] = Object.entries(policyModules)
  .map(([path, content]) => {
    const fileName = path.split('/').pop() ?? '';
    const slug = fileName.replace(/\.md$/i, '');

    return {
      slug,
      title: extractTitleFromMarkdown(content) ?? titleFromSlug(slug),
      path,
      content,
    };
  })
  .sort((left, right) => left.title.localeCompare(right.title));

export const getPrivacyPolicyBySlug = (slug: string) =>
  privacyPolicies.find((policy) => policy.slug === slug);