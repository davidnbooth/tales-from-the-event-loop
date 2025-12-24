- In the browser, if a rejection comes off the microtask queue without any handlers, an unhandledrejection is added to the task queue.  When that task comes off, any 'unhandledRejection' handlers on the window will run, and then the process will handle it (assuming preventDefault wasn't called in the handler).  The browser will log an error message to the console, but the browser will of course not exit.
    - If a handler is attached before the 'unhandledRejection' event is reached, it won't be run.
    - The 'unhandledRejection' task must run to completion (but not necessarily bubble up) before a handler is attached, for a "rejectionhandled" to be fired.  If the handler is attached at any earlier time, including _during_ the unhandledRejection task, it won't happen.
    - The browser will retroactively change the logged error message to an info message if a 'rejectionhandled' runs, seemingly as another macrotask scheduled with the rejectionhandled, to be handled immediately after it.
- In node, if the current event loop turn ends with a rejected promise not getting handled, the unhandledrejection is _immediately_ dealt with.  Any process.on('unhandledRejection', fn) handler is called.  If there isn't one, its a fatal error and the process logs it.  If you aren't in the node repl, the process will exit here.

https://tc39.es/ecma262/#sec-host-promise-rejection-tracker
