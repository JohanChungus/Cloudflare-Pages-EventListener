addEventListener('fetch', event => {

  let url = new URL(event.request.url);

  url.hostname = 'https://ytradio.klyouno.repl.co'; // Modify to your own node IP/domain name

  url.protocol = 'https'; // Change to http if it is http protocol

  let request = new Request(url, {

    method: event.request.method,

    headers: event.request.headers,

    body: event.request.body,

    redirect: 'follow'

  });

  event.respondWith(fetch(request));

});

