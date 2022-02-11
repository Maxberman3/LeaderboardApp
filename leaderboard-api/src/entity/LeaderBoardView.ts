import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
	expression: `
		SELECT 
		users.id AS user_id,
		users.name AS user_name,
		MAX(user_scores.score) AS high_score
		FROM users
		LEFT JOIN user_scores ON 
			users.id = user_scores.user_id
		GROUP BY(users.id, users.name)
	`
})
export class LeaderBoardView {
	@ViewColumn({ name: "user_id" })
	public userId: number;

	@ViewColumn({ name: "user_name" })
	public userName: string;

	@ViewColumn({ name: "high_score"})
	public highScore: number;
}