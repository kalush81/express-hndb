const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const usersRouter = require("./routes/users");
const homeRouter = require("./routes/home");
const path = require('path');
const hdb =  require('express-handlebars');

const app = express();

app.engine(
    "handlebars",
    hdb({layoutsDir: 'views/layouts', defaultLayout: 'main', extname: 'handlebars' })
);

app.set('view engine', 'handlebars')
//app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(usersRouter);
app.use(homeRouter);
app.use('/admin/', adminData.router);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "pageNotfound.html"))
  res.render('pageNotfound')
});

app.listen(3333, console.log("server is listening on port 3333"));
