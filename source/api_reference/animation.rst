
.. include:: ../defines.rst

==========================================
Resource Manager, Animations and Gradients
==========================================

.. contents::

.. _resource-manager:

Resource Manager
================

In friGame every resource, be it animations, gradients, sounds, and possibly levels are not created and used directly, but instead
they are handled by the resource manager.

The resource manager is a single object that contains generic functions for preloading resources, and for freeing resources that are no longer used.

It can be extended to manage any kind of resource. By default it supports animations and gradients. Through a plugin it supports sounds, and extending
it to support levels and any other reource used by the game is encouraged.

.. function:: friGame.resourceManager.addResource(name, resource)

    This function adds a resource to be preloaded and makes it available to::

        friGame.resources[name]

    The friGame.r object is an alias to friGame.resources, in order to have less characters to type, resulting in::

        friGame.r[name]

    .. note::

        This function is not used directly. It is used only when extending the resource manager.

    :param string name: The name of the resource
    :param resource: The resource object

    :returns: The resource manager object

    **Example**::

		return friGame.resourceManager.addResource(name, animation);


.. function:: friGame.resourceManager.removeResource(name[, options])

    This function removes the resource from ``friGame.resources`` and frees the memory associated with it.

    :param string name: The name of the resource
    :param options: An object literal

    .. versionchanged:: 2.4.0
        Added the **options** parameter

    :returns: The resource manager object

    Options may include:

    - :suppressWarning: **true** to suppress the warning, **false** to show a warning on the console if the resource was already removed

    **Example**::

		friGame.resourceManager.removeResource('playerAnimation');


.. function:: friGame.resourceManager.clear()

    This function removes all the resource from ``friGame.resources`` and frees all the memory associated with them.

    :returns: The resource manager object

    **Example**::

		friGame.resourceManager.clear();

.. _animations:

Animations
==========

.. function:: friGame.resourceManager.addAnimation(name[, imageURL][, options])

    friGame allows you to declare animations.

    Animations are made of one image with a succession of frames just like in a css sprite.

    An animation in itself doesn't exist until it's associated with a sprite.

    :param string name: The name of the animation
    :param string imageURL: The URL of the image (optional)
    :param options: An object literal describing the animation

    :returns: The resource manager object

    Options may include:

    - :numberOfFrame: the total number of frame in the sprite-sheet (for example for a 10x10 sprite with 15 frames your image will be 10x150 or 150x10 -- default: 1)
    - :rate: the number of milliseconds between two frame
    - :type: either **friGame.ANIMATION_VERTICAL** for vertically stacked frames or **friGame.ANIMATION_HORIZONTAL** for horizontally layed frames (default)
    - :once: **true** if you don't want the animation to loop, else **false** (default)
    - :pingpong: **true** if after the last frame, instead of starting again with the first one the animation will reverse, else **false** (default)
    - :backwards: **true** if the animation instead of going from left/up to right/down goes from right/down to left/up, else **false** (default)
    - :offsetx: the offset along the x-axis for the position of the first frame in the image (for use with sprite-sheets)
    - :offsety: the offset along the y-axis for the position of the first frame in the image (for use with sprite-sheets)
    - :frameWidth: the width of one frame (required for multi index **friGame.ANIMATION_VERTICAL**, otherwise optional)
    - :frameHeight: the height of one frame (required for multi index **friGame.ANIMATION_HORIZONTAL**, otherwise optional)
    - :frameset: a list of objects describing the various sprite-sheets used (required if the imageURL parameter is omitted, otherwise optional)

    .. versionchanged:: 2.2.0
        The **frameset** option is a list of objects with one or more of the following properties:

        - :imageURL: The URL of the image (default: the one passed as the imageURL parameter if passed, or the imageURL of the first element of the list)
        - :numberOfFrame: the total number of frame in the sprite-sheet (for example for a 10x10 sprite with 15 frames your image will be 10x150 or 150x10 -- default: 1)
        - :type: either **friGame.ANIMATION_VERTICAL** for vertically stacked frames or **friGame.ANIMATION_HORIZONTAL** for horizontally layed frames (default)
        - :offsetx: the offset along the x-axis for the position of the first frame in the image (for use with sprite-sheets)
        - :offsety: the offset along the y-axis for the position of the first frame in the image (for use with sprite-sheets)

    **Example**::

        friGame.resourceManager.addAnimation('myAnimation', './myAnimation.png', {
            numberOfFrame: 10,
            rate: 90,
            type: friGame.ANIMATION_VERTICAL,
            once: true
        });

        // The following animation will have a total of 20 frames
        friGame.resourceManager.addAnimation('myAnimation', {
            rate: 90,
            once: true,
            frameset: [
                {
                    imageURL: './myAnimation.png',
                    numberOfFrame: 10,
                    type: friGame.ANIMATION_VERTICAL
                },
                {
                    imageURL: './otherSpriteSheet.png',
                    numberOfFrame: 10,
                    type: friGame.ANIMATION_VERTICAL
                }
            ]
        });


Gradients
=========

.. function:: friGame.resourceManager.addGradient(name[[[, startColor], endColor], type])

    This function is used to create a solid color or a horizontal or vertical linear gradient.

    Gradients can be used as the background of a :ref:`sprite group <groups>`.

    :param string name: The name of the gradient
    :param startColor: An object literal representing the gradient start color (default: black)
    :param endColor:  An object literal representing the gradient end color (default: the same as startColor, making it a solid color)
    :param type: either **friGame.GRADIENT_HORIZONTAL** for a horizontal gradient or **friGame.GRADIENT_VERTICAL** for a vertical gradient (default)

    :returns: The resource manager object

    startColor and endColor may include:

    - :r: An integer from 0 to 255 representing the red component of the color (default: 0)
    - :g: An integer from 0 to 255 representing the green component of the color (default: 0)
    - :b: An integer from 0 to 255 representing the blue component of the color (default: 0)
    - :a: A floating point value from 0 to 1 representing the opacity of the color (0: fully transparent -- 1: fully opaque -- default: 1)

    **Example**::

		friGame.resourceManager.addGradient('gradient', {r: 128}, {b: 255, a: 0.3}, friGame.GRADIENT_HORIZONTAL);
		friGame.resourceManager.addGradient('solid_green', {g: 255});

