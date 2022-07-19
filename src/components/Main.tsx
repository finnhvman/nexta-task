import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Editor from './Editor';
import Display from './Display';
import {PartialOrder} from '../types/Order'

export default function Main() {
    const [ order, setOrder ] = useState<PartialOrder>({})

    return (
        <Stack direction="row" width="800px" margin="80px auto" justifyContent="space-around">
            <Editor value={order} onChange={setOrder}/>
            <Display value={order}/>
        </Stack>
    )
}
