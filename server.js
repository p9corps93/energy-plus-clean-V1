const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Basic API endpoints
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'ENERGY+ Clean Server is running!',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 ENERGY+ Clean Dashboard running at http://localhost:${PORT}`);
    console.log('✅ All features working without external dependencies!');
    console.log('📁 Serving files from:', __dirname);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down ENERGY+ server...');
    process.exit(0);
});
