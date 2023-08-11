// Create a simple synth with default settings
const synth = new Tone.Synth({
    oscillator: {
        type: "sine" // You can change the waveform here (sine, sawtooth, square, triangle)
    },
    envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.5,
        release: 0.8
    }
}).toDestination();
const input = document.getElementById('input');
// Play the melody when the button is clicked
let button = document.getElementById("startButton");
button.addEventListener("click", () => {
    let melody = convertStringToArray(input.value, addSeven);
    console.log('Converted melody: ', melody);
    Tone.start();
    const now = Tone.now();
    for (let i = 0; i < melody.length; i++) {
        const time = now + (i * 0.25);
        let note = melody[i];
        setTimeout(() => synth.triggerAttackRelease(note, "4n", time), 250);
    }
});

function convertStringToArray(inputString, filter) {
    try {
        // Remove the leading and trailing brackets and spaces
        const trimmedString = inputString.trim().slice(1, -1);

        // Split the string into individual elements
        const elements = trimmedString.split(',').map(item => item.trim().replace(/"/g, ''));

        // filter array using map and filter function
        return elements.map(filter);

    } catch (error) {
        console.error("Error converting string to array:", error);
        return [];
    }
}

function addSeven(item){
    if (!/\d$/.test(item)) {
        return item + '7';
    }
    return item;
}

const melodies = {
    'm1' : '["D", "G", "C", "C7", "F"]',
    'm2' : '["G", "F", "C"]',
    'm3' : '["D", "G7", "E", "A"]',
    'm4' : '["F", "E", "A7", "Ab7", "G7", "C7"]'
};

const melodiesButtons = document.getElementsByClassName('melody');

for(let i = 0; i < melodiesButtons.length; i++){
    const item = melodiesButtons[i];
    item.addEventListener('click', (e) => {
       const id = item.id;
       input.value = melodies[id];
   })
}

