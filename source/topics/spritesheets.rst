
.. include:: ../defines.rst

=================================================
Everything you wanted to know about sprite sheets
=================================================

.. contents::

Single Frame Animations
=======================

Single frame animations are the simplest type of image. They are simply one image containing only one background or
a still sprite.

.. note::

    Single frame animations are the only animation type that can be used as a :func:`background <group.setBackground>` for sprite groups.

.. figure:: img/single_frame.png

    Still sprite (single_frame.png)

.. figure:: img/example_background.png

    Background image (example_background.png)

**Example**::

    friGame.resourceManager
        .addAnimation('single_frame', 'single_frame.png')
        .addAnimation('example_background', 'example_background.png')
    ;

    friGame.playground()
        .addGroup('background', {background: 'example_background'})
            .addSprite('example_sprite', {animation: 'single_frame'})
        .end()
    ;




Simple Animations
=================

An animation is composed of multiple frames stacked either horizontally or vertically in a single image file.

.. figure:: img/horizontal_animation.png

    Horizontal animation (horizontal_animation.png)

.. figure:: img/vertical_animation.png

    Vertical animation (vertical_animation.png)

**Example**::

    friGame.resourceManager
        .addAnimation('horizontal_animation', 'horizontal_animation.png', {
            type: friGame.ANIMATION_HORIZONTAL,
            numberOfFrame: 8,
            rate: 90
        })
        .addAnimation('vertical_animation', 'vertical_animation.png', {
            type: friGame.ANIMATION_VERTICAL,
            numberOfFrame: 8,
            rate: 90
        })
    ;

    friGame.playground()
        .addSprite('example_sprite_horizontal', {animation: 'horizontal_animation'})
        .addSprite('example_sprite_vertical', {animation: 'vertical_animation'})
    ;

.. figure:: img/animation.gif

    Both sprites result in this animation

There are a few notes to make here:

- **type**, **numberOfFrame** and **rate** are mandatory, as they describe the animation
- **frameWidth** and **frameHeight** are not necessary, as they are automatically calculated using both the image dimensions and **numberOfFrame**.
- The animation style can be changed by using the **once**, **pingpong** and **backwards** options.

The **once**, **pingpong** and **backwards** options are not mutually exclusive, so it is possible for example to have a pingpong animation only once.

