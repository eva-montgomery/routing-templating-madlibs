// Part 1
// Write an http server that uses the value of req.url as part of a greeting.

// For example, if the address in the browser is http://localhost:3000/oakley, the page should show the text Hello, Oakley!

// As before, set the Content-Type correctly for plain text.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text-plain'
//     });
//           let content = `<h1>Hello, ${req.url.slice(1)}</h1>`;
    
//     res.end(content);
// });

// server.listen(3000, () => {
//     console.log('Server is listening at port 3000');
// });

// Part 2
// In your index.js, create an array of names that deserve an extra polite greeting.

// If the value of req.url is /oakley and the array is ["Oakley", "Chris"], the page should show How wonderfully splendid it is to be in your presence again, Oakley!. You look magnificent today!

// If the value of req.url is /milla (and the array is still ["Oakley", "Chris"]), the page should show Hello, Milla!.

names = ["Oakley", "Chris"]

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text-plain'
    });
        if (req.url === '/oakley') {
        let content = `<h1>How wonderfully splendid it is to be in your presence again, ${req.url.slice(1)}. You look magnificent today!</h1>`;
    } else if (req.url === '/milla') {
        let content = `<h1>Hello, Milla!</h1>`;
    }


    res.end(content);
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});


// Part 3
// Instead of having an array of names that deserve special greetings, create an object like so:

// {
//     "Oakley": "How wonderfully splendid it is to be in your presence again!",
//     "Chris": "Oh hey...",
//     "Milla": "Hello, "
// }
// Based on the value of req.url, send back the corresponding greeting from the object. If the name is not a key in the object, send back the standard Hello, <name>!