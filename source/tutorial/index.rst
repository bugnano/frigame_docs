
.. include:: ../defines.rst

========
Tutorial
========

Parts of this document are adapted from the `gameQuery Tutorial`_

Contents:

.. toctree::
    :maxdepth: 1

    step-1
    step-2
    step-3
    step-4

First words
===========

In this tutorial I will guide you into making a simple javascript game from scratch.
I've chosen a very basic `side scrolling shooter <http://en.wikipedia.org/wiki/Side-scrolling_shooter#Scrolling_shooters>`_
for this first tutorial. To focus on the most basic tasks of game
development, I've broken this game down to contain a sub-set of the
features that one may find in a full-featured game. The final result is
intended to be somewhat like the game at the end of this page and it is
probably not too engrossing but again, the aim is to learn how to use
friGame to make a javascript game :)

friGame is best suited to make a simple 2d `sprite <http://en.wikipedia.org/wiki/Sprite_(computer_graphics)>`_
based game, so that's what we're going to use it for. How you make
those sprites is entirely up to you. You can, for exemple, draw them by
hand, scan them and then refine them in your favorite graphic editor or
you can draw them directly on your computer.

Prerequisites
=============

I assume that you have a basic knowledge of HTML, CSS, and JavaScript.
If you don't, some pointers will be given to allow you to learn more about things
when they are introduced if you feel the need for it. The result will be
a little boring for the experienced programmers so feel free to take a
look a the final <a href="http://gamequeryjs.com/documentation/first-tutorial/tutorial.final.js">source code</a> instead.
It should be pretty self explanatory!

Game Description
================

The player controls a spaceship facing right and he must avoid or
destroy enemies coming from the right side of the screen towards him.
There are three kinds of enemies, each one of them with a different kind
of movement pattern and weaponry. Whenever the player's spaceship
collides with an enemy or one of its missiles, it loses a unit of its
shield. If the player's spaceship has no more shield units when it's
hit, it will explode and the player will lose a life. When the
spaceship explodes it will reappear if the player has still some lives
left; if he doesn't, the game is over. After such a resurrection the
spaceship will be granted a temporary immunity for 3 seconds.

The first kind of enemy is the most frequent, we shall call them
"minions". They move in a straight line. They will not fire any
missiles.

The second kind of enemy are a little bit more resistent and move in a
less predictable way, we will call them "brainy". They will fire
missiles at a random rate.

The last kind are some sort of "end level boss". They are bigger and
stronger but also far less frequent than the other two types. They
don't move much but fire rapid missiles. When one of these appears, no
more enemies will appear until you've destroyed it.

This game will have no end, no score and will be totally random,
remember that it's just a tutorial! It should be very easy to add those
features if you want to and it will make a good exercise :) .

Final Result
============

This is what we will obtain at the end of the tutorial. Use w,a,s,d to move the spaceship around and k to fire.

TO DO

next step: :doc:`step-1`

