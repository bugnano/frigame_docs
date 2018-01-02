
.. include:: ../defines.rst

=================
Deploying friGame
=================

.. contents::

Development vs Production
=========================

It is always better to separate the development environment from the production environment.

In the development environment it is better to use the DOM backend as it is easier to debug some parts of the game by simply looking
at the document structure. All the source files can be included with a <script> tag for every single file.

In production however, there are different approaches:

- If you are satisfied with the performance of the DOM backend you can minify base64.js, frigame.common.js and frigame.dom.js in a single file, and use only that file in the html page
- If you are sure that every user of the game will have a browser that supports canvas you can minify frigame.common.js and frigame.canvas.js in a single file, and use only that file in the html page
- If you want to have your users benefit from the performance of canvas, and fallback to the DOM otherwise, you can use a modular approach by using yepnope_ or jQuery_

Minifying the files into a single one
=====================================

There are various JavaScript minifiers available, for example you can use UglifyJS_ from the command line like this:

.. code-block:: bash

    uglifyjs -cmo frigame.min.js frigame.common.js frigame.canvas.js

and then simply include the frigame.min.js file in your html document.

Modular approach using yepnope
==============================

If you want to use yepnope_ (version 1.5.4, as version 2.0.0 has a completely different API),
you can include in your html file only the following files:

- Modernizr
- yepnope
- jQuery
- frigame.common.js
- a loader script

The loader script will then check browser support for canvas and Base64 and will load the various scripts accordingly like this::

    function backendLoaded() {
        // This function is called when the rendering backend has been loaded
        // Here the remaining plugins and the core game files can be loaded
    }

    yepnope({
        // If the browser has canvas support, use the canvas backend
        test: Modernizr.canvas,
        yep: 'frigame.canvas.js',
        complete: function() {
            if (Modernizr.canvas) {
                // The browser has canvas support and the backend is loaded
                backendLoaded();
            } else {
                // The browser has no canvas support, but before loading the DOM backend the
                // window.btoa function must be available
                yepnope({
                    test: window.btoa,
                    nope: 'base64.js',
                    complete: function() {
                        yepnope({
                            load: 'frigame.dom.js',
                            complete: backendLoaded
                        });
                    }
                });
            }
        }
    });

Modular approach using jQuery
=============================

As yepnope_ has been deprecated, the loader script can use the ``jQuery.getScript`` function instead::

    function backendLoaded() {
        // This function is called when the rendering backend has been loaded
        // Here the remaining plugins and the core game files can be loaded
    }

    if (Modernizr.canvas) {
        // If the browser has canvas support, use the canvas backend
        $.getScript('frigame.canvas.js')
            .then(backendLoaded);
    } else {
        // The browser has no canvas support, but before loading the DOM backend the
        // window.btoa function must be available
        if (!window.btoa) {
            $.getScript('base64.js')
                .then(function () {
                    return $.getScript('frigame.dom.js');
                })
                .then(backendLoaded);
        } else {
            $.getScript('frigame.dom.js')
                .then(backendLoaded);
        }
    }

