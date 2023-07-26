import express from "express";

//localhost:3000/articles/learn-node
// PUT articles/learn-react/upvote

let articlesInfo = [
    {
        name: "learn-react",
        upvotes: 0,
        comments: [],
    },
    {
        name: "learn-node",
        upvotes: 0,
        comments: [],
    },
    {
        name: "mogodb",
        upvotes: 0,
        comments: [],
    },
];

// Create new express app
const app = express();

// middleware to resolve json request/payload. It resolve it and make it available for req.body
app.use(express.json());

// app.get('/hello', (req, res) => {
//     res.send("Hello");
// });

//Check why it isn't working
// app.post("/hello", (req, res) => {
//     console.log("req", req.body);
//     res.send(`Hello ${req.body.name}!`);
// });

// // Get Call with URL Params
// app.get("/hello/:name", (req, res) => {
//     //const name = req.params.name;
//     const {name} =  req.params;
//     res.send(`Hello ${name}!`);
// });

// // Handling Multiple Params
// app.get("/hello/:name/articles/:list", (req, res) => {
//     console.log(req.params);
//     //const name = req.params.name
//     const {name,list} =  req.params;
//     res.send(`Hello ${name}. You have ${list} item available!`);
// });

// Upvote Endpoint
app.put("/api/articles/:name/upvote", (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find((a) => a.name === name);
    if (article) {
        article.upvotes += 1;
        return res.send(`The ${article.name} has now ${article.upvotes} number of upvotes`);
    }
    return res.send(`The article doesn't exist!! Please Chose another Article`);
});

// Comment Endpoint (Adding Comments to the data )
app.post("/api/articles/:name/comments", (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const article = articlesInfo.find((a) => a.name === name);
    if (article) {
        article.comments.push({ postedBy, text });
        return res.send(article.comments);
    }
    return res.send(`The article doesn't exist!! You can comment on another article`);
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
