
.. include:: defines.rst

========
Overview
========

.. contents::

------------
Requirements
------------

In order to make a game using friGame you will need an HTML document that includes in this order:

- frigame.css
- Depending on the backend, eventually the backend specific required files
- jQuery_ (Tested with versions 1.4.2 and 1.8.1)
- frigame.common.js (Common functions shared across all backends)
- The frigame backend specific file (frigame.dom.js, frigame.canvas.js, frigame.webgl.js)
- The game source files

In the HTML document there is also a div element, normally with id="playground", styled in order to have a fixed width
and height.

Example HTML document:

.. code-block:: html

    <!DOCTYPE html>
    <html>
        <head>
            <title>Example</title>

            <link rel="stylesheet" type="text/css" href="frigame.css" />
        </head>
        <body>
            <div id="playground" style="width: 700px; height: 250px; margin: 0; padding: 0"></div>

            <script type="text/javascript" src="jquery.js"></script>
            <script type="text/javascript" src="frigame.common.js"></script>
            <script type="text/javascript" src="frigame.canvas.js"></script>
            <script type="text/javascript" src="the_game.js"></script>
        </body>
    </html>



Backend specific requirements
=============================

DOM
---

The DOM backend relies on the Modernizr_ feature detection library (Tested with version 2.6.1) in order to provide
cross-browser compatibility.

If you want to build a custom version of Modernizr_, be sure to include the tests for:

- background-size
- opacity
- rgba()
- CSS 2D Transforms
- SVG
- Modernizr.prefixed()

For older browsers that do not support the `window.btoa`_ method, make sure to include the `base64.js`_ file too.

|canvas|
--------

The |canvas| backend has no specific dependencies, other than a browser supporting the |canvas| element, of course.

WebGL
-----

The WebGL backend requires the ``glMatrix.js`` file (the one included in the friGame distribution) to be included in the HTML document.

.. WARNING::

    The WebGL backend is higly experimental and it has not all the features found in the other backends.

