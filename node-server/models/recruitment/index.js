const db = require('../../config/db');

const createRecruitment = (recruitmentData) => {
    const {
        slug,
        company_name,
        title,
        description,
        remote,
        url,
        tags,
        job_types,
        location,
        created_at
    } = recruitmentData;

    const query = `
    INSERT INTO recruitments (slug, company_name, title, description, remote, url, tags, job_types, location, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;

    const values = [
        slug,
        company_name,
        title,
        description,
        remote,
        url,
        tags,
        job_types,
        location,
        created_at
    ];

    return db.query(query, values)
        .then(result => {
            const newRecruitment = result.rows[0];
            return { message: 'Recruitment successfully saved', recruitment: newRecruitment };
        })
        .catch(error => {
            console.error('Error creating recruitment:', error);
            throw new Error('Failed to create recruitment');
        });
};

// access all jobPostings
const getAllRecruitments = () => {
    const query = 'SELECT * FROM recruitments;';

    return db.query(query)
        .then(result => result.rows)
        .catch(error => {
            console.error('Error retrieving recruitments:', error);
            throw new Error('Failed to retrieve recruitments');
        });
};

// Get job Posting By ID
const getRecruitmentById = (recruitmentId) => {
    const query = 'SELECT * FROM recruitments WHERE id = $1;';
    const values = [recruitmentId];

    return db.query(query, values)
        .then(result => result.rows[0])
        .catch(error => {
            console.error('Error retrieving recruitment:', error);
            throw new Error('Failed to retrieve recruitment');
        });
};

//   Delete Job Posting from the Database table
const deleteRecruitment = (recruitmentId) => {
    const query = 'DELETE FROM recruitments WHERE id = $1 RETURNING *;';
    const values = [recruitmentId];

    return db.query(query, values)
        .then(result => result.rows[0])
        .catch(error => {
            console.error('Error deleting recruitment:', error);
            throw new Error('Failed to delete recruitment');
        });
};

module.exports = {
    createRecruitment,
    getAllRecruitments,
    getRecruitmentById,
    deleteRecruitment
};
