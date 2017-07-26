import express from 'express';
import React from 'react';
import App from '../shared/App';
import NoMatch from '../shared/NoMatch';
import Error from '../shared/Error';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import render from './render';
import fetch from 'node-fetch';

const routes = [
'/',
'/g/:gistId'
];

sourceMapSupport.install();

const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  res.status(200).send(render(
    (
      <Router context={{}} location={req.url}>
        <App />
      </Router>
    )
  ));
});

io.on('connection', function(socket){
	console.log('connnect');
// socket.on('chat message', function(msg){
//   console.log(msg)
// io.emit('chat message', msg);
// });
});

server.listen(8080, () => console.log('Demo app listening on port 8080'));