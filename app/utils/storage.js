import { AsyncStorage } from 'react-native';

const getFromstorage = async (key) => {
  return await AsyncStorage.getItem(key);
};

const saveToStorage = async (key, value) => {
  		try {
		    return await AsyncStorage.setItem(key, value);
		} catch (error) {
		    console.log(`
		        Error in saving ${key } token
		    `)
		}
	return null;
};

const storage = {
  get: (key) => getFromstorage(key),
  set: (key, value) => saveToStorage(key, value),
};

export default storage;