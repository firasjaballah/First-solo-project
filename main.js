
var users=[]
var str=null

function SignUp(username,password){
  var user={}
  user.username=username
  user.password=password
  user.suggestedNextBook =null
  user.ReadBooks=[]
  user.currentReadingBook=null 
  user.finishReading=finishReading 
  user.nextBook=null
  users.push(user)
}

var Firas=SignUp('firas','09134200')

var finishReading=function(title){
 for (var i=0;i<Library.length;i++){
 	for(var key in Library[i]){
 		if(Library[i].title===title){
 			ReadBooks.push(Library[i])
 			currentReadingBook=null
 		}
 	}
 }}

var nextBook=function(title){
	 for (var i=0;i<Library.length;i++){
 	for(var key in Library[i]){
 		if(Library[i].title===title){
 			currentReadingBook=Library[i]
}
}
 
}}
function Login(username,password){
	for (var i=0;i<users.length;i++){
		for (var key in users[i]){
			if(username===users[i]['username']&&password===users[i]['password']){

				 return str="file:///C:/Users/Firas/Desktop/First-solo-project/UserPage.html"
			}	
	}
		} alert('User not found')
		
}
function displayUser(username,password){
		var $userInfo=`<div>
		<h1>${username['ReadBooks']}</h1>
	    <h1>${username['currentReadingBook']}</h1>
	    </div>`
	    $('.userPage').append($userInfo)

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


 var TheLordOfTheRings=addBooks('The Lord Of The Rings','J.R.R. Tolkien',"Tolkien's seminal three-volume epic chronicles the War of the Ring, in which Frodo the hobbit and his companions set out to destroy the evil Ring of Power and restore peace to Middle-earth. The beloved trilogy still casts a long shadow, having established some of the most familiar and enduring tropes in fantasy literature.","C:/Users/Firas/Desktop/First-solo-project/images/Capture1.PNG")
 var TheHitchhikersGuideToTheGalaxy=addBooks('The Hitchhiker s Guide To The Galaxy','Douglas Adams',"In the first, hilarious volume of Adams' Hitchhiker's series, reluctant galactic traveler Arthur Dent gets swept up in some literally Earth-shattering events involving aliens, sperm whales, a depressed robot, mice who are more than they seem, and some really, really bad poetry.","C:/Users/Firas/Desktop/First-solo-project/images/Capture.PNG")
 var EndersGame=addBooks("Ender's Game","Young Andrew 'Ender' Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.","C:/Users/Firas/Desktop/First-solo-project/images/Capture3.PNG")
 var TheDuneChronicles=addBooks("The Dune Chronicles"," Frank Herbert","Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.","C:/Users/Firas/Desktop/First-solo-project/images/c2.PNG")

function displayLibrary(){
	 for(var i=0;i<Library.length;i++){
		var $Library=`<div>
		<h1>${Library[i]['title']}</h1>
	    <img src=${Library[i]['image']}/>
	    <p>${Library[i]['summary']}</p>
	    </div>`}
	    $('.Lib').append($Library)

	
}



console.log('linked')