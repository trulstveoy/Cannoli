
export const CLICK: string = 'game/CLICK';

const initialState = {
  squares: Array(9).map(() => null)
};

export function gameReducer(state = initialState, action) {
    if(action.type !== CLICK)
        return state;
    const newState = {
        squares: state.squares.slice()
    }    
   
   newState.squares[action.index] = 'X';
   
   return newState;
}

export function click(index) : any {
    return {
        type: CLICK,
        index: index
    }
}

