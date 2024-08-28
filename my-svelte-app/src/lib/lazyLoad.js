export function lazyLoad(node) {
    let observer;

    function setupObserver() {
        if (observer) observer.disconnect();

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    const src = image.getAttribute('data-src');
                    if (src) {
                        image.src = src;
                        image.classList.remove('lazy');
                    }
                    observer.unobserve(image);
                }
            });
        });
        
        observer.observe(node);
    }

    setupObserver();

    return {
        update() {
            setupObserver();
        },
        destroy() {
            if (observer) observer.disconnect();
        }
    };
}