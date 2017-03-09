let login = (username, password) => {
	if(username !== 'admin' || password !== '1234') {
		console.log('incorrect login');
	}
	else{
		console.log('logged in!');
	}
};

login('admin', '1234');