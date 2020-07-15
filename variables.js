let workerID = prompt( 'Subject ID' );

let handedness =prompt("Are you right or left handed?");

var audio = ["stim/50msec.wav"];

let stimuli;

let j=0;

// creates the html code to be placed in the countdown object for displaying the countdown
countdownTrial  = [];
for (let k = 10; k > 0; k--){
    countdownTrial.push("<p style='text-align:center; color:white; font-size:30px'>" + k + "</p>")
}
    
// adds sound to the countdown stimuli to be passed to the countdown object
countdown_stim = [];
for (let i = 0; i < 10; i++){
    countdown_stim.push({stimulus: countdownTrial[i], sound: audio},)
}