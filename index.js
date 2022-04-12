import piston from "piston-client"
import express from "express"
const app = express();

app.use(express.json())
const RunBasic = async (code) => {
    const client = piston({ server: "https://emkc.org" });
    const result = await client.execute('freebasic', code);
    return result.run.output;
};

app.use(express.static("public"));

app.post('/code', (req, res) => {
    console.log(req.body);
    const code = req.body.cod;
    RunBasic(code).then(result => {
        res.send({out: result});
    });
})

app.listen(3000)