const express = require("express");
const bodyParser = require("body-parser");
const addUser = require("./routes/user");
const adminData = require("./routes/admin");
const messagesRouter = require("./routes/messages");
const homeRouter = require("./routes/home");
const path = require('path');
const hdb =  require('express-handlebars');

const port = process.env.PORT || 3333;
const app = express();

app.engine(
    "handlebars",
    hdb({layoutsDir: 'views/layouts', defaultLayout: 'main', extname: 'handlebars' })
);

app.set('view engine', 'handlebars')
//app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin', addUser.router);
app.use('/admin', adminData.router);
app.use(messagesRouter);
app.use(homeRouter);

app.use((req, res, next) => {
  res.render("pageNotfound")
});

app.listen(port, console.log(`server is listening on port ${port} `));
