class GitHub{
	constructor(){
		this.client_id='933d6e048b3a52db2413';
		this.client_secret='eb61314b3b1618418df91dce3ff4380fded4bf01';
		this.repos_count=5;
		this.repos_sort='created: asc';
	}

	async getUser(user){
		const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile=await profileResponse.json();
		const repos=await repoResponse.json();
		return{
			profile,
			repos
		}
	}

}