import type { SiteData } from '@/types';

type ProjectsProps = {
  data: SiteData;
};

export const Projects = ({ data }: ProjectsProps) => (
  <section id="projects">
    <h2 className="section-heading fade" data-n={data.copy.projects.number}>
      {data.copy.projects.title}
    </h2>

    <div className="proj-list">
      {data.featuredProjects.map((project) => (
        <article className="proj-item fade" key={project.number}>
          <div className="proj-number">{project.number}</div>
          <div className="proj-body">
            <div className="proj-meta">
              <span className="proj-company">{project.company}</span>
              <span className="proj-year">{project.year}</span>
            </div>
            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-desc" dangerouslySetInnerHTML={{ __html: project.description }} />
            <ul className="proj-tech">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="proj-links">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" className="proj-link" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
              ) : null}

              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" className="proj-link" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Site
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
