import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { UserScore } from "../entity/UserScore";

export class UserController {

	private userRepo = getRepository(User);

	async addScore(request: Request<{ name: string }, User, { score: number }>) {
		let user = await this.userRepo.findOne({ name: request.params.name }, { relations: ["scores"] });
		let score = new UserScore();
		score.score = request.body.score;

		if (user) {
			user.scores.push(score);
		} else {
			user = User.create({
				name: request.params.name,
			});
			user.scores.push(score);
		}

		return this.userRepo.save(user);
	}
}