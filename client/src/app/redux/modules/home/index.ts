import {ICounter, ICounterAction} from '../../../models/home';

export const INCREMENT: string = 'home/INCREMENT';
export const DECREMENT: string = 'home/DECREMENT';

const initialState: ICounter = {
  count: 0,
};

export function homeReducer(state = initialState, action?: ICounterAction) : ICounter{
    switch(action.type){
        case INCREMENT:
            return {
                count: state.count + 1
            };

        case DECREMENT:
            return{
                count: state.count === 0 ? 0 : state.count - 1
            }

        default:
            return state;
    }    
}

export function increment() : ICounterAction{
    return {
        type: INCREMENT 
    }
}

export function decrement() : ICounterAction{
    return {
        type: DECREMENT
    }
}