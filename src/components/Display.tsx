import Box from '@mui/material/Box'
import { PartialOrder } from '../types/Order'

const boxSx = {
    borderRadius: '12px',
    padding: '12px',
    width: '360px',
    fontFamily: 'monospace',
    fontSize: '16px',
    whiteSpace: 'pre',
    backgroundColor: '#eee'
}

interface Props {
    value: PartialOrder | null
}

export default function Display({ value }: Props) {
    return (
        <Box sx={boxSx} component="code">
            {JSON.stringify(value, null, 2)}
        </Box>
    )
}
