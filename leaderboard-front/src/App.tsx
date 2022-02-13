import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./app.css"
import ScoreForm from "./components/ScoreForm";
import LeaderBoardDisplay from "./components/LeaderBoardDisplay";
import { LeaderBoardEntry, LeaderBoardService } from './services/leaderboard';

function App() {
	const [leaderBoard, setLeaderBoard] = useState<LeaderBoardEntry[]>([])

	useEffect(() => {
		fetchLeaderBoard();
	}, [])

	const fetchLeaderBoard = async () => {
		const fetchedLeaderBoard = await LeaderBoardService.getTopTen();
		setLeaderBoard(fetchedLeaderBoard);
	}

	return (
		<Container>
			<Row>
				<Col><h1 className='app-header'>Welcome to the Leader Board</h1></Col>
			</Row>
			<Row>
				<Col>
					<ScoreForm fetchLeaderBoard={fetchLeaderBoard} />
				</Col>
			</Row>
			<Row>
				<Col>
					<LeaderBoardDisplay leaderBoard={leaderBoard}></LeaderBoardDisplay>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
