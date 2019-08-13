import { ActionTypes } from '../constants/';

export const loading = bool => ({
    type: ActionTypes.LOADING,
    isLoading: bool,
});
