import { projects } from "../js/dummyData.js";
console.log("🚀 ~ projects:", projects);

const projectsElement = document.getElementById("all-projects");

function renderProjects() {
  projectsElement.innerHTML = projects.map((project) => {
    return `
                <div class="project-card">
                <div class="project-img">
                  <img
                    src="/images/projects/narai-coder.jpg"
                    alt="Project 1"
                    width="336"
                    height="336" />
                </div>
                <div class="card-content">
                  <h2>${project.name}</h2>
                  <p>
                    ${project.description}
                  </p>
                  <div class="tech-stacks">
                    <ul class="flex justify-center">
                    ${
                      project.tags
                        ? project.tags.map((tag) => `<li>${tag}</li>`).join("")
                        : ""
                    }
                    </ul>
                  </div>
                  <a href="${
                    project.link
                  }" target="_blank"><button>See More Detail</button></a>
                </div>
              </div>
    `;
  });
}
renderProjects();
