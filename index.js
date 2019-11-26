//*******************Solution Endpoint /api/v1/parse (POST)*********************************
//server
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.json()); // to parse request.body's json
app.post('/api/v1/parse’, (request, response) => {
 let reqData: any[] = request.split("0000");
 let firstName: string = reqData[0];
 let LastName: string = reqData[1];
 let clientId: sring = reqData[2];
  response.send(JSON.stringify ({"firstName":firstName,"lastName":lastName,"clientId":clientId}));
});

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

//Frontend
fetch("/api/v1/parse", {
  method: 'POST',
  body: JSON.stringify({ data: “JOHN0000MICHAEL0009994567”}), // convert Js object to a string
  headers: new Headers({ "Content-Type": "application/json" }) // add headers
});

//***********Solution Endpoint /api/v2/parse (POST)******************************
//server
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.json()); // to parse request.body's json
app.post('/api/v2/parse’, (request, response) => {
  let reqData: any[] = request.split(/(?<=[0]{3,4})/);
 let firstName: string = reqData[0];
 let LastName: string = reqData[1];
 let clientId: sring = reqData[2];
  response.send(JSON.stringify ({"firstName":firstName,"lastName":lastName,"clientId":clientId}));
});

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

//Frontend:
fetch("/api/v2/parse", {
  method: 'POST',
  body: JSON.stringify({ data: “JOHN0000MICHAEL0009994567”}), // convert Js object to a string
  headers: new Headers({ "Content-Type": "application/json" }) // add headers
});





