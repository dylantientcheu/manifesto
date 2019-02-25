module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/manifesto/" : "/",
  baseUrl: process.env.NODE_ENV === "production" ? "/manifesto/" : "/"
};
