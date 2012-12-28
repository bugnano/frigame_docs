
.. include:: defines.rst

========
Overview
========

.. contents::

Requirements
============

In order to make a game using friGame you will need an HTML document that includes in this order:

- jQuery_ (Tested with versions 1.4.2 and 1.8.1)
- frigame.common.js (Common functions shared across all backends)
- The frigame backend specific file (frigame.dom.js, frigame.canvas.js, frigame.webgl.js)
- The game source files

.. NOTE::

    When using the WebGL backend, the glMatrix.js file must be included before including the frigame.webgl.js file.

In the HTML document there is also a div element with id="playground" styled in order to have a fixed width
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
            <script type="text/javascript" src="frigame.dom.js"></script>
            <script type="text/javascript" src="the_game.js"></script>
        </body>
    </html>

