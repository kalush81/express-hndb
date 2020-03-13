const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const hdb =  require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const user = require("./routes/user");
const message = require("./routes/addMessage");
const chatRoom = require("./routes/chatRoom");
const home = require("./routes/home");

const port = process.env.PORT || 3333;
const app = express();

app.use(cookieParser());
app.engine(
    "handlebars",
    hdb({layoutsDir: 'views/layouts', defaultLayout: 'main', extname: 'handlebars' })
);
app.set('view engine', 'handlebars')
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(home);
app.use('/admin', user.addUser);
app.use(chatRoom);
//===============================================
app.use('/admin', message.router);
//app.use(messagesRouter);

app.use((req, res, next) => {
  res.render("pageNotfound")
});

app.listen(port, console.log(`server is listening on port ${port} `));
