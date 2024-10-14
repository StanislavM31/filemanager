import { access, constants, open, rename } from 'node:fs/promises';
import { pipeline } from 'node:stream';
import { stdout } from 'node:process';
import path from 'node:path';
import fs from 'node:fs';