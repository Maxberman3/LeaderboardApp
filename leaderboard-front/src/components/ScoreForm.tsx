import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Alert, Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { ScoreService } from "../services/scores";

interface ScoreInput {
	name: string,
	score: number
}

export const ScoreForm = () => {
	const { handleSubmit, formState: { errors }, control } = useForm<ScoreInput>();

	const submitScoreForm = async (data: ScoreInput) => {
		console.log(`sending ${JSON.stringify(data)}`);
		const res = await ScoreService.submit(data.name, data.score);
		console.log(`res ${res}`)
	}

	return (
		<Form onSubmit={handleSubmit(submitScoreForm)}>
			<Row className="mb-3">
				<FormGroup as={Col} className="mb-3" >
					<Form.Label>Username</Form.Label>
					<Controller
						name="name"
						rules={{ required: true, maxLength: 16 }}
						control={control}
						render={({ field }) => <Form.Control placeholder="MadMax3319" {...field} />}
					/>
				</FormGroup>
				<FormGroup as={Col} className="mb-3">
					<Form.Label>Score</Form.Label>
					<Controller
						name="score"
						control={control}
						rules={{ required: true }}
						render={({ field }) => <Form.Control type="number" {...field} />}
					/>
				</FormGroup>
				<Row>
					{errors.name?.type === "required" && <Col>
						<Alert variant="warning">Username is required</Alert>
					</Col>}
					{errors.name?.type === "maxLength" && <Col>
						<Alert variant="warning">Username must be less than 17 characters</Alert>
					</Col>}
					{errors.score?.type === "required" && <Col>
						<Alert variant="warning">Score is required</Alert>
					</Col>}
				</Row>
			</Row><Button variant="primary" type="submit">
				Submit
			</Button>
		</Form >
	)
}
export default ScoreForm;