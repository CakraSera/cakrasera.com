export function Homepage() {
  return (
    <>
      <section className="min-h-screen md:min-h-[calc(100vh-8rem)]">
        <div className="p-6 rounded-2xl bg-teal-950 text-gray-200 mx-auto flex">
          <div className="hero-header">
            <div className="mb-2 flex justify-center">
              <img
                className="w-xl md:w-64 rounded-2xl"
                src="/images/web-profile-img.jpg"
                alt="hero-img"
              />
            </div>
          </div>
          <article className="hero-content">
            <h1 className="font-bold text-[clamp(1.5rem,4vw,3rem)] font-comic">
              👋 Hi, I'm
              <span className="text-orange-700 border-gray-200 font-extrabold bg-gray-200 rounded-2xl px-2">
                Cakra
              </span>
            </h1>
            <p className="border-gray-200 text font-comic font-bold text-xl md:text-[clamp(1rem,4vw,1.5rem)]">
              I'm a Fullstack Web Developer 👨🏼‍💻
            </p>
            <p>
              Full Web Developer with 2+ years of experience transforming ideas
              into elegant solutions. Fluent in TypeScript, JavaScript, React,
              and Node.js, I blend technical expertise with creative
              problem-solving to build intuitive applications that make an
              impact. Let's create something remarkable together.
            </p>
            <nav
              className="navlinks flex justify-center"
              aria-label="User Social Media">
              <ul className="flex gap-4">
                <li className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-orange-700 rounded-2xl">
                  <a href="https://github.com/CakraSera" target="_blank">
                    <i className="fa-brands fa-github text-2xl" />
                    <p className="font-comic font-bold">Github</p>
                  </a>
                </li>
                <li className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-orange-700 rounded-2xl">
                  <a
                    href="https://www.linkedin.com/in/rakhelcakrakusumadinatasera/"
                    target="_blank">
                    <i className="fa-brands fa-linkedin text-2xl" />
                    <p className="font-comic font-bold">Linkedln</p>
                  </a>
                </li>
                <li className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-orange-700 rounded-2xl">
                  <a href="https://x.com/CakraRakhel" target="_blank">
                    <i className="fa-brands fa-twitter text-2xl" />
                    <p className="font-comic font-bold">Twitter</p>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>
      <section
        id="about-me"
        className="flex flex-col justify-center mx-20 lg:pt-40 min-h-screen md:visible">
        <h2 className="font-bold text-2xl font-comic text-teal-800">
          Introduction
        </h2>
        <h2 className="font-bold text-4xl text-teal-950 font-comic">
          About Me <span className="text-2xl">🙋🏼‍♂️</span>
        </h2>
        <p className="font-comic font-bold text-xl">
          Full Web Developer with 2+ years of experience transforming ideas into
          elegant solutions. Fluent in TypeScript, JavaScript, React, and
          Node.js, I blend technical expertise with creative problem-solving to
          build intuitive applications that make an impact. Let's create
          something remarkable together.
        </p>
      </section>
      <section id="tech-stack" className="min-h-screen">
        <h2 className="font-bold text-2xl text-teal-950 font-comic mb-4 text-center">
          My Tech Stacks 🚀
        </h2>
        <ul className="grid justify-center md:justify-start grid-cols-2 md:grid-cols-3 gap-4">
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/react.svg"
                alt="React JS"
                className="w-8 h-8 object-cover"
              />
              <p>React JS</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/vue.svg"
                alt="React JS"
                className="w-8 h-8 object-cover"
              />
              <p>Vue JS</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/next-js.svg"
                alt="Next JS"
                className="w-8 h-8 object-cover"
              />
              <p>Next JS</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/javascript.svg"
                alt="JavaScript"
                className="w-8 h-8 object-cover"
              />
              <p>JavaScript</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/typescript.svg"
                alt="TypeScript"
                className="w-8 h-8 object-cover"
              />
              <p>TypeScript</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/tailwind.svg"
                alt="Tailwind"
                className="w-8 h-8 object-cover"
              />
              <p>Tailwind</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/mongodb.svg"
                alt="MongoDB"
                className="w-8 h-8 object-cover"
              />
              <p>MongoDB</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/nodejs.svg"
                alt="Node JS"
                className="w-8 h-8"
              />
              <p>Node Js</p>
            </div>
          </li>
          <li className="font-comic font-bold rounded-2xl border-2">
            <div className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-teal-950">
              <img
                src="./images/tech-skills/express.svg"
                alt="Express JS"
                className="w-8 h-8 object-cover"
              />
              <p>Express JS</p>
            </div>
          </li>
        </ul>
      </section>
      <section id="work-experience" className="min-h-screen">
        <h2 className="font-bold text-2xl text-teal-950 text-center font-comic mb-8 md:text-left">
          Work Experience 💼
        </h2>
        <div className="flex flex-col gap-6 border-teal-950 border-l-2 ml-2 pl-6">
          <div className="">
            <div className="md:w-1/2 border-2 border-teal-950 rounded-2xl relative before:absolute before:content-[''] before:w-7 before:h-7 before:bg-teal-950 before:rounded-full before:-left-[2.5rem] before:top-10">
              <div className="m-2">
                <div className="card-header flex flex-col items-center">
                  <img
                    src="./images/dataon-logo.png"
                    alt="dataon logo"
                    className="w-40 h-32 object-cover"
                    height={96}
                  />
                  <h3 className="font-bold text-xl font-comic">
                    Implementation Consultant Jr
                  </h3>
                  <h3 className="font-bold font-comic">
                    DataOn (PT Indodev Niaga Internet)
                  </h3>
                  <h4 className="font-bold text-gray-500 font-comic">
                    Mei 2023 - Present
                  </h4>
                </div>
                <div className="mt-2 card-body">
                  <ul className="list-disc list-inside text-sm">
                    <li>
                      Developing and implementing custom web applications using
                      React.js, CFML, HTML, CSS, and JavaScript to meet specific
                      client requirements
                    </li>
                    <li>
                      Collaborating closely with Implementation Consultants to
                      ensure deliverables align with client expectations and
                      business objectives
                    </li>
                    <li>
                      Maintaining consistent code quality through Git version
                      control, Gitlab for CI/CD, and SonarQube for code quality
                      assurance
                    </li>
                    <li>
                      Adapting and extending DataOn's core applications to
                      create customized solutions for enterprise clients
                    </li>
                    <li>
                      Troubleshooting and resolving technical issues to ensure
                      smooth application deployment and operation
                    </li>
                    <li>
                      Consistently achieving high performance ratings, with a
                      current score of 4.32/5
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="md:w-1/2 border-2 border-teal-950 rounded-2xl relative before:absolute before:content-[''] before:w-7 before:h-7 before:bg-teal-950 before:rounded-full before:-left-[2.5rem] before:top-10">
              <div className="m-2">
                <div className="card-header flex flex-col items-center">
                  <img
                    src="./images/qatros-logo.png"
                    alt="qatros logo"
                    className="w-40 h-32 object-cover"
                    height={96}
                  />
                  <h3 className="font-bold text-xl font-comic">
                    Frontend Web Engineer
                  </h3>
                  <h3 className="font-bold font-comic">
                    PT. QATROS TEKNOLOGI NUSANTARA
                  </h3>
                  <h4 className="font-bold !text-gray-500 font-comic">
                    Agust 2022 - December 2022
                  </h4>
                </div>
                <div className="mt-2 card-body">
                  <ul className="list-disc list-inside text-sm">
                    <li>
                      Developed of high-performance web applications utilizing
                      Nuxt.js, covering the application of core Vue.js concepts
                      such as Vue Router, Vuex, and data reactivity.
                    </li>
                    <li>
                      Developed website interface with booking system and
                      Midtrans payment integration.
                    </li>
                    <li>
                      Instrumental in building the Gompu application, applying
                      the Scrum method in a collaborative team environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
