// Create web server
// 1. Import express
const express = require('express');
// 2. Create express instance
const app = express();
// 3. Define port
const port = 3000;
// 4. Define routes
app.get('/comments', (req, res) => {
    res.send('Comments page');
});
// 5. Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 6. Open browser and navigate to http://localhost:3000/comments
// 7. Test the server
// 8. Close the server