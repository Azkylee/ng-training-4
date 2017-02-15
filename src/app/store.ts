import * as ACTIONS from './actions'
import {tassign} from "tassign";
import {Map} from "immutable";

export interface IAppState {
    counter: number;

}

export const INITIAL_STATE: IAppState = {
    counter: 0,

};

export function rootReduder(state: Map<string, any>, action): Map<string, any> {

    switch (action.type) {

        case ACTIONS.INCREMENT:
            // return {counter: state.counter + 1}; // NO TRACK OF STATE
            // return Object.assign({}, state, { counter: state.counter + 1, newArgument: true}); // MUTATION POSSIBLE
            // return tassign(state, { counter: state.counter + 1}); // tassign OR immutable (angular2 advanced - section 9 - 102)
            return state.set('counter', state.get('counter') + 1);
    }

    return state;
}