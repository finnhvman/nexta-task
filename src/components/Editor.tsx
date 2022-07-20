import {ChangeEvent, Dispatch, SyntheticEvent, useCallback} from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { PartialOrder } from '../types/Order'
import { extraIds, extrasIndex } from '../types/Extras'
import { Actions} from '../reducers/orderReducer'

function getLabelOfExtra(extraId: string) {
    return extrasIndex[extraId].label
}

interface Props {
    value: PartialOrder | null
    dispatch: Dispatch<Actions>
}

export default function Editor({ value, dispatch }: Props) {
    const setCustomerName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'setCustomerName',
            customerName: event.target.value
        })
    }, [ dispatch ])

    const setDate = useCallback((date: Date | null) => {
        dispatch({
            type: 'setDate',
            date: date ?? new Date()
        })
    }, [ dispatch ])

    const setExtras = useCallback((event: SyntheticEvent, extras: string[]) => {
        dispatch({
            type: 'setExtras',
            extras
        })
    }, [ dispatch ])

    return (
        <Stack width="360px" spacing="24px">
            <TextField
                label="Customer Name"
                value={value?.customerName ?? ''}
                onChange={setCustomerName}
                fullWidth
            />

            <DatePicker
                label="Date"
                value={value?.date ?? null}
                onChange={setDate}
                renderInput={(params) => <TextField {...params} />}
            />

            <Autocomplete
                multiple
                options={extraIds}
                getOptionLabel={getLabelOfExtra}
                value={value?.extras ?? []}
                onChange={setExtras}
                renderInput={(params) => <TextField {...params} label="Extras" />}
            />
        </Stack>
    )
}