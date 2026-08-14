import React, { createElement } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPrivacyPolicyBySlug, privacyPolicies } from '../privacyPolicies';

const parseInlineMarkdown = (text: string) => {
  const fragments: React.ReactNode[] = [];
  const pattern = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      fragments.push(text.slice(lastIndex, index));
    }

    if (match[2]) {
      fragments.push(
        <strong key={`${index}-strong`} className="font-semibold text-text-primary">
          {match[2]}
        </strong>,
      );
    } else if (match[4] && match[5]) {
      fragments.push(
        <a
          key={`${index}-link`}
          href={match[5]}
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline decoration-blue-400/60 underline-offset-4 hover:text-blue-200"
        >
          {match[4]}
        </a>,
      );
    }

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    fragments.push(text.slice(lastIndex));
  }

  return fragments.length > 0 ? fragments : [text];
};

const renderMarkdown = (content: string) => {
  const lines = content.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  let paragraphLines: string[] = [];

  const flushParagraph = (key: string) => {
    if (paragraphLines.length === 0) {
      return;
    }

    const paragraph = paragraphLines.join(' ').trim();
    if (paragraph) {
      nodes.push(
        <p key={key} className="text-base leading-8 text-text-secondary">
          {parseInlineMarkdown(paragraph)}
        </p>,
      );
    }
    paragraphLines = [];
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph(`paragraph-${index}`);
      return;
    }

    if (/^\*\s\*\s\*$/.test(line)) {
      flushParagraph(`paragraph-${index}`);
      nodes.push(<hr key={`divider-${index}`} className="border-primary-border/70 my-4" />);
      return;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph(`paragraph-${index}`);
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const headingClassName =
        level === 1
          ? 'text-3xl sm:text-4xl font-bold text-text-primary'
          : level === 2
            ? 'text-2xl sm:text-3xl font-semibold text-text-primary'
            : 'text-xl sm:text-2xl font-semibold text-text-primary';
      const tagName = `h${Math.min(level, 6)}`;

      nodes.push(
        createElement(
          tagName,
          { key: `heading-${index}`, className: headingClassName },
          ...parseInlineMarkdown(text),
        ),
      );
      return;
    }

    paragraphLines.push(line);
  });

  flushParagraph(`paragraph-${lines.length}`);

  return nodes;
};

const PolicyPageShell = ({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) => (
  <div className="min-h-screen bg-primary-black text-text-primary">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(147,197,253,0.08),transparent_22%)]" />
    <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="glass-card rounded-modern-2xl p-6 sm:p-10 lg:p-12"
      >
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300/85 mb-3">{eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text">{title}</h1>
        </div>
        {children}
      </motion.div>
    </main>
  </div>
);

export const PrivacyPolicyListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PolicyPageShell title="App Privacy & Policy" eyebrow="Documents">
      <div className="flex flex-col gap-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex w-fit items-center gap-2 btn-liquid-secondary px-4 py-2 rounded-modern font-medium"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>

        <div className="grid gap-4">
          {privacyPolicies.map((policy, index) => (
            <motion.div
              key={policy.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Link
                to={`/privacy-policy/${policy.slug}`}
                className="group flex items-center justify-between gap-4 rounded-modern-xl border border-primary-border/80 liquid-glass px-5 py-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-blue-500/15 p-3 text-blue-300">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary group-hover:text-blue-200">
                      {policy.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                      Open the full markdown detail page for this application policy.
                    </p>
                  </div>
                </div>
                <FileText className="shrink-0 text-text-muted group-hover:text-blue-200" size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PolicyPageShell>
  );
};

export const PrivacyPolicyDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const policy = slug ? getPrivacyPolicyBySlug(slug) : undefined;

  if (!policy) {
    return (
      <PolicyPageShell title="Document Not Found" eyebrow="Missing Policy">
        <div className="space-y-6">
          <p className="text-base leading-8 text-text-secondary">
            The requested privacy or policy document does not exist.
          </p>
          <button
            onClick={() => navigate('/privacy-policy')}
            className="inline-flex w-fit items-center gap-2 btn-liquid px-4 py-2 rounded-modern font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to policy list</span>
          </button>
        </div>
      </PolicyPageShell>
    );
  }

  return (
    <PolicyPageShell title={policy.title} eyebrow="Policy Detail">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => navigate('/privacy-policy')}
            className="inline-flex w-fit items-center gap-2 btn-liquid-secondary px-4 py-2 rounded-modern font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to policy list</span>
          </button>
          <p className="text-sm text-text-muted">Source: {policy.slug}.md</p>
        </div>
        <article className="space-y-5">{renderMarkdown(policy.content)}</article>
      </div>
    </PolicyPageShell>
  );
};