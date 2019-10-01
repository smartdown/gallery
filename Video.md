### Video and Audio Embedding

As of Smartdown 0.0.63, URLs that refer to videos, images, tweets and audio will be displayed as clickable links, rather than embedded media. By using Markdown's image-embedding syntax, these media types will be displayed with an appropriate player.

For example, the syntax `![](https://vimeo.com/253898691)` will display the video at `https://vimeo.com/253898691` as an embedded video. Smartdown currently supports optional keywords which can be placed in the label portion of the URL. For example, `![thumbnail](https://vimeo.com/253898691)` will display the video in a fixed-size small frame, as opposed to `![fullwidth](https://vimeo.com/253898691)` which displays a responsive video that occupies the full available width.

Currently supported sizes for videos are:
- `thumbnail`
- `halfwidth`
- `fullwidth` (the default)


#### YouTube

Thumbnail of https://youtu.be/m3dZl3yfGpc with syntax:

`![thumbnail](https://youtu.be/m3dZl3yfGpc)`

![thumbnail](https://youtu.be/m3dZl3yfGpc)


Halfwidth of https://youtu.be/m3dZl3yfGpc with syntax:

`![halfwidth](https://youtu.be/m3dZl3yfGpc)`

![halfwidth](https://youtu.be/m3dZl3yfGpc)


Fullwidth of https://youtu.be/m3dZl3yfGpc with syntax:

`https://youtu.be/m3dZl3yfGpc`

![fullwidth](https://youtu.be/m3dZl3yfGpc)


##### YouTube API Experiments

[VideoAPI](:@VideoAPI)


#### Vimeo

Thumbnail of https://vimeo.com/253898691 using the syntax:

`![thumbnail](https://vimeo.com/253898691)`

![thumbnail](https://vimeo.com/253898691)


Fullwidth of https://vimeo.com/253898691 using the syntax:

`![fullwidth](https://vimeo.com/253898691)`

![fullwidth](https://vimeo.com/253898691)


---

[Back to Home](:@Home)
