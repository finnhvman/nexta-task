import {ChangeEvent, useCallback} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Order from '../types/Order'

interface Props {
    value: Order | null
    onChange: (order: Order) => void
}

export default function Editor({ value, onChange }: Props) {
    const setCustomerName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...value,
            customerName: event.target.value
        })
    }, [ value, onChange ])

    return (
        <Box width="360px">
            <TextField
                label="Customer Name"
                value={value?.customerName ?? ''}
                onChange={setCustomerName}
                fullWidth
            />
        </Box>
    )
}