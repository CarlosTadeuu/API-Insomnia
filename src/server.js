import http from "node:http";
import {jsonBodyHandle} from "./middlewares/jsonBodyHandle.js";
import {routeHandle} from "./middlewares/routeHandle.js";

const server = http.createServer(async (req, res) => {
	await jsonBodyHandle(req, res);
	routeHandle(req, res);
});

server.listen(3333);
