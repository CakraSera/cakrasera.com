export function Projects() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl font-bold">Projects</h1>
      {/* <div class="flex justify-center gap-2 mt-4 text-lg">
    <button class="filter-btn active">ALL</button>
    <button class="filter-btn">WEBSITE</button>
    <button class="filter-btn">MOBILE</button>
  </div> */}
      <div className="project-list !mt-4 flex flex-col items-center">
        <div
          id="all-projects"
          className="grid grid-cols-3 gap-2 w-fit justify-center">
          <div className="project-card">
            <div className="project-img">
              <img
                src="/images/projects/narai-coder.jpg"
                alt="Project 1"
                width={336}
                height={336}
              />
            </div>
            <div className="card-content">
              <h2>Project 1</h2>
              <p>
                Cloning e-commerce like tokopedia. Cloning e-commerce like
                tokopedia
              </p>
              <div className="tech-stacks">
                <ul className="flex justify-center">
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Node Js</li>
                  <li>React Js</li>
                </ul>
              </div>
              <button>See More Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
