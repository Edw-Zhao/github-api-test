import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { getGithubUser, getGithubUserSuccess, getGithubUserRepo, getGithubUserRepoSuccess, getGithubRepoPulls, getGitHubRepoPullsSuccess } from './actions';
import { map, switchMap, tap } from 'rxjs';

@Injectable()
export class Effects {

	constructor(
		private actions$: Actions,
		private httpClient: HttpClient
	) { }

	baseUrl = 'https://api.github.com';

	getGithubUsers$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getGithubUser),
			switchMap(() => this.httpClient.get(`${this.baseUrl}/users/octocat`)
				.pipe(
					map((data) => getGithubUserSuccess({ users: data })))
			)
		);
	});

	getGitHubUserRepos$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getGithubUserRepo),
			switchMap((action) => this.httpClient.get(`${this.baseUrl}/users/${action.user}/repos`)
				.pipe(
					map((data) => getGithubUserRepoSuccess({ repos: data })),
				)
			),
		);
	});

	getGitHubRepoPulls$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getGithubRepoPulls),
			switchMap((action) => this.httpClient.get(`${this.baseUrl}/repos/${action.user}/${action.repo}/pulls?state=open`)
				.pipe(
					map((data) => getGitHubRepoPullsSuccess({ pulls: data })),
				)
			),
		);
	});
};