const express = require("express");
const cors = require("cors");
const data = require("./data/cohorts");

const app = express();
app.use(cors());

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id) {
            return data[i];
        }
    }
    return null;
}

app.get("/", function (request, response) {
    response.json({data});
});

app.get("/:id", function (request, response) {
    var record = findById(data, request.params.id);
    if (!record) {
        response.status(404).json({
            error: {
                message: 'no record found!'
            }
        });
    } else {
        response.json({data: record});
    }
});

app.listen(process.env.PORT||3000);
