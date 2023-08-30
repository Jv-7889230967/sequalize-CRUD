const express = require("express");
const app = express();
const Dataroutes = require('./routes/Dataroutes'); // Check the correct path here

require('./config/DB');


app.use(express.json());
app.use("/api/data", Dataroutes);

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
