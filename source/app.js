(function() {
  	if (!window.addEventListener) return;
  
 	var options = INSTALL_OPTIONS;
 	var guide_key = options.guide_key;
	var location = options.location;
 	
	if (!guide_key) return;
	if (!location || !location.selector) return;
	
	function updateElement () {
	  	var element = INSTALL.createElement(location);
		element.innerHTML = '<a href="http://userdeck.com" id="ud-guides">Customer Support Software</a>';

	    if (!element || !element.parentNode) return;
	    
	    var s = document.createElement('script');
	    s.type = 'text/javascript';
	    // s.async = true;
	    s.src = '//widgets.userdeck.com/guides.js';
	    s.onload = function() {
	    	UserDeck.factory('guides', {
				key: guide_key,
				el: element
			});
	    };
	    
	    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
  	}
  
  if (document.readyState == 'loading') {
    window.addEventListener('DOMContentLoaded', updateElement);
  } else {
    updateElement();
  }
})();
