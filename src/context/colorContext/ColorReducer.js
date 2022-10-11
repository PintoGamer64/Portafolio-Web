const ColorReducer = (state, action) => {
    const { type } = action;

    switch (type) {
        case 'DARK':
            return {
                ...state,
                colorBack: '#000000',
                background: '#1a1a40',
                textColor: '#ffffff'
            }

        default:
            return {
                ...state,
                colorBack: '#ffffff',
                background: '#ffffff',
                textColor: '#000000'
            }
    }

}

export default ColorReducer;