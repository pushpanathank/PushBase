import { Toast } from 'native-base';

const showToast = (msg,type) => {
	if(msg=='') return;
	Toast.show({
	    text: msg,
	    buttonText: "Okay",
	    type: type || 'default',
	    duration:4000,
	    position: "top",
	    style:{marginTop:25}
	  });
}

export {
	showToast
};