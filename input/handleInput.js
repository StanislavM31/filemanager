import utils from '../utils/utils.js';

function handleInput(input, rl) {
  const [command, ...args] = input.trim().split(' ');

  switch (command) {
    case 'up':
    case 'cd':
    case 'ls':
      console.log("handleNavigation(command, args, rl)");
      break;
    case 'cat':
    case 'add':
    case 'rn':
    case 'cp':
    case 'mv':
    case 'rm':
      console.log("fileOperations");
      break;
    case 'os':
      console.log("os");
      break;
    case 'hash':
      console.log("hash");
      break;
    case 'compress':
    case 'decompress':
      console.log("compress");
      break;
    case '.exit':
      rl.close();
      break;
    default:
      console.log('Invalid input');
  }

  utils.printCurrentDirectory();
}

export default { handleInput };