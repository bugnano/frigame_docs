
.. include:: ../defines.rst

================================
Rects, Sprites and Sprite Groups
================================

.. contents::

.. _rects:

Rects
=====

Rects represent all objects that have a dimension and can be moved, and can be thought as a rectangular or circular shape.

Rects also provide basic square to square, square to point, circle to circle, and circle to point collision detection.

.. note::

    :ref:`sprites` and :ref:`groups` inherit from rects, so all the movement, size, and collision detection related operations are in fact rect methods.

.. warning::

    All the rect parameters are integers. If floating point values are passed as options, their decimal part will be truncated.


.. function:: friGame.Rect([options])

    This is the constructor for Rect objects.

    :param options: An object literal describing the rect

    :returns: The newly created rect object

    The **options** parameter may contain:

    An x position -- One of the following:

        - **left** (Default: 0)
        - **centerx**
        - **right**

    An y position -- One of the following:

        - **top** (Default: 0)
        - **centery**
        - **bottom**

    A horizontal size -- One of the following:

        - **width** (Default: 0)
        - **halfWidth**

    A vertical size -- One of the following:

        - **height** (Default: 0)
        - **halfHeight**

    For circular shapes, instead of the horizontal and vertical size, a **radius** parameter may be specified.

    **Example**::

        my_rect = friGame.Rect({
            left: 10,
            top: 10,
            width: 300,
            height: 200
        });

        my_circle = friGame.Rect({
            centerx: 50,
            centery: 50,
            radius: 150
        });

.. _rect-attrs:

Read-only attributes
--------------------

After the :func:`rect <friGame.Rect>` has been created, **all** the following properties can be accessed.

.. attribute:: rect.left
.. attribute:: rect.centerx
.. attribute:: rect.right

.. attribute:: rect.top
.. attribute:: rect.centery
.. attribute:: rect.bottom

.. attribute:: rect.width
.. attribute:: rect.halfWidth

.. attribute:: rect.height
.. attribute:: rect.halfHeight

.. attribute:: rect.radius

.. warning::

    These properties are read-only. In order to move and resize the rect, use :ref:`the corresponding functions <rect-movement>`.

.. _rect-movement:

Moving and Resizing
-------------------

.. function:: rect.move([options])

    This function changes the **x position**, and **y position** of the rect object.

    :param options: An object literal

    :returns: The rect object

    **Example**::

        my_rect = friGame.Rect({
            left: 10,
            top: 10,
            width: 300,
            height: 200
        });

        my_circle = friGame.Rect({
            centerx: 50,
            centery: 50,
            radius: 150
        });

        my_rect.move({right: 400, centery: 500});
        my_circle.move({centerx: 300});

.. function:: rect.resize([options])

    This function changes the **horizontal size**, **vertical size**, or **radius** of the rect object.

    :param options: An object literal

    :returns: The rect object

    **Example**::

        my_rect.move({right: 400, centery: 500});
        my_rect.resize({width: 120, height: 240});

        my_circle.move({centerx: 300});
        my_circle.resize({radius: 200});

    .. note::

        The resizing is done so that the last rect position remains the same, so in the
        example above ``my_rect.right`` remains 400, and ``my_circle.centerx`` remains 300.

.. _collision-detection:

Collision Detection
-------------------

.. warning::

    Collision detection using :ref:`sprites <sprites>` and :ref:`sprite groups <groups>` works reliably only if
    the sprite or group being checked belong to the same sprite group, and no transform is performed on either sprite or group.

.. function:: rect.collideRect(otherRect)

    This function performs a square to square collision detection with another rect.

    :param otherRect: The other rect

    :returns: **true** if there is a collision, else **false**

    **Example**::

        if (my_rect.collideRect(other_rect)) {
            handleCollision();
        }

.. function:: rect.collidePointRect(x, y)

    This function performs a square to point collision detection. It is useful for example to check if the
    rect has been clicked with the mouse.

    :param x: The x position of the point
    :param y: The y position of the point

    :returns: **true** if there is a collision, else **false**

    **Example**::

        if (my_rect.collidePointRect(mouse_pos.x, mouse_pos.y)) {
            handleCollision();
        }

.. function:: rect.collideCircle(otherRect)

    This function performs a circle to circle collision detection with another rect.

    :param otherRect: The other rect

    :returns: **true** if there is a collision, else **false**

    **Example**::

        if (my_circle.collideCircle(other_circle)) {
            handleCollision();
        }

