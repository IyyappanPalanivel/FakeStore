import { API_CONSTANTS, STRINGS } from "../utils/Constant";

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_CONSTANTS.GET_PRODUCTS, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}