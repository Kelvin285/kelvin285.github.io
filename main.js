const { Application } = require("pixi.js");

// Asynchronous IIFE
(async () =>
    {
        // Create a PixiJS application.
        const app = new Application();
        
        await app.init({background: '#000000', resizeTo: window});
        
        // Then adding the application's canvas to the DOM body.
        document.body.appendChild(app.canvas);
    })();
    