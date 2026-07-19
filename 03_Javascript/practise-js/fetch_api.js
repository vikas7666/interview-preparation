// ============================================
// fetch() and Promises — reference notes
// ============================================

// --- basic pattern, function expressions ---
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (resp) {
        return resp.json(); // resp.json() itself returns a Promise
    })
    .then(function (data) {
        console.log(data);
    });

// --- same thing, arrow functions ---
fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) => console.log(data));


/*
  Why two .then() calls?
  -----------------------
  fetch() resolves as soon as HEADERS arrive — not the full body.
  The Response object looks like this when logged directly:

    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Response
      body: (ReadableStream)
      bodyUsed: false
      headers: Headers {}
      ok: true
      redirected: false
      status: 200
      statusText: ""
      type: "cors"
      url: "..."

  The body is a ReadableStream, not usable data yet — that's why you
  can't just do fetch().then(data => console.log(data)) and expect
  parsed JSON. You must call resp.json() (or .text(), .blob(), etc.),
  which reads the stream and returns ANOTHER promise that resolves
  with the parsed value. Hence the second .then().
*/


// ============================================
// THE BIG GOTCHA: fetch does not reject on HTTP errors
// ============================================

// This looks safe but is WRONG — a 404 or 500 will NOT go to .catch()
fetch("https://jsonplaceholder.typicode.com/users/9999")
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("only runs on network failure:", err));

// fetch() only rejects on network-level failure (no connection, DNS
// failure, CORS block). A 404/500 response is still a FULFILLED
// promise — resp.ok is false and resp.status is 404, but no error
// is thrown automatically.

// CORRECT pattern — check resp.ok yourself and throw manually
fetch("https://jsonplaceholder.typicode.com/users/9999")
    .then((resp) => {
        if (!resp.ok) {
            throw new Error(`HTTP error: ${resp.status}`);
        }
        return resp.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log("Handled:", err.message));


// ============================================
// Same logic with async/await (common interview ask: "rewrite this
// using async/await")
// ============================================

async function getUsers() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!resp.ok) {
            throw new Error(`HTTP error: ${resp.status}`);
        }
        const data = await resp.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log("Handled:", err.message);
    }
}

getUsers();


// ============================================
// Quick facts worth having ready in an interview
// ============================================
// 1. fetch() rejects ONLY on network failure — never on HTTP status codes.
// 2. resp.json() / resp.text() / resp.blob() each return a Promise
//    because reading the body stream is itself async.
// 3. A Response body can only be read ONCE — calling resp.json()
//    twice on the same response throws ("body stream already read").
// 4. Use Promise.all([fetch(...), fetch(...)]) to run multiple
//    fetches in parallel instead of awaiting them one at a time.