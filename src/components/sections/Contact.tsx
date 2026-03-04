import type { ContactCard, SiteData } from '@/types';

type ContactProps = {
  data: SiteData;
};

const cardIcon = (icon: ContactCard['icon']) => {
  if (icon === 'email') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }

  if (icon === 'phone') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
};

export const Contact = ({ data }: ContactProps) => (
  <section id="contact">
    <p className="contact-pre fade">{data.copy.contact.eyebrow}</p>
    <h2 className="contact-title fade">{data.copy.contact.title}</h2>
    <p className="contact-text fade">{data.copy.contact.description}</p>
    <a href={`mailto:${data.email}`} className="btn-outline fade" id="say-hello-button">
      {data.copy.contact.ctaLabel}
    </a>

    <div className="contact-cards fade">
      {data.contactCards.map((card) => (
        <a
          key={card.label}
          href={card.href}
          className="contact-card"
          target={card.external ? '_blank' : undefined}
          rel={card.external ? 'noreferrer' : undefined}
        >
          <div className="cc-icon">{cardIcon(card.icon)}</div>
          <div className="cc-text">
            <span className="cc-label">{card.label}</span>
            <span className="cc-value">{card.value}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);
