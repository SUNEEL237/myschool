import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db';

const pool = mysql.createPool(dbConfig);

export async function query(sql: string, params: any[] = []) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default pool;
