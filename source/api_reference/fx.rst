
.. include:: ../defines.rst

===============
Tweening Plugin
===============

.. contents::

The **frigame.fx.js** file provides tweening functions to sprites and sprite groups.

It is recommended to include this plugin right after the renderer or the DOM Ready plugin, before any other plugin, so that
tweening can be made available to other plugins as well (for example enabling volume fading for sounds).



User API
========

.. function:: sprite.tween(properties[, options])

    This function allows to smoothly transition on any numeric sprite or sprite group property.

    .. versionadded:: 2.1.0

    :param properties: An object literal describing the target values
    :param options: An object literal

    :returns: The sprite object

    The supported **properties** are: `left`, `right`, `centerx`, `top`, `bottom`, `centery`, `width`,
    `height`, `halfWidth`, `halfHeight`, `radius`, `rotate`, `scale`, `scalex`, `scaley`, `opacity`.

    .. versionchanged:: 2.2.0
        For sprite groups, the following additional **properties** are supported:

        `borderRadius`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`, `borderWidth`.

    .. versionchanged:: 2.4.0
        The following additional **properties** are supported:

        `transformOrigin`, `transformOriginx`, `transformOriginy`.

    Options may include:

    - :name: A string that identifies the tweening, useful for :func:`removeTween <sprite.removeTween>`
    - :duration: A string or number determining how long the tweening will run
    - :easing: A string indicating which easing function to use for the transition
    - :callback: A function to call once the tweening is complete

    The **duration** is given in milliseconds; higher values indicate slower animations, not faster ones.
    The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.
    If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.

    The **easing** function specifies the speed at which the animation progresses at different points within the animation.
    All of `Robert Penner's Easing Functions`_ are implemented, so the **easing** option can take one of the following string values:
    `linear`, `swing` (default), `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`,
    `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`, `easeInSine`, `easeOutSine`, `easeInOutSine`,
    `easeInExpo`, `easeOutExpo`, `easeInOutExpo`, `easeInCirc`, `easeOutCirc`, `easeInOutCirc`, `easeInElastic`, `easeOutElastic`,
    `easeInOutElastic`, `easeInBack`, `easeOutBack`, `easeInOutBack`, `easeInBounce`, `easeOutBounce`, `easeInOutBounce`.

    The **callback** function will be called with the following parameters:

        - :this: The sprite object
        - :node: The sprite object

    **Example**::

        friGame.sprites.player.tween({
            centerx: 100,
            centery: 300
        }, {
            duration: 1500,
            easing: 'easeOutElastic'
        });

.. function:: sprite.removeTween(name[, options])

    This function removes a tweening registered with :func:`tween <sprite.tween>`
    from the sprite tweening queue.

    .. versionadded:: 2.1.1

    :param name: The name of the tweening to remove
    :param options: An object literal

    .. versionchanged:: 2.3.0
        Added the **options** parameter

    :returns: The sprite object

    Options may include:

    - :suppressWarning: **true** to suppress the warning, **false** to show a warning on the console if the tweening was not registered before

    **Example**::

        friGame.sprites.player.tween({
            centerx: 100,
            centery: 300
        }, {
            name: 'tweenMovement',
            duration: 1500,
            easing: 'easeOutElastic'
        });

        friGame.sprites.player.removeTween('tweenMovement');

.. function:: sprite.clearTweens()

    This function removes all the tweenings associated to the sprite.

    .. versionadded:: 2.1.1

    :returns: The sprite object

    **Example**::

        friGame.sprites.player.clearTweens();

.. function:: sprite.fadeIn([duration][, callback])

    .. deprecated:: 2.1.0
        Use the generic :func:`tween <sprite.tween>` function instead

    This function displays the sprite by fading it to opaque.

    :param duration: A string or number determining how long the fading will run
    :param callback: A function to call once the fading is complete

    :returns: The sprite object

    The **duration** is given in milliseconds; higher values indicate slower animations, not faster ones.
    The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.
    If any other string is supplied, the default duration of 400 milliseconds is used.

    The **callback** function will be called with the following parameters:

        - :this: The sprite object

    **Example**::

        friGame.sprites.player.fadeIn(500);

        // Equivalent to:
        friGame.sprites.player.tween({
            opacity: 1
        }, {
            duration: 500
        });


.. function:: sprite.fadeOut([duration][, callback])

    .. deprecated:: 2.1.0
        Use the generic :func:`tween <sprite.tween>` function instead

    This function hides the sprite by fading it to transparent.

    :param duration: A string or number determining how long the fading will run
    :param callback: A function to call once the fading is complete

    :returns: The sprite object

    The **duration** is given in milliseconds; higher values indicate slower animations, not faster ones.
    The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.
    If any other string is supplied, the default duration of 400 milliseconds is used.

    The **callback** function will be called with the following parameters:

        - :this: The sprite object

    **Example**::

        friGame.sprites.player.fadeOut('slow', function () {
            this.remove();
        });

        // Equivalent to:
        friGame.sprites.player.tween({
            opacity: 0
        }, {
            duration: 'slow',
            callback: function () {
                this.remove();
            }
        });


.. function:: sprite.fadeTo(duration, opacity[, callback])

    .. deprecated:: 2.1.0
        Use the generic :func:`tween <sprite.tween>` function instead

    This function adjusts the opacity of the sprite.

    :param duration: A string or number determining how long the fading will run
    :param opacity: A number between 0 and 1 denoting the target opacity
    :param callback: A function to call once the fading is complete

    :returns: The sprite object

    The **duration** is given in milliseconds; higher values indicate slower animations, not faster ones.
    The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.
    If any other string is supplied, the default duration of 400 milliseconds is used.

    The **callback** function will be called with the following parameters:

        - :this: The sprite object

    **Example**::

        friGame.sprites.player.fadeTo('fast', 0.5);

        // Equivalent to:
        friGame.sprites.player.tween({
            opacity: 0.5
        }, {
            duration: 'fast'
        });


.. function:: friGame.delay(duration[, callback])

    This function calls a callback function after a specified delay.

    .. versionadded:: 2.2.0

    .. warning::

        This feature is experimental, and it may be removed in future versions


    :param duration: A string or number determining the delay at which te callback will be called
    :param callback: A function to call once the delay is complete

    :returns: The sprite object

    The **duration** is given in milliseconds; higher values indicate slower animations, not faster ones.
    The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.
    If any other string is supplied, the default duration of 400 milliseconds is used.

    The **callback** function will be called with the following parameters:

        - :this: The friGame object

    **Example**::

        friGame.delay(1000, function () {
            // Code here is executed 1 second after the friGame.delay function has been called
        });

