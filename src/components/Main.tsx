import {useReducer} from 'react'
import Stack from '@mui/material/Stack';
import Editor from './Editor';
import Display from './Display';
import orderReducer from '../reducers/orderReducer'

export default function Main() {
    const [ order, dispatch ] = useReducer(orderReducer, {
        customerName: '',
        date: new Date(),
        extras: [] as string[]
    })

    return (
        <Stack direction="row" width="800px" margin="80px auto" justifyContent="space-around" component="main">
            <Editor value={order} dispatch={dispatch}/>
            <Display value={order}/>
        </Stack>
    )
}
