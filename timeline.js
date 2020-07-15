/* create timeline */
let timeline = [];

/* define welcome message trial */
let welcome = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white; font-size:18px">Welcome to the last part of the FINGER TAPPING experiment!</p>' + '<br>' + '<p style="color:white; font-size:18px">Press the SPACEBAR to continue.</p>', //by default, jsPysch is white background and white text
    choices: [32],
    // on_load: checkHandedness(),
};


/* define instructions trial */
let instructions_1 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white; font-size:18px">Just like last time, your goal is to tap at the same speed as the tone you hear.</p>' +
    '<p style="color:white; font-size:18px">However, now when tapping, sometimes the tone will be slow and sometimes the tone will be fast.</p>' +
    '<p style="color:white; font-size:18px">When you see "Slow Tapping" you will be tapping along with a slower pace.</p>' +
    '<p style="color:white; font-size:18px">When you see "Fast Tapping" you will be tapping along with a faster pace.</p>' +
    '<p style="color:white; font-size:18px">You will only tap with the hand that you use when writing. Use the SPACEBAR to tap.</p>' + '<br>' +
    '<p style="color:white; font-size:18px">Press the 1 key to continue the instructions.</p>',
    choices: [49], //without this, it can be any keyboard response
};


let instructions_2 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white; font-size:18px">When each trial begins, a count down from 10 will start that counts down at the same pace that you will be tapping. These are practice taps and you should tap along with them to get the right pace.</p>' + '<p style="color:white; font-size:18px">Each number from 10 to 1 is accompanied by the same tone that you will try and tap along with during the trial. So just tape along with every tone.</p>' + '<br>' + 
    '<p style="color:white; font-size:18px">Press the 1 key to continue.</p>',
    choices: [49]
};


let instructions_3 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white; font-size:18px">After the count down, you will see a "+" symbol with the tone.</p>' + 
    '<p style="color:white; font-size:18px">When you see the "+" symbol, listen carefully and continue tapping the SPACEBAR at the same rate with the tone.</p>' + '<br>' + '<p style="color:white; font-size:18px">Press the 1 key to start the first trial.</p>',
    choices: [49]
};

let instructions_4 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white; font-size:18px">After a number of taps, the tone will stop.</p>' + 
    '<p style="color:white; font-size:18px">You should continue tapping at the same rate.</p>'
    + 
    '<p style="color:white; font-size:18px">Do your best to keep tapping at the same rate as the tone.</p>' + '<br>' + '<p style="color:white; font-size:18px">Do you have any questions?</p>' + '<br>' + '<p style="color:white; font-size:18px">Press the 1 key to start the first trial.</p>',
    choices: [49]
};

/* SLOW TAPPING OBJECTS */

let getReadySlow = { 
    type: 'html-button-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">Slow Tapping</p>' + '<p style="color:white; font-size:30px">GET READY!</p>',
    button_html: '<button id="countdownPrompt" style = "outline:none; border:none; background-color:gray" onclick="countdown()" onkeypress="countdown()"></button>', //7.15.20 this used to have START in it which was displayed for some reason
    choices: jsPsych.NO_KEYS, //Spacebar
    trial_duration: 5000,
    on_load: function() {
    document.getElementByID("countdownPrompt").focus() // getElementByID is camel case variable naming
    }
}

