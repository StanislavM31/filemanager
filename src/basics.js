import { access, constants, open, rename } from 'node:fs/promises';
import { pipeline } from 'node:stream';
import { stdout } from 'node:process';
import path from 'node:path';
import fs from 'node:fs';



export const cat = async (prop, currentFolder) => {
    try {
      const filePath = buildPath(prop, currentFolder);
      await access(filePath, constants.R_OK);
      const rs = fs.createReadStream(filePath);
      rs.on('data', (chunk) => {
        stdout.write(chunk);
      });
      rs.on('end', () => {
        console.log(`\nYou are currently in ${currentFolder}`);
      });
    } catch (err) {
      console.error(err.message);
      console.log(`\nYou are currently in ${currentFolder}`);
    }
  };
  export const add = async (prop, currentFolder) => {
    try {
      const filePath = buildPath(prop, currentFolder);
      await open(filePath, 'wx');
    } catch (err) {
      console.error(err.message);
    }
  };
  export const rn = async (props, currentFolder) => {
    try {
      if (props.length !== 2)
        throw new Error('Need two arguments: path_to_file new_filename');
      const newFile = path.basename(props[1]);
      await access(props[0]);
      rename(props[0], newFile);
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log(`\nYou are currently in ${currentFolder}`);
    }
  };
  export const cp = async (props, currentFolder) => {
    try {
      if (props.length !== 2)
        throw new Error('Need two arguments: path_to_file path_to_new_directory');
      await access(props[0]);
      await access(props[1]);
      const destination = path.join(props[1], path.basename(props[0]));
  
      pipeline(
        fs.createReadStream(props[0]),
        fs.createWriteStream(destination),
        (err) => {
          if (err) console.log(err?.message);
        }
      );
      console.log('File copied...');
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log(`\nYou are currently in ${currentFolder}`);
    }
  };
  export const mv = async (prop) => {
    console.log('mv');
  };
  export const rm = async (prop) => {
    console.log('rm');
  };
  
  const buildPath = (argPath, currentFolder) => {
    let folder = argPath;
    if (!path.isAbsolute(argPath)) {
      folder = path.join(currentFolder, argPath);
    }
    return folder;
  };
  