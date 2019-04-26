### Smartdown Disclosables

Smartdown now provides an experimental feature that we are calling *Disclosables*, which enables an author to *stage* the content that a reader sees, and enables the reader to control how much detail they wish to see. This feature is one mechanism Smartdown uses to provide [**progressive disclosure**](::progdisc/tooltip), which can help make [Explorable Explanations](http://worrydream.com/ExplorableExplanations/) *rich* but *manageable*.

# :::: progdisc
[Progressive Disclosure](https://en.wikipedia.org/wiki/Progressive_disclosure) is a design technique that maintains the user's focus and attention by reducing the amount of data presented to the user and thereby reduces their cognitive load.
# ::::

The key elements of this feature are the *disclosable*, which is Smartdown content that is hidden by default; and the *trigger*, which is the means by which a reader can control the visibility of the disclosable.


#### Creating a Disclosable

A section of your Smartdown content can be marked as a disclosable by sandwiching the content between special markdown headers containing the characters `::::`. For example, here is how a disclosable named `MyDisclosable` might be declared:

```markdown
# :::: MyDisclosable

This is the hidden content for the disclosable called `MyDisclosable`

- The content is hidden by default
- Any type of *Smartdown* may be contained in a disclosable

# ::::
```

Notice that the first section header contains `::::` and the disclosable name, `MyDisclosable`. The disclosable declaration is completed with an empty `::::` header with no name.


#### Creating a Trigger

The trigger for a disclosable specifies the way a disclosable will be revealed or hidden. When we define a trigger we also get to specify many aspects of how the disclosable will be displayed and what it will look like.  We'll begin with two very simple ways to define triggers.

- A *Button* trigger, will toggle the visibility of the disclosable content when clicked. This content will remain visible until the user toggles the button.  The content of the disclosable will be displayed inline with the rest of your text at the position where the disclosable is defined.
- A *Tooltip* trigger, will reveal the disclosable content when hovered over or tapped. This content will appear beneath the trigger and it will remain visible until the user moves their mouse away from the trigger or taps it again. In other words, Tooltips are *spring-loaded* and will deactivate when the user ceases to interact with the trigger.

Both triggers are specified using a variant of Markdown's link syntax that contains a user-visible label and the disclosable's name. For example, a Button-style trigger for the above example `MyDisclosable` would be declared as:

```markdown
If you click [here :rainbow:](::MyDisclosable) you will reveal the hidden content. Clicking again will hide the content.
```

Similarly, we can declare a Tooltip-style trigger by adding the `/tooltip` suffix to the trigger URL, as below:

```markdown
If you hover your mouse over [here](::MyDisclosable/tooltip) you will reveal the hidden content until you move your mouse away.
```


#### Shared Disclosables

A given disclosable can have more than one trigger associated with it. For example, below is a working example of the above:

> If you hover your mouse over [here](::MyDisclosable/tooltip) you will reveal the hidden content until you move your mouse away.
>
> If you click [here :rainbow:](::MyDisclosable) you will reveal the hidden content. Clicking again will hide the content.

# :::: MyDisclosable

This is the hidden content for the disclosable called `MyDisclosable`

- The content is hidden by default
- Any type of *Smartdown* may be contained in a disclosable
- I wonder if Emoji work here? :four_leaf_clover: :globe_with_meridians:
# ::::


#### Controlling the Size and Placement of Button Triggers

If you place the trigger on a header line, you can control the size of the button. For example, the syntax
```
## [My Disclosable](::MyDisclosableSection)
```

will result in a level 2 section header labeled `My Disclosable` that will reveal the disclosable content for `MyDisclosableSection`. Typically, you would declare the disclosable immediately after such a section button. For example:

```markdown
## [My Disclosable](::MyDisclosableSection)
#### :::: MyDisclosableSection

This is the disclosable content.

# ::::

```

which renders as:

## [My Disclosable](::MyDisclosableSection)
#### :::: MyDisclosableSection

This is the disclosable content.

# ::::

#### Rich Content Disclosables

Typical usage of the disclosable feature is to provide a tooltip or some detail to an explanation. This content can be *any* Smartdown content, and can be interacted with as ordinary Smartdown content. The following example shows a disclosable that can be triggered via a [**tooltip**](::AboutMarkdown/tooltip) or via a [**button**](::AboutMarkdown), and has its own rich Smartdown structure.

# :::: AboutMarkdown

## About Markdown

Although there are several variants and extensions of Markdown, the ubiquity of the core Markdown syntax makes it a worthwhile and minimal investment to learn. Smartdown is based primarily upon GitHub-flavored Markdown, which is supported widely on GitHub, and also by many other Markdown tools and sites.

Some resources that may help:

- [John Gruber's Markdown from 2004](https://daringfireball.net/projects/markdown/)
- [GitHub's *Mastering Markdown*](https://guides.github.com/features/mastering-markdown/)

# Level 1 header [Link Test](https://en.wikipedia.org/wiki/Markdown)
## Level 2 header  $E=mc^2$
### Level 3 header `var a = 50; // Code`
#### Level 4 header `var a = 50; // Smaller Code`
##### Level 5 header $E=mc^2$
###### Level 6 header [Link Test](https://en.wikipedia.org/wiki/Markdown)

# ::::

The above disclosable is defined as:

```markdown
# :::: AboutMarkdown

## About Markdown

Although there are several variants and extensions of Markdown, the ubiquity of the core Markdown syntax makes it a worthwhile and minimal investment to learn. Smartdown is based primarily upon GitHub-flavored Markdown, which is supported widely on GitHub, and also by many other Markdown tools and sites.

Some resources that may help:

- [John Gruber's Markdown from 2004](https://daringfireball.net/projects/markdown/)
- [GitHub's *Mastering Markdown*](https://guides.github.com/features/mastering-markdown/)

# Level 1 header [Link Test](https://en.wikipedia.org/wiki/Markdown)
## Level 2 header  $E=mc^2$
### Level 3 header `var a = 50; // Code`
#### Level 4 header `var a = 50; // Smaller Code`
##### Level 5 header $E=mc^2$
###### Level 6 header [Link Test](https://en.wikipedia.org/wiki/Markdown)

# ::::
```

#### Triggers with Media

We can build triggers that utilize Smartdown's media syntax. For example, we can have an image trigger that reveals more detail via a disclosable. For example, we can consider one of Mars's satellites, [Phobos](::MoreAboutPhobos/tooltip).

[Phobos ![thumbnail](https://solarsystem.nasa.gov/system/content_pages/main_images/428_phobosincolor_pia10369.jpg)](::MoreAboutPhobos)

# :::: MoreAboutPhobos

[Phobos in Orbit around Mars](https://mars.nasa.gov/resources/8823/phobos-in-orbit-around-mars/)

![](https://mars.nasa.gov/system/downloadable_items/40137_animated-nasa-hubble-martian-moon-orbiting-mars.gif)

# ::::


---

[Back to Home](:@Home)
