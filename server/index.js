// Use Express
var express = require("express");
var path = require("path");
// Use body-parser
var bodyParser = require("body-parser");
// Use Cors
var cors = require("cors");
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Create new instance of the express server
var app = express();
// Create new instance of the Docker socket
const Docker = require("dockerode");
const docker = new Docker({socketPath: "/var/run/docker.sock"});

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "www")));
app.all("*", function (req, res) {
    res.status(200).sendFile(`/`, {root: path.join(__dirname, "www")});
});

// Init the server
var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

/**
 * Create websocket
 */
const {Server} = require("socket.io");
const io = new Server(server, {cors: {origin: "*"}});
const tempo = 5000;
io.on("connection", (socket) => {
    socket.on("metrics:list", () => {
        docker.listContainers(function (err, containers) {
            if (err) {
                socket.emit("error", err);
            } else {
                socket.emit("containersList", containers);
            }
        });
        docker.listImages(function (err, images) {
            if (err) {
                socket.emit("error", err);
            } else {
                socket.emit("imagesList", images);
            }
        });
        docker.listVolumes(function (err, volumes) {
            if (err) {
                socket.emit("error", err);
            } else {
                socket.emit("volumesList", volumes);
            }
        });
        docker.listNetworks(function (err, networks) {
            if (err) {
                socket.emit("error", err);
            } else {
                socket.emit("networksList", networks);
            }
        });

        setInterval(() => {
            docker.listContainers(function (err, containers) {
                if (err) {
                    socket.emit("error", err);
                } else {
                    socket.emit("containersList", containers);
                }
            });
            docker.listImages(function (err, images) {
                if (err) {
                    socket.emit("error", err);
                } else {
                    socket.emit("imagesList", images);
                }
            });
            docker.listVolumes(function (err, volumes) {
                if (err) {
                    socket.emit("error", err);
                } else {
                    socket.emit("volumesList", volumes);
                }
            });
            docker.listNetworks(function (err, networks) {
                if (err) {
                    socket.emit("error", err);
                } else {
                    socket.emit("networksList", networks);
                }
            });
        }, tempo);
    });
    socket.on("action:prune", () => {
        docker.pruneImages(['dangling=false'], function (err, response) {
            if (err) {
                socket.emit("error", err);
            } else {
                socket.emit("response", response);
            }
        });

    });
    socket.on("action:restart", (id) => {
        const container = docker.getContainer(id)
        container.restart(id, function (err, response) {
            if (err) {
                socket.emit("error", err.json.message);
            } else {
                socket.emit("response", response);
            }
        });

    });
    socket.on("action:remove", (id) => {
        const image = docker.getImage(id)
        image.remove(id, function (err, response) {
            if (err) {
                socket.emit("error", err.json.message);
            } else {
                socket.emit("response", response);
            }
        });

    });
});
io.engine.on("connection_error", (err) => {
    console.log(err.req); // the request object
    console.log(err.code); // the error code, for example 1
    console.log(err.message); // the error message, for example "Session ID unknown"
    console.log(err.context); // some additional error context
});
