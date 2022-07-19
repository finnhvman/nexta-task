type Extra = {
    id: string
    label: string
}

const extras: Extra[] = [
    {
        id: 'ACC',
        label: 'Adaptive Cruise Control'
    },
    {
        id: 'HS',
        label: 'Heated Seats'
    },
    {
        id: 'HWS',
        label: 'Heated Windscreen'
    },
    {
        id: 'AA',
        label: 'Apple CarPlay/Android Auto'
    },
    {
        id: 'ES',
        label: 'Electric Seats'
    },
    {
        id: 'LED',
        label: 'LED headlights'
    },
    {
        id: 'LA',
        label: 'Lane Assist'
    },
    {
        id: 'KL',
        label: 'Keyless entry and start'
    },
    {
        id: 'RC',
        label: 'Reversing camera'
    },
    {
        id: 'ET',
        label: 'Electric tailgate'
    }
]

export const extraIds =  extras.map(({ id }) => id)

export const extrasIndex = extras.reduce<Record<string, Extra>>((object, extra) => {
    object[extra.id] = extra
    return object
}, {})

export default extras
