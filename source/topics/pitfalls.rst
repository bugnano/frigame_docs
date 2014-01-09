
.. include:: ../defines.rst

===============
Common pitfalls
===============

.. contents::

Animations and sounds have the same namespace
=============================================

Every resource managed by the :ref:`resource-manager`, including :ref:`animations` and :ref:`Sounds <sounds>`
are all in the same ``friGame.resources`` namespace, and for this reason their name must be unique.

For example a sound cannot have the same name of an animation.

It is recommended to prefix the sound names, for example with the ``snd`` prefix, in order to avoid conflicts.

**Example**::

    friGame.resourceManager
        .addAnimation('powerdown', [IMAGE_PATH, 'tiles.png'].join('/'), {
            frameWidth: 16,
            frameHeight: 16,
            offsetx: 112,
            offsety: 96
        })
        .addSound('sndPowerdown', [
            [SOUND_PATH, 'powerdown.ogg'].join('/'),
            [SOUND_PATH, 'powerdown.mp3'].join('/'),
            [SOUND_PATH, 'powerdown.wav'].join('/')
        ])
    ;



Beware of the callbacks return value when using CoffeeScript
============================================================

When a function has no explicit ``return`` statement in JavaScript, the value returned from the function is **undefined**, which is falsy.

The callback functions registered with :func:`registerCallback <sprite.registerCallback>` are called as long as their return value is |falsy|, so
a callback function can safely omit the ``return`` statement in JavaScript.

In CoffeeScript_ however, when omitting the ``return`` statement, the function implicitly returns the result of the last expression in the function,
whose value is no longer guaranteed to be |falsy|, which results in the callback function being called only once, and then immediately removed from
the callback queue.

**Example**:

.. code-block:: coffeescript

    friGame.playground().registerCallback(() ->
        friGame.sprites.player.move({
            centerx: friGame.sprites.player.centerx + friGame.sprites.player.userData.speed
        })

        # The explicit return statement here is needed, because if omitted, CoffeeScript would
        # automatically return the result of the last expression, which is not falsy, resulting
        # in the callback not being called anymore
        return
    )

