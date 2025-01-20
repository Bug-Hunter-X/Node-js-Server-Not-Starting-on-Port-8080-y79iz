# Node.js Server Not Starting on Port 8080

This repository demonstrates a common issue encountered when running Node.js servers: failure to start on the desired port.  The problem is often related to privilege issues (running the server without sufficient permissions) or the port already being in use by another application.

## Bug

The provided `bug.js` file attempts to create a simple HTTP server on port 8080. However, if the port is already occupied or the user doesn't have the necessary privileges, the server will fail to start without providing informative error messages. 

## Solution

The `bugSolution.js` file offers improved error handling to diagnose the cause of the server failure, providing helpful messages to the user.