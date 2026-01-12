
let synth = new Tone.Synth().toDestination();

async function generate(){
await Tone.start();
const mood = document.getElementById("mood").value;
const res = await fetch("/generate",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({mood})
});
const notes = await res.json();
play(notes);
}

function play(notes){
let i=0;
Tone.Transport.scheduleRepeat(time=>{
synth.triggerAttackRelease(notes[i%notes.length],"8n",time);
i++;
},"4n");
Tone.Transport.start();
}

function stopMusic(){
Tone.Transport.stop();
Tone.Transport.cancel();
}
