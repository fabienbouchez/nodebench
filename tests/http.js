const http = require('http');

const PORT = 8088;
const URL = `http://127.0.0.1:${PORT}/`;
const TEST_DURATION_IN_MS = 10000;

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
}

const doRequest = (options) => {
  return new Promise((resolve, reject) => {
    let req = http.get(options);

    req.on('response', res => {
      resolve(res);
    });

    req.on('error', err => {
      reject(err);
    });
  });
}

const test = () => {

  let numberOfRequests = 0;

  console.log('Creating HTTP server on ' + URL)
  const server = http.createServer(requestListener);
  server.addListener('listening', async () => {
    const start = Date.now();
    process.stdout.write(`Simulating HTTP requests during ${TEST_DURATION_IN_MS/1000}s `)
    do {
      try {
        resp = await doRequest(URL);
        if (resp.statusCode != 200) {
          console.error(`HTTP request test Error : url ${URL} did not respond 200`);
          process.exit(1);
        }
      } catch (error) {
        console.error(`HTTP request test Error : ${error}`);
        process.exit(1);
      }
      if (numberOfRequests % 1000 === 0) {
        process.stdout.write('.')
      }
      numberOfRequests++;

    } while ((Date.now() - start) < TEST_DURATION_IN_MS)
    const requestPerSeconds = Math.floor(numberOfRequests / TEST_DURATION_IN_MS * 1000);
    console.log(`\n\n==== HTTP resquests test result ==== \n ${requestPerSeconds} requests/s (single CPU core) `);
    process.exit(0);

  });
  server.listen(8088);
}


module.exports = test;