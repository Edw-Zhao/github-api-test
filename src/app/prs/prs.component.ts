import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatestWith, map, switchMap, tap } from 'rxjs';
import { getGithubRepoPulls, setCurrentRepo } from '../state/actions';
import { selectCurrentRepo, selectCurrentUser, selectOpenPRs } from '../state/selectors';


@Component({
	selector: 'app-prs',
	templateUrl: './prs.component.html',
	styleUrls: ['./prs.component.sass']
})
export class PrsComponent implements OnInit {

	constructor(private store: Store) { }

	currentRepo = '';
	openPRs = {};

	ngOnInit(): void {
		this.store.pipe(
			select(selectCurrentRepo),
			switchMap((currentRepo) => this.store.pipe(
				select(selectOpenPRs(currentRepo)),
			))
		).subscribe(openPRs => this.openPRs = openPRs);

		this.store.pipe().subscribe((data) => console.log(data));
	}
}