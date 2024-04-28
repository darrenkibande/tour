const express = require('express');
const destinationRoutes = require('./routes/destinationRoutes');
// const otherRoutes = require('./routes/otherRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/destinations', destinationRoutes);
// app.use('/api/other', otherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
