$("body").height(window.innerHeight-10);
var items= $("#items");

$("form button").click(function(e){
    
  let roll = $("#roll");
  let name = $("#name");
  let marks = $("#marks");
  let username = $("#username");
  let pwd = $("#pwd");

  let rollVal = roll.val();
  let nameVal = name.val();
  let marksVal = marks.val();
  let usernameVal = username.val();
  let pwdVal = pwd.val();

  e.preventDefault();

  if(rollVal === "" || nameVal === "" || marksVal === "" || usernameVal === "" || pwdVal === ""){
      alert("please fill all the fields");
  }else{
      let item = '<div class="items"> Roll no - <span class="highlight">' + rollVal + '</span> , <span class="highlight">'+nameVal+ '</span> have got <span class = "highlight" >' + marksVal + '</span> marks. <span class="highlight">Your Email Address :</span>' + usernameVal + '<span>& PassWord :'+ pwdVal + '</span></div>'; 
      
     items.append(item);
     
      
     roll.val("");
     name.val("");
     marks.val("");
     username.val("");
     pwd.val("");
     

  }

});




