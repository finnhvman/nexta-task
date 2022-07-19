import {ChangeEvent, SyntheticEvent, useCallback} from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { PartialOrder } from '../types/Order'
import { extraIds, extrasIndex } from '../types/Extras'

function getLabelOfExtra(extra: string) {
    return extrasIndex[extra].label
}

interface Props {
    value: PartialOrder | null
    onChange: (order: PartialOrder) => void
}

export default function Editor({ value, onChange }: Props) {
    const setCustomerName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...value,
            customerName: event.target.value
        })
    }, [ value, onChange ])

    const setDate = useCallback((date: Date | null) => {
        onChange({
            ...value,
            date
        })
    }, [ value, onChange ])

    const setExtras = useCallback((event: SyntheticEvent, extras: string[]) => {
        onChange({
            ...value,
            extras
        })
    }, [ value, onChange ])

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