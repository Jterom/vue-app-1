var unirest = require("unirest");

var req = unirest("GET", "https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/");

req.query({
    "id": "lF-jPBnZ098"
});

req.headers({
    "x-rapidapi-key": "6eb15c5412msh50a30722fa17de8p1d606ajsnb453959f1895",
    "x-rapidapi-host": "coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com",
    "useQueryString": true
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});

app.listen(8080, () => {
    console.log('Serveur à lécoute')
})