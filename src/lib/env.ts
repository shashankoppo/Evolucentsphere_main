// Environment variables with defaults for development
export const env = {
  VITE_MYSQL_HOST: import.meta.env.VITE_MYSQL_HOST || 'localhost',
  VITE_MYSQL_USER: import.meta.env.VITE_MYSQL_USER || 'root',
  VITE_MYSQL_PASSWORD: import.meta.env.VITE_MYSQL_PASSWORD || 'your_password',
  VITE_MYSQL_DATABASE: import.meta.env.VITE_MYSQL_DATABASE || 'tenebris_navitas'
};