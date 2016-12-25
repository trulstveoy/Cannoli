import * as React from 'react';
import {validate, foo} from '../../redux/modules/form';

export function Form(props:any){
    return (
        <form>
            <label>test</label>
            <div>4 Hello Forms</div>

            <input type="submit" value="Submit" />
        </form>
    );
}