import { UserController } from "./controller/UserController";
import urljoin from "url-join";
import { LeaderBoardController } from "./controller/LeaderBoardController";

const SCORES_SUBROUTE = "scores";
const USERS_ROUTE = "/users";
const LEADERBOARD_ROUTE = "/leaderboard";

export const Routes = [{
	method: "post",
	route: urljoin(USERS_ROUTE, ":name", SCORES_SUBROUTE),
	controller: UserController,
	action: "addScore"
},
{
	method: "get",
	route: LEADERBOARD_ROUTE,
	controller: LeaderBoardController,
	action: "all"
}
];