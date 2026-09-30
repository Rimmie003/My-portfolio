const revealSections = document.querySelectorAll(".homepage-intro, .capabilities");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	revealSections.forEach((section) => {
		const revealItems = section.querySelectorAll("[data-reveal]");

		section.classList.add("is-reveal-ready");

		const revealObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15, rootMargin: "0px 0px -32px 0px" });

		revealItems.forEach((item) => revealObserver.observe(item));
	});
}
