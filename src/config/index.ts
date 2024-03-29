/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URI,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
  env: process.env.NODE_ENV,
};
