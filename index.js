// Message Generator Program

const openings = [
    "Today is the perfect day to",
    "The universe wants you to",
    "Remember to always",
    "Right now is a good time to",
    "Your future self thank you for"
];

const actions = [
    "take a bold step forward",
    "trust the process",
    "believe in yourself",
    "learn something new",
    "embrace the challenge"
];

const closings = [
    "and never look back.",
    "because growth starts here.",
    "even when it feels difficult.",
    "one small step at a time.",
    "and enjoy the journey."
];

// Helper function to get random item
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate message
function generateMessage() {
    const message = `${getRandomItem(openings)} ${getRandomItem(actions)} ${getRandomItem(closings)}`;
    console.log(message);
}

// Run program
generateMessage();
