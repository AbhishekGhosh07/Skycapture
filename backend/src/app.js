const express = require('express');
const cors = require('cors');
const app = express();
const {addUser,getFlight} = require('./dao/dataAccessLayer');
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res, next) => {
    console.log(req.body);
    await addUser(req.body);
    res.send('added user');

})

app.get('/getFlight',async(req,res,next)=>{
    console.log(req.query);
    const result = await getFlight(req.query);
    res.send(result);
})

app.listen(PORT, () => {
    console.log("The app is running on port 8000");

})
