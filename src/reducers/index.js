const reducer = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return [
                ...state,
                action.formValues
            ]
        default:
            return state
  }
}

export default reducer;