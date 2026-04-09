document.addEventListener("keydown", (e) => {

    let key = (e.code === "Space") ? "space" : e.key.toLowerCase();
    let button = document.getElementById(key);

    if (!button) return;

    //color mapping for keys
    let colors = {
       q:"red", w:"blue", e:"green", r:"orange", t:"purple",
  y:"pink", u:"cyan", i:"gold", o:"lime", p:"magenta",
  a:"teal", s:"brown", d:"coral", f:"violet", g:"skyblue",
  h:"salmon", j:"khaki", k:"plum", l:"turquoise",
  z:"yellow", x:"lightgreen", c:"lightblue",
  v:"lightcoral", b:"lightpink", n:"lightgray", m:"lightseagreen",
  space:"black"
    };

    // color effect
    button.style.backgroundColor = colors[key] || "orange";
    setTimeout(() => button.style.backgroundColor = "", 200);

    // sound play
    let soundId = key === "space" ? "key-space" : "sound" + key.toUpperCase();
    let sound = document.getElementById(soundId);

    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
});