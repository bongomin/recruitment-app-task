const Recruitment = require('../../models/recruitment');

exports.createRecruitment = (req, res) => {
    const recruitmentData = req.body;

    Recruitment.createRecruitment(recruitmentData)
        .then(newRecruitment => {
            res.status(201).json(newRecruitment);
        })
        .catch(error => {
            console.error('Error creating recruitment:', error);
            res.status(500).json({ message: 'Failed to create recruitment' });
        });
};

exports.getAllRecruitments = (req, res) => {
    // access the getAllRecruitments function
    Recruitment.getAllRecruitments()
        .then(recruitments => {
            res.json(recruitments);
        })
        .catch(error => {
            console.error('Error retrieving recruitments:', error);
            res.status(500).json({ message: 'Failed to retrieve recruitments' });
        });
};

exports.getRecruitmentById = (req, res) => {
    const recruitmentId = parseInt(req.params.id);

    Recruitment.getRecruitmentById(recruitmentId)
        .then(recruitment => {
            if (recruitment) {
                res.json(recruitment);
            } else {
                res.status(404).json({ message: 'Recruitment not found' });
            }
        })
        .catch(error => {
            console.error('Error retrieving recruitment:', error);
            res.status(500).json({ message: 'Failed to retrieve recruitment' });
        });
};

exports.updateRecruitment = (req, res) => {
    const recruitmentId = parseInt(req.params.id);
    const { title, description } = req.body;
    const recruitmentIndex = recruitments.findIndex(rec => rec.id === recruitmentId);
    if (recruitmentIndex !== -1) {
        recruitments[recruitmentIndex] = { ...recruitments[recruitmentIndex], title, description };
        res.json(recruitments[recruitmentIndex]);
    } else {
        res.status(404).json({ message: 'Recruitment not found' });
    }
};

exports.deleteRecruitment = (req, res) => {
    const recruitmentId = parseInt(req.params.id);

    Recruitment.deleteRecruitment(recruitmentId)
        .then(deletedRecruitment => {
            if (deletedRecruitment) {
                res.json(deletedRecruitment);
            } else {
                res.status(404).json({ message: 'Recruitment not found' });
            }
        })
        .catch(error => {
            console.error('Error deleting recruitment:', error);
            res.status(500).json({ message: 'Failed to delete recruitment' });
        });
};