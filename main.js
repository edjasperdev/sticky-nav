(function(){
	const nav = document.querySelector('#main'),
				topOfNav = nav.offsetTop,
				body = document.body;
	console.log(nav)

	function fixNav(){
		console.log(topOfNav, window.scrollY)
		if(topOfNav < window.scrollY){
			body.style.paddingTop = nav.offsetHeight + 'px';
			body.classList.add('fixed-nav')
		} else{
			body.style.paddingTop = 0;
			body.classList.remove('fixed-nav')
		}
	}

	window.addEventListener('scroll', fixNav)





















})()