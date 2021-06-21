
var users=[]

function SignUp(username,password){
  var user={}
  user.username=username
  user.password=password
  user.suggestedNextBook =Null
  user.ReadBooks=[]
  user.currentReadingBook=Null 
  user.finishReading=finishReading
  
  users.push(user)
}



var finishReading=function(title){
 for (var i=0;i<Library.length;i++){
 	for(var key in Library[i]){
 		if(Library[i].title===title){
 			ReadBooks.push(Library[i])
 		}
 	}

 }

 
}
function SignIn(username,password){
	for (var i=0;i<users.length;i++){
		for (var key in users[i]){
			if(users[i].username===username&&users[i].password===password){
				return 'need to complete this function'
			}
			return 'User not found'
		}
	}

}







var Library=[]
 function addBooks(title,author,summary,image){
 	 var  title={}
 	 	title.title=title;
 	 	title.author=author;
 	 	title.summary=summary;
 	 	title.image=image;
 	 Library.push(title)
 	 return title
 }


 var TheLordOfTheRings=addBooks('The Lord Of The Rings','J.R.R. Tolkien',"Tolkien's seminal three-volume epic chronicles the War of the Ring, in which Frodo the hobbit and his companions set out to destroy the evil Ring of Power and restore peace to Middle-earth. The beloved trilogy still casts a long shadow, having established some of the most familiar and enduring tropes in fantasy literature.","C:\Users\Firas\Desktop\First-solo-project\images\9780618640157_custom-bd5c36cb700fafac72208e5f622a6d1a9ca85489-s500-c85.webp")
 var TheHitchhikersGuideToTheGalaxy=addBooks('The Hitchhiker s Guide To The Galaxy','Douglas Adams',"In the first, hilarious volume of Adams' Hitchhiker's series, reluctant galactic traveler Arthur Dent gets swept up in some literally Earth-shattering events involving aliens, sperm whales, a depressed robot, mice who are more than they seem, and some really, really bad poetry.","C:\Users\Firas\Desktop\First-solo-project\images\9780345391803_custom-94fb9d4ba936bf0e6dff52bf2b7ad8c866f82470-s500-c85.webp")
 var EndersGame=addBooks("Ender's Game","Ender's Game","Young Andrew 'Ender' Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.","C:\Users\Firas\Desktop\First-solo-project\images\9780812550702_custom-14b6b3e2b8be027acc868fa0aba0670be8900168-s500-c85.webp")
 var TheDuneChronicles=addBooks("The Dune Chronicles"," Frank Herbert","Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.","C:\Users\Firas\Desktop\First-solo-project\images\9780812550702_custom-14b6b3e2b8be027acc868fa0aba0670be8900168-s500-c85.webp")


console.log('linked')