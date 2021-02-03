
.. include:: defines.rst

About friGame
=============

friGame is a game development library in JavaScript written by Franco Bugnano. It allows creating 2D games that run in any modern web browser
without having to rely on external plugins such as Flash_.

It started as a porting of the excellent gameQuery_ library by Selim Arsever in order to use the |canvas| element, but
it has developed since then its own set of unique features.

gameQuery_ Copyright (c) 2008-2013 Selim Arsever, licensed under the MIT

friGame Copyright (c) 2011-2021 Franco Bugnano, licensed under the MIT

Contribution / Contact information
----------------------------------

friGame development is hosted on GitHub_. If you find a bug, please use the `issue tracker`_.

If you have any questions regarding the usage of friGame, feel free to ask a question on StackExchange_ using the tag ``frigame``.

If you want to submit a game, or for any other kind of question, suggestion, or comment, you can send me an email at the address: info@frigame.org

.. raw:: html

    <link href="_static/shariff/shariff.complete.css" rel="stylesheet">
    <script src="_static/shariff/shariff.min.js"></script>
    <div class="social-container">
        <div class="shariff" data-lang="en" data-services="[&quot;twitter&quot;]" data-title="Checking out this JavaScript game development library" data-twitter-via="friGame"></div>
        <div class="twitter-follow">
            <a href="https://twitter.com/intent/follow?screen_name=friGame" data-rel="popup" rel="nofollow" title="Follow on Twitter" role="button" aria-label="Follow on Twitter">
                <span class="fab fa-twitter"></span>
                <span class="share_text">follow @friGame</span>
            </a>
        </div>
    </div>



What it can do
==============

.. raw:: html

    <div id="playground" style="position: relative; width: 512px; height: 448px; margin-left: auto; margin-right: auto"></div>
    <script src="_static/modernizr.min.js"></script>
    <script src="_static/loader.js"></script>



Goals and Features
==================

Goals
-----

- :Fast: friGame has been developed in order to be fast while maintaining an easy to use API
- :Modular: Add features to your game by simply including the modules you need
- :Canvas or DOM rendering: The same feature set is available in either the |canvas| or DOM backend, and selecting a backend is only a matter of including the appropriate file
- :Compatible: By using only standard web technologies friGame is compatible with any modern mobile or desktop browser, including IE6 (No PNG alpha support) or IE7, without requiring any external plugin

Features
--------

- Sprites with animations, movement, collision detection, callbacks, transforms
- Sprite layers (grouping) with optional background image or gradient
- Extensible resource manager
- Sound support using Web Audio API and HTML5 Audio where available, with optional fallback to Flash
- Extensible tweening for sprite and sound properties
- Optional keyboard and mouse state polling

