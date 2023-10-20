const http = require('http');
const https = require('https');

function makeHttpGetRequest(url, callback) 
{
  const protocol = url.startsWith('https') ? https : http;
  protocol.get(url, (res) => 
  {
    let data = '';
    res.on('data', (chunk) => 
    {
      data += chunk;
    }
    );
    res.on('end', () => 
    {
      callback(null, data);
    });
  }).on('error', (err) => 
  {
    callback(err, null);
  });
}
const url = 'https://google.com';

makeHttpGetRequest(url, (err, data) => 
{
  if (err) 
  {
    console.error('Error making HTTP request:', err);
  } 
  else 
  {
    console.log('Response body:', data);
  }
});
