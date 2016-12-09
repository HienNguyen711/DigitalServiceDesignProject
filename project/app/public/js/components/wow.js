// Wow
var Wow = function() {
    "use strict";

    // Handle Wow
    var handleWow = function() {
        var wow = new WOW({
		    boxClass:     'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,      // trigger animations on mobile devices (true is default)
		    tablet:       true ,      // trigger animations on tablet devices (true is default)
            live:         true      // act on asynchronously loaded content (default is true)
		});
		wow.init();
    }

    return {
        init: function() {
            handleWow(); // initial setup for counter
        }
    }
}();

$(document).ready(function() {
    Wow.init();
});

