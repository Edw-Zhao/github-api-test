<b>** If the npm install and/or npm start doesn’t work, please try setting the npm version to 8.1.2 / nvm to 16.13.2.</b>

My initial impression of this exercise was that it was very comparable to the well-known weather app exercise, involving fetching data from public APIs and then manipulating said data into frontend UIs. I am more familiar with React presently, but given how much we talked about Angular and NgRx + RxJs, I thought it would be a mistake to not showcase those frameworks here. 

On the subject of time, I had not counted setting up the codebase and installing dependencies as part of the time limit. This includes removing the default clutter from creating an Angular app. As for writing my thought process, I had jotted down quick notes to be expanded here in this document after the conclusion of the exercise. In case this reasoning doesn’t stick, I set the time limit to be 2:45. Otherwise, not a letter was typed into my code editor after the timer went off.

<b>** After the NgRx implementation, I had gotten caught up with trying to make the app responsive and forgotten the background-color styling of the PRs based on their time created. But this would’ve been a relatively easy fix to put in, I would’ve either added [ngStyle] or [ngClass] attributes and set the conditions accordingly.</b>

Initial blueprint:
-	Setup codebase and install dependencies (timer starts after this line).
-	Use a <button> for debugging and try to get Angular’s HttpClient working to get the correct GitHub API data ASAP.
-	Setup part of the NgRx implementation so that the <button> would dispatch the action instead and the actual API call moved to effects.ts
-	Setup the reducer to do its thing (I used createMutableReducer instead of createReducer to avoid having to do { …state }) and do a quick console.log check to see if the store state was set correctly.
-	Setup the selector and debug by setting that observable on a component. 
-	Once the above test runs are successful, then essentially copy the functional flow to the three sections/components and modify as needed.
-	HTML/CSS implementation to match the provided mock.

I underestimated how long it would take to get the NgRx implementation up and running, so overall styling ended up not being as clean as I would like. Grid display would’ve been more applicable here. But because of time, I ended up defaulting to flex styling for comfort. 

Some other crimes I committed against good coding practices in the name of time:
-	Models weren’t defined for the API data, resorted to using any for those types.
-	<div class="layout"> on app.component.html should actually be a component itself to avoid over-populating the root component.
-	The store selector observables on repo.component and prs.component should actually use a combination operator.
o	Also, this is more subjective, but I think it’s conventional to set the local states directly to the observables. But coming off React, I found it more at home to set the local states to the actual values in the subscription.
-	The naming convention of “pulls” and “openPRs” could be confusing as it could indicate that filtering takes place on the frontend, but really a query param is used on the API route to only get the pulls that are still open.
-	Leaned into <div> abuse more than I would’ve liked.
-	Lots of the stylings were common and could’ve been set as global classes instead.
-	For functional semantics, the list of GitHub accounts could’ve been initialized as store states.

Some extra mile improvements I would make if I had another hour or two to make a better showing:
-	Add error handling implementation, would at least put a catchError on the NgRx effects and a store action listener to the root component to fire off alert()s.
-	Restrict how often the API calls can go through.
-	Add user and repo profile pictures next to their respective names as their image src urls are provided.
-	Add anchors to be able to visit the actual respective links.
-	Add styling to indicate that the user and repo names are clickable, such as hover effects or cursor: pointer.
-	Add loading or inProgress flags to the ui store state so that there can be a visual indication that the API call is going through.
-	Add visual indication if the user has no repos or if the repos has no open PRs.  
-	Add min-heights to the block sections as they shrink to nothing as you reduce the window size.
