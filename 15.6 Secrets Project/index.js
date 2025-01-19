// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4 & 5. Use one route for the home page to fetch a random secret and render it.
app.get("/", async (req, res) => {
  try {
    // Fetch a random secret
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    // Render index.ejs with the fetched secret and username
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log("Error fetching secret:", error.response?.data || error.message);

    // Render index.ejs with an error message
    res.render("index.ejs", {
      secret: "Unable to fetch secret. Please try again later.",
      user: "N/A",
    });
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
