function shout(words) {
    return words.toUpperCase();
}

shout('hello');

function whisper(words) {
    return words.toLowerCase();
}

whisper("FranKincense");

function logShout(words) {
    console.log(words.toUpperCase());
}

logShout('hello');

function logWhisper(words) {
    console.log(words.toLowerCase());
}

logWhisper('HelLo');

function sayHiToHeadphonedRoommate(words) {
    if (words.toLowerCase() === words)
    {
        return `I can't hear you!`;
    }
    else if (words.toUpperCase() === words)
    {
        return `YES INDEED!`;
    }
    else if (words === "Let's have dinner together!")
    {
        return `I would love to!`;
    }
}
console.log(sayHiToHeadphonedRoommate("hellO"));