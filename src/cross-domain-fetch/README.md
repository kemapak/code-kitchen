# Cross Domain Fetch

Click the [link](index.html) to open `index.html` with a browser and open developer tools by pressing `option+command+I (⌥+⌘+I)`.

This sample code demonstrates how cross domain communication works via `JavaScript` and how to set up `Node/Express` server and your system `hosts` file.

## Installation
Just run `npm install` on your terminal in the same directory to install all needed npm libraries.

## Setup

### Hosts File
To test this first we need to create a fake subdomain. In our hosts file,
all localhosts point to `127.0.0.x` internal IP addresses. So we can easily add
a subdomain.

_For example_:

```
127.0.0.1   localhost
127.0.0.2   sub.localhost
```

You can find your local host file on a Mac under `/etc/hosts`.
Here is a sample [hosts file](hosts) added as example.

### Node/Express CORS
You just need to add the `cors package` which exists in the (package.json)[package.json] file in addition to
`express` and `serve-static`
We explicitly allow CORS:

```
server.use(cors({ origin: ["http://localhost:9000", "http://sub.localhost:9000"] }));
```

## Starting and Stopping Express Server.
- To run your server type `npm start`.
- To stop your server type `ctrl + c`.

If you see `Listening on port 9000` on your terminal window you are ready to go!

## Conclusion
To use fetch API for different domains you needs to either setup CORS on your web server or use a proxy server.
To enable or disable handling CORS comment or uncomment the following line in [server.js](server.js)

`server.use(cors({ origin: ["http://localhost:9000", "http://sub.localhost:9000"] }));`

## References
- Please check [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on Mozilla Developer Network.
- Last but not least [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

---
Return to [Index](../../README.md)
