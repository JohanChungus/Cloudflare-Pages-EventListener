const https = require('https');

addEventListener('fetch', event => {

  const originalUrl = new URL(event.request.url);

  const hostname = 'https://ytradio.klyouno.repl.co; // Modify to your own node IP/domain name

  const options = {

    protocol: 'https:', // Change to http if it is http protocol

    hostname,

    path: originalUrl.pathname + originalUrl.search,

    method: event.request.method,

    headers: event.request.headers

  };

  const newRequest = https.request(options, (newResponse) => {

    const headers = { ...newResponse.headers };

    // Add "access-control-allow-origin" header to response to allow CORS

    headers['access-control-allow-origin'] = '*';

    event.respondWith(

      new Response(newResponse.body, {

        status: newResponse.statusCode,

        statusText: newResponse.statusMessage,

        headers

      })

    );

  });

  newRequest.on('error', (error) => {

    console.error(error);

    event.respondWith(new Response('Internal Error', { status: 500 }));

  });

  newRequest.write(event.request.body);

  newRequest.end();

});

