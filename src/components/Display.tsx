import Box from '@mui/material/Box'
import Order from '../types/Order'

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
    value: Order | null
}

export default function Display({ value }: Props) {
    return (
        <Box sx={boxSx} component="code">
            {JSON.stringify(value, null, 2)}
        </Box>
    )
}
