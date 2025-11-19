#!/usr/bin/env node

/**
 * Script to generate Strapi environment variables
 * Run: node generate-env.js
 */

const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

console.log('='.repeat(60));
console.log('Strapi Environment Variables Generator');
console.log('='.repeat(60));
console.log('\nCopy these values to your .env file:\n');

// Generate APP_KEYS (4 keys)
const appKeys = Array.from({ length: 4 }, () => generateSecret()).join(',');
console.log('APP_KEYS=' + appKeys);
console.log('');

// Generate other secrets
console.log('API_TOKEN_SALT=' + generateSecret());
console.log('ADMIN_JWT_SECRET=' + generateSecret());
console.log('TRANSFER_TOKEN_SALT=' + generateSecret());
console.log('JWT_SECRET=' + generateSecret());
console.log('');

console.log('='.repeat(60));
console.log('Complete .env file content:');
console.log('='.repeat(60));
console.log(`
HOST=0.0.0.0
PORT=1337
APP_KEYS=${appKeys}
API_TOKEN_SALT=${generateSecret()}
ADMIN_JWT_SECRET=${generateSecret()}
TRANSFER_TOKEN_SALT=${generateSecret()}
JWT_SECRET=${generateSecret()}
`);
console.log('='.repeat(60));
console.log('\n✅ Generated! Copy the values above to your backend/.env file');

