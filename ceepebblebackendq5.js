const http = require('http');
const server = http.createServer((req, res) => 
{
  if (req.method === 'POST') 
  {
    let data = '';
    req.on('data', (chunk) => 
    {
      data += chunk;
    });
    req.on('end', () => 
    {
      try 
      {
        const jsonData = JSON.parse(data);
        console.log('Received JSON data:', jsonData);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(jsonData));
      } 
      catch (error) 
      {
        res.statusCode = 400;
        res.end('Bad Request');
      }
    });
  } else 
  {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});
server.listen(3000, () => 
{
  console.log('Server is running on port 3000');
});