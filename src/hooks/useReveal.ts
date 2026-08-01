import { useEffect } from 'react';

export function useReveal(routeKey: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const observeElements = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches('[data-reveal]')) {
        observer.observe(root);
      }
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => observer.observe(element));
    };

    observeElements(document);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observeElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [routeKey]);
}
