import { createHelia } from 'helia';
import { unixfs } from '@helia/unixfs';
import { createFsFromPath } from '@helia/fs';

export async function uploadFileToIPFS(filePath) {
  const helia = await createHelia();
  const fs = unixfs(helia);
  const file = await fs.addFileFromPath(filePath);
  return file.cid.toString();
}
