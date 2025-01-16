import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Data Center
let posts = [];

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Create Post (Add post to the array)
function addPost(title, content) {
    let post = new Post(title, content);
    posts.push(post);
}

// Delete Post (Remove post from the array)
function deletePost(index) {
    posts.splice(index, 1);
}

// Edit Post (Update post in the array)
function editPost(index, title, content) {
    posts[index] = new Post(title, content);
}

// Home Route (Display all posts)
app.get("/", (req, res) => {
    res.render("home.ejs", { posts: posts });
});

// View Post (Display single post)
app.get("/view/:id", (req, res) => {
    let index = req.params.id;
    let post = posts[index];
    res.render("view.ejs", { postId: index, title: post.title, content: post.content });
});

// Delete Post (Delete a post using postId)
app.post("/delete", (req, res) => {
    let index = req.body["postId"];
    deletePost(index);
    res.redirect("/"); 
});

// Edit Post Page (Form to edit a post)
app.get("/edit/:id", (req, res) => {
    let index = req.params.id;
    let post = posts[index];
    res.render("create.ejs", { postId: index, title: post.title, content: post.content });
});


// Update Post (Handle update of the post)
app.post("/update", (req, res) => {
    let title = req.body["title"];
    let content = req.body["content"];
    let index = req.body["index"];
    editPost(index, title, content);
    res.redirect("/");
});


// Create Post Page (Page to create a new post)
app.get("/create", (req, res) => {
    res.render("create.ejs", { title: "", content: "", postId: null });
});


// Save Post (Add a new post to the array)
app.post("/save", (req, res) => {
    let title = req.body["title"];
    let content = req.body["content"];
    addPost(title, content);
    res.redirect("/"); 
});


// Post Class (Post object structure)
class Post {
    constructor(title, content) {
        this.id = Date.now(); 
        this.title = title;
        this.content = content;
        this.date = new Date().toLocaleString();
    }
}

// To Do Listen thing
app.listen(port, () => {
    addPost("I Tried to Impress My Date with My Culinary Skills, and I Burned Water", "So, I decided to cook for my date to impress her. Simple plan: boil water, throw in pasta, and boom—dinner, right? WRONG. I put the pot on the stove, turned up the heat, and waited... and waited. No bubbles, no steam. I thought, Okay, let’s crank up the heat! Still, nothing. Finally, I added salt like a seasoned chef, and the kitchen filled with the smell of something burning. At this point, my date arrived, and there I was, in front of a pot of literally burned water. I tried to salvage it by throwing in pasta, but let's be real — no one’s going to eat that. So, we ordered pizza instead. Lesson learned: If you're cooking to impress, stick to microwaving...");
    addPost("I Pretended to Be a Penguin on a Job Interview - Now I'm the New Zoo Attraction", "Hello, my adoring fans! Allow me to regale you with the audacious tale of how my penguin impersonation turned me into the zoo's most celebrated attraction.\nOne day, in a moment of pure genius, I transformed into the charismatic Penguin Pretender. I walked into the zoo, flaunting my exceptional penguin moves, honks, and all.\nFast forward to today, I'm the star of the show! My skills as the dazzling Penguin Pretender are unrivaled.");
    console.log(`App is running on Port ${port}`);
});
