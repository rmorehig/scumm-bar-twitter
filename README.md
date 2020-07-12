# Twitter clone

<h2>Setup</h2>

- Install dependencies:

```shell
npm install
```

- Running the app in local:

```shell
npm start
```

- Running tests:

```shell
npm test
```

- Running e2e tests:

```shell
npm run test:e2e
```

<h2>Scenarios</h2>

<h3>Viewing the wall</h3>
 
![View the wall](resources/wall.png)

<h3>Viewing a user's timeline</h3>
 
![View Timeline](resources/timeline.png)

<h3>Posting a message</h3>
 
![Post a message](resources/post.png)

<h3>Following a new user</h3>

![Follow](resources/follow.png)

<h2>Details</h2>

- The main view should display an aggregated list of the users' posts that we are following, as known as the "wall".
- Moreover, we should show a list of the currently followed users providing a link to each user's timeline ordered by posted date.
- The user's timeline should only display the messages posted by the user ordered by posted date.
- We need to build a new component that it provides the search and following capabilities for the new users.
- Finally, we should be able to post messages in our timeline.

NOTE: Add instructions about how to run the application.

<h2>What we are looking for: </h2>

- Pay attention about how your code is organized.
- How you are reflecting the domain in the code. Be careful with the separation of concerns between the UI and the business logic.
- We love clean code.
- We don't think 100% of code coverage is a must, but we love tests.
- You are not intended to be proven as a designer. The provided mockups are just a guideline, feel free to build whatever you want.
- We are not fanboys of frameworks/libraries but keep in mind that our front-end stack is based on React.js ;)
- We are looking forward to seeing your code and discuss with you your solution.
