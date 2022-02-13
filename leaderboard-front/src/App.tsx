import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./app.css"
import ScoreForm from "./components/ScoreForm";
import { LeaderBoardEntry, LeaderBoardService } from './services/leaderboard';

function App() {
	const [leaderBoard, setLeaderBoard] = useState<LeaderBoardEntry[]>([])

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
					<ScoreForm />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
