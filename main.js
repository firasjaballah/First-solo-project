
var users=[]
var str=null
var library=[]

function SignUp(username,password){
  var user={}
  user.username=username
  user.password=password
  user.suggestedNextBook =null
  user.ReadBooks=[]
  user.currentReadingBook=null 
  user.finishReading=FinishReading 
  user.nextBook=null
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
  var retrievedData = localStorage.getItem("users")
   users = JSON.parse(retrievedData)
}
var retrievedData = localStorage.getItem("users")
   users = JSON.parse(retrievedData)

var Firas=SignUp('firas','09134200')
var fb=finishReading('TheLordOfTheRings')
var nb=nextBook('TheDuneChronicles')
function finishReading (title){
 for (var i=0;i<library.length;i++){
 
 		if(library[i].title===title){
 			ReadBooks.push(library[i])
 			currentReadingBook=null
 			displayLibrary(ReadBooks)


 		}
 	}
 }
var FinishReading= finishReading()
function nextBook(title){
	 for (var i=0;i<library.length;i++){
 
 		if(library[i].title===title){
 			currentReadingBook=library[i]
}
}
 
}

var NextBook= nextBook()
function login(username,password){
	for (var i=0;i<users.length;i++){
				
		if(username===users[i].username&&password===users[i].password){
							 // return str="file:///C:/Users/Firas/Desktop/First-solo-project/UserPage.html"
				 location.replace("file:///C:/Users/Firas/Desktop/First-solo-project/UserPage.html");

	}else{
		alert('user not found')
		 return location.reload()
	}
		}
	}
	

function displayUser(username,password){
		var $userInfo=`<div>
		<h1>${username['ReadBooks']}</h1>
	    <h1>${username['currentReadingBook']}</h1>
	    </div>`
	    $('.userPage').append($userInfo)
}









 function addBooks(title,author,summary,image){
 	 var  book={}
 	 	book.title=title;
 	 	book.author=author;
 	 	book.summary=summary;
 	 	book.image=image;
 	 library.push(book)
 }


 var TheLordOfTheRings=addBooks('The Lord Of The Rings','J.R.R. Tolkien',"Tolkien's seminal three-volume epic chronicles the War of the Ring, in which Frodo the hobbit and his companions set out to destroy the evil Ring of Power and restore peace to Middle-earth. The beloved trilogy still casts a long shadow, having established some of the most familiar and enduring tropes in fantasy literature.","C:/Users/Firas/Desktop/First-solo-project/images/Capture1.PNG")
 var TheHitchhikersGuideToTheGalaxy=addBooks('The Hitchhiker s Guide To The Galaxy','Douglas Adams',"In the first, hilarious volume of Adams' Hitchhiker's series, reluctant galactic traveler Arthur Dent gets swept up in some literally Earth-shattering events involving aliens, sperm whales, a depressed robot, mice who are more than they seem, and some really, really bad poetry.","C:/Users/Firas/Desktop/First-solo-project/images/Capture.PNG")
 var EndersGame=addBooks("Ender's Game","Orson Scott Card","Young Andrew 'Ender' Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.","C:/Users/Firas/Desktop/First-solo-project/images/Capture3.PNG")
 var TheDuneChronicles=addBooks("The Dune Chronicles"," Frank Herbert","Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.","C:/Users/Firas/Desktop/First-solo-project/images/c2.PNG")

function displayLibrary(library){
	 for(var i=0;i<library.length;i++){
		var $library=`<div>
		<h1>${library[i]['title']}</h1>
	    <img src=${library[i]['image']}/>
	    <p>${library[i]['summary']}</p>
	    </div>`}
	    $('.Lib').append($library)

	
}




// console.log('linked')