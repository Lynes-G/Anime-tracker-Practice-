import express from "express";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;

const BASE_URL = "https://api.jikan.moe/v4";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let currentPage = 1;

const config = {
    headers: {
        "expires": 1,
        "cache-control": "public, max-age=60, s-maxage=60",
    },
    params: {
        page: currentPage,
        limit: 10,
        type: "tv"
    }
};

app.get("/", async (req, res) => {
    try {
        config.params.page = currentPage;

        const result = await axios.get(`${BASE_URL}/anime`, config);
        console.log(config.params);
        // console.log(result.headers);

        const numberOfPages = result.data.pagination.items.total;
        const hasNextPage = result.data.pagination.has_next_page;
        const hasPrevPage = currentPage > 1;
        const animeList = result.data.data;

        res.render("index.ejs", { animeList, currentPage, hasNextPage, hasPrevPage , numberOfPages});

    } catch (error) {
        console.log(error);
    }
});

app.get("/next", (req, res) => {
    currentPage++;
    res.redirect("/");
});

app.get("/prev", (req, res) => {
    if (currentPage > 1) {
        currentPage--;
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});