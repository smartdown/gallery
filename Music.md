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

it will render as sheet music and a MIDI player:

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

Smartdown displays both sheet music and MIDI by default. By using the playable types `abcsheet` and `abcmidi`, you can select to display only one of the types. For example, the following will display only the MIDI for the above song:

```abcmidi/playable/autoplay
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

##### The Entertainer

From http://abcnotation.com/tunePage?a=colinhume.com/ABC.txt/0253

###### The Sheet Music:

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

###### The audio, via MIDI:

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

##### Heart of Gold

```abc/playable/autoplay
X: 1
T: Neil Young - Heart of Gold
N: abceed by Thorsongori
M: 4/4
L: 1/8
Q:1/4=250
K:G
z8|z8|
E,2- E,/2z3/2 E4-|E2- E/2z3z/2 E3/2z/2|
D2- D/2z3z/2 E2-|E3/2z/2 D3/2z/2 B,/2z/2A,/2z/2 G,^G,/2z/2|E,4 z2 B,3/2z/2|E3/2z/2 E3/2z2z/2 E3/2z/2|
D2- D/2z3z/2 E2-|E3/2z/2 D3/2z/2 B,/2z/2A,/2z/2 =G,^G,/2z/2|E,3/2z/2 E,3/2z/2 E/2z/2G/2z/2 [B3/2B,3/2]z/2|[d3/2-B3/2-C3/2][d/2-B/2-] [d/2B/2C/2-]Cz/2 c/2z/2B- [BC-]C/2z/2|
[A2-D2-] [A/2D/2-]D3/2 G3/2z/2 [D3/2B,3/2-]B,/2-|[B,4=G,4] z2 G,3/2z/2|E,2- E,/2z3/2 [d3/2-G,3/2]d/2- [d/2B,/2-]B,z/2|[g2C2-] C-[d/2C/2-]C/2 e/2z/2d- [dC-][d/2-C/2]d/2|
[e2-D2-] [e/2D/2-]D3/2 d3/2z/2 [B3/2-D3/2]B/2-|[B2-G,2-] [B/2-G,/2]B3/2 G,2- G,/2z3/2|E,4 [G/2D/2B,/2]z/2[G-D-] [G/2D/2B,/2-]B,/2-[G/2D/2B,/2]z/2|[d/2B/2G/2C/2-]C/2-[d3/2B3/2G3/2C3/2-]C/2-[d/2B/2G/2C/2-]C/2 [d/2B/2G/2]z/2[d-B-G-] [d/2B/2G/2C/2-]C/2-[d/2B/2G/2C/2]z/2|
[c2-A2-F2-D2-] [c/2A/2F/2D/2-]D3/2 [d3/2B3/2G3/2]z/2 [G3/2-D3/2B,3/2-][G/2-B,/2-]|[G4-B,4-G,4] [GB,]z G,3/2z/2|E,2- E,/2z3/2 E,2- E,/2z3/2|E,3/2z/2 E,3/2z/2 E,3/2z/2 B,/2z/2E/2z/2|
D3/2z/2 D3/2z2z/2 E2-|E3/2z/2 D3/2z/2 B,/2z/2A,/2z/2 G,^G,/2z/2|E,2- [B/2-G/2-G/2E,/2][B-G]B/2- [B3/2-G3/2=G,3/2]B/2- [B/2G/2B,/2-]B,z/2|[e4-G4-C4] [eG]B/2z/2 C3/2z/2|
[d2E2D2-] [d/2-F/2-D/2][dF-]F/2- [dF-D-][F-D-] [A/2-F/2D/2]Az/2|[B2-D2-G,2-] [B/2D/2-G,/2-][D3/2-G,3/2] Dz G,3/2z/2|[A2E,2-] [B/2-G/2-E,/2][B-G]B/2- [B3/2-G3/2G,3/2]B/2- [B/2G/2-B,/2-][GB,]z/2|[e3/2G3/2-C3/2-][G/2-C/2-] [e/2-G/2-C/2][eG-]G/2- [e-GC-][e/2C/2-]C/2- [e/2-C/2]ez/2|
[d2-E2D2-] [d/2F/2-D/2]F3/2- [A3/2F3/2-D3/2-][F/2-D/2-] [B/2-F/2D/2]B3/2-|[d2-B2-D2-G,2-] [d/2-B/2D/2-G,/2-][d3/2-D3/2-G,3/2] [dD]z G,3/2z/2|[A2E,2-] [g/2-B/2-G/2-E,/2][g-B-G][g/2-B/2-] [g3/2-B3/2-G3/2G,3/2][g/2-B/2-] [g/2B/2G/2-B,/2-][GB,]z/2|[e2-G2-C2-] [e/2G/2-C/2-][G3/2-C3/2] [e-G]e [d3/2C3/2]z/2|
[c2E2D2-] [d3/2F3/2-D3/2-][F/2-D/2-] [d3/2F3/2D3/2]z/2 [c-A-D][c/2A/2E/2]z/2|[B2-G2-D2-] [B/2G/2-D/2-][G3D3]z/2 [G/2-D/2]G/2-[G/2^D/2]z/2|[E3/2=D3/2-]D/2 E2- [B3/2E3/2]z/2 [A3/2E3/2]z/2|B3/2z/2 [A3/2E3/2]z/2 G3/2z/2 E3/2z/2|
[B3/2-D3/2-G,3/2][B/2-D/2-] [B/2D/2-G,/2-][D-G,]D/2- [e3/2D3/2-]D/2- [d3/2-D3/2-G,3/2][d/2-D/2]|d2- [d3/2-G,3/2]d/2 BG- [GC-]C/2z/2|[c'3/2d3/2C3/2]z/2 [c'3/2d3/2C3/2]z/2 [c'3/2-d3/2-E3/2][c'/2-d/2] [c'3/2-e3/2-E3/2C3/2-][c'/2-e/2-C/2-]|[c'3/2-e3/2-G3/2C3/2-][c'/2-e/2-C/2-] [c'/2-e/2-G/2C/2-][c'/2-e/2-C/2-][c'2-e2-G2-C2-][c'/2e/2G/2-C/2]G/2- [G/2-C/2]G/2[E/2-A,/2]E/2-|
[bdE-C-][c'/2-e/2E/2C/2]c'/2- [c'3/2-d3/2C3/2]c'/2- [c'3/2c3/2]z/2 [b2-d2-G,2-]|[b2-d2-G,2-] [b/2-d/2-G,/2][b3/2-d3/2-] [b/2-d/2-F,/2][b/2d/2-][d/2F,/2]z2z/2|[b3/2-d3/2-E,3/2][b/2-d/2] [b3/2-e3/2-E,3/2][b/2-e/2-] [b3/2-e3/2-B3/2][b/2-e/2-] [b3/2-e3/2-B3/2][b/2-e/2-]|[b3/2-e3/2-B3/2E,3/2][b/2-e/2-] [b/2e/2-A/2-E,/2-][e-AE,]e/2- [e3/2G3/2]z/2 [E3/2F,3/2]z/2|
[g3/2-B3/2-G,3/2][g/2-B/2-] [g/2-B/2G,/2-][g-G,]g/2- [g3/2-e3/2]g/2- [g3/2-d3/2-G,3/2][g/2-d/2-]|[g-d][g-^A] [g/2B/2-G,/2-][B-G,]B3/2G- [GB,-]B,/2z/2|[c'3/2d3/2C3/2]z/2 [c'3/2-d3/2-C3/2][c'/2-d/2-] [c'3/2d3/2E3/2]z/2 [c'3/2-d3/2-E3/2C3/2-][c'/2-d/2C/2-]|[c'3/2-e3/2-G3/2C3/2-][c'/2-e/2-C/2-] [c'/2-e/2-G/2C/2-][c'/2-e/2-C/2-][c'2-e2-G2-C2-][c'/2e/2G/2-C/2]G/2- [G/2-G,/2]G/2-[G/2-A,/2]G/2-|
[bdG-C-][c'/2-e/2G/2C/2]c'/2- [c'3/2-d3/2C3/2]c'/2- [c'3/2c3/2]z/2 [b2-d2-G,2-]|[b4-d4-G,4] [b-dG-][b/2G/2]z/2 [d3/2G3/2F,3/2]z/2|[d3/2-E,3/2]d/2- [d3/2-E,3/2]d2-d/2- [d3/2-B,3/2]d/2|C2- C/2z3/2 [c/2C/2-]C/2-[B3/2-C3/2]B/2z|
[c2-=A2-F2-D2-] [c/2A/2F/2D/2]z3/2 [d3/2B3/2G3/2D3/2-]D/2- [G/2-D/2B,/2-][G3/2-B,3/2-]|[G2-B,2-G,2-] [G/2-B,/2-G,/2][G3/2B,3/2] G,3/2z/2 F,3/2z/2|E,4- [b3/2-g3/2-e3/2-E,3/2][b/2-g/2-e/2-] [b/2g/2e/2-G,/2-][e/2-G,/2][a/2-e/2-A,/2][a/2e/2-]|[b2-e2-C2-] [b/2e/2-C/2-][e3/2-C3/2] [f/2e/2-d/2]e/2-[g-e-d-] [ge-dC-][e/2-C/2]e/2|
[e3/2D3/2-]D/2- [g/2-d/2-B/2-D/2][gdB]z/2 [e3/2c3/2D3/2-]D/2- [d/2B/2D/2]z/2[B-G-]|[B2-G2-G,2-] [B/2G/2G,/2-]G,3/2 [c/2A/2]z3/2 [B/2G/2G,/2-]G,z/2|[b/2g/2E,/2-]E,/2-[b/2g/2E,/2-]E,z/2[d/2B/2]z/2 [d/2B/2G,/2-]G,z/2 [d/2B/2B,/2-]B,/2-[B/2G/2B,/2]z/2|C-[B/2G/2C/2-]C/2- [G3/2E3/2C3/2-]C/2 F3/2z/2 [G3/2E3/2C3/2]z/2|
[A3/2D3/2-]D/2- [G/2D/2]z/2B/2z/2 [c3/2A3/2D3/2-]D/2- [d/2B/2D/2]z/2B-|[B2-G,2-] [B/2G,/2-]G,3/2 [c/2A/2]z/2G- [GG,-]G,/2z/2|E,3/2z/2 E,3/2z4z/2|E,3/2z/2 E,3/2z/2 B,3/2z/2 E3/2z/2|
D3/2z/2 D3/2z2z/2 E2-|E3/2z/2 D3/2z/2 B,/2z/2E,/2z/2 G,^G,/2z/2|[a3/2-g3/2-E,3/2][a/2g/2-] [b3/2-g3/2-G3/2E,3/2][b/2-g/2-] [b-gG-][b/2-G/2]b/2- [b/2G/2-=G,/2-][GG,]z/2|[c'3/2-g3/2-e3/2C3/2][c'/2-g/2-] [c'3/2-g3/2-e3/2C3/2][c'/2-g/2-] [c'3/2g3/2e3/2-]e/2 [d3/2C3/2]z/2|
[f4d4D4] d3/2z/2 [c'3/2e3/2A3/2D3/2]z/2|[b2-d2-B2-G,2-] [b/2-d/2-B/2G,/2-][b3/2-d3/2-G,3/2] [b3/2d3/2B3/2-]B/2- [B/2G,/2-]G,z/2|[g2-E,2-] [g/2-G/2-E,/2][g-G]g/2 [G3/2G,3/2]z/2 [=f3/2G3/2B,3/2]z/2|[g4-e4-C4-] [geC]z e3/2z/2|
[^f4-d4-D4] [fdA-]A/2z/2 [B3/2-D3/2]B/2-|[c'3/2e3/2B3/2-G,3/2-][B/2-G,/2-] [b/2-d/2-B/2G,/2][bd]z/2 [b3/2d3/2G,3/2-]G,/2- [g/2-G/2-G,/2][gG]z/2|[d2E,2-] [e/2-G/2-E,/2][e-G]e/2- [e3/2-G3/2G,3/2]e/2- [e/2G/2-B,/2-][GB,]z/2|[e2-d2-C2-] [e/2d/2C/2-]C3/2 e2 [d3/2C3/2]z/2|
[e2-D2-] [e3/2-d3/2D3/2-][e/2-D/2] [e3/2-d3/2]e/2- [e3/2-A3/2D3/2]e/2|[B3/2-G,3/2]B/2- [B/2G,/2-]G,z/2 B2- [g/2-B/2G,/2-][gG,]z/2|[d3/2-E,3/2]d/2 [e3/2-E3/2E,3/2]e/2- [e3/2-B3/2]e/2- [e3/2-B3/2E,3/2]e/2-|[e3/2-B3/2E,3/2]e/2- [e3/2-A3/2E,3/2]e/2- [eG-]G/2z/2 [E3/2F,3/2]z/2|
[B3/2-G,3/2]B/2- [B/2G,/2-]G,z/2 e3/2z/2 [d-G,]d-|d/2z/2^A [B-G,]B2G- [GB,]z|[c'3/2d3/2C3/2]z/2 [c'3/2d3/2C3/2]z/2 [c'3/2d3/2-E3/2]d/2 [c'-dE-C-][c'/2-e/2-E/2C/2-][c'/2-e/2-C/2]|[c'3/2-e3/2-G3/2C3/2-][c'/2-e/2-C/2-] [c'/2-e/2-G/2C/2][c'/2-e/2-][c'-e-G-] [c'/2-e/2-G/2-G,/2][c'/2e/2G/2-]G [E/2-A,/2]E/2E/2z/2|
[bdC-][c'/2-e/2C/2]c'/2- [c'3/2-d3/2C3/2]c'/2- [c'3/2c3/2]z/2 [b2-d2-G,2-]|[b2-d2-G,2-] [b/2-d/2-G,/2][b2-d2-][b/2d/2]z F,3/2z/2|[d3/2-E,3/2]d/2 [e3/2-E,3/2]e/2- [e-B]e- [e-B][e/2-E,/2]e/2-|[e-BE,-][e/2-E,/2]e/2- [e-=AE,-][e/2-E,/2]e/2- [eG]z [EF,-]F,/2z/2|
[g3/2-B3/2-G,3/2][g/2-B/2-] [g/2-B/2G,/2-][g-G,]g/2- [g-e]g- [g3/2-d3/2-G,3/2][g/2-d/2-]|[g-d][g-^A] [g/2B/2-G,/2-][B-G,]B3/2G- [GB,-]B,/2z/2|[c'3/2d3/2C3/2]z/2 [c'3/2-d3/2C3/2]c'/2- [c'3/2d3/2E3/2]z/2 [c'/2-d/2E/2-C/2-][c'/2-E/2-C/2-][c'/2-e/2-E/2C/2-][c'/2-e/2-C/2]|[c'3/2-e3/2-G3/2C3/2-][c'/2-e/2-C/2-] [c'/2-e/2-G/2C/2][c'/2-e/2-][c'-e-G-] [c'/2-e/2-G/2-G,/2][c'/2e/2G/2-][G/2-A,/2]G/2 [E/2-C/2]E/2[D/2A,/2]z/2|
[b/2-d/2-C/2][b/2d/2][c'/2-e/2A,/2]c'/2- [c'3/2-d3/2C3/2]c'/2 [c3/2C3/2]z/2 [B2-G,2-]|[B4G,4] [g/2d/2B/2]z/2[g/2-d/2-B/2][g/2-d/2-] [gdF,-][d/2-F,/2]d/2|[g3/2-E,3/2]g/2- [g/2E,/2-]E,z/2 e/2z/2d- [dB,-][d/2-B,/2]d/2|[g3/2-C3/2]g/2- [g/2C/2-]Cz/2 e/2z/2d- [dC-][d/2-C/2]d/2|
[e2-D2-] [e/2D/2-]D/2-[dD] e3/2z/2 [d3/2-D3/2]d/2-|[d2-G,2-] [d/2G,/2]z3/2 [G/2F,/2-]F,/2-[G/2F,/2-]F,z3/2|E,3/2z/2 [d3/2G3/2E,3/2]z/2 [g3/2d3/2]z/2 [d/2G/2G,/2-]G,/2[g/2-d/2-A,/2][g/2-d/2-]|[g/2d/2C/2-]C/2-[d/2G/2C/2]z/2 [G3/2D3/2C3/2]z/2 [d/2G/2]z/2[G-D-] [G/2D/2C/2-]C/2-[=A/2C/2]z/2|
[c3/2A3/2D3/2-]D/2- [B3/2G3/2D3/2-]D/2 [c3/2A3/2]z/2 [d/2B/2D/2-]D/2-[B/2-G/2-D/2][B/2-G/2-]|[B2-G2-G,2-] [B/2G/2G,/2]z3/2 [c/2A/2G,/2-]G,/2-[B/2-G/2-G,/2][B/2-G/2-] [BGF,-]F,/2z/2|E,-[d/2E,/2]f/2 [g3/2-E,3/2]g/2- [g/2e/2-E,/2-][e/2-E,/2-][e/2-d/2B/2E,/2-][e/2-d/2E,/2-] [g/2-e/2-d/2-E,/2][ge-d]e/2-|[g3/2e3/2-C3/2]e/2- [e3/2-d3/2C3/2]e/2 e/2z/2d- [dC-][d/2-C/2]d/2|
[e3/2-D3/2]e/2- [e/2D/2-]Dz/2 d3/2z/2 [B3/2-D3/2]B/2-|[B3/2-G,3/2]B/2- [B/2G,/2-]G,z/2 A/2z/2G- [d/2-G/2G,/2-][d/2-G,/2][d/2F,/2]z/2|E,3/2z/2 [e3/2-E,3/2]e/2- [e3/2-B3/2]e/2- [e3/2-B3/2E,3/2]e/2-|[e3/2-B3/2]e/2- [e/2B/2-E,/2-][BE,]z/2 [g3/2-B3/2B,3/2]g/2- [g/2B/2-E/2-][BE]z/2|
[f3/2-A3/2-D3/2][f/2-A/2-] [f/2A/2D/2-]Dz/2 [A3/2-F3/2]A/2- [A/2E/2-]E3/2-|[d3/2-E3/2]d/2 [e3/2-D3/2]e/2- [e/2-B,/2]e/2-[e/2-E,/2]e/2 [d-G,][d/2^G,/2]z/2|[e3/2-E,3/2]e/2- [e3/2-E3/2B,3/2]e/2- [e3/2-B3/2E3/2-][e/2-E/2-] [e3/2-B3/2E3/2-][e/2E/2]|B3/2z/2 [B3/2B,3/2]z/2 [g3/2-B3/2E3/2]g/2- [g/2B/2-E/2-][BE]z/2|
[f3/2-A3/2-D3/2][f/2-A/2-] [f/2-A/2A,/2-][f-A,]f/2- [f3/2A3/2=G,3/2]z/2 [G3/2-E,3/2]G/2-|[d3/2-G3/2E,3/2-][d/2E,/2-] [e/2-E,/2]ez/2 [e/2-A,/2]e/2-[e/2-B,/2]e/2 [d/2-E/2]d/2-[d/2-B,/2]d/2|[e3/2-E3/2]e/2- [e3/2-E,3/2]e/2- [e3/2-G3/2E3/2-][e/2-E/2-] [e/2-G/2-E/2][e-G]e/2|[G3/2E3/2]z/2 [G3/2E3/2]z/2 [g3/2-G3/2]g/2- [g/2G/2-E/2-][GE]z/2|
[f3/2-A3/2-D3/2][f/2-A/2-] [f/2-A/2B,/2-][f-B,]f/2- [f3/2D3/2G,3/2]z/2 [E3/2-E,3/2]E/2-|[G3/2-E3/2-E,3/2][G/2-E/2-] [G/2E/2A,/2]z/2B,/2z/2 [e/2-B/2-D/2][e/2-B/2-][e/2-B/2-B,/2][e/2B/2] [d3/2A3/2E3/2]z/2|[e3/2-B3/2-E,3/2][e/2-B/2-] [e/2B/2B,/2-]B,z/2 [B3/2G3/2-E3/2-][G/2-E/2-] [B/2-G/2-E/2][BG-]G/2-|[B3/2G3/2-E3/2-][G/2-E/2-] [B/2-G/2E/2]B/2-[B/2B,/2-]B,/2 [g3/2-A3/2A,3/2]g/2- [g/2G/2-G,/2-][GG,]z/2|
[g3/2-B3/2-G,3/2][g/2-B/2-] [g/2B/2G,/2-]G,z/2 [b3/2g3/2e3/2]z/2 [d3/2-G,3/2]d/2-|dA [B3/2-G,3/2]B3/2A [G3/2B,3/2]z/2|[c'3/2d3/2C3/2]z/2 [c'/2-d/2C/2-][c'/2-C/2-][c'/2^d/2C/2]z/2 [c'3/2^d3/2-]^d/2 [c'/2-e/2-A/2C/2-][c'/2-e/2-C/2-][c'-e-B-C-]|[c'2-e2-B2-C2-] [c'/2-e/2-B/2-C/2][c'2-e2-B2-][c'/2e/2-B/2][e/2A/2-]A/2 [G/2-G,/2]G/2-[G/2A,/2]z/2|
[b/2=d/2-A/2-C/2-][d/2A/2C/2-][c'/2-e/2B/2-C/2][c'/2-B/2-] [c'-d-BC-][c'/2-d/2A/2C/2]c'/2- [c'3/2c3/2G3/2]z/2 [b2-d2-G2-D2-B,2-G,2-]|[b2-d2-G2-D2-B,2-G,2-] [b/2-d/2-G/2D/2-B,/2-G,/2-][b3-d3-D3B,3G,3-][b2-d2-G,2-][b/2-d/2-G,/2-]|[b8-d8-G,8-]|[b8-d8-G,8-]|
[b4-d4-G,4-] [b3/2-d3/2G,3/2-][b2-G,2-][b/2-G,/2-]|[b8G,8]| 
```


#### abc script via URL

We can use Smartdown's *image URL* syntax to refer to an `.abc` file and embed sheet music, midi, or both.

```markdown
![abcsheet](/resources/UncleJohnsBand.abc)
```

![abcsheet](/resources/UncleJohnsBand.abc)

---

```markdown
![abcmidi](/resources/UncleJohnsBand.abc)
```

![abcmidi](/resources/UncleJohnsBand.abc)

---

```markdown
![abc](/resources/UncleJohnsBand.abc)
```

![abc](/resources/UncleJohnsBand.abc)

---


```markdown
![](/resources/UncleJohnsBand.abc)
```

![](/resources/UncleJohnsBand.abc)


#### Dynamic abc script (with Lyrics)

Let's place the text of an 'abc' script into a variable, and then have a cell render that as sheet music. For kicks, we'll use a version of Amazing Grace that has lyrics so we can see how `abcjs` renders the lyrics

```javascript/playable/autoplay
const dynamicABC =
`
X: 1
T:Amazing Grace
C:Traditional (Scotland); Lyrics: John Newton
M:3/4
L:1/4
Q:1/4=80
K:D
|A,|"D"D2 F|"D7"F2 E|"G"F2 B,
w:1.A-maz-ing grace, how sweet the
w:2.Twas grace that taught my heart to
w:3.Through ma-ny dan-gers, toils and
w:4.When we've been there ten thou-sand
|"D"A,2 A,|D2 F|"Bm"F2 E|"A7"A3-
w:sound, that save a wretch like me!
w:fear, and grace my fears re-lieved;
w:snares, I have al-rea-dy come;
w:years, bright shin-ing as the sun;
|A2 F|"D"A2 F|"D7"D2 B,|"G"D2 B,
w:_I once was lost but now am
w:_how pre-cious did that grace ap-
w:_'twas grace that brought me safe thus
w:_we've no less days to sing God's
|"D"A,2 A,|"Bm"D2 F|"A7"F2 E
w:found, was blind, but now I
w:pear, the hour I first be
w:far, and grace will lead me
w:praise, than when we first be-
|"D"D3-|!Fermata!D2:|
w:see._
w:lieved._
w:home._
w:gan._
W:Repeat first verse
`;
smartdown.setVariable('DynamicABC', dynamicABC);
smartdown.setVariable('DynamicABCSheet', dynamicABC);
smartdown.setVariable('DynamicABCMidi', dynamicABC);
```

[DynamicABC (both)](:!DynamicABC|abc)

[DynamicABC Sheet Music](:!DynamicABCSheet|abcsheet)

[DynamicABC MIDI](:!DynamicABCMidi|abcmidi)

---

[Back to Home](:@Home)
