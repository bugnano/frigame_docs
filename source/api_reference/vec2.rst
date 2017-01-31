
.. include:: ../defines.rst

=====================
2D Vector Math Plugin
=====================

.. contents::

The **frigame.vec2.js** file provides commonly used 2D vector math functions.

.. versionadded:: 2.3.0



User API
========

.. function:: friGame.Vec2.randomUnit(out)
.. function:: friGame.Vec2.random(out, scale)
.. function:: friGame.Vec2.clone(out, a)
.. function:: friGame.Vec2.magnitude(a)
.. function:: friGame.Vec2.squaredMagnitude(a)
.. function:: friGame.Vec2.azimuth(a)
.. function:: friGame.Vec2.fromMagAngle(out, mag, angle)
.. function:: friGame.Vec2.fromValues(out, x, y)
.. function:: friGame.Vec2.scale(out, value)
.. function:: friGame.Vec2.invert(out)
.. function:: friGame.Vec2.normalize(out)
.. function:: friGame.Vec2.add(out, a)
.. function:: friGame.Vec2.subtract(out, a)
.. function:: friGame.Vec2.rotate(out, angle)
.. function:: friGame.Vec2.rotateAroundPoint(out, a, axisPoint, angle)
.. function:: friGame.Vec2.equals(a, b)
.. function:: friGame.Vec2.distance(a, b)
.. function:: friGame.Vec2.squaredDistance(a, b)
.. function:: friGame.Vec2.sum(out, a, b)
.. function:: friGame.Vec2.difference(out, a, b)
.. function:: friGame.Vec2.dot(a, b)
.. function:: friGame.Vec2.cross(a, b)
.. function:: friGame.Vec2.lerp(out, a, b, t)

    Instead of having a separate vector class, this plugin treats as a vector any object
    that has a numeric value for the **x** and **y** members.

    :param out: The vector object to change
    :param a: The first vector
    :param b: The second vector

    :returns: If the function has an **out** parameter, the **out** object is returned. If the function does not have an **out** parameter, the computed numeric value is returned.

    **Example**::

        var
            // first_vec is a vector with a random angle, and a random magnitude, up to 10
            first_vec = friGame.Vec2.random({}, 10),
            // second_vec is a vector with x = 10 and y = 20
            second_vec = friGame.Vec2.fromValues({}, 10, 20)
        ;

        // Now both first_vec and second_vec have a numeric x and y value
        if (first_vec.x < 3) {
        }

        // This is something like
        // second_vec += first_vec
        friGame.Vec2.add(second_vec, first_vec);

        // Functions that don't have an out parameter, return a numeric value
        if (friGame.Vec2.azimuth(second_vec) < Math.PI) {
        }

