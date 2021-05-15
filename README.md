# smartdown-gallery

Example Smartdown documents and associated resources that demonstrate various Smartdown features and serve as raw material for other Smartdown demos.

Gallery of Smartdown examples

See [Smartdown README](https://smartdown.github.io/smartdown/#README) for more info.

## Release History

- **0.0.1** Initial release to verify NPM publication
- **0.0.2** Adds smartdown README. Removes Debug.md.
- **0.0.3** Adds P5JS Global Mode Example.
- **0.0.4** Updates examples to support Smartdown 0.0.76 and dynamic imports, D3v5, P5JS Global syntax, and more.
- **0.0.5** Updates examples to support SD 0.0.77
- **0.0.6** Adds smartdown.use Externals examples. Adds Brython examples. Removes duplicate John Gruber quotation.
- **0.0.7** Extend Brython example to show integration with JS. Add smartdown.include examples to Extensions.md. Change smartdown.use to smartdown.import
- **0.0.8** - Add VideoAPI.md experiment with YouTube API.
- **0.0.9** - Add example for dc.fs. Clarify dynamic UMD example and make it flashier. Eliminate use of base href tag.
- **0.0.10** - Fix bad path in index.html.
- **0.0.11** - Update YouTube cloud example to deal with D3V5. Fix Cells example to URIEncode spaces in URLs. Fix Cuneiform.md example so that the Glyphs are referenced via the correct gallery path. Use correct gallery path for the .mp3 example in Video.md.
- **0.0.12** - Fix Math.md so that the table syntax example is properly shown. Enhance Markdown.md to illustrate code highlighting better.
- **0.0.13** - Add examples of email addresses and autolinking to ensure they are not improperly autolinked. Add MD table example with left/right/center justification.
- **0.0.14** - Eliminate leftover HTML entity debugging example from Math.md. Adjust index.html to deal with new smartdown.site file structure.
- **0.0.15** - Add examples of image size control.
- **0.0.16** - Add Disclosable example.
- **0.0.17** - REALLY add Disclosable example.
- **0.0.18** - Add improved Disclosable example, with documentation on the feature.
- **0.0.19** - Use different iframe demo for Disclosables, to avoid referrer error from WikiPedia.
- **0.0.20** - Fix P5JS Tickle example to work with smartdown.baseURL.
- **0.0.21** - Fix Disclosables example to not use iframe, so that content blockers are not triggered.
- **0.0.22** - Add Emoji examples to Markdown doc and Disclosables doc.
- **0.0.23** - Add Decorations card and rearrange Home card to better reflect the basic vs advanced vs experimental capabilities of smartown. Assume smartdown v0.0.111.
- **0.0.24** - Assume SD 0.0.113 and update Decoration/Disclosable. Adds DislosablesPlus.md. Link to Decoration/Disclosables from Home and vice versa.
- **0.0.25** - Fixes Decorations.md to use smartdown.showDisclosure.
- **0.0.26** - Clearer examples/tests of Cells and Reactivity. Create a separate Data.md page to demonstrate calc_handlers and data tubes and explain CORS a little. (rough draft). Assumes SD 0.0.116+.
- **0.0.27** - Add calc_handlers to index.html.
- **0.0.28** - OpenJSCAD Examples. Enhance Decoration/Disclosable examples. Assumes SD 0.0.117+.
- **0.0.29** - Assumes SD 0.0.118+. Adjust GIF Video examples to deal with new defaults for using Gifffer. Increase header level for all cards, to reduce vertical space usage. Remove P5Play example. Separate Video example from GIF/audio by creating GIFAndAudio example. Rearrange layout of Home.md to be more sensible. Adjust Badges demo to point to Smartdown. Adjust Mobius example to highlight the picture first, parameters second. Improve documentation of Video and GIF dimensioning. Adjust Madlibs example to use Decoration vs blockquote to highlight the MadLib. Adjust header levels throughout to enable more easy embedding into impress.
- **0.0.30** - Assumes SD 1.0.0+. Change URLs to point to smartdown.github.io rather than smartdown.site or doctorbud.com, where that makes sense. Use smartdown@quantumclay.com for email feedback.
- **0.0.31** - Assumes SD 1.0.3+. Adds abc examples and abcmidi examples based upon SD 1.0.3 support for abcjs.
- **0.0.32** - Assumes SD 1.0.4+. Enhances Music.md examples.
- **0.0.33** - Assumes SD 1.0.5+. Streamline Music.md examples with shorter songs and better documentation.
- **0.0.34** - Adds jsPysch examples. Assumes SD 1.0.6. Updates various URLs and adds https where appropriate.
- **0.0.35** - Improves jsPsych example code and adds jsPsych Flanker experiment.
- **0.0.36** - Repairs lost edits to JSPsych.md.
- **0.0.37** - Assumes SD 1.0.8. Enhance mobile-awareness of jsPsych examples. Improve jsPsych examples. Updated Cuneiform QC logo slightly. Add 'icon' size image example. Adjust LDF example to accommodate changes?/bugs? in WikiData LDF service.
- **0.0.38** - Enhance LDF example to work with Comunica and Client.js against Wikidata.
- **0.0.39** - Document LDF examples better. Improve jsPsych documentation.
- **0.0.40** - Improve jsPsych examples. Use 6.1.0 via jsDelivr. Fix LDF example so that timings are sequential and a table of comparisons is generated.
- **0.0.41** - SD 1.0.10. Fix issue where OTF font used in P5JS demo was unavailable. Adjust spacing in LDF demo now that DOMPurify issue in Smartdown has been fixed.
- **0.0.42** - SD 1.0.13. Add Inlines.md. Fix Data.md to use working CORS proxy.
- **0.0.43** - SD 1.0.14. Fix LDF example to fail gracefully amidst WDQS failure. Enhance Disclosables examples to include a more exhaustive coverage of the available trigger options, and to exercise different content types within a Disclosable. Use thumbnail size for Phobos tooltip.
- **0.0.44** - SD 1.0.15. Fixes Vimeo thumbnail example to match fullwidth example. Fixes use of broken proxy in VideoAPI.md.
- **0.0.45** - SD 1.0.17. Exercises autoplay hiding of source. Adds Kiosk.md.
- **0.0.46** - SD 1.0.18. Improves documentation of Disclosables.
- **0.0.47** - SD 1.0.19. Fixes Crystal2.ogg reference to point to a gallery-hosted resource. Adds use of p5.userStartAudio(). Improves Kiosk example.
- **0.0.48** - Adjusts API key for YouTube.md example.
- **0.0.49** - Adds Typescript.md examples. SD 1.0.21. Adjust proxy for Data.md (again).
- **0.0.50** - SD 1.0.23. Extends Typescript.md examples. Adds Sankey.md and WordCloud.md examples.
- **0.0.51** - SD 1.0.24. Enhance Typescript examples. Add 'this.sizeChanged' example to Javascript.md. Adjust Stdlib.md to deal with the new Smartdown mechanism for loading stdlib.io.
- **0.0.52** - SD 1.0.25. Improves Javascript.md and Typescript.md examples to use and document the per-playable console feature.
- **0.0.53** - SD 1.0.26. Expand Javascript.md to include issues about async/await. Add async/await example to Typescript.md.
- **0.0.54** - Update LDF.md to indicate WDQS problems. Also correct erroneous references to WQDS.
- **0.0.55** - Adds Crossword.md and exolve support files. SD 1.0.28. Update Extensions.md to use 'latest' CDN versions where possible. Updates SVG() examples to use svg.js 3.x. Adds SVG URL Button examples to SVG.md.
- **0.0.56** - Improves Javascript.md to illustrate different dependOn capabilities and options. Enhance Crosswords.md and supporting exolve-multi.js.
- **0.0.57** - SD 1.0.30. Cleaned up error handling for Crossword.md when a corrupt State is attempted. Added example to Javascript.md to verify that a preset variable will trigger a dependency AND remove the progress bar.
- **0.0.58** - SD 1.0.33. Adds React.md example.
- **0.0.59** - SD 1.0.34. Improves React.md example.
- **0.0.60** - Add solidLoginPopup.html.
- **0.0.61** - SD 1.0.35. Separates Solid example into its own Solid.md. Cleans up docs for React.md. Fixes issue with ldflex@2.8.0 by fixing version to 2.7.0.
- **0.0.62** - SD 1.0.36. Enhances React.md and Solid.md examples. Eliminate unnecessary solidLoginPopup.html in favor of https://solid.community/common/popup.html. Documents new method of syntax vs runtime in playable declarations.
- **0.0.63** - Mathigon/Fermat example. ES6 Example.
- **0.0.64** - Removes erroneous localhost:4000 references from examples. Adds JSXGraph examples. Rearranges text in Inlines.md so that the checkbox and sparkline are visibly closer and related. Enhance SVG.md buttons example to demonstrate calc buttons as well as tunnel buttons. Adds Typescript ES6 Module example. Adds missing Google Maps API key to example in Maps.md.
- **0.0.65** - SD 1.0.40. Add a few examples of relative URLs to Markdown.md.
- **0.0.66** - SD 1.0.41. Add an autocomplete example to Cells.
- **0.0.67** - SD 1.0.42. Adds a GraphvizClickable document to experiment with clickable Graphviz elements.
- **0.0.68** - Clarify Markdown.md to demonstrate URL opening in new tab (default) vs current tab and to demonstrate intra-page links. Fix error in GraphvizClickable.md involving an intra-page link.
- **0.0.69** - Adjust dynamic Markdown example to use a full-width output cell. Label the cards in Multicards.md so that their visible labels match their card ids. Improve examples in Video.md to illustrate passing arguments via URL, including autoplay and start arguments. Adds an (unlinked) VideoNarrow.md card to exercise video width sizing when there is no other content on the page.
- **0.0.70** - Remove hide/ directory from distribution via .gitignore.
- **0.0.71** - Improves/updates stdlib examples. Adds documentation and examples regarding disclosable triggering playable reactions.
- **0.0.72** - Update Google Maps and YouTube V3 API keys. Expand the Inlined.md examples to demonstrate/verify that inline playables work properly with Math and other adjacent content.
- **0.0.73** - Add Filament examples.
