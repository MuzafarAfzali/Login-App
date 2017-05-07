
var existingUsers = [
	{
		user: "John",
		passw: "Apple1"
	},
	{
		user: "Irvin",
		pass: "Apple2"
	},
	{
		user: "Bob",
		pass: "Apple3"
	}

]


function login() {
	
	var username = document.getElementById("username")
	
	var password = document.getElementById("password")
	
	var results = document.getElementById('results')

	
	console.log(username, password, results)
	console.log("username value is: " + username.value)
	console.log("password value is: " + password.value)
	
	
	for(i = 0; i < existingUsers.length; i = i + 1) {
		
		console.log(existingUsers[0])
		if(username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
			
			console.log("if statement ran, so we have a match!")
			
			results.className = 'success'
			
			results.textContent = "Welcome" + username.value + "!"
			
			return
		} 
	}
	
	
	console.log("no match was found :/")
	
	results.className = 'failure'
	
	results.textContent = "!! username or password don't match"
}