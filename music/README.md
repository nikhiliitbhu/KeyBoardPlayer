# Music Folder - Where to Get Instrument Sounds

The `music` folder is set up to store 27 different musical instrument sounds. Here are several ways to obtain free or royalty-free audio files:

## Free Audio Resources:

### 1. **Freesound.org**
- Search for individual instruments (piano, guitar, violin, etc.)
- Download MP3 or WAV files
- License: Various Creative Commons licenses

### 2. **Pixabay Music**
- Free background music and instrument sounds
- No attribution required
- https://pixabay.com/music/

### 3. **Zapsplat**
- Thousands of free sound effects
- https://www.zapsplat.com/

### 4. **BBC Sound Effects Library**
- Free to download and use
- http://bbcsfx.acropolis.org.uk/

### 5. **OpenGameArt.org**
- Free music and sound effects for games
- Various licenses available

## 27 Instrument Suggestions:
1. Piano
2. Guitar (Acoustic)
3. Guitar (Electric)
4. Violin
5. Cello
6. Flute
7. Clarinet
8. Saxophone
9. Trumpet
10. Trombone
11. French Horn
12. Tuba
13. Drums (Bass Drum)
14. Drums (Snare)
15. Drums (Hi-Hat)
16. Timpani
17. Xylophone
18. Marimba
19. Harp
20. Synthesizer
21. Organ
22. Accordion
23. Harmonica
24. Banjo
25. Mandolin
26. Bell
27. Gong

## How to Name Files:
Save files as: `1_piano.mp3`, `2_guitar_acoustic.mp3`, `3_guitar_electric.mp3`, etc.

## Using with JavaScript:
```javascript
const sounds = {
    'q': './music/1_piano.mp3',
    'w': './music/2_guitar_acoustic.mp3',
    // ... etc
};

// Play sound
const audio = new Audio(sounds['q']);
audio.play();
```
