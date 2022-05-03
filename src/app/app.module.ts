import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountsComponent } from './accounts/accounts.component';
import { ReposComponent } from './repos/repos.component';
import { PrsComponent } from './prs/prs.component';
import { BonusSectionComponent } from './bonus-section/bonus-section.component';

import { ApiReducer, UIReducer } from './state/reducers';
import { Effects } from './state/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    ReposComponent,
    PrsComponent,
    BonusSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('api', ApiReducer),
    StoreModule.forFeature('ui', UIReducer),
    EffectsModule.forRoot([Effects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
