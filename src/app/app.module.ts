import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgReduxModule, NgRedux} from 'ng2-redux';
import {AppComponent} from './app.component';
import {IAppState, rootReduder, INITIAL_STATE} from "./store";
import {fromJS, Map} from "immutable";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(ngRedux: NgRedux<Map<string, any>>) {
        ngRedux.configureStore(rootReduder, fromJS(INITIAL_STATE));
    }

}
