import type { CSSProperties } from 'react';

type LoaderProps = {
  done: boolean;
};

export const Loader = ({ done }: LoaderProps) => (
  <div id="loader" className={done ? 'done' : ''}>
    <div className="l-box">
      <div className="l-line" style={{ '--d': '0.1s' } as CSSProperties}>
        <span className="t-tag">&lt;Portfolio</span>
      </div>
      <div className="l-line" style={{ '--d': '0.45s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">name</span>
        <span className="t-eq">=</span>
        <span className="t-str">
          "
          <a
            href="https://linkedin.com/in/ashot-simonyan"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'inherit',
            }}
          >
            Ashot Simonyan
          </a>
          "
        </span>
      </div>
      <div className="l-line" style={{ '--d': '0.8s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">role</span>
        <span className="t-eq">=</span>
        <span className="t-str">"Sr. Front-End Eng."</span>
      </div>
      <div className="l-line" style={{ '--d': '1.15s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">stack</span>
        <span className="t-eq">=</span>
        <span className="t-str">['React','TS','Next.js']</span>
      </div>
      <div className="l-line" style={{ '--d': '1.5s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">status</span>
        <span className="t-eq">=</span>
        <span className="t-str">"open-to-work"</span>
      </div>
      <div className="l-line" style={{ '--d': '1.85s' } as CSSProperties}>
        <span className="t-tag">/&gt;</span>
        <span className="l-cursor"></span>
      </div>
    </div>
  </div>
);