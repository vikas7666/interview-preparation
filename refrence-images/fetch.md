## How Fetch Method Works

```
fetch('https://example.com')
```

A Promise is immediately returned
The request is handed off to the browser’s networking layer (Web APIs)

## 2. Browser handles the request (outside JS engine)

The browser:
Resolves DNS (finds IP)</br>
Opens TCP/TLS connection</br>
Sends HTTP request</br>

This happens in:
👉 Web APIs (not the JS call stack)

## 3. Event loop + microtask queue
While the request is in progress:

JS continues executing other code
The Promise is still pending

## 4. Response arrives

When the server responds:

Browser processes headers first
Then it resolves the Promise

```
fetch(url).then(response => { ... })
```
👉 This .then() is queued in the microtask queue

## 5. .then() runs (microtask phase)

The event loop:

Finishes current JS execution
Runs microtasks

Then:
```
response => response.json()
```

### 6 response.json() (another async step)
```
return response.json();
```
Reads the response body (stream)
Parses JSON
Returns another Promise

👉 That’s why you need another .then()

## 7. Final data arrives

```
.then(data => console.log(data))
```

```
fetch(url)
  .then(res => {
    console.log('res',res)
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        message: 'Request failed'
      });
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));

```