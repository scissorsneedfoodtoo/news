const CLASS_CENTRAL_BASE = 'https://www.classcentral.com';

// Where the generic (non tag-specific) ad points.
const CLASS_CENTRAL_GENERIC_URL = `${CLASS_CENTRAL_BASE}/collection/top-free-online-courses`;

/**
 * Maps a post's primary tag slug to its Class Central subject.
 *
 * Keys are lowercase tag slugs. Each entry has:
 *   - `slug`: the trailing segment of https://www.classcentral.com/subject/<slug>
 *   - `name`: the display label to use in the ad copy (fixes casing / wording,
 *             e.g. tag "azure" -> "Microsoft Azure"). The label always appears
 *             mid-sentence ("Explore <name> courses ..."), so generic topics
 *             stay lowercase while proper nouns / acronyms keep their casing.
 *
 * Only tags in this map get a tag-specific ad. Every other post gets a generic
 * "top courses on Class Central" ad (see `classCentralUrl` / `classCentralLabel`).
 *
 * NOTE: this list is a hand-maintained placeholder for the partner demo and
 * still needs to be audited against live Class Central subjects.
 */
export const classCentralSubjectsByTagSlug = {
  javascript: { slug: 'javascript', name: 'JavaScript' },
  typescript: { slug: 'typescript', name: 'TypeScript' },
  python: { slug: 'python', name: 'Python' },
  react: { slug: 'react', name: 'React' },
  angular: { slug: 'angular', name: 'Angular' },
  'vue-js': { slug: 'vue', name: 'Vue.js' },
  'node-js': { slug: 'nodejs', name: 'Node.js' },
  html: { slug: 'html', name: 'HTML' },
  css: { slug: 'css', name: 'CSS' },
  java: { slug: 'java', name: 'Java' },
  'c-sharp': { slug: 'c-sharp', name: 'C#' },
  cpp: { slug: 'c', name: 'C++' },
  golang: { slug: 'golang', name: 'Go' },
  rust: { slug: 'rust', name: 'Rust' },
  php: { slug: 'php', name: 'PHP' },
  ruby: { slug: 'ruby', name: 'Ruby' },
  swift: { slug: 'swift', name: 'Swift' },
  kotlin: { slug: 'kotlin', name: 'Kotlin' },
  sql: { slug: 'sql', name: 'SQL' },
  mongodb: { slug: 'mongodb', name: 'MongoDB' },
  postgresql: { slug: 'postgres', name: 'PostgreSQL' },
  linux: { slug: 'linux', name: 'Linux' },
  docker: { slug: 'docker', name: 'Docker' },
  kubernetes: { slug: 'kubernetes', name: 'Kubernetes' },
  aws: { slug: 'aws', name: 'AWS' },
  azure: { slug: 'microsoft-azure', name: 'Microsoft Azure' },
  'google-cloud': { slug: 'google-cloud', name: 'Google Cloud' },
  git: { slug: 'git', name: 'Git' },
  'web-development': { slug: 'web-development', name: 'web development' },
  'data-science': { slug: 'data-science', name: 'data science' },
  'machine-learning': { slug: 'machine-learning', name: 'machine learning' },
  'artificial-intelligence': { slug: 'ai', name: 'AI' },
  cybersecurity: { slug: 'cybersecurity', name: 'cybersecurity' },
  blockchain: { slug: 'blockchain', name: 'blockchain' },
  music: { slug: 'music', name: 'music' },
  podcast: { slug: 'podcasting', name: 'podcasting' }
};

/**
 * Looks up the mapped Class Central subject for a tag slug.
 * Returns `null` when the slug is not in the map.
 */
export const getClassCentralSubject = tagSlug =>
  classCentralSubjectsByTagSlug[(tagSlug || '').toLowerCase()] || null;

/**
 * Whether a tag slug gets the generic "top courses" ad rather than a
 * tag-specific one — true for any slug that isn't in the subject map.
 */
export const isGenericClassCentralAd = tagSlug =>
  !getClassCentralSubject(tagSlug);

/**
 * The Class Central URL for a tag slug: the mapped subject page when the slug
 * is in the subject map, otherwise the generic "top courses" collection.
 */
export const classCentralUrl = tagSlug => {
  const subject = getClassCentralSubject(tagSlug);
  return subject
    ? `${CLASS_CENTRAL_BASE}/subject/${subject.slug}`
    : CLASS_CENTRAL_GENERIC_URL;
};

/**
 * The display label for a tag slug in the ad copy: the mapped subject name, or
 * an empty string for generic ads (whose copy doesn't mention the tag).
 */
export const classCentralLabel = tagSlug =>
  getClassCentralSubject(tagSlug)?.name || '';
