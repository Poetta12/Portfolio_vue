/*
	Anchor-Smooth (by Frédéric S., aka Craspouille).
	© Code Phénix
*/
// let cl = console.log;
(function() {	
	let toTop = _ => {
		let toTopSite = document.querySelector('[data-smooth="page-top"]');
		Object.assign(toTopSite.style, {
				'position': 'fixed',
				'right': '1em',
				'bottom': '0',
				'width': '50px',
				'cursor': 'pointer',
				'visibility': 'hidden',
				'z-index': '150',
				'transition': '.5s linear'
			}
		)
		Object.assign(toTopSite.firstElementChild.style, {
				"width": "100%",
				'height': "100px"
			}
		)
		toTopSite.style.right = "-20vw";
		if (document.documentElement.scrollTop < 50) {
			toTopSite.style.right = "-20vw";
		}
		if (document.documentElement.scrollTop > 250) {
			toTopSite.style.right = "2vw";
			toTopSite.style.visibility = "visible"
		}
		if (document.documentElement.scrollTop > 250 && window.screen.width >= 1800) {
			toTopSite.style.right = "12vw";
			toTopSite.style.visibility = "visible"
		}
	}
	let anchorSmooth = _ => {
		let smoothLinks = document.querySelectorAll('[data-smooth]');
		window.addEventListener('scroll', toTop);
		for (const smoothLink of smoothLinks) {
			smoothLink.addEventListener('click', function(e) {
				e.preventDefault();
				const anchorYOffset = this.dataset.offsetY;
				// == this.getAttribute('data-offset-y');  // Changer de valeur pour déplacer la zone de fixation de l'ancre
				const anchor = this.dataset.smooth; ; // == this.getAttribute('data-smooth');
				let anchorTarget = document.querySelectorAll('[id]');
				// cl(anchorYOffset)
				for (const anchorSearch of anchorTarget) {
					if (anchorSearch.id == anchor) {
						let y = anchorSearch.getBoundingClientRect().top + window.pageYOffset + Number(anchorYOffset);
						window.scrollTo({top: y, behavior: 'smooth'});
					}
				}
			})
		}
	}
	anchorSmooth();
})();