.. function:: rect.collidePointCircle(x, y)

    This function performs a circle to point collision detection. It is useful for example to check if the
    rect has been clicked with the mouse.

    :param x: The x position of the point
    :param y: The y position of the point

    :returns: **true** if there is a collision, else **false**

    **Example**::

        if (my_circle.collidePointCircle(mouse_pos.x, mouse_pos.y)) {
            handleCollision();
        }

.. _sprite-group-common:

Common Functions between Sprites and Groups
===========================================

.. attribute:: sprite.name

    **READ ONLY**: The name of the sprite

.. attribute:: sprite.parent

    **READ ONLY**: The name of the sprite group containing the sprite (The |playground| has this attribute set to the empty string)

.. attribute:: sprite.userData

    friGame makes available a userData attribute for each sprite and sprite group in order to store game-specific data.

    **Example**::

        friGame.sprites.player.userData = new Player();

        friGame.sprites.player.userData.shield -= 1;


.. function:: sprite.remove()

    If it is a sprite it simply removes the sprite;
    if it is a sprite group it removes the sprite group and all the sprites and sprite groups it contains.

    The sprite (or sprite group), and its contained sprites and groups also get removed from
    :attr:`friGame.sprites`

    .. versionchanged:: 2.2.0
        If the sprite :attr:`userData <sprite.userData>` has a **remove()** method, it will be called automatically by this function

    :returns: undefined

    **Example**::

        friGame.sprites.background.remove();

Generic Callback Functions
--------------------------

.. function:: sprite.registerCallback(callback, rate)

    This function registers a function to be called at a regular interval.
    There is no limit on how many callbacks can be associated to a sprite.

    :param callback: The function to call
    :param rate: The number of milliseconds between two successive calls to the function given as argument

    :returns: The sprite object

    The **callback** function will be called with the following parameters:

        - :this: The sprite object
        - :node: The sprite object

    It will be called as long as its return value is |falsy|.

    **Example**::

        friGame.playground().registerCallback(function () {
            // Game logic goes here
        }, 30);



.. function:: sprite.removeCallback(callback[, options])

    This function removes a callback function registered with :func:`registerCallback <sprite.registerCallback>`
    from the sprite callback queue, so that it will not be called again.

    .. versionadded:: 2.1.0

    :param callback: The function to remove
    :param options: An object literal

    .. versionchanged:: 2.3.0
        Added the **options** parameter

    :returns: The sprite object

    Options may include:

    - :suppressWarning: **true** to suppress the warning, **false** to show a warning on the console if the callback was not registered before

    **Example**::

        function updatePlayer() {
            // Game logic goes here
        }

        friGame.playground().registerCallback(updatePlayer, 30);

        friGame.playground().removeCallback(updatePlayer);



.. function:: sprite.clearCallbacks()

    This function removes all the callbacks associated to the sprite.

    :returns: The sprite object

    **Example**::

        friGame.playground().clearCallbacks();

Visibility Functions
--------------------

.. function:: sprite.hide()

    If it is a sprite it simply hides the sprite;
    if it is a sprite group it hides the sprite group and all the sprites and sprite groups it contains

    :returns: The sprite object

    **Example**::

        friGame.sprites.background.hide();

.. function:: sprite.show()

    If it is a sprite it simply shows the sprite;
    if it is a sprite group it shows the sprite group and all the sprites and sprite groups it contains

    :returns: The sprite object

    **Example**::

        friGame.sprites.background.show();

.. function:: sprite.toggle([showOrHide])

    If called without arguments this function toggles the visibility of the sprite.

    If called with the showOrHide parameter this function forces the visibility of the sprite.

    :param showOrHide: If **true** it shows the sprite, if **false** it hides the sprite

    :returns: The sprite object

    **Example**::

        friGame.sprites.background.toggle();

Drawing Order Functions
-----------------------

.. function:: sprite.drawFirst()

    This function makes the sprite the first one to be drawn inside its sprite group.

    :returns: The sprite object

    **Example**::

        friGame.sprites.player.drawFirst();

.. function:: sprite.drawLast()

    This function makes the sprite the last one to be drawn inside its sprite group.

    :returns: The sprite object

    **Example**::

        friGame.sprites.player.drawLast();

.. function:: sprite.getDrawIndex()

    This function returns the sprite drawing position.

    .. versionadded:: 2.3.0

    :returns: The 0 based index of the drawing position of the sprite

    **Example**::

        var index = friGame.sprites.player.getDrawIndex();

.. function:: sprite.drawTo(index)

    This function moves the sprite to the drawing position given by the index parameter.

    :param index: The 0 based index of the drawing position of the sprite

    :returns: The sprite object

    **Example**::

        friGame.sprites.player.drawTo(3);

    In the example above the player will be the fourth sprite to be drawn inside its sprite group.

