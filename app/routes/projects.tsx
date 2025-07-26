import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

export default function Projects() {
  return (
    <>
      {/* Projects Hero */}
      <section className="container space-y-8 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of projects I've built to learn and practice my skills.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            {
              title: "Personal Blog",
              description:
                "A blog built with Next.js and MDX to share my learning journey and technical insights.",
              tags: ["Next.js", "Tailwind CSS", "MDX"],
              image: "/placeholder.svg?height=400&width=600",
              link: "#",
              github: "#",
            },
            {
              title: "Weather App",
              description:
                "A simple weather application using a public API to display current and forecasted weather.",
              tags: ["React", "API Integration", "CSS"],
              image: "/placeholder.svg?height=400&width=600",
              link: "#",
              github: "#",
            },
            {
              title: "Task Tracker",
              description:
                "A full-stack application to manage daily tasks and track productivity with user authentication.",
              tags: ["React", "Node.js", "MongoDB"],
              image: "/placeholder.svg?height=400&width=600",
              link: "#",
              github: "#",
            },
            {
              title: "Recipe Finder",
              description:
                "An app that helps users find recipes based on ingredients they have available.",
              tags: ["JavaScript", "API", "Bootstrap"],
              image: "/placeholder.svg?height=400&width=600",
              link: "#",
              github: "#",
            },
            {
              title: "Portfolio Website",
              description:
                "This website! Built to showcase my projects and skills as a developer.",
              tags: ["Next.js", "Tailwind CSS", "React"],
              image: "/placeholder.svg?height=400&width=600",
              link: "#",
              github: "#",
            },
            {
              title: "Quiz Application",
              description:
                "An interactive quiz app with multiple categories and difficulty levels.",
              tags: ["React", "CSS", "LocalStorage"],
              image: "/placeholder.svg?height=400&width=600",
              link: "#",
              github: "#",
            },
          ].map((project, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-1"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
