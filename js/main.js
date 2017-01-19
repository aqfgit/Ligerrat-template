( function() {
	var button = document.querySelector( '.nav-toggler' );
	
	button.addEventListener( 'click', function( evt ) {
		var hasBeenRotaded = button.style.transform === 'rotate(90deg)';
		if (hasBeenRotaded) {
			button.style.transform = 'rotate(180deg)';
		} else {
			button.style.transform = 'rotate(90deg)';
		}
		
		var nav = document.querySelector( 'nav' );
		nav.classList.toggle( 'nav-open' );
		button.setAttribute( 'aria-expanded', String( nav.classList.contains( 'nav-open' ) ) );
	}, false );


	var arrow = document.querySelector('.go-top');

	window.addEventListener('scroll', function( evt ) {
		if ( pageYOffset < 150 ) {
			arrow.style.opacity = 0;
			arrow.style.pointerEvents = 'none';
		} else {
			arrow.style.opacity = '.5';
			arrow.style.pointerEvents = 'auto';
		}
	}, false);

	arrow.addEventListener('mouseenter', function( evt ) { arrow.style.opacity = '1' }, false);
	arrow.addEventListener('mouseleave', function( evt ) { arrow.style.opacity = '0.5' }, false);

		var scroll;
		var i = 0;
		function goTop() {
			if ( pageYOffset === 0 ) {
				i = 0;
				window.clearInterval( scroll );
				return;
			}
			i++;
			window.scrollTo( 0, pageYOffset - i )
		}

	arrow.addEventListener( 'click', function( evt ) {
		window.clearInterval( scroll );
		scroll = window.setInterval( goTop,  10  );
	}, false );

}() );