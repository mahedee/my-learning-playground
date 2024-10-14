import express from 'express';
import path from 'path';
import axios from 'axios';


// Environment variables that need to get passed in
const port = process.env.SERVER_PORT;
const apiBase = process.env.API_BASE;

// Create an instance of the express application
const app = express();

//this statement tells Express where to locate the template files that will be rendered for client requests.
app.set('views', path.join(__dirname, '..', 'views'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

//This statement defines a route handler for the root URL (`'/'`) that retrieves documents asynchronously 
//using `getDocuments()` and renders the `index` view, passing the retrieved documents to the template.
app.get('/', async (req, res) => {
    const documents = await getDocuments();
    res.render('index',{
        documents: documents
    });
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});

// call the deployed API

const getDocuments = async() => {
    const { data: results } = await axios.get(`${apiBase}getDocuments`);
    return results;
}
