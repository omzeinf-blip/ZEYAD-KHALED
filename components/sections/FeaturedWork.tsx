import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectRow from "@/components/sections/ProjectRow";

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          heading="Selected Work"
          description="A curated collection of premium digital products built with performance, aesthetics and business impact in mind."
        />

        <div className="mt-20 space-y-28 lg:mt-28 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
