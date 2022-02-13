import axios from "axios";

const baseUrl = `http://${process.env.API_HOST}:${process.env.API_PORT}/leaderboard`;

export interface LeaderBoardEntry {
	userId: number,
	userName: string,
	highScore: number
}


export class LeaderBoardService {
	public static async getTopTen(): Promise<LeaderBoardEntry[]> {
		console.log(baseUrl)
		const res = await axios({
			method: 'get',
			url: baseUrl,
			params: {
				order: "DESC",
				limit: 10
			}
		});

		return res.data;
	}
}