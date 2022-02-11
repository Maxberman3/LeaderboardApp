import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { LeaderBoardView } from "../entity/LeaderBoardView";

enum SortOrder {
	ASC = "ASC",
	DESC = "DESC"
}
export class LeaderBoardController {
	private leaderBoardRepo = getRepository(LeaderBoardView);

	async all(request: Request<{}, LeaderBoardView[], any, { order: SortOrder, limit?: number }>) {
		const sortOrder = request.query.order ? request.query.order : SortOrder.DESC;

		return this.leaderBoardRepo.find({
			order: {
				highScore: sortOrder
			},
			take: request.query.limit
		});
	}
}