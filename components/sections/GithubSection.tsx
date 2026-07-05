import Image from "next/image";
import { FiGithub, FiStar, FiExternalLink } from "react-icons/fi";
import { getGithubData } from "@/lib/github";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

export default async function GithubSection() {
  const { profile, repos } = await getGithubData();

  // Fall back to the real project data (which already mirrors the actual
  // repos) if the live API is unavailable at build/render time.
  const displayRepos =
    repos.length > 0
      ? repos
      : projects.map((p) => ({
          name: p.title,
          htmlUrl: p.github,
          description: p.category,
          language: "TypeScript",
          stars: 0,
          updatedAt: p.year,
        }));

  return (
    <section className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source"
          heading="What I've been building"
          description="A live look at recent work — pulled directly from GitHub."
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[0.9fr_1.6fr]">
          {/* Profile card */}
          <div className="glass-surface flex flex-col items-start rounded-2xl p-7">
            {profile?.avatarUrl && (
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name ?? "GitHub avatar"}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="mt-5 font-heading text-xl font-semibold text-text-primary">
              {profile?.name ?? "Zeyad Khaled"}
            </h3>
            {profile?.bio && (
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {profile.bio}
              </p>
            )}

            <div className="mt-6 grid w-full grid-cols-3 gap-4 border-t border-white/5 pt-6">
              <Stat value={profile?.publicRepos ?? projects.length} label="Repos" />
              <Stat value={profile?.followers ?? 0} label="Followers" />
              <Stat value={profile?.following ?? 0} label="Following" />
            </div>

            <div className="mt-6 w-full">
              <MagneticButton
                href="https://github.com/omzeinf-blip"
                variant="secondary"
                external
                className="w-full"
              >
                <FiGithub className="h-4 w-4" /> View Profile
              </MagneticButton>
            </div>
          </div>

          {/* Repos */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {displayRepos.slice(0, 4).map((repo) => (
              <a
                key={repo.name}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group glass-surface flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-base font-semibold text-text-primary">
                      {repo.name}
                    </h4>
                    <FiExternalLink className="h-4 w-4 text-text-muted transition-colors duration-300 group-hover:text-accent-secondary" />
                  </div>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                    {repo.description ?? "No description provided."}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 text-xs text-text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-accent-primary" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FiStar className="h-3.5 w-3.5" /> {repo.stars}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="font-heading text-xl font-semibold text-text-primary">
        {value}
      </div>
      <div className="text-xs text-text-muted">{label}</div>
    </div>
  );
}
