### Music, abc-notation, and MIDI

I recently learned about [abc notation](https://en.wikipedia.org/wiki/ABC_notation), which enables a simple text description that can be turned into sheet music (or even MIDI). I've adopted a wonderful library, [abcjs](https://abcjs.net) which I've made available via Smartdown.

Basically, you can take an abc-script like:


```abc
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|"Em"DEFD E2:|
|:gf|"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|
"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|"Em"DEFD E2:|
```

and by using the Smartdown notation:

````markdown
```abc/playable
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|"Em"DEFD E2:|
|:gf|"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|
"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|"Em"DEFD E2:|
```
````

it will render as sheet music.

I haven't expanded beyond this initial demo yet, and have yet to explore the MIDI possibilities, but I wanted to give this a test drive.


#### Literal abc script

```abc/playable/autoplay
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|"Em"DEFD E2:|
|:gf|"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|
"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|"Em"DEFD E2:|
```


#### The Entertainer

From http://abcnotation.com/tunePage?a=colinhume.com/ABC.txt/0253

##### Sheet Music

```abc/playable/autoplay
X:254
T:The Entertainer
C:Scott Joplin, 1902, arranged Colin Hume
L:1/8
M:2/2
S:Colin Hume's website,  colinhume.com  - chords can also be printed below the stave.
Q:1/2=76
%%MIDI chordname dim 0 3 6 9
N:For the dance "The Heathfield Rag" by Colin Hume
K:C
P:Intro
[| d'e'c'a-abg2 | decA-ABG2 | DECA,-A,B,A,_A, | G,2 z2 [G,B,DG]2 ||
P:Tune 1
|: D^D | "C"Ec-cE "C7"c2Ec- | "F"c4- "C/E"ccd^d | "C"ecde- "G7"eBd2 | "C"c6 D^D |
"C"Ec-cE "C7"c2Ec- | "F"c4- "C/E"c2AG | "D7"^FAce- "/"edcA | "G"d6 "G7"D^D |
"C"Ec-cE "C7"c2Ec- | "F"c4- "C/E"ccd^d | "C"ecde- "G7"eBd2 | "C"c6 cd |
"C"ecde- "C7"ecdc | "F"ecde- "Fm"ecdc | "C/G"ecde- "G7"eBd2 | "C"c6 :|
P:Tune 2
|: EF^F | "C"G2AG- "/"GEF^F | "C"G2AG- "C7"GECG, | "F"A,B,CD "Fm"EDCD | "C"G,4- "/"G,EF^F |
"C"G2AG- "/"GEF^F | "C"G2AG- "/"GGA^A | "D7"BB-BB- "/"BA^FD | "G"G4-Gef^f |
"C"g2ag- "/"gef^f | "C"g2ag- "C7"gecG | "F"ABcd "Fm"edcd | "C"c4- "C7"cG^FG |
"F"c2Ac- "Cdim/F#"cAcA | "C/G"Gceg- "Am"gecG | "D7"A2 c2 "G7"ed-dc- | "C"c4 "/"z :|
```

##### MIDI

```abcmidi/playable/autoplay
X:254
T:The Entertainer
C:Scott Joplin, 1902, arranged Colin Hume
L:1/8
M:2/2
S:Colin Hume's website,  colinhume.com  - chords can also be printed below the stave.
Q:1/2=76
%%MIDI chordname dim 0 3 6 9
N:For the dance "The Heathfield Rag" by Colin Hume
K:C
P:Intro
[| d'e'c'a-abg2 | decA-ABG2 | DECA,-A,B,A,_A, | G,2 z2 [G,B,DG]2 ||
P:Tune 1
|: D^D | "C"Ec-cE "C7"c2Ec- | "F"c4- "C/E"ccd^d | "C"ecde- "G7"eBd2 | "C"c6 D^D |
"C"Ec-cE "C7"c2Ec- | "F"c4- "C/E"c2AG | "D7"^FAce- "/"edcA | "G"d6 "G7"D^D |
"C"Ec-cE "C7"c2Ec- | "F"c4- "C/E"ccd^d | "C"ecde- "G7"eBd2 | "C"c6 cd |
"C"ecde- "C7"ecdc | "F"ecde- "Fm"ecdc | "C/G"ecde- "G7"eBd2 | "C"c6 :|
P:Tune 2
|: EF^F | "C"G2AG- "/"GEF^F | "C"G2AG- "C7"GECG, | "F"A,B,CD "Fm"EDCD | "C"G,4- "/"G,EF^F |
"C"G2AG- "/"GEF^F | "C"G2AG- "/"GGA^A | "D7"BB-BB- "/"BA^FD | "G"G4-Gef^f |
"C"g2ag- "/"gef^f | "C"g2ag- "C7"gecG | "F"ABcd "Fm"edcd | "C"c4- "C7"cG^FG |
"F"c2Ac- "Cdim/F#"cAcA | "C/G"Gceg- "Am"gecG | "D7"A2 c2 "G7"ed-dc- | "C"c4 "/"z :|
```


#### Dynamic abc script

Let's place the text of an 'abc' script into a variable, and then have a cell render that as sheet music.


```javascript/playable/autoplay
const dynamicABC =
`
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|"Em"DEFD E2:|
|:gf|"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|
`;
smartdown.setVariable('DynamicABC', dynamicABC);
```

[DynamicABC Sheet Music](:!DynamicABC|abc)

[DynamicABC MIDI](:!DynamicABC|abcmidi)
