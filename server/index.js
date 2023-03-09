import fastifyStatic from '@fastify/static';
import fastify from 'fastify';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const app = fastify();

app.get('/', async (req, rep) => {
  try {
    const indexFile = path.resolve(path.join('build', 'index.html'));
    const indexHtml = await fs.promises.readFile(indexFile, 'utf8');

    // Generate static HTML.
    const content = renderToString(<App />);
    let html = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`,
    );

    // Append scripts.
    // const jsFiles = await glob(path.join('build', 'static', 'js', '*.js'));
    // jsFiles.forEach((file) => {
    //   html += `<script src="static/js/${path.basename(file)}"></script>`;
    // });

    return rep
      .status(200)
      .type('text/html')
      .send(html);
  } catch (err) {
    console.error('Something went wrong:', err);
    return rep
      .status(500)
      .send('Oops, better luck next time!');
  }
});

// Serve static files.
const staticPath = path.resolve(path.join('build'));
app.register(fastifyStatic, { root: staticPath });
console.log('Serving static files in', staticPath);

// Start server.
const port = process.env.PORT || 8080;
app.listen({ port }).then(() => {
  console.log(`Listening on port ${port}`);
});
