const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu_btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation_close_btn')
const blurOverlay = document.querySelector('.blur_overlay')
const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')

	// Reinitialize fullpage.js to ensure proper behavior
	initializeFullpage();
	// Prevent scroll to the first section
	if (fullpage_api && !navigation.classList.contains(IS_ACTIVE)) {
	fullpage_api.moveTo(fullpage_api.getActiveSection().index + 1);
	}
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
	licenseKey: 'YOUR_LICENSE_KEY'
})

const initializeFullpage = () => {
	if (typeof fullpage_api !== 'undefined') {
		fullpage_api.destroy('all');
	}
	new fullpage('#fullpage', {
		autoScrolling: true,
		scrollBar: true,
	});
};


  

  

  


