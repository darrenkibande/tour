const express = require('express');
const cors = require('cors');
const destinationsRouter = require ('./routes/destinationsRouter')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Routes
app.use('/destinations', destinationsRouter);
// app.use('/api/other', otherRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
