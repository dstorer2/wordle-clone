const environment = process.env.REACT_APP_NODE_ENV || "development";

let appUrl, apiUrl;

if (environment === "production") {
    appUrl = "http://localhost:" + process.env.PORT;
    apiUrl = process.env.REACT_APP_API_URL;
} else {
    appUrl = "http://localhost:3000";
    apiUrl = "http://localhost:1234";
}

let config = {
    app: appUrl,
    api: apiUrl
}

module.exports = config;