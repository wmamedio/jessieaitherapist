export function lazyLoad(node) {
    const observer = new IntersectionObserver(entries => {
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
    
    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
