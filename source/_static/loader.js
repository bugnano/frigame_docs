/*global Modernizr */
/*jslint white: true, browser: true */

(function () {
	'use strict';

	function backendLoaded() {
		// This function is called when the rendering backend has been loaded
		// Here the remaining plugins and the core game files can be loaded
		Modernizr.load(['_static/frigame.tile.min.js', '_static/game.min.js']);
	}

	Modernizr.load({
		load: '_static/frigame.common.min.js',
		complete: function() {
			Modernizr.load({
				// If the browser has canvas support, use the canvas backend
				test: Modernizr.canvas,
				yep: '_static/frigame.canvas.min.js',
				complete: function() {
					if (Modernizr.canvas) {
						// The browser has canvas support and the backend is loaded
						backendLoaded();
					} else {
						// The browser has no canvas support, but before loading the DOM backend the
						// window.btoa function must be available
						Modernizr.load({
							test: window.btoa,
							nope: '_static/base64.min.js',
							complete: function() {
								Modernizr.load({
									load: '_static/frigame.dom.min.js',
									complete: backendLoaded
								});
							}
						});
					}
				}
			});
		}
	});
}());

