const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

test('project includes its server and game entry point', () => {
  assert.ok(fs.existsSync(path.join(root, 'server.js')));
  assert.ok(fs.existsSync(path.join(root, 'public', 'index.html')));
});

test('player folder and project documentation are present', () => {
  assert.ok(fs.existsSync(path.join(root, 'player', 'README.md')));
  assert.ok(fs.existsSync(path.join(root, 'README.md')));
});
