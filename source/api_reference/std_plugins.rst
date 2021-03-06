
.. include:: ../defines.rst

======================
Other Standard Plugins
======================

.. contents::



DOM Ready
=========

The **frigame.domready.js** file provides a callback function to be executed when the DOM is fully loaded.

It is recommended to include this plugin right after the renderer, before any other plugin, so that
any plugin that depends on the DOM Ready event can be used.

.. function:: friGame.ready(callback)

    This function specifies a function to be called when the DOM is fully loaded.
    If this function is called more than once, all the callbacks will be called in the same order as
    the friGame.ready function calls.

    .. versionadded:: 2.2.0

    :param callback: The function to call

    :returns: The friGame object

    The **callback** function will be called with the following parameters:

        - :this: The friGame object

    **Example**::

        friGame.ready(function () {
            friGame.resourceManager
                .addAnimation('player', 'player.png')
            ;

            friGame.startGame(function () {
                friGame.playground()
                    .addSprite('player', {animation: 'player'})
                ;
            });
        });



Keyboard Tracker
================

The **frigame.keytracker.js** file provides two objects that simplify the handling of the keyboard.

.. attribute:: friGame.keyCodes

    This objects defines constants that map to the keyCode attribute of keydown_ and keyup_ event objects.

    The following constants are defined:

        - **backspace**
        - **tab**
        - **enter**
        - **shift**
        - **ctrl**
        - **alt**
        - **pause**
        - **caps**
        - **escape**
        - **space**
        - **pageup**
        - **pagedown**
        - **end**
        - **home**
        - **left**
        - **up**
        - **right**
        - **down**
        - **insert**
        - **del**

    In addition to these constants, the letters from **A** to **Z** (always in uppercase), the **0** to **9**, the **num0** to **num9**,
    and the **f1** to **f12** constants are defined.

    **Example**::

        $(document).keydown(function (e) {
            var
                keycode = friGame.keyCodes[e.keyCode]
            ;

            if (keycode === 'K') {
                // The K key has been pressed
            } else if (keycode === 'space') {
                // The space key has been pressed
            }
        });

.. attribute:: friGame.keyTracker

    The keyTracker object stores the current state of the keyboard, and it can be used anytime in the game to check whether a key is pressed.
    The object is indexed by the constants defined in the :attr:`keyCodes <friGame.keyCodes>` object, and if the value is **true** the key is pressed.

    **Example**::

        if (friGame.keyTracker.K) {
            // The K key is currently pressed
        } else if (friGame.keyTracker.space) {
            // The space key is currently pressed
        }



Mouse Tracker
=============

The **frigame.mousetracker.js** file provides an object that simplifies the handling of the mouse.

.. attribute:: friGame.mouseTracker

    The mouseTracker object stores the current state of the mouse, and it can be used anytime in the game
    to check the mouse position and the buttons that are pressed.

    The **x** and **y** attributes store the current mouse position relative to the |playground| origin.
    The upper left corner of the |playground| will always be with x and y set to 0 regardless of its position relative to the document.

    The **1**, **2**, and **3** attributes are **true** if the left, middle or right button are pressed respectively.

    **Example**::

        if (friGame.mouseTracker['1']) {
            // The left button is currently pressed
        }

        mouse_x = friGame.mouseTracker.x;
        mouse_y = friGame.mouseTracker.y;

