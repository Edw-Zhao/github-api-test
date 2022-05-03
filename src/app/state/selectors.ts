import { createSelector } from '@ngrx/store';
import { IStateApi, IStateUI } from './reducers';

export const selectApiState = (state: any) => state.api;

export const selectRepo = (userId: string) => createSelector(
	selectApiState,
	(state: IStateApi) => state.repos[userId]
);

export const selectOpenPRs = (repoId: string) => createSelector(
	selectApiState,
	(state: IStateApi) => state.openPRs[repoId]
);

export const selectUIState = (state: any) => state.ui;

export const selectCurrentUser = createSelector(
	selectUIState,
	(state: IStateUI) => state.currentUser
);

export const selectCurrentRepo = createSelector(
	selectUIState,
	(state: IStateUI) => state.currentRepo
);