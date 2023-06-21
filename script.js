var context = null;
var o = null; // oscilator
var g = null; //Gain

function play(frequency) {
  o = context.createOscillator();
  g = context.createGain();
  o.type = "triangle";
  o.connect(g);
  o.frequency.value = frequency;
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
}

var notes = document.querySelectorAll("a");
notes.forEach((n) => {
  n.addEventListener("click", () => {
    if (context == undefined) {
      context = new AudioContext();
    }
    play(n.getAttribute("data-note"));
  });
});

document.addEventListener("keyup", (e) => {
  if (context == undefined) {
    context = new AudioContext();
  }
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 65:
      play(261.6);
      break;
    case 83:
      play(293.7);
      break;
    case 68:
      play(329.6);
      break;
    case 70:
      play(349.2);
      break;
    case 71:
      play(392.0);
      break;
    case 72:
      play(440.0);
      break;
    case 74:
      play(493.9);
      break;
    case 75:
      play(523.3);
      break;
    case 76:
      play(587.3);
      break;
    case 186:
      play(659.3);
      break;
    // diyezler
    case 87:
      play(277.2);
      break;
    case 69:
      play(311.1);
      break;
    case 84:
      play(370.0);
      break;
    case 89:
      play(415.3);
      break;
    case 85:
      play(466.2);
      break;
    case 79:
      play(554.4);
      break;
    case 80:
      play(622.3);
      break;
  }
});

/*

O C	    C#	  D	    Eb	  E	    F	    F#	  G	    G#	  A	    Bb	  B
0	16.35	17.32	18.35	19.45	20.60	21.83	23.12	24.50	25.96	27.50	29.14	30.87
1	32.70	34.65	36.71	38.89	41.20	43.65	46.25	49.00	51.91	55.00	58.27	61.74
2	65.41	69.30	73.42	77.78	82.41	87.31	92.50	98.00	103.8	110.0	116.5	123.5
3	130.8	138.6	146.8	155.6	164.8	174.6	185.0	196.0	207.7	220.0	233.1	246.9
4	261.6	277.2	293.7	311.1	329.6	349.2	370.0	392.0	415.3	440.0	466.2	493.9
5	523.3	554.4	587.3	622.3	659.3	698.5	740.0	784.0	830.6	880.0	932.3	987.8
6	1047	1109	1175	1245	1319	1397	1480	1568	1661	1760	1865	1976
7	2093	2217	2349	2489	2637	2794	2960	3136	3322	3520	3729	3951
8	4186	4435	4699	4978	5274	5588	5920	6272	6645	7040	7459	7902

*/
