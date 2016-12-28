
export const CLICK: string = 'game/CLICK';

const initialState = {
  squares: Array(9).map(() => null),
  xIsNext:true
};

export function gameReducer(state = initialState, action) {
    if(action.type !== CLICK)
        return state;

    const squares = state.squares.slice();
    squares[action.index] = state.xIsNext ? 'X' : 'O';    

    return{
        ...state,
        xIsNext: !state.xIsNext,
        squares: squares
    }
}

export function click(index) : any {
    return {
        type: CLICK,
        index: index
    }
}

