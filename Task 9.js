let body = document.querySelector('body');
let speaker = document.querySelector('.note-indicator');
let correctNum = document.querySelector('.right');
let incorrectNum = document.querySelector('.wrong');
let info = document.querySelector('p');

let randoNote = (Math.floor(Math.random()*13));

let notePlayed = false;

let piano = document.querySelector('.piano');

let keyC = document.querySelector(".audio-C");
let keyCs = document.querySelector(".audio-Cs");
let keyD = document.querySelector(".audio-D");
let keyDs = document.querySelector(".audio-Ds");
let keyE = document.querySelector(".audio-E");
let keyF = document.querySelector(".audio-F");
let keyFs = document.querySelector(".audio-Fs");
let keyG = document.querySelector(".audio-G");
let keyGs = document.querySelector(".audio-Gs");
let keyA = document.querySelector(".audio-A");
let keyBb = document.querySelector(".audio-Bb");
let keyB = document.querySelector(".audio-B");
let notes = [keyC,keyCs,keyD,keyDs,keyE,keyF,keyFs,keyG,keyGs,keyA,keyBb,keyB];

let inputC = document.querySelector(".e");
let inputCs = document.querySelector(".ds");
let inputD = document.querySelector(".d");
let inputDs = document.querySelector(".cs");
let inputE = document.querySelector(".c");
let inputF = document.querySelector(".b");
let inputFs = document.querySelector(".as");
let inputG = document.querySelector(".a");
let inputGs = document.querySelector(".gs");
let inputA = document.querySelector(".g");
let inputBb = document.querySelector(".fs");
let inputB = document.querySelector(".f");
let keyInput = [inputC,inputCs,inputD,inputDs,inputE,inputF,inputFs,inputG,inputGs,inputA,inputBb,inputB];

let winsNum = 0;
let lossesNum = 0;

function playNote(note) {
  notes[note].play();
  notePlayed = true;
  noteClick();
}

function clickNote() {
  playNote(randoNote);
}

function keyOfC(e) {
  if (notePlayed == true) {
    if (randoNote == e) {
      winsNum += 1;
      correctNum.textContent = (winsNum);
      info.textContent = "Correct!";
      randoNote = (Math.floor(Math.random()*13));
      notePlayed = false;
      body.classList.add("flash-back");
      setTimeout(function(){
      body.classList.remove("flash-back");
      }, 4000);
    } else {
      lossesNum += 1;
      incorrectNum.textContent = (lossesNum);
      info.textContent = "Incorrect, try again.";
    }
  }
}

function noteClick() {
  if (notePlayed == true) {
    inputC.onclick = function() {
      keyOfC(0);
    };
    inputCs.onclick = function() {
      keyOfC(1);
    };
    inputD.onclick = function() {
      keyOfC(2);
    };
    inputDs.onclick = function() {
      keyOfC(3);
    };
    inputE.onclick = function() {
      keyOfC(4);
    };
    inputF.onclick = function() {
      keyOfC(5);
    };
    inputFs.onclick = function() {
      keyOfC(6);
    };
    inputG.onclick = function() {
      keyOfC(7);
    };
    inputGs.onclick = function() {
      keyOfC(8);
    };
    inputA.onclick = function() {
      keyOfC(9);
    };
    inputBb.onclick = function() {
      keyOfC(10);
    };
    inputB.onclick = function() {
      keyOfC(11);
    };
  } else {
    none;
  }
}



speaker.onclick = clickNote;

console.log(randoNote);
