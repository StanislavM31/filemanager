import { systemInfo } from './system.js';
import { cd } from './cd.js';
import { ls } from './ls.js';
import { goUp } from './up.js';
import { cat, add, rn, cp, mv, rm } from './basics.js';
import readline from 'readline';

const args = process.argv.slice(2);
let currentFolder = process.cwd();

const fileManager = async () => {
  args.forEach((val) => {
    if (val.includes('username')) {
      const string = val.split('=')[1];
      console.log(
        `Welcome to the File Manager, ${string ? string : '%anonimus%'}!`
      );
    }
  });
  console.log(`\nYou are currently in ${currentFolder}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async (line) => {
    const [command, ...args] = line
      .trim()
      .split(' ')
      .filter((val) => val !== '');
    switch (command) {
      case 'os':
        systemInfo(args);
        break;
      case 'up':
        currentFolder = goUp(currentFolder);
        console.log(`\nYou are currently in ${currentFolder}`);
        break;
      case 'cd':
        currentFolder = await cd(args[0], currentFolder);
        console.log(`\nYou are currently in ${currentFolder}`);
        break;
      case 'ls':
        await ls(currentFolder);
        break;
      case 'cat':
        await cat(args[0], currentFolder);
        break;
      case 'add':
        await add(args[0], currentFolder);
        break;
      case 'rn':
        await rn(args, currentFolder);
        break;
      case 'cp':
        await cp(args, currentFolder);
        break;
      case 'mv':
        await mv(mv);
        break;
      case 'rm':
        await rm(rm);
        break;
      case '.exit':
        rl.close();
        break;
      default:
        console.log('Please enter valid command...');
    }
  });
};

fileManager();