.. function:: sprite.drawBefore(name)

    This function moves the sprite in order to be drawn before the sprite referenced by the name parameter.
    Both sprites must be inside the same sprite group.

    :param name: The name of the sprite drawn after this one

    :returns: The sprite object

    **Example**::

        friGame.sprites.player.drawBefore('enemy');

.. function:: sprite.drawAfter(name)

    This function moves the sprite in order to be drawn after the sprite referenced by the name parameter.
    Both sprites must be inside the same sprite group.

    :param name: The name of the sprite drawn before this one

    :returns: The sprite object

    **Example**::

        friGame.sprites.player.drawAfter('enemy');

Transform Functions
-------------------

.. note::

    All the transforms are done with origin to the center of the sprite, so that the :attr:`centerx <rect.centerx>` and :attr:`centery <rect.centery>`
    will refer to the center position of the sprite even after the transform.

.. warning::

    The transform functions do not modify the :func:`rect <friGame.Rect>` properties of the sprite/group, which
    means collision detection will not be reliable on transformed objects.

    If you need collision detection on transformed objects you can either have an approximation by using a separate
    :func:`rect <friGame.Rect>` and use only :func:`circle collision detection <rect.collideCircle>`, or you can use
    a more serious physics library such as Box2D_.

.. function:: sprite.rotate([angle])

    If called without arguments this function returns the current rotation angle of the sprite.

    If called with the angle parameter this function rotates the sprite clock-wise.

    :param angle: The sprite rotation angle expressed in radians

    :returns: The sprite rotation angle if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.rotate(30 * Math.PI / 180);

.. function:: sprite.scale([sx[, sy]])

    If called without arguments this function returns the current horizontal scale ratio of the sprite.

    If called with only one argument this function scales the sprite both horizontally and vertically by the same value.

    :param sx: The horizontal scale ratio (1.0 = original size, 0.5 = half the original size, 2.0 = twice the original size, etc...)
    :param sy: The vertical scale ratio

    :returns: The horizontal scale ratio of the sprite if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.scale(1.5);

.. function:: sprite.scalex([sx])

    If called without arguments this function returns the current horizontal scale ratio of the sprite.

    If called with the sx parameter this function scales the sprite horizontally while leaving the vertical scale ratio unchanged.

    :param sx: The horizontal scale ratio (1.0 = original size, 0.5 = half the original size, 2.0 = twice the original size, etc...)

    :returns: The horizontal scale ratio of the sprite if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.scalex(1.5);

.. function:: sprite.scaley([sy])

    If called without arguments this function returns the current vertical scale ratio of the sprite.

    If called with the sy parameter this function scales the sprite vertically while leaving the horizontal scale ratio unchanged.

    :param sy: The vertical scale ratio (1.0 = original size, 0.5 = half the original size, 2.0 = twice the original size, etc...)

    :returns: The vertical scale ratio of the sprite if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.scaley(1.5);

.. function:: sprite.fliph(flip)

    If called without arguments this function returns whether the sprite is flipped horizontally or not.

    If called with the flip parameter this function flips or unflips horizontally the sprite.

    :param flip: **true** to flip, **false** to unflip the sprite

    :returns: The horizontal flip state of the sprite if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.fliph(true);

.. function:: sprite.flipv(flip)

    If called without arguments this function returns whether the sprite is flipped vertically or not.

    If called with the flip parameter this function flips or unflips vertically the sprite.

    :param flip: **true** to flip, **false** to unflip the sprite

    :returns: The vertical flip state of the sprite if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.flipv(true);

.. function:: sprite.opacity(alpha)

    If called without arguments this function returns the opacity of the sprite.

    If called with the alpha parameter this function changes the opacity of the sprite.
    If it is a sprite group this function changes the opacity of the group and all the sprites and groups it contains.

    :param alpha: The opacity of the sprite (0.0 -> Fully transparent; 1.0 -> Fully opaque)

    :returns: The opacity of the sprite if called without arguments, else the sprite object

    **Example**::

        friGame.sprites.player.opacity(0.5);

Utility Functions
-----------------

.. function:: sprite.getAbsRect()

    Returns a new :func:`rect <friGame.Rect>` whose position is always relative to the |playground|, useful for checking collisions
    between sprites that belong to different sprite groups

    .. versionadded:: 2.2.0

    :returns: The new :func:`rect <friGame.Rect>` relative to the |playground|

    **Example**::

        if (friGame.sprites.player.getAbsRect().collideRect(friGame.sprites.enemy.getAbsRect())) {
            handleCollision();
        }



