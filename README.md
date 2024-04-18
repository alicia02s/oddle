# Oddle

webdev final project

### how to access the backend

backend server is a sqlite database currently running on my own machine, still need to figure out where i can host this. below is the code needed to call the current apis implemented to access the database.

some things to consider:
- ensure axios is installed
    - run ```npm install axios``` in your terminal
- make sure to have ```include axios from 'axios'``` at the top of your file

sign up api:
```javascript
    const axios = require('axios');

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    // fill in url blanks w params
    url: 'http://localhost:3003/signup?name=_&email=_&password=_',
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
```

log in api:
```javascript
    const axios = require('axios');

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    // fill in url blanks w params
    url: 'http://localhost:3003/login?email=_&password=_',
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
```

log out api: 
```javascript
    const axios = require('axios');

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    // fill in url blanks w params
    url: 'http://localhost:3003/logout?token=_',
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
```

get user api:
```javascript
    const axios = require('axios');

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    // fill in url blanks w params
    url: 'http://localhost:3003/user?token=_',
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
```