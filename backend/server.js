const express = require('express');
const cors = require('cors');
const multer = require('multer');
const destinationsRouter = require ('./routes/destinationsRouter.js')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Routes
app.use('/destinations', destinationsRouter);
// app.use('/api/other', otherRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
