import express from "express";
import bodyParser from "body-parser"




const app = express();
const port = 3000;

const blog_titles = [];
const blog_contexts = [];

const ipVisitCount = {};

// Important if behind reverse proxy (e.g., Heroku, Nginx), enable trust proxy:
app.set('trust proxy', true);

// Enable trust proxy if behind a reverse proxy (Heroku, Nginx, etc.)
app.set('trust proxy', true);

app.use((req, res, next) => {
  const ip = req.ip;
  const url = req.originalUrl;
  
  // We count only GET requests that expect HTML responses
  if (
    req.method === 'GET' &&
    req.accepts('html') &&
    // Ignore static assets/extensions:
    !url.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|json|xml|woff|woff2|ttf|eot)$/i)
  ) {
    if (ip) {
      ipVisitCount[ip] = (ipVisitCount[ip] || 0) + 1;
      // console.log(`IP ${ip} has visited ${ipVisitCount[ip]} times`);
      // console.log(ipVisitCount)
    }
  }
  
  next();
});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true, limit : "6kb"}));
app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') {
    return res.status(413).send('Request too large. Please reduce the size of your input.Go to previous page and try again');
  }
  next(err);
});

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/blog",(req,res)=>{
    res.render("blog.ejs");
});

app.get("/create-blog",(req,res)=>{
    res.render("create-blog.ejs");
});

app.post("/create-blog/submissions", (req, res) => {
    const newTitle = req.body.blog_name.trim();
    const newContent = req.body.blog_context.trim();

    // Case-insensitive duplicate check for title and exact match for content
    const titleExists = blog_titles.some(title => title.toLowerCase() === newTitle.toLowerCase());
    const contentExists = blog_contexts.some(context => context === newContent);

    if (titleExists || contentExists) {
        // Return page with alert script
        res.send(`
            <script>
                alert("This blog title or content already exists. Please try with an alternate.");
                window.history.back(); // go back to the form page
            </script>
        `);
    } else {
        // Store the new blog
        blog_titles.push(newTitle);
        blog_contexts.push(newContent);

        res.render("submission.ejs", {
            blog_name: newTitle,
            blog_context: newContent
        });
    }
});


app.get("/check-blog",(req,res)=>{
    res.render("check-blog.ejs",{
        blog_titles : blog_titles,
        blog_contexts : blog_contexts
    });
});

// ✅ Dynamic route for any blog title
app.get("/blog/:title", (req, res) => {
    const titleParam = req.params.title;

    // Find index of blog title
    const index = blog_titles.indexOf(titleParam);
    if (index !== -1) {
        res.render("submission.ejs", {
            blog_name: blog_titles[index],
            blog_context: blog_contexts[index]
        });
    } else {
        res.status(404).send("Blog not found");
    }
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
});