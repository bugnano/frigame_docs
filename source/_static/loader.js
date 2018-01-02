/*global Modernizr, jQuery */
/*jshint bitwise: true, curly: true, eqeqeq: true, esversion: 3, forin: true, freeze: true, funcscope: true, futurehostile: true, iterator: true, latedef: true, noarg: true, nocomma: true, nonbsp: true, nonew: true, notypeof: false, shadow: outer, singleGroups: false, strict: true, undef: true, unused: true, varstmt: false, eqnull: false, plusplus: true, browser: true, laxbreak: true, laxcomma: true */

(function ($) {
	'use strict';

	function backendLoaded() {
		// This function is called when the rendering backend has been loaded
		// Here the remaining plugins and the core game files can be loaded
		return $.getScript('_static/frigame.tile.min.js')
			.then(function () {
				return $.getScript('_static/game.min.js');
			});
	}

	$.getScript('_static/frigame.common.min.js')
		.then(function () {
			if (Modernizr.canvas) {
				// The browser has canvas support and the backend is loaded
				return $.getScript('_static/frigame.canvas.min.js')
					.then(backendLoaded);
			} else {
				// The browser has no canvas support, but before loading the DOM backend the
				// window.btoa function must be available
				if (!window.btoa) {
					return $.getScript('_static/base64.min.js')
						.then(function () {
							return $.getScript('_static/frigame.dom.min.js');
						})
						.then(backendLoaded);
				} else {
					return $.getScript('_static/frigame.dom.min.js')
						.then(backendLoaded);
				}
			}
		});
}(jQuery));

