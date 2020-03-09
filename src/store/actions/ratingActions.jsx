export const updateRating = ({ email, id, title, poster_path, vote, vote_average, year }) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.firestore().collection('rating').doc(email).set({[id]: {
            id: id,
            title: title,
            poster_path: poster_path,
            vote: vote,
            vote_average: vote_average,
            year: year
        }}, {merge: true}).then(() => {
            dispatch({ type: 'ADD_RATE_SUCCESS'})
        }).catch(err => {
            console.log(':(', err)
            dispatch({ type: 'ADD_RATE_ERROR'})
        })
    }
}