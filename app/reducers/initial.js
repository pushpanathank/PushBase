import { getLanguage } from '../utils/common';
export const initialState = {
	common:{
		isLoading: false,
		showModal: false,
	},
	auth:{
		user: null,
		language:getLanguage(0),
		languageId:0,
		languageSet:0
	}
};