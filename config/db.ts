export const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'admin_panel',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

export const adminCredentials = {
  username: 'admin',
  password: 'admin123' // In production, use environment variables and hash the password
};
