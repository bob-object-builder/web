import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bobTheme = JSON.parse(
  readFileSync(path.join(__dirname, '../themes/black-theme.json'), 'utf-8')
);

export default bobTheme;
