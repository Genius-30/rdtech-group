import { Metadata } from "next";
import { ProjectDetail } from "@/components/projects/details";
import { RelatedProjects } from "@/components/projects/related";
import { notFound } from "next/navigation";
import { projects } from "../../../../public/projectData";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | RDTech Group",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | RDTech Group`,
    description:
      project.description ||
      "Explore our detailed project work at RDTech Group.",
    openGraph: {
      title: `${project.title} | RDTech Group`,
      description:
        project.description ||
        "Explore our detailed project work at RDTech Group.",
      url: `https://rdtechgroup.com/projects/${project.slug}`,
      siteName: "RDTech Group",
      images: [
        {
          url: project.thumbnail || "/default-project.jpg",
          width: 1200,
          height: 630,
          alt: project.title || "Project Thumbnail",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Readonly<ProjectPageProps>) {
  const project = projects.find(async (p) => p.slug === (await params).slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen my-12">
      <ProjectDetail project={project} />
      <RelatedProjects currentProjectId={project.id} />
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
