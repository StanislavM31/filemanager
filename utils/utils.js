function printCurrentDirectory() {
    console.log(`You are currently in ${process.cwd()}`);
}

function printWelcomeMessage(username) {
    console.log(`Welcome to the File Manager, ${username}!`);
    printCurrentDirectory();
}

function printGoodbyeMessage(username) {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
}

export default { printCurrentDirectory, printWelcomeMessage, printGoodbyeMessage };