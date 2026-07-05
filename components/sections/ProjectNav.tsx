import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Project } from "@/types/project";

export default function ProjectNav({
  prev,
  next,
}: {
  prev: Project;
  next: Project;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-12 sm:grid-cols-2">
      <Link
        href={`/projects/${prev.slug}`}
        data-cursor="pointer"
        className="group glass-surface flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent-primary/30"
      >
        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={prev.coverImage}
            alt={prev.title}
            fill
            sizes="96px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <FiArrowLeft className="h-3.5 w-3.5" /> Previous
          </div>
          <div className="mt-1 truncate font-heading text-base font-semibold text-text-primary">
            {prev.title}
          </div>
        </div>
      </Link>

      <Link
        href={`/projects/${next.slug}`}
        data-cursor="pointer"
        className="group glass-surface flex items-center justify-end gap-4 rounded-2xl p-5 text-right transition-colors hover:border-accent-primary/30"
      >
        <div className="min-w-0">
          <div className="flex items-center justify-end gap-1.5 text-xs text-text-muted">
            Next <FiArrowRight className="h-3.5 w-3.5" />
          </div>
          <div className="mt-1 truncate font-heading text-base font-semibold text-text-primary">
            {next.title}
          </div>
        </div>
        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={next.coverImage}
            alt={next.title}
            fill
            sizes="96px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  );
}
