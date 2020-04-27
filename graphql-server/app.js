const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    // pass in schema
  })
);

app.listen(4000, () => {
  console.log("now listening to port 4000");
});
