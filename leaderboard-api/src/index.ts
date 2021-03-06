import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import cors from "cors";

const APPLICATION_PORT = 3000;

createConnection().then(async connection => {
	const app = express();
	app.use(cors())
	app.use(bodyParser.json());

	// register express routes from defined application routes
	Routes.forEach(route => {
		(app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
			const result = (new (route.controller as any))[route.action](req, res, next);
			if (result instanceof Promise) {
				result.then(result => result !== null && result !== undefined ? res.send(result) : undefined).catch(err => next(err));
			} else if (result !== null && result !== undefined) {
				res.json(result);
			}
		});
	});

	app.listen(APPLICATION_PORT);

	console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
