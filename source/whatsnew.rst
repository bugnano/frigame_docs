
.. include:: defines.rst

==========
What's new
==========



Version 2.2.0
=============

Features added
--------------

- Removed the jQuery_ dependency for all but the DOM backend
- Implemented the **frigame.domready.js** plugin that provides the :func:`friGame.ready <friGame.ready>` function
- A previuosly created |canvas| element can be passed as the **parentDOM** to the :func:`playground <friGame.playground>` function
- Various speed improvements
- Sprites and sprite groups now have a :func:`getAbsRect <sprite.getAbsRect>` function, that can be used to check for collisions for sprites that belong to different sprite groups
- Sprite groups can have a :func:`border <group.setBorder>`, and rounded corners
- Implemented the **frameset** parameter for :func:`animations <friGame.resourceManager.addAnimation>`
- Implemented the :func:`forceRedraw <friGame.forceRedraw>` function
- The :doc:`Sound Plugin <api_reference/sound>` now supports the Ogg/Opus and mp4/aac audio formats
- Implemented the :func:`friGame.delay <friGame.delay>` function in the :doc:`Tweening Plugin <api_reference/fx>`

Incompatible changes
--------------------

- The :func:`playgroundCallback <friGame.playgroundCallback>` no longer takes a jQuery_ object as a parameter, but a native DOM element instead
- The :doc:`Sound Plugin <api_reference/sound>` now depends on the **frigame.domready.js** plugin
- When removing a sprite using the :func:`remove <sprite.remove>` function, if its :attr:`userData <sprite.userData>` has a **remove()** method, it will be called automatically

Bugs fixed
----------

- Fixed audio muting on some implementations
- Fixed image preloading on some implementations



Version 2.1.1
=============

Features added
--------------

- Sprites and sprite groups now have a :func:`removeTween <sprite.removeTween>` and a :func:`clearTweens <sprite.clearTweens>` function, in order to remove a specific tweening, or all the tweenings registered with :func:`tween <sprite.tween>`.

Incompatible changes
--------------------

- The experimental absRect property for sprites and groups has been removed as it slowed down too much the rendering of the scene.

Bugs fixed
----------

- Fixed sloppy animation in the DOM renderer
- Don't retrigger the animation from the beginning when changing only the refresh rate in setAnimation
- Reset the callback and paused state when changing animations
- Calling the :func:`startGame <friGame.startGame>` and :func:`stopGame <friGame.stopGame>` functions from a callback registered with :func:`registerCallback <sprite.registerCallback>` did not work properly.



Version 2.1.0
=============

Features added
--------------

- The sprites and sprite groups now have an experimental absRect property, that can be used to check for collisions for sprites that belong to different sprite groups
- Sprites and sprite groups now have a :func:`removeCallback <sprite.removeCallback>` function, in order to remove a specific callback function registered with :func:`registerCallback <sprite.registerCallback>`.
- Only the sprites and sprite groups that are within the playground boundaries are drawn. This should increase performance in large games.
- friGame uses, and makes available the |performance_now|_ function even in older browsers.
- The **frigame.fx.js** plugin has been refactored, and it now introduces a generic :func:`tween <sprite.tween>` function in order to implement tweening for all the properties of sprites and sounds.
- The :doc:`Sound Plugin <api_reference/sound>` now uses the Web Audio API where available, with fallback to HTML5 Audio and Flash, as usual
- When using the :doc:`api_reference/fx` in conjunction with the :doc:`Sound Plugin <api_reference/sound>`, it is possible to fade the audio volume, by using the generic :func:`tween <sound.tween>` function.

Incompatible changes
--------------------

- Removed the **rate** argument from the :func:`startGame <friGame.startGame>` function. Changing the refresh rate had always been buggy, and it
  was never really used in any of the games that I'm aware of.
- The target refresh rate has been changed from 30 |FPS| to 60 |FPS|. Its value, expressed in milliseconds, can be found in the constant :attr:`friGame.REFRESH_RATE`,
  and it is recommended to use this constant, instead of assuming that the target refresh rate will always be 60 |FPS|.

Because of these changes, declaring a callback function, for example using :func:`registerCallback <sprite.registerCallback>`, without specifying the
**rate** argument, results in the callback function being called twice as fast as before.

- The :attr:`userData <sprite.userData>` attribute of sprites is now initialized to **null** instead of an empty object. Any code that assumed this attribute
  to be a valid object, must explicitly initialize it first.

Bugs fixed
----------

- Accept a scaling value of 0 for sprites
- When returning **true** from a callback registered with :func:`registerCallback <sprite.registerCallback>` in order to stop it, the wrong callback was removed from the queue.
- Allow calling the :func:`startGame <friGame.startGame>` function recursively, and allow calling :func:`stopGame <friGame.stopGame>` from the callback

