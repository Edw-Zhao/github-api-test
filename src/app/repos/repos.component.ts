import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap, switchMap } from 'rxjs';
import { getGithubRepoPulls, getGithubUserRepo, setCurrentRepo } from '../state/actions';
import { selectCurrentUser, selectRepo } from '../state/selectors';

@Component({
	selector: 'app-repos',
	templateUrl: './repos.component.html',
	styleUrls: ['./repos.component.sass']
})
export class ReposComponent implements OnInit {

	constructor(private store: Store<{}>) { }

	currentUser = '';
	repos = {};

	ngOnInit(): void {
		this.store.pipe(
			select(selectCurrentUser),
			tap((currentUser) => this.currentUser = currentUser),
			switchMap((currentUser) => this.store.pipe(
				select(selectRepo(currentUser)),
			))
		).subscribe(repos => this.repos = repos);
	}

	getRepoPulls = (repo: string) => {
		if (this.currentUser) {
			this.store.dispatch(setCurrentRepo({ currentRepo: repo }));
			this.store.dispatch(getGithubRepoPulls({ user: this.currentUser, repo }));
		}
	};
}
