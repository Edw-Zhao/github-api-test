import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getGithubUser, setCurrentUser, getGithubUserRepo } from '../state/actions';

@Component({
	selector: 'app-accounts',
	templateUrl: './accounts.component.html',
	styleUrls: ['./accounts.component.sass']
})
export class AccountsComponent implements OnInit {

	constructor(private store: Store<{}>) { }

	users = ['microsoft', 'octocat', 'hubot'];

	ngOnInit(): void {
	}

	getUserRepos = (user: string) => {
		this.store.dispatch(setCurrentUser({ currentUser: user }));
		this.store.dispatch(getGithubUserRepo({ user }));
	};
}
