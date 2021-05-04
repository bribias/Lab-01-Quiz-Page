

export function checkForY(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y';
}

export function checkForN(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'n';
}