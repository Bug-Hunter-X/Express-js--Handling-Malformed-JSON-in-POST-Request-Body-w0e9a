# Express.js: Handling Malformed JSON in POST Request Body

This repository demonstrates a common error in Express.js applications where the server crashes due to malformed JSON data in the request body of a POST request.  The error typically manifests as `SyntaxError: Unexpected token <`.

The `bug.js` file contains the vulnerable code.  The `bugSolution.js` file shows how to handle this error gracefully.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Send a malformed JSON request (e.g., an HTML string) to the `/users` endpoint using a tool like `curl`:
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '<html>...</html>' http://localhost:3000/users
   ```

The server will crash.

## Solution

The solution is to implement proper error handling using `try...catch` blocks when parsing the request body.