import { FC } from "react";
import { Table } from "react-bootstrap";
import { LeaderBoardEntry } from "../services/leaderboard";

const LeaderBoardDisplay: FC<{ leaderBoard: LeaderBoardEntry[] }> = ({ leaderBoard }) => {
	return (
		<Table style={{ marginTop: "15px" }} striped bordered hover>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Username</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody>
				{leaderBoard.map((entry, idx) => {
					return <tr>
						<td>{idx + 1}</td>
						<td>{entry.userName}</td>
						<td>{entry.highScore}</td>
					</tr>
				})}
			</tbody>
		</Table>
	)
}
export default LeaderBoardDisplay