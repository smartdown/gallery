## Video and Audio Embedding

As of Smartdown 0.0.63, URLs that refer to videos, images, tweets and audio will be displayed as clickable links, rather than embedded media. By using Markdown's image-embedding syntax, these media types will be displayed with an appropriate player.

For example, the syntax `![](https://vimeo.com/253898691)` will display the video at `https://vimeo.com/253898691` as an embedded video. Smartdown currently supports two options `thumbnail` and `fullwidth` (the default) which can be placed in the label portion of the URL. For example, `![thumbnail](https://vimeo.com/253898691)` will display the video in a fixed-size small frame, as opposed to `![fullwidth](https://vimeo.com/253898691)` which displays a responsive video that occupies the full available width.


### YouTube

Thumbnail of https://youtu.be/m3dZl3yfGpc with syntax:

`![thumbnail](https://youtu.be/m3dZl3yfGpc)`

![thumbnail](https://youtu.be/m3dZl3yfGpc)


Halfwidth of https://youtu.be/m3dZl3yfGpc with syntax:

`![halfwidth](https://youtu.be/m3dZl3yfGpc)`

![halfwidth](https://youtu.be/m3dZl3yfGpc)


Fullwidth of https://youtu.be/m3dZl3yfGpc with syntax:

`https://youtu.be/m3dZl3yfGpc`

![fullwidth](https://youtu.be/m3dZl3yfGpc)


#### YouTube API Experiments

[VideoAPI](:@VideoAPI)


### Vimeo

Thumbnail of https://vimeo.com/69563998 using the syntax:

`![thumbnail](https://vimeo.com/69563998)`

![thumbnail](https://vimeo.com/69563998)


Fullwidth of https://vimeo.com/253898691 using the syntax:

`![fullwidth](https://vimeo.com/253898691)`

![fullwidth](https://vimeo.com/253898691)



### GIFs

I'm experimenting with incorporating GIFs for the purpose of building a tutorial. The use of the keyword `player` in the label of the Smartdown link syntax indicates that a play/pause button should be added to the GIF viewer.

The use of a *sizing* option in the title will also apply a play button. This default may be changed in the future.

#### NASA Eclipse

Embedding https://upload.wikimedia.org/wikipedia/commons/c/cb/An_EPIC_Eclipse.gif with the syntax:

`![player](https://upload.wikimedia.org/wikipedia/commons/c/cb/An_EPIC_Eclipse.gif)`

![player](https://upload.wikimedia.org/wikipedia/commons/c/cb/An_EPIC_Eclipse.gif)

By NASA (NASA Earth Observatory) [Public domain] via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AAn_EPIC_Eclipse.gif)


#### Classic Stick Man vs Door, translated to English:

- Via `![](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)`

![](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)

- Via `![thumbnail](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)`

![thumbnail](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)

- Via `![halfwidth](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)`

![halfwidth](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)

- Via `![fullwidth](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)`

![fullwidth](https://media.giphy.com/media/8yywW6CcKIpgY/giphy.gif)


### MP3 and other Audio Formats

Embedding https://unpkg.com/smartdown-gallery/resources/Damscray_DancingTiger.mp3 with the syntax:

`![](https://unpkg.com/smartdown-gallery/resources/Damscray_DancingTiger.mp3)`

![](https://unpkg.com/smartdown-gallery/resources/Damscray_DancingTiger.mp3)



---

[Back to Home](:@Home)
