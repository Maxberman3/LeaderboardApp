import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserScore } from "./UserScore";

@Entity({ name: "users" })
export class User {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ unique: true })
	public name: string;

	@OneToMany(type => UserScore, userScore => userScore.user, { cascade: true})
	public scores: UserScore[];

	public static create(props: { name: string, scores?: UserScore[] }): User {
		const entity = new User();
		entity.name = props.name;

		if (props.scores) {
			entity.scores = props.scores;
		} else {
			entity.scores = [];
		}

		return entity;
	}

}
