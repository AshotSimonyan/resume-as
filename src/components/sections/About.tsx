import type { SiteData } from '@/types';

type AboutProps = {
  data: SiteData;
};

export const About = ({ data }: AboutProps) => (
  <section id="about">
    <h2 className="section-heading fade" data-n="01. ">
      About Me
    </h2>

    <div className="about-grid">
      <div className="about-text fade">
        {data.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}

        <p className="skills-label">{'// tech stack'}</p>
        <div className="skills-grid">
          {data.skills.map((skill) => (
            <div className="skill-chip" key={skill.name}>
              <div className="skill-logo-wrap">
                <img
                  className="skill-logo"
                  src={skill.logoUrl}
                  alt={skill.name}
                  loading="lazy"
                  style={skill.invert ? { filter: 'invert(1) opacity(0.9)' } : undefined}
                />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="photo-wrap fade" style={{ transitionDelay: '.15s' }}>
        <div className="photo-box">
          <img
            src={data.profileImage}
            alt="Ashot Simonyan"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      </div>
    </div>
  </section>
);
