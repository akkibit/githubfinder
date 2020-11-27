//Search for the user
const github=new GitHub;
const ui=new UI;
const searchUser=document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
	const userText=e.target.value;
	if(userText!=''){
		github.getUser(userText)
		 .then(data=>{
		 	if(data.profile.message==='Not Found'){
		 		//alert message
		 		ui.showAlert('User Not Found','alert alert-danger');
		 		ui.clearProfile();
		 	}
		 	else{
		 		//show profile
		 		ui.showProfile(data.profile);
		 		ui.showRepos(data.repos);
		 	}
		 })
	}
	else{
		//clear profile
		ui.clearProfile();
	}
})