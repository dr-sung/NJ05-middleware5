// rewriting of NJ05-middlware4 using static files

const express = require('express');
const app = express();
app.use(express.urlencoded( {extended: false} ));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

// use express.urlencoded() middleware to read form data
//     req.body.paramname
app.post('/', (req, res) => {
    let page =`
        <html>
        <head><title>Name</title></head>
        <body>
            <h2>User page</h2>
            Your name is ${req.body.user} <br>
            Your password is ${req.body.password}
        </body>
        </html>
    `;
    res.send(page);
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Node server running at port " + port);