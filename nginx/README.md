## Start

1. run `docker-compose up --build` from project folder root
2. navigate to http://localhost:3050

## Assumptions/Take Note
I chose routing for the api that I felt would make sense in a larger scale application. Also in a larger scale project I would separate the logic differently.
Case in point - I chose to use the route /users/:name/scores in order to submit scores for the purpose of this project, where a new user would be created if they didn't already exist. 

However, in a real application, I would have a POST /users route that handled only the saving of new users, and instead of a name parameter for scores, I would use
/users/:id/scores (I also would only save scores at this endpoint, if there was no user with :id, then I would error).