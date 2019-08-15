import { ActionTypes } from '../constants/';

export const loading = bool => ({
    type: ActionTypes.LOADING,
    isLoading: bool,
});

export const showModal = bool => ({
    type: ActionTypes.SHOWMODAL,
    showModal: bool,
});