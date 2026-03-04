import type { CSSProperties } from 'react';

import type { LoaderCopy } from '@/types';

type LoaderProps = {
  done: boolean;
  copy: LoaderCopy;
};

export const Loader = ({ done, copy }: LoaderProps) => (
  <div id="loader" className={done ? 'done' : ''}>
    <div className="l-box">
      <div className="l-line" style={{ '--d': '0.1s' } as CSSProperties}>
        <span className="t-tag">{copy.openTag}</span>
      </div>
      <div className="l-line" style={{ '--d': '0.45s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">{copy.nameLabel}</span>
        <span className="t-eq">=</span>
        <span className="t-str">
          "
          <a href={copy.nameUrl} target="_blank" rel="noreferrer" className="loader-link">
            {copy.nameValue}
          </a>
          "
        </span>
      </div>
      <div className="l-line" style={{ '--d': '0.8s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">{copy.roleLabel}</span>
        <span className="t-eq">=</span>
        <span className="t-str">"{copy.roleValue}"</span>
      </div>
      <div className="l-line" style={{ '--d': '1.15s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">{copy.stackLabel}</span>
        <span className="t-eq">=</span>
        <span className="t-str">{copy.stackValue}</span>
      </div>
      <div className="l-line" style={{ '--d': '1.5s' } as CSSProperties}>
        {'  '}
        <span className="t-attr">{copy.statusLabel}</span>
        <span className="t-eq">=</span>
        <span className="t-str">"{copy.statusValue}"</span>
      </div>
      <div className="l-line" style={{ '--d': '1.85s' } as CSSProperties}>
        <span className="t-tag">{copy.closeTag}</span>
        <span className="l-cursor"></span>
      </div>
    </div>
  </div>
);
