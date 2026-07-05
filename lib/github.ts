const GITHUB_USERNAME = "omzeinf-blip";

interface RawGithubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface GithubProfile {
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export interface GithubRepo {
  name: string;
  htmlUrl: string;
  description: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
}

export interface GithubData {
  profile: GithubProfile | null;
  repos: GithubRepo[];
}

// Revalidate once a day — GitHub stats don't need to be real-time,
// and this keeps the build resilient to transient API/rate-limit issues.
export async function getGithubData(): Promise<GithubData> {
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 86400 },
        headers: { Accept: "application/vnd.github+json" },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        {
          next: { revalidate: 86400 },
          headers: { Accept: "application/vnd.github+json" },
        }
      ),
    ]);

    const profile = profileRes.ok ? await profileRes.json() : null;
    const reposRaw = reposRes.ok ? await reposRes.json() : [];

    return {
      profile: profile
        ? {
            login: profile.login,
            name: profile.name,
            bio: profile.bio,
            avatarUrl: profile.avatar_url,
            htmlUrl: profile.html_url,
            publicRepos: profile.public_repos,
            followers: profile.followers,
            following: profile.following,
          }
        : null,
      repos: Array.isArray(reposRaw)
        ? reposRaw.map((r: RawGithubRepo) => ({
            name: r.name,
            htmlUrl: r.html_url,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            updatedAt: r.updated_at,
          }))
        : [],
    };
  } catch {
    // Network unavailable at build/render time — the section will
    // render with the static fallback (real project links) instead.
    return { profile: null, repos: [] };
  }
}
