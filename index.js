const configExpress = require('./config/configExpress');
const app = express();
app.listen(3000, () => console.log("servidor rodando na porta 3000"));

app.get("/" ,(req, resp) => {
    resp.send('servidor OK');
});