// const users = ["ala", "ula", "ela"];

// module.exports = (req, res) => {
//   const { url, method } = req;
//   if (url === "/") {
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write("<body><h2>hello</h2>");
//     res.write(
//       '<form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">CREATE</button></form>'
//     );
//     res.write("<html>");
//     res.write("</body>");
//     return res.end();
//   }
//   if (url === "/users") {
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write(`<body><h2>hello last user ${users[users.length - 1]}</h2>`);
//     res.write("<ul>");
//     users.forEach(user => {
//       res.write(`<li>${user}</li>`);
//     });
//     res.write("</ul>");
//     res.write("<html>");
//     res.write("</body>");
//     return res.end();
//   }
//   if (url === "/create-user" && method === "POST") {
//     const body = [];
//     req.on("data", chunk => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const user = parsedBody.split("=")[1];
//       users.push(user);
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/users");
//     res.end();
//   }
// };
