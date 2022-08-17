# Cross Domain Communication

Click the [link](index.html) to open `index.html` with a browser and open developer tools by pressing `option+command+I (⌥+⌘+I)`.

This sample code demonstrates how cross domain communication works via `JavaScript` and how to setup `Node/Express` server and your system `hosts` file.

This applies to both iframes and different windows, tabs, etc.

## Installation
Just run `npm install` on your terminal in the same directory to install all needed npm libraries.

## Setup

### Hosts File
To test this first we need to create a fake subdomain. In our hosts file,
all localhosts point to `127.0.0.x` internal IP addresses. So we can easly add
a subdomain. 

_For example_:

```
127.0.0.1   localhost
127.0.0.2   sub.localhost
```

You can find your local host file on a Mac under `/etc/hosts`.
Here is a sample (hosts file)[hosts] added as example.

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
As you can see if you are in the same domain as your child/parent you can access them directly.

```
parent.displayMessage(value + ' - Same domain can access parent directly, [' + domain + ']');
```

You can also send message if you either in the same, sub or any other domain vai Browser Messaging API. As long as
you set the CORS correctly on your server. In our case `express server`.

```
window.parent.postMessage(message, 'http://localhost:9000');
```

Lastly you **if you are on the same domain** (and port) you can broadcast a message to all windows. 
Windows, iFrames, Tabs, etc. 

```
let bc = new BroadcastChannel('alertChannel');
bc.postMessage('System alert!!! Take cover. Child [' + domain + ']');
```

## References
- Please check (Cross-Origin Resource Sharing (CORS))[https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS] on Mozilla Developer Network.
- Also messaging API (Window.postMessage())[https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage]]
- Also (Broadcast Channel API)[https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API]
- Last but not least (Same-origin policy)[https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy]

---
Return to [Index](../../README.md)