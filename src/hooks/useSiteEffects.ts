import { useEffect } from 'react';

type UseSiteEffectsProps = {
  setActiveSection: (sectionId: string) => void;
  email: string;
  copiedEmailText: string;
};

const scheduleIdle = (callback: () => void, timeout = 900): (() => void) => {
  const win = window as Window & {
    requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };

  if (typeof win.requestIdleCallback === 'function') {
    const idleId = win.requestIdleCallback(() => {
      callback();
    }, { timeout });

    return () => {
      win.cancelIdleCallback?.(idleId);
    };
  }

  const timeoutId = window.setTimeout(callback, Math.min(timeout, 300));

  return () => {
    window.clearTimeout(timeoutId);
  };
};

export const useSiteEffects = ({
  setActiveSection,
  email,
  copiedEmailText
}: UseSiteEffectsProps): void => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) {
      return;
    }

    let scrolled = window.scrollY > 50;
    let rafId = 0;
    let ticking = false;

    const updateNavbar = () => {
      const y = window.scrollY;
      const nextScrolled = y > 50;

      if (nextScrolled !== scrolled) {
        navbar.classList.toggle('nav-scrolled', nextScrolled);
        scrolled = nextScrolled;
      }

      ticking = false;
    };

    const onScrollNav = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      rafId = window.requestAnimationFrame(updateNavbar);
    };

    updateNavbar();
    window.addEventListener('scroll', onScrollNav, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollNav);
      window.cancelAnimationFrame(rafId);
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
    if (!bar) {
      return;
    }

    let rafId = 0;
    let ticking = false;

    const updateProgress = () => {
      const height = document.body.scrollHeight - window.innerHeight;
      const pct = height > 0 ? window.scrollY / height : 0;
      bar.style.transform = `scaleX(${Math.min(Math.max(pct, 0), 1)})`;
      ticking = false;
    };

    const onScrollProgress = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight) {
      return;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      spotlight.style.opacity = '0';
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rafId = 0;
    const halfWidth = spotlight.clientWidth / 2;
    const halfHeight = spotlight.clientHeight / 2;

    const onMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        spotlight.style.transform = `translate3d(${x - halfWidth}px, ${y - halfHeight}px, 0)`;
        rafId = 0;
      });
    };

    const cancelIdle = scheduleIdle(() => {
      document.addEventListener('mousemove', onMouseMove, { passive: true });
    }, 700);

    return () => {
      cancelIdle();
      document.removeEventListener('mousemove', onMouseMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const nav = navigator as Navigator & { deviceMemory?: number };
    const isLowPowerDevice = nav.hardwareConcurrency <= 4 || (nav.deviceMemory ?? 8) <= 4;
    let cleanup: (() => void) | undefined;

    const cancelIdle = scheduleIdle(() => {
      const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
      if (!canvas) {
        return;
      }

      const context = canvas.getContext('2d');
      if (!context) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, isLowPowerDevice ? 1 : 1.25);
      let width = window.innerWidth;
      let height = window.innerHeight;
      const dotsCount = isLowPowerDevice ? 24 : width < 960 ? 34 : 46;
      const linkDistanceSquared = width < 960 ? 7800 : 11000;

      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      resize();
      window.addEventListener('resize', resize, { passive: true });

      const dots = Array.from({ length: dotsCount }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00022,
        vy: (Math.random() - 0.5) * 0.00022,
        r: Math.random() * 1.3 + 0.4,
        a: Math.random() * 0.28 + 0.07
      }));

      let frameId = 0;
      let running = false;

      const draw = () => {
        if (!running) {
          return;
        }

        context.clearRect(0, 0, width, height);

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

            if (d2 < linkDistanceSquared) {
              context.beginPath();
              context.moveTo(dots[i].x * width, dots[i].y * height);
              context.lineTo(dots[j].x * width, dots[j].y * height);
              context.strokeStyle = `rgba(100,255,218,${0.065 * (1 - d2 / linkDistanceSquared)})`;
              context.lineWidth = 0.5;
              context.stroke();
            }
          }
        }

        frameId = window.requestAnimationFrame(draw);
      };

      const start = () => {
        if (running) {
          return;
        }

        running = true;
        frameId = window.requestAnimationFrame(draw);
      };

      const stop = () => {
        running = false;
        window.cancelAnimationFrame(frameId);
      };

      const onVisibilityChange = () => {
        if (document.hidden) {
          stop();
        } else {
          start();
        }
      };

      document.addEventListener('visibilitychange', onVisibilityChange);
      onVisibilityChange();

      cleanup = () => {
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        stop();
      };
    }, 1200);

    return () => {
      cancelIdle();
      cleanup?.();
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
