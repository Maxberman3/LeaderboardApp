import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { LeaderBoardView } from "../entity/LeaderBoardView";

export class LeaderBoardController {
	private leaderBoardRepo = getRepository(LeaderBoardView);

	async all(request: Request<{}, LeaderBoardView[], any, { order: "ASC" | "DESC", limit?: number }>) {
		return this.leaderBoardRepo.find({
			order: {
				highScore: request.query.order
			},
			take: request.query.limit
		});
	}
}