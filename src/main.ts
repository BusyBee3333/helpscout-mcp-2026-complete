#!/usr/bin/env node
import { runServer } from './server.js';
import dotenv from 'dotenv';

// Load environment variables from .env file if it exists
dotenv.config();

runServer().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
