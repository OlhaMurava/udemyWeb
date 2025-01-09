import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


app.get("/", (req, res) => {
    
    const today = new Date();
    const day = today.getDate();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "a weekend";
        adv = "'it's time to have rest";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
  });