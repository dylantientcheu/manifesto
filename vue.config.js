module.exports = {
  // publicPath: "/manifesto/"
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/manifesto/"
      : "http://localhost:8080"
};
