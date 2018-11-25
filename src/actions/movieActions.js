import { makeGet } from '../utils/api';

export const GET_POPULAR = 'GET_POPULAR';

const getPopular = (movies) => ({
    type: GET_POPULAR,
    movies
});

export const requestPopular = () => dispatch => {
    // const query = `/movie/popular`;
    const query = `/movie/now_playing`;
    return makeGet(query)
    .then(movies => {
        dispatch(getPopular(movies));
    });
}
