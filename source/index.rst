
.. include:: defines.rst

About friGame
=============

friGame is a game development library in JavaScript/`jQuery`_. It allows to create 2D games that run in any modern web browser
without having to rely on external plugins such as Flash_.

It started as a porting of the excellent gameQuery_ library by Selim Arsever in order to use the |canvas| element, but
it has developed since then its own set of unique features.

gameQuery_ Copyright (c) 2008-2012 Selim Arsever, licensed under the MIT

friGame Copyright (c) 2011-2012 Franco Bugnano, licensed under the MIT



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
- Sound support using HTML5 Audio where available, with optional fallback to Flash
- Optional keyboard and mouse state polling

