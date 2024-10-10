import os from 'os';
import readline from 'readline';
import handleInputModule from './input/handleInput.js';
const { handleInput } = handleInputModule;
import utils from './utils/utils.js';
process.chdir(os.homedir());

const username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

utils.printWelcomeMessage(username);

rl.on('line', (input) => {
    handleInput(input, rl);
    rl.prompt();
});

rl.on('close', () => {
  utils.printGoodbyeMessage(username);
  process.exit(0);
});

rl.prompt();