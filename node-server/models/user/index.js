const db = require('../../config/db');

const User = {
  createUser: async ({ email, full_name, password }) => {
    // Check if password and confirmPassword match

    const query = `
      INSERT INTO users (email, full_name, password)
      VALUES ($1, $2, $3)
      RETURNING id, email;
    `;

    const values = [email, full_name, password];

    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  },

  getUserByEmail: async (email) => {
    const query = `
      SELECT id, email, full_name, password
      FROM users
      WHERE email = $1;
    `;

    try {
      const result = await db.query(query, [email]);
      return result.rows[0];
    } catch (error) {
      console.error('Error retrieving user:', error);
      throw new Error('Failed to retrieve user');
    }
  },
};

module.exports = User;
