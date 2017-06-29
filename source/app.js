(function() {
    if (!window.addEventListener) return;
  
    var options = INSTALL_OPTIONS;
    var guide_key = options.guide_key;
    var location = options.location;
    var element;
    
    if (!guide_key) return;
    if (!location || !location.selector) return;
    
    function loadScript() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        // s.async = true;
        s.src = '//widgets.userdeck.com/guides.js';
        s.onload = function() {
            updateElement();
        };
        
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
    }
    
    function updateElement() {
        element = INSTALL.createElement(location, element);
        element.innerHTML = '<a href="http://userdeck.com" id="ud-guides">Customer Support Software</a>';

        if (!element || !element.parentNode) return;
        
        UserDeck.factory('guides', {
            key: guide_key,
            el: element
        });
    }
  
  if (document.readyState == 'loading') {
    window.addEventListener('DOMContentLoaded', loadScript);
  } else {
    loadScript();
  }
  
  window.INSTALL_SCOPE = {
    setOptions: function setOptions (nextOptions) {
      options = nextOptions;

      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        element = null;
      }

      updateElement();
    }
  }
})();
