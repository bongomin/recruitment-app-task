const express = require('express');
const cors = require('cors');



const app = express();

// add middlewares
// Enable CORS
app.use(cors());

app.use(express.json());

const recruitmentRoutes = require('./routes/recruitment');
const authRouter = require('./routes/authRouter');


app.use(express.json());

app.use('/api', recruitmentRoutes);
app.use('/auth', authRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});