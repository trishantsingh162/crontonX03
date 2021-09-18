var breedImage = $('#dog-image');
var dropdown = $('#dog-breed');

var allowsubmit = true;
var breed;

  // sitting list of dog breeds in Drop down list 

$.get("https://dog.ceo/api/breeds/list/all" , function (data,status) {
	    let listOfBreeds = data.message;
	    for(let breed in listOfBreeds){
	    	dropdown.append('<option value="' + breed + '">' + breed + '</option>')
	    }
})


dropdown.change(function(){
	allowsubmit=true;
});


$("form button").click(function(e){
        e.preventDefault();
       //   console.log(dropdown.val());
        if(allowsubmit){
        	//  console.log(dropdown.val());
        	breed=dropdown.val();
        //	  console.log(dropdown.val());
        	display(breed);
        //	  console.log(breed);
        	allowsubmit=false;
        }

});

//for next button

$("#next-image a").click(function(e){
    e.preventDefault();
    if(breed!=undefined){
    	display(breed);
    }

});

function display(breed){
      let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    
   // let url = "https://dog.ceo/api/breeds/image/random";
   //  $("#dog-image img").remove();

     $.get(url , function (data , status) {

   	    let imageUrl  =  data.message;
   	  //  console.log(imageUrl)
   	      breedImage.append('<img src="' + imageUrl + '"  alt="' + breed + '">');
   });
}

