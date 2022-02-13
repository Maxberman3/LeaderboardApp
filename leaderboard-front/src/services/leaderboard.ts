import axios from "axios";

const baseUrl = `/api/leaderboard`;

export interface LeaderBoardEntry {
	userId: number,
	userName: string,
	highScore: number
}


export class LeaderBoardService {
	public static async getTopTen(): Promise<LeaderBoardEntry[]> {
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