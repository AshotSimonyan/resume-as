import { useEffect } from 'react';

type UseSiteEffectsProps = {
  setActiveSection: (sectionId: string) => void;
  email: string;
  copiedEmailText: string;
};

export const useSiteEffects = ({
  setActiveSection,
  email,
  copiedEmailText
}: UseSiteEffectsProps): void => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    let prevY = 0;

    const onScrollNav = () => {
      if (!navbar) {
        return;
      }

      const y = window.scrollY;
      navbar.style.transform = y > prevY && y > 100 ? 'translateY(-100%)' : 'translateY(0)';
      navbar.style.boxShadow = y > 50 ? '0 10px 30px -10px rgba(2,12,27,.7)' : 'none';
      prevY = y;
    };

    window.addEventListener('scroll', onScrollNav, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollNav);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade').forEach((element) => {
      if ((element as HTMLElement).closest('#home')) {
        return;
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [setActiveSection]);

  useEffect(() => {
    const bar = document.getElementById('scroll-bar');

    const onScrollProgress = () => {
      if (!bar) {
        return;
      }

      const height = document.body.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (window.scrollY / height) * 100 : 0;
      bar.style.width = `${Math.min(pct, 100)}%`;
    };

    onScrollProgress();
    window.addEventListener('scroll', onScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);

  useEffect(() => {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight) {
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rafId = 0;

    const onMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;
        rafId = 0;
      });
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00022,
      vy: (Math.random() - 0.5) * 0.00022,
      r: Math.random() * 1.3 + 0.4,
      a: Math.random() * 0.28 + 0.07
    }));

    let frameId = 0;

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      dots.forEach((dot) => {
        dot.x = (dot.x + dot.vx + 1) % 1;
        dot.y = (dot.y + dot.vy + 1) % 1;

        context.beginPath();
        context.arc(dot.x * width, dot.y * height, dot.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(100,255,218,${dot.a})`;
        context.fill();
      });

      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const dx = (dots[i].x - dots[j].x) * width;
          const dy = (dots[i].y - dots[j].y) * height;
          const d2 = dx * dx + dy * dy;

          if (d2 < 12000) {
            context.beginPath();
            context.moveTo(dots[i].x * width, dots[i].y * height);
            context.lineTo(dots[j].x * width, dots[j].y * height);
            context.strokeStyle = `rgba(100,255,218,${0.065 * (1 - d2 / 12000)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
      }

      frameId = window.requestAnimationFrame(draw);
    };

    frameId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const subtitle = document.querySelector('.hero-sub');
    if (!subtitle || subtitle.getAttribute('data-typed') === 'true') {
      return;
    }

    const text = subtitle.textContent?.trim() ?? '';
    subtitle.textContent = '';
    subtitle.setAttribute('data-typed', 'true');

    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    subtitle.appendChild(cursor);

    let index = 0;
    let timeoutId = 0;

    const typeNext = () => {
      if (index >= text.length) {
        return;
      }

      subtitle.insertBefore(document.createTextNode(text[index]), cursor);
      index += 1;
      timeoutId = window.setTimeout(typeNext, 52 + Math.random() * 36);
    };

    timeoutId = window.setTimeout(typeNext, 1050);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const emailLinks = document.querySelectorAll<HTMLAnchorElement>('.sidebar-email-link');

    const onEmailClick = (event: MouseEvent) => {
      if (event.ctrlKey || event.metaKey) {
        return;
      }

      event.preventDefault();

      navigator.clipboard?.writeText(email).then(() => {
        const toast = document.createElement('div');
        toast.textContent = copiedEmailText;
        toast.style.cssText = `position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
          background:var(--bg-light);color:var(--accent);border:1px solid var(--accent);
          font-family:var(--mono);font-size:13px;padding:10px 20px;border-radius:4px;
          z-index:9999;opacity:0;transition:opacity 0.3s;box-shadow:0 4px 20px rgba(100,255,218,0.15);`;

        document.body.appendChild(toast);

        window.requestAnimationFrame(() => {
          toast.style.opacity = '1';
        });

        window.setTimeout(() => {
          toast.style.opacity = '0';
          window.setTimeout(() => {
            toast.remove();
          }, 300);
        }, 2200);
      });
    };

    emailLinks.forEach((link) => {
      link.addEventListener('click', onEmailClick);
    });

    const sayHello = document.querySelector('#say-hello-button') as HTMLElement | null;

    const onSayHelloClick = () => {
      if (!sayHello) {
        return;
      }

      const rect = sayHello.getBoundingClientRect();
      for (let i = 0; i < 10; i += 1) {
        const dot = document.createElement('div');
        const angle = (i / 10) * Math.PI * 2;
        const distance = 40 + Math.random() * 30;

        dot.style.cssText = `position:fixed;width:4px;height:4px;border-radius:50%;
          background:var(--accent);pointer-events:none;z-index:9999;
          transition:transform 0.5s ease,opacity 0.5s ease;`;
        dot.style.left = `${rect.left + rect.width / 2}px`;
        dot.style.top = `${rect.top + rect.height / 2}px`;

        document.body.appendChild(dot);

        window.requestAnimationFrame(() => {
          dot.style.transform = `translate(${Math.cos(angle) * distance}px,${Math.sin(angle) * distance}px) scale(0)`;
          dot.style.opacity = '0';
        });

        window.setTimeout(() => {
          dot.remove();
        }, 550);
      }
    };

    sayHello?.addEventListener('click', onSayHelloClick);

    return () => {
      emailLinks.forEach((link) => {
        link.removeEventListener('click', onEmailClick);
      });

      sayHello?.removeEventListener('click', onSayHelloClick);
    };
  }, [copiedEmailText, email]);
};
