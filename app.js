const express = require('express');
const app = express();
const port = 3000;



app.use(express.static('public'));

app.get('/pagina1',(req,res) => {
    res.status(200).sendFile(__dirname + '/public/pagina1.html');
})
app.get('/pagina2',(req,res) => {
    res.status(200).sendFile(__dirname + '/public/pagina2.html');

})

  
app.listen(port,()=> {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

