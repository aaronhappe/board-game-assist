/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderMe, gists) => `<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>title will change dynamically, I am sure</title>
      <link rel="stylesheet" type="text/css" href="/static/css/main.css"/>
    </head>
    <body>
      <script src="/static/socket.io.js"></script>
        <div id="app">${renderToString(renderMe)}</div>
      <script src="/static/client.js"></script>
    </body>
</html>`;