import axios from "axios";

const baseUrl = `/api/users`;

export class ScoreService {
	public static async submit(name: string, score: number) {
		console.log(baseUrl)
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