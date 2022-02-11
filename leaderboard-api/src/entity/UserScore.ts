import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "user_scores" })
export class UserScore {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public score: number;

	@ManyToOne(type => User, user => user.scores, { nullable: false })
	@JoinColumn({ name: "user_id" })
	public user: User;
}