const express = require('express');
const app = express();
const axios = require('axios').default;
app.use(express.static('./public'));

const list = {
    'student': {name:'ramu',sub:'tel'},
    'teacher': {name:'laxshmi',sub:'hin'},
    'chairman': {name:'raj',sub:'eng'}
  };

  app.get('/users', (req, res) => {
    const allUsernames = Object.keys(list); 
    console.log('allUsernames is:', allUsernames);
    res.send(allUsernames);
  });

  app.get('/users/:userid', (req, res) => {
    const nameToLookup = req.params.userid; 
    const val = list[nameToLookup];
    console.log(nameToLookup, '->', val);
    if (val) {
      res.send(val);
    } else {
      res.send({}); 
    }
  });

  app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
  });
  