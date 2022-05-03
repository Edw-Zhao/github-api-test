import { createAction, props } from "@ngrx/store";

export const getGithubUser = createAction('[API] Get Github User');

export const getGithubUserSuccess = createAction(
	'[API] Get Github User Success',
	props<{ users: any; }>()
);

export const getGithubUserRepo = createAction(
	'[API] Get Github User Repo',
	props<{ user: string; }>()
);

export const getGithubUserRepoSuccess = createAction(
	'[API] Get Github User Repo Success',
	props<{ repos: any; }>()
);

export const getGithubRepoPulls = createAction(
	'[API] Get Github Repo Pulls',
	props<{ user: string; repo: string; }>()
);

export const getGitHubRepoPullsSuccess = createAction(
	'[API] Get GitHub Repo Pulls Success',
	props<{ pulls: any; }>(),
);

export const setCurrentUser = createAction(
	'[UI] Set Current User',
	props<{ currentUser: string; }>(),
);

export const setCurrentRepo = createAction(
	'[UI] Set Current Repo',
	props<{ currentRepo: string; }>(),
);