.. _sprites:

Sprites
=======

Sprites cannot be explicitly :func:`resized <rect.resize>` because their size will always match the size of their associated animation.

.. function:: sprite.setAnimation([options])

    This function allow to change the animation of the sprite on which it's called.

    :param options: An object literal

    :returns: The sprite object

    Options may include:

    - :animation: The name of an animation, or |falsy| to remove the animation
    - :animationIndex: The index of the animation amongst one of the multi-animations (0 by default)
    - :rate: To override the **rate** parameter of the animation
    - :once: To override the **once** parameter of the animation
    - :pingpong: To override the **pingpong** parameter of the animation
    - :backwards: To override the **backwards** parameter of the animation
    - :callback: A callback that will be called at the end of the animation, or |falsy| to remove the callback
    - :paused: **true** to pause the animation, **false** to resume the animation

    The **callback** function will be called with the following parameters:

        - :this: The sprite object
        - :node: The sprite object

    **Example**::

        friGame.sprites.player.setAnimation({
            animation: 'playerExplode',
            callback: function (node) {
                node.remove();
            }
        });


.. _groups:

Sprite Groups
=============

Sprite groups can be used as layers that contain other sprites and sprite groups, or as simple sprites with a gradient or still image instead of an animation.

All the sprite groups except the |playground| can be freely :func:`resized <rect.resize>`. Setting a width or height of 0 means that the group will be the same width or height as its parent.

The |playground| is the only sprite group that cannot be :func:`resized <rect.resize>` or :func:`moved <rect.move>`.

.. function:: friGame.playground([parentDOM])

    This function makes a playground DOM object returns it as a sprite group.

    :param parentDOM: A DOM object inside which the playground will be created. If omitted it defaults to the element with ID 'playground'

    :returns: The group object

    .. versionchanged:: 2.2.0
        The **parentDOM** parameter can be one of the following:

        - A string with the ID of the element inside of which the playground will be created
        - A DOM element
        - A jQuery_ object (Not recommended)
        - An already created |canvas| element (Only if the canvas renderer is used)

    Note that the **parentDOM** parameter is required only the first time the function is called.
    Subsequent calls will ignore this parameter, which means multiple playgrounds are not supported.

    After calling this function once, subsequent calls to this function are the same as accessing the playground object with::

        friGame.sprites.playground

    **Example**::

        friGame.playground('#playground')
            .addSprite('player', {animation: playerAnimation})
        ;

.. function:: group.clear()

    This function removes all the sprites and groups it contains.

    :returns: The group object

    **Example**::

        friGame.playground().clear();

.. function:: group.children(callback)

    This function executes the callback function for each sprite and sprite group this group contains

    .. note::

        This function is not recursive, which means when it finds a sprite group it will not look for sprites and groups inside it.

    :param callback: The function to be called

    :returns: The group object

    The **callback** function will be called with the following parameters:

        - :this: The sprite or sprite group object
        - :node: The sprite or sprite group object

    The callback will be called as long as there are sprites and groups inside the group and the callback return value is |falsy|.

    **Example**::

        friGame.sprites.player.children(function (node) {
            this.show();
        });

.. function:: group.setBackground([options])

    This function allow to change the background of the group on which it's called.

    :param options: An object literal

    :returns: The group object

    Options may include:

    - :background: The name of a gradient or the name of an animation, or |falsy| to remove the background
    - :backgroundType: If the background is an animation, **friGame.BACKGROUND_TILED** (default) sets a tiled background and **friGame.BACKGROUND_STRETCHED** sets a stretched background

    .. note::

        When using an animation as a background image, the whole image will be used and it will not be animated.

    **Example**::

        friGame.sprites.group2.setBackground({
            background: 'grassblock',
            backgroundType: friGame.BACKGROUND_STRETCHED
        });

.. function:: group.setBorder([options])

    This function allow to change the border of the group on which it's called.

    .. versionadded:: 2.2.0

    :param options: An object literal

    :returns: The group object

    Options may include:

    - :borderColor: The name of a gradient, or |falsy| to remove the border
    - :borderWidth: The width of the border (default: 1)
    - :borderRadius: The radius of all the corners (default: 0)
    - :borderTopLeftRadius: The radius of the top-left corner (default: 0)
    - :borderTopRightRadius: The radius of the top-right corner (default: 0)
    - :borderBottomRightRadius: The radius of the bottom-right corner (default: 0)
    - :borderBottomLeftRadius: The radius of the bottom-left corner (default: 0)

    The **borderRadius** shorthand option can be one of the following:

    - A Number that specifies the radius for all the corners
    - An Array that specifies the radius for each corner in the order: top-left, top-right, bottom-right, bottom-left

    .. note::

        The borderWidth does not affect the :func:`rect <friGame.Rect>` properties of the group, which means that
        adding a border to an existing group will not affect its size or position.

    .. note::

        For maximum compatibility, it is recommended to use a solid color as a border, instead of a gradient.

    **Example**::

        friGame.sprites.group2.setBorder({
            borderColor: 'blue',
            borderRadius: [17, 5, 23, 11],
            borderWidth: 12
        });

