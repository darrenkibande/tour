const express = require('express');
const destinationsRouter = require ('./routes/destinationsRouter')

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/destinations', destinationsRouter);
// app.use('/api/other', otherRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
