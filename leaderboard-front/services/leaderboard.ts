import axios from "axios";

const baseUrl = "http://localhost:20000/leaderboard";

export class LeaderBoardService {
	public static async get() {
		const res = await axios({
			method: 'post',
			url: baseUrl
		});

		return res.data;
	}
}