//import jsonr from 'json-realtime';

const file = 'data.json';


var jsonfile = require('jsonfile');
jsonfile.readFile(file, function(err, obj) 
{
  console.dir(obj);
})


