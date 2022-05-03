import { on } from '@ngrx/store';
import { createMutableReducer } from 'ngrx-etc';
import { getGitHubRepoPullsSuccess, getGithubUserRepoSuccess, getGithubUserSuccess, setCurrentRepo, setCurrentUser } from './actions';

export interface IStateApi {
	users: {
		[userId: string]: Object;
	};

	repos: {
		[userId: string]: {
			[repoId: string]: Object;
		};
	};

	openPRs: {
		[repoId: string]: {
			[pullId: string]: Object,
		},
	};
}

export const apiInitialState: IStateApi = {
	users: {},
	repos: {},
	openPRs: {},
};

export const ApiReducer = createMutableReducer(
	apiInitialState,
	on(getGithubUserSuccess, (state, action) => {
		state.users[action.users.login] = action.users;
		return state;
	}),

	on(getGithubUserRepoSuccess, (state, action) => {
		action.repos.forEach((repo: any) => {
			if (!state.repos[repo.owner.login]) {
				state.repos[repo.owner.login] = {};
			}

			state.repos[repo.owner.login][repo.name] = repo;
		});

		return state;
	}),

	on(getGitHubRepoPullsSuccess, (state, action) => {
		action.pulls.forEach((pull: any) => {
			if (!state.openPRs[pull.base.repo.name]) {
				state.openPRs[pull.base.repo.name] = {};
			}

			state.openPRs[pull.base.repo.name][pull.id] = pull;
		});

		return state;
	})
);

export interface IStateUI {
	currentUser: string;
	currentRepo: string;
}

export const uiInitialState: IStateUI = {
	currentUser: '',
	currentRepo: ''
};

export const UIReducer = createMutableReducer(
	uiInitialState,
	on(setCurrentUser, (state, action) => {
		state.currentUser = action.currentUser;
		state.currentRepo = '';
		return state;
	}),

	on(setCurrentRepo, (state, action) => {
		state.currentRepo = action.currentRepo;
		return state;
	}),
); 