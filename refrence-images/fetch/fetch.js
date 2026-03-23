// Fetch Code 
/* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        if (!res.ok) {
            console.log('res', res)
            throw new Error('Network response was not ok');
        }
        return res.json(); // Returns a promise
    })
    .then((data) => {
        console.log('data', data) // actual data 
    })
    .catch((err) => {
        console.log('err', err)
    }) 
*/


// how response come we can use above method to simplify response 
/*
res.json() → JSON data (parse object)
res.text() → plain text
res.blob() → binary files (images, PDFs, etc.)
res.arrayBuffer()
*/

/* 
res {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Sun, 22 Mar 2026 11:06:08 GMT',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    'access-control-allow-credentials': 'true',
    'cache-control': 'max-age=43200',
    etag: 'W/"124-yiKdLzqO5gfBrJFrcdJ8Yq0LGnU"',
    expires: '-1',
    nel: '{"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}',
    pragma: 'no-cache',
    'report-to': '{"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=m%2Fj5Tnq57coqSIw%2BkLSZldlCmHerGDlL%2BrDf8KfE7gA%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1774070617"}],"max_age":3600}',
    'reporting-endpoints': 'heroku-nel="https://nel.heroku.com/reports?s=m%2Fj5Tnq57coqSIw%2BkLSZldlCmHerGDlL%2BrDf8KfE7gA%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1774070617"',
    server: 'cloudflare',
    vary: 'Origin, Accept-Encoding',
    via: '2.0 heroku-router',
    'x-content-type-options': 'nosniff',
    'x-powered-by': 'Express',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '999',
    'x-ratelimit-reset': '1774070623',
    age: '20548',
    'cf-cache-status': 'HIT',
    'content-encoding': 'br',
    'cf-ray': '9e04b9ad9d85ad93-MRS',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://jsonplaceholder.typicode.com/posts/1'
}
*/

/* 
res = {
  status: 200,
  headers: {...},
  body: 🔒 (stream, locked box)
}
res.json() = 🔑 unlock + read box
data = actual JSON ✅
*/

// 1. How to read it manually

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        const reader = res.body.getReader();
        function read() {
            reader.read().then(({ done, value }) => {
                if (done) {
                    console.log('✅ Stream finished');
                    return;
                }

                // console.log('Chunk:', value); // Uint8Array (binary data)

                read(); // keep reading next chunk
            });
        }

        read();
    });


/* Chunk: Uint8Array(292) [
123,  10,  32,  32,  34, 117, 115, 101, 114,  73, 100,  34,
58,  32,  49,  44,  10,  32,  32,  34, 105, 100,  34,  58,
32,  49,  44,  10,  32,  32,  34, 116, 105, 116, 108, 101,
34,  58,  32,  34, 115, 117, 110, 116,  32,  97, 117, 116,
32, 102,  97,  99, 101, 114, 101,  32, 114, 101, 112, 101,
108, 108,  97, 116,  32, 112, 114, 111, 118, 105, 100, 101,
110, 116,  32, 111,  99,  99,  97, 101,  99,  97, 116, 105,
32, 101, 120,  99, 101, 112, 116, 117, 114, 105,  32, 111,
112, 116, 105, 111,
... 192 more items
]
 */

// “Data is coming in pieces, not all at once”
// Each chunk = part of your JSON

// 🔹 Convert chunks to text

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        function read() {
            reader.read().then(({ done, value }) => {
                if (done) return;

                const text = decoder.decode(value);
                // console.log('Text chunk:', text);

                read();
            });
        }
        read();
    });

/*Text chunk: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet                                                                                                                                                               t architecto"
} */


/* 
🔹 1. When to use res.text()
Use it when the response is plain text, not structured JSON.

✅ Examples:
HTML
XML
CSV
plain text logs  
*/

// fetch('/example.txt')
//     .then(res => res.text())
//     .then(data => {
//         console.log(data); // string
//     });

/* 
🔹 2. When to use res.blob()
Use it when dealing with binary data / files
Blob = raw binary data with type info

image/png
application/pdf

Images (jpg, png)
PDFs
Videos
Audio files
Downloads
*/

fetch('/fetch-work.png')
    .then(res => res.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        document.querySelector('img').src = url;
    });

/*
| Method       | Output Type   | Use Case      |
| ------------ | ------------- | ------------- |
| `res.json()` | JS object     | APIs          |
| `res.text()` | string        | readable text |
| `res.blob()` | Blob (binary) | files/images  |

*/

/*
Under the hood (all same source)
res.body (ReadableStream)
   ↓
 ┌───────────────┬───────────────┬───────────────┐
 │ res.json()    │ res.text()    │ res.blob()    │
 │ parse JSON    │ decode text   │ keep binary   │
 └───────────────┴───────────────┴───────────────┘
*/

/* fetch(url)
    .then(res => {
        const type = res.headers.get('content-type');

        if (type.includes('application/json')) {
            return res.json();
        } else if (type.includes('text')) {
            return res.text();
        } else {
            return res.blob();
        }
    })
    .then(data => console.log(data)); */


// Basic file download (PDF / Excel)  (Example: Download a PDF)

fetch('/report.pdf')
    .then(res => res.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.pdf'; // file name
        document.body.appendChild(a);
        a.click();

        a.remove();
        URL.revokeObjectURL(url);
    });

// Display file instead of downloading
fetch('/image.png')
    .then(res => res.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        document.querySelector('img').src = url;
    });