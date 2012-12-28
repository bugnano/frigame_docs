
.. include:: ../defines.rst

============
Sound Plugin
============

.. contents::

Sound Setup
===========

In order to enable sound in a game, the first thing to do is include the frigame.sound.js file.

As not every browser supports sound, and not every browser supports the same audio formats, there are a few considerations to make:

- In order to have the best browser support, it is better to encode the same audio file twice, resulting in one mp3 file and one ogg/vorbis file
- For old browsers that do not support the HTML5 Audio element, a flash fallback can be provided through soundManager2_

As pointed out earlier, friGame supports the soundManager2_ module, but it is entirely optional. In order to use it, include the soundmanager2.js file, and
place the soundmanager2.swf file (Flash 8 version, no debug) in the same directory as the HTML file.

The audio formats supported by friGame are the following:

- Uncompressed PCM/WAVE (default file extension .wav) (Not recommended as it results in huge files)
- Ogg/Vorbis (default file extension .ogg or .oga)
- MP3 (default file extension .mp3) (Either natively with the HTML5 Audio element, or through soundManager2_)


Sound API
=========

.. function:: friGame.resourceManager.addSound(name, soundURLs[, options])

    As with animations and gradients, sounds are created through the resourceManager.

    Once all the resources have been loaded, the newly created sound can be accessed with::

        friGame.resources[name]

    :param string name: The name of the sound
    :param soundURLs: The URL of the sound files
    :param options: An object literal containing the sound options

    :returns: The resource manager object

    The soundURLs parameter can have 3 forms:

    1. A string containing the URL of the sound file
    2. An array containing the URLs of the sound file in different formats
    3. An object literal having as key the sound file format and as value the sound file

    .. note::

        For the first 2 forms of the soundURLs parameter the file type is determined by its extension.
        If the file extension is different from the default, the third form of the soundURLs parameter must be used.

    Options may include:

    - :volume: the sound volume in folating point from 0 (quiet) to 1 (loud -- default)
    - :muted: **true** if the sound is muted else **false** (default)

    **Example**::

        friGame.resourceManager.addSound('mySound', './mySound.mp3', {
            volume: 0.8,
            muted: false
        });

        friGame.resourceManager.addSound('mySound', ['./mySound.ogg', './mySound.mp3']);

        friGame.resourceManager.addSound('mySound', {
            ogg: './mySound.different_extension',
            mp3: './mySound.another_extension'
        });


.. function:: sound.setVolume([options])

    This function changes the volume of the sound object.

    :param options: An object literal

    :returns: The sound object

    Options may include:

    - :volume: the sound volume in folating point from 0 (quiet) to 1 (loud -- default)
    - :muted: **true** if the sound is muted else **false** (default)

    **Example**::

        friGame.resources.mySound.setVolume({
            volume: 0.5
        });

.. function:: sound.play([options])

    This function plays the sound.

    :param options: An object literal

    :returns: The sound object

    Options may include:

    - :volume: the sound volume in folating point from 0 (quiet) to 1 (loud)
    - :muted: **true** if the sound is muted else **false**
    - :loop: **true** if the sound is played in contiuous loop else **false** to play the sound only once (default)
    - :callback: A callback that will be called at the end of the sound

    .. warning::

        The loop and callback options are mutually exclusive. If the loop option is **true** the callback will never be called.

    The **callback** function will be called with the following parameters:

        - :this: The sound object

    **Example**::

        friGame.resources.mySound.play({
            callback: function () {
                friGame.resources.myOtherSound.play();
            }
        });

.. function:: sound.stop()

    This function stops the sound if it is currently playing.

    :returns: The sound object

    **Example**::

        friGame.resources.mySound.stop();

.. function:: sound.pause()

    This function pauses the sound if it is currently playing.

    :returns: The sound object

    **Example**::

        friGame.resources.mySound.pause();

.. function:: sound.resume()

    This function resumes the sound if it is currently paused.

    :returns: The sound object

    **Example**::

        friGame.resources.mySound.resume();

