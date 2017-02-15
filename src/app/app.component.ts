import {Component} from '@angular/core';
import {IAppState} from "./store";
import {NgRedux, select} from "ng2-redux";
import * as ACTIONS from './actions'
import {fromJS, Map} from "immutable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Using Redux';
    @select(s => s.get('counter')) count; // state.get('counter')
    /*@select (['messaging', 'newMessages']) newMessages;
    @select ((s : IAppState) => s.messaging.newMessages) newMessages;*/

    constructor(private ngRedux: NgRedux<Map<string, any>>) {

    }

    increment() {
        this.ngRedux.dispatch({ type: ACTIONS.INCREMENT });
    }

}
