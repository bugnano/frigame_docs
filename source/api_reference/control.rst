
.. include:: ../defines.rst

==================================
Game Control and Utility Functions
==================================

.. contents::

Game Control
============

.. function:: friGame.startGame([callback[, rate]])

    This function will prepare the game to be started by pre-loading the resources and will start the main loop.
    If a function is given as a parameter it will be called once everything is loaded.

    :param callback: The function to call
    :param rate: An integer representing the refresh rate of the game in milliseconds (default: 30)

    :returns: The friGame object

    The **callback** function will be called with the following parameters:

        - :this: The friGame object

    **Example**::

        $("#startbutton").click(function () {
            friGame.startGame(function () {
                $("#welcomeScreen").remove();
            });
        });


.. function:: friGame.stopGame()

    This function stops all the timers used by friGame.

    .. warning::

        After using this function all the callback functions will not be called anymore. In order to resume the
        game, the :func:`startGame <friGame.startGame>` function must be called from an event handler, or directly
        by the function that called stopGame.

    :returns: The friGame object

    **Example**::

        friGame.stopGame();


.. function:: friGame.loadCallback(callback)

    This function provides a callback to be called with the current loading progress as argument.

    :param callback: The function to call

    :returns: The friGame object

    The **callback** function will be called with the following parameters:

        - :this: The friGame object
        - :percent: The current loading progress in floating point from 0 to 1

    **Example**::

        fg.loadCallback(function (percent) {
            $('#loadingBar').width(400 * percent);
        });


.. function:: friGame.startCallback(callback)

    This function provides another callback to be called after all the resources have been loaded. If this function
    is called more than once, all the callbacks will be called in the same order as the startCallback function calls.
    After all the callbacks from startCallback are called, the function passed to :func:`startGame <friGame.startGame>`
    will be called.
    This function can be useful when writing friGame plugins that require all the resources to be loaded in order to initialize
    correctly, without interfering with the game logic.

    :param callback: The function to call

    :returns: The friGame object

    The **callback** function will be called with the following parameters:

        - :this: The friGame object

    **Example**::

        friGame.startCallback(function () {
            // Some initializations
        });

        friGame.startGame(function () {
            // This will be called after the two callbacks passed to the startCallback functions
        });

        friGame.startCallback(function () {
            // Some other initializations
        });


.. function:: friGame.playgroundCallback(callback)

    This function provides a callback to be called after the |playground| has been initialized. If this function
    is called more than once, all the callbacks will be called in the same order as the playgroundCallback function calls.
    This function can be useful when writing friGame plugins that require the playground to be initialized, without interfering with the game logic.

    :param callback: The function to call

    :returns: The friGame object

    The **callback** function will be called with the following parameters:

        - :this: The |playground| object
        - :dom: The |playground| parentDOM object

    **Example**::

        friGame.playgroundCallback(function (dom) {
            var offset = dom.offset();

            // Some initializations
        });



Utility Functions
=================

ECMAScript 5 Compatible Functions
---------------------------------

friGame makes available some functions that are part of the ECMAScript 5 standard, even in older browsers that do not sopport this standard.

.. function:: Object.create(o)

    See external reference: `Object.create`_

.. function:: Date.now()

    See external reference: `Date.now`_

Misc. Utility Functions
-----------------------

.. function:: friGame.pick(obj, keys)

    This function returns a new object with only the keys defined in the keys array parameter.

    :param obj: The object to be filtered
    :param keys: An array listing the keys to keep in the returned object

    :returns: A new object containing the obj parameter values, but only with the keys defined in the keys parameter

    **Example**::

        color_without_alpha = friGame.pick({b: 255, a: 0.3}, ['r', 'g', 'b']));


.. function:: friGame.truncate(n)

    This function truncates the decimal part of a floating point number and returns only its integer part.

    :param n: The floating point number

    :returns: The truncated integer

    **Example**::

        twenty = friGame.truncate(20.6);
        minus_twenty = friGame.truncate(-20.6);


.. function:: friGame.clamp(n, minVal, maxVal)

    This function returns the nearest value of n that is guaranteed to be in the range between minVal and maxVal.

    :param n: The number
    :param minVal: The minimum acceptable value for n
    :param maxVal: The maximum acceptable value for n

    :returns: The clamped number

    **Example**::

        twenty_point_six = friGame.clamp(20.6, 0, 255);
        zero = friGame.clamp(-20.6, 0, 255);
        two_hundred_and_fifty_five = friGame.clamp(300, 0, 255);

