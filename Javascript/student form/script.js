var tablebody = document.getElementById("tablebody")

function save_content() {
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var course = document.getElementById("Course");
  var email = document.getElementById("email");
  var gender = document.querySelector('input[name="Gender"]:checked');

  

  if (!name || !age || !gender || !email) {
    alert("Fields are can't be Empty");
    return;
  }
  var table_r = document.createElement("tr");

  var td_name = document.createElement("td");
  td_name.textContent=name.value

  var td_age = document.createElement("td");
  td_age.textContent= age.value

   var td_gender = document.createElement("td");
   td_gender.textContent=gender.value

  var td_course = document.createElement("td");
  td_course.textContent=course.value

  var td_email = document.createElement("td");
  td_email.textContent=email.value

  var td_action = document.createElement("td");
  td_action.innerHTML="<button class='deletebtn'>Delete</button>"
  

  

  td_action.addEventListener("click",function(event) 
  {
    event.target.closest("tr").remove()
  })

  td_action.setAttribute("class","delete-btn")
  
 
  table_r.append(td_name,td_age,td_gender,td_course,td_email,td_action)
  tablebody.append(table_r)

 
  
  

}
 