let countDownSlow = { 
    type: 'audio-keyboard-response', //html is the most versatile. Use html-keyboard-response and stuff as many things in it as possible
    stimulus: audio,
    prompt: function(){
        return countdownTrial[j];
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 500,
    on_finish: function(){
    j++
    }
}

let tapToneSlow = { // Collects responses for tone paced tapping for the first 250 ms
    type: "audio-keyboard-response",
    choices: [32],
    response_ends_trial: false,
    trial_ends_after_audio: false,
    trial_duration: 250,
    stimulus: "stim/50msec.wav",
    on_finish: function (data) {
        console.log(data.key_press)
        },
    // stimulus: function() { return "Stimuli/50msec.wav" },
    prompt: '<p style="text-align:center; color:white; font-size:30px">+</p>',
}

let toneITISlow = { // this was added to capture taps before the next tone in order to capture 2 taps within a single 500 ms inter-tap interval. Otherwise, get nulls.
    type: 'html-keyboard-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">+</p>',
    choices: [32], //Spacebar
    response_ends_trial: false,
    on_finish: function (data) {
        console.log(data.key_press)
        },
    trial_duration: 250,
}

let tapNoToneSlow = { // this was added to capture taps before the next tap interval in order to capture 2 taps within a single 500 ms inter-tap interval. Otherwise, get nulls.
    type: 'html-keyboard-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">+</p>',
    choices: [32], //Spacebar
    response_ends_trial: false,
    on_finish: function (data) {
        console.log(data.key_press)
        },
    trial_duration: 250,
}

let noToneITISlow = { // this was added to capture taps before the next tap interval in order to capture 2 taps within a single 500 ms inter-tap interval. Otherwise, get nulls.
    type: 'html-keyboard-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">+</p>',
    choices: [32], //Spacebar
    response_ends_trial: false,
    on_finish: function (data) {
        console.log(data.key_press)
        },
    trial_duration: 250,
}

/* FAST TAPPING OBJECTS */

let getReadyFast = { 
    type: 'html-button-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">Fast Tapping</p>' + '<p style="color:white; font-size:30px">GET READY!</p>',
    button_html: '<button id="countdownPrompt" style = "outline:none; border:none; background-color:gray" onclick="countdown()" onkeypress="countdown()"></button>', //7.15.20 this used to have START in it which was displayed for some reason
    choices: jsPsych.NO_KEYS, //Spacebar
    trial_duration: 5000,
    on_load: function() {
    document.getElementByID("countdownPrompt").focus() // getElementByID is camel case variable naming
    }
}

let countDownFast = { 
    type: 'audio-keyboard-response', //html is the most versatile. Use html-keyboard-response and stuff as many things in it as possible
    stimulus: audio,
    prompt: function(){
        return countdownTrial[j];
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 250,
    on_finish: function(){
    j++
    }
}

let tapToneFast = { // Collects responses for tone paced tapping for the first 250 ms
    type: "audio-keyboard-response",
    choices: [32],
    response_ends_trial: false,
    trial_ends_after_audio: false,
    trial_duration: 125,
    stimulus: "stim/50msec.wav",
    on_finish: function (data) {
        console.log(data.key_press)
        },
    // stimulus: function() { return "Stimuli/50msec.wav" },
    prompt: '<p style="text-align:center; color:white; font-size:30px">+</p>',
}

let toneITIFast = { // this was added to capture taps before the next tone in order to capture 2 taps within a single 500 ms inter-tap interval. Otherwise, get nulls.
    type: 'html-keyboard-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">+</p>',
    choices: [32], //Spacebar
    response_ends_trial: false,
    on_finish: function (data) {
        console.log(data.key_press)
        },
    trial_duration: 125,
}

let tapNoToneFast = { // this was added to capture taps before the next tap interval in order to capture 2 taps within a single 500 ms inter-tap interval. Otherwise, get nulls.
    type: 'html-keyboard-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">+</p>',
    choices: [32], //Spacebar
    response_ends_trial: false,
    on_finish: function (data) {
        console.log(data.key_press)
        },
    trial_duration: 125,
}

let noToneITIFast = { // this was added to capture taps before the next tap interval in order to capture 2 taps within a single 500 ms inter-tap interval. Otherwise, get nulls.
    type: 'html-keyboard-response',
    stimulus: '<p id="counter" style="text-align:center; color:white; font-size:30px">+</p>',
    choices: [32], //Spacebar
    response_ends_trial: false,
    on_finish: function (data) {
        console.log(data.key_press)
        },
    trial_duration: 125,
}