.. function:: group.crop(cropping)

    If called without arguments this function returns whether the group is cropped or not.

    If called with the cropping parameter this function crops or uncrops the group.

    Cropping means that any sprite and sprite group outside the sprite group will not be shown, and any sprite and sprite group that is not completely inside
    the sprite group will be cut to the group borders.

    .. warning::

        Do not use this function on the |playground| object

    :param cropping: **true** to crop, **false** to uncrop the group

    :returns: The cropping state of the group if called without arguments, else the group object

    **Example**::

        friGame.sprites.group2.crop(true);

.. function:: group.addSprite(name[, options])
    group.insertSprite(name[, options])

    These functions add a sprite to the current sprite group. The addSprite functions adds the sprite at the end of the
    sprite group (the newly created sprite will be drawn last), whereas the insertSprite function adds the sprite at the
    beginning of the sprite group (the newly created sprite will be drawn first).

    Any sprite created this way will automatically animate itself.

    :param string name: The name of the sprite
    :param options: An object literal

    :returns: The group in which the sprite has been created

    Options contain both :func:`rect <friGame.Rect>` and :func:`animation <sprite.setAnimation>` parameters.

    **Example**::

        friGame.playground().addSprite('player', {animation: playerAnimation, centerx: PLAYGROUND_WIDTH / 2});

    The newly created sprite can be accessed with::

        friGame.sprites[name]

    In the example above the sprite can be accessed with::

        friGame.sprites['player']

    or, more simply::

        friGame.sprites.player

    The friGame.s object is an alias to friGame.sprites, in order to have less characters to type, resulting for example in::

        friGame.s.player

.. function:: group.addGroup(name[, options])
    group.insertGroup(name[, options])

    These functions behaves almost in the same way as the addSprite and insertSprite ones but they create a sprite group.

    :param string name: The name of the group
    :param options: An object literal

    :returns: The newly created sprite group

    Options contain the :func:`rect <friGame.Rect>`, :func:`background <group.setBackground>`, and :func:`border <group.setBorder>` parameters.

    **Example**::

        friGame.playground($('#playground'))
            .addGroup('background', {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addSprite('background1', {animation: background1, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addSprite('background2', {animation: background2, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT, left: PLAYGROUND_WIDTH})
        ;

    The newly created sprite group can be accessed with::

        friGame.sprites[name]

    In the example above the sprite group can be accessed with::

        friGame.sprites['background']

    or, more simply::

        friGame.sprites.background

    The friGame.s object is an alias to friGame.sprites, in order to have less characters to type, resulting for example in::

        friGame.s.background

.. function:: group.end()

    Returns to the previous sprite group, useful when creating multiple sprites and sprite groups at once.

    :returns: The previuos sprite group

    **Example**::

        friGame.playground($('#playground'))
            .addGroup('background', {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addSprite('background1', {animation: background1, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addSprite('background2', {animation: background2, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT, left: PLAYGROUND_WIDTH})
                .addSprite('background3', {animation: background3, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addSprite('background4', {animation: background4, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT, left: PLAYGROUND_WIDTH})
                .addSprite('background5', {animation: background5, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addSprite('background6', {animation: background6, width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT, left: PLAYGROUND_WIDTH})
            .end()
            .addGroup('actors', {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
                .addGroup('player', {left: PLAYGROUND_WIDTH / 2, top: PLAYGROUND_HEIGHT / 2, width: 100, height: 26})
                    .addSprite('playerBoostUp', {left: 37, top: 15, width: 14, height: 18})
                    .addSprite('playerBody', {animation: playerAnimation.idle, left: 0, top: 0, width: 100, height: 26})
                    .addSprite('playerBooster', {animation: playerAnimation.boost, left: -32, top: 5, width: 36, height: 14})
                    .addSprite('playerBoostDown', {left: 37, top: -7, width: 14, height: 18})
                .end()
            .end()
            .addGroup('playerMissileLayer', {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT}).end()
            .addGroup('enemiesMissileLayer', {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT}).end()
        ;

