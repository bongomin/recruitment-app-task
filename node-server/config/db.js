const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',    
  database: 'recruite',
  password: '',
  port: 5432,
});

// Connect to the database
pool.connect(async (err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  try {
    await checkAndCreateTable(
      client,
      'recruitments',
      `
        CREATE TABLE recruitments (
          id SERIAL PRIMARY KEY,
          slug TEXT,
          company_name TEXT,
          title TEXT,
          description TEXT,
          remote BOOLEAN,
          amount TEXT,
          saved_job BOOLEAN,
          liked BOOLEAN,
          url TEXT,
          tags TEXT[],
          job_types TEXT[],
          location TEXT,
          created_at BIGINT
        );
      `
    );

    await checkAndCreateTable(
      client,
      'users',
      `
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          email TEXT,
          full_name TEXT,
          password TEXT
        );
      `
    );

    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Error setting up tables:', error);
  } finally {
    done();
  }
});

async function checkAndCreateTable(client, tableName, createQuery) {
  const tableCheckQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = $1
    );
  `;

  const { rows } = await client.query(tableCheckQuery, [tableName]);
  const tableExists = rows[0].exists;

  if (!tableExists) {
    await client.query(createQuery);
    console.log(`Successfully created "${tableName}" table.`);
  }
}

module.exports = pool;
