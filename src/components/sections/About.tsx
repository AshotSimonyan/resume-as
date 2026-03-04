import { classNames } from '@/helpers/classNames';
import type { SiteData } from '@/types';

type AboutProps = {
  data: SiteData;
};

export const About = ({ data }: AboutProps) => (
  <section id="about">
    <h2 className="section-heading fade" data-n={data.copy.about.number}>
      {data.copy.about.title}
    </h2>

    <div className="about-grid">
      <div className="about-text fade">
        {data.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}

        <p className="skills-label">{data.copy.skillsLabel}</p>
        <div className="skills-grid">
          {data.skills.map((skill) => (
            <div className="skill-chip" key={skill.name}>
              <div className="skill-logo-wrap">
                <img
                  className={classNames('skill-logo', skill.invert && 'skill-logo-invert')}
                  src={skill.logoUrl}
                  alt={skill.name}
                  loading="lazy"
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
            alt={data.name}
            className="profile-image"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width={831}
            height={960}
          />
        </div>
      </div>
    </div>
  </section>
);
