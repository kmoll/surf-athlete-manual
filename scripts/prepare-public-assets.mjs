import { createWriteStream } from 'node:fs';
import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ZipArchive } from 'archiver';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDirectory = path.join(root, 'public');
const publicStarterKit = path.join(publicDirectory, 'starter-kit');
const downloadsDirectory = path.join(publicDirectory, 'downloads');
const starterKitArchive = path.join(
  downloadsDirectory,
  'surf-athlete-starter-kit.zip',
);

await rm(publicStarterKit, { recursive: true, force: true });
await mkdir(downloadsDirectory, { recursive: true });
await cp(path.join(root, 'starter-kit'), publicStarterKit, { recursive: true });

await Promise.all(
  ['DESIGN.md', 'REPOSITORY.md'].map((file) =>
    cp(path.join(root, file), path.join(publicDirectory, file)),
  ),
);

await new Promise((resolve, reject) => {
  const output = createWriteStream(starterKitArchive);
  const archive = new ZipArchive({ zlib: { level: 9 } });

  output.on('close', resolve);
  output.on('error', reject);
  archive.on('error', reject);
  archive.pipe(output);
  archive.directory(path.join(root, 'starter-kit'), 'Surf Athlete Personal');
  archive.finalize();
});

console.log('Prepared public Starter Kit files and download archive.');
