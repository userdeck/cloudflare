(function() {
  	'use strict'
  
  	if (!window.addEventListener) return;
  
 	var options = INSTALL_OPTIONS;
 	var guide_key = options.guide_key;
	var location = options.location;
	
	// console.log('here');
	// console.log(options);
 	
	if (!guide_key) return;
	if (!location || !location.selector) return;
  
  	var el = INSTALL.createElement(location);
	el.innerHTML = '<a href="http://userdeck.com" id="ud-guides">Customer Support Software</a>';
	
	// console.log(el);
	
	function updateElement () {
		UserDeck.factory('guides', {
			key: guide_key,
			el: el
		});
  	}
  
  if (document.readyState == 'loading') {
    window.addEventListener('DOMContentLoaded', updateElement)
  } else {
    // updateElement()
  }
})();
