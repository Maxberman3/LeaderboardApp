import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export class ScoreService {
	public static async submit(name: string, score: number) {
		const res = await axios({
			method: 'post',
			url: `${baseUrl}/${name}/scores`,
			data: {
				name,
				score
			}
		});

		return res.data;
	}
}