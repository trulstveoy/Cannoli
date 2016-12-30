import {IFormAction} from '../../../models/form';

export const SAVE = 'form/SAVE';
export const CHANGEVALUE = 'form/CHANGEVALUE';

const initialState = {
  name: '',
  birthdate: undefined
};

export async function formReducer(state = initialState, action) {
   return state;
}

export function changeValue(key:string, value:any){
    return {
        type: CHANGEVALUE,
        key: key,
        value:value
    }
}

export function save() : any {
    return {
        type: SAVE        
    }
}

