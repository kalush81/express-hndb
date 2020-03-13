module.exports = (req, res, next) => {
    const name = req.body.user;
    if (!name) {
      return res.redirect("/");
    }
    res.cookie("userName", name, {httpOnly: true});
    // res.redirect(url.format({
    //   pathname:"add-message",
    //   query: {
    //      name
    //    }
    // }));
    res.redirect("/chat-room")
    //console.log('req.cookies ', req.cookies)
  }