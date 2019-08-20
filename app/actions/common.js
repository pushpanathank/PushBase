import { ActionTypes } from '../constants/';

export const loading = bool => ({
    type: ActionTypes.LOADING,
    isLoading: bool,
});

export const showModal = bool => ({
    type: ActionTypes.SHOWMODAL,
    showModal: bool,
});

export const showIntro = bool => ({
    type: ActionTypes.SHOWINTRO,
    showIntro: bool,
});