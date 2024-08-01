const express = require('express');
const cors = require('cors');
const path = require('path');
const destinationsRouter = require ('./routes/destinationsRouter.js')
const tourRouter = require('./routes/tourRoutes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/destinations', destinationsRouter);
app.use('/tours', tourRouter);

// app.use('/api/other', otherRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
