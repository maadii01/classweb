// function store_data(){
//     let user1= {
//         name:"Hammad",
//         age:"20",
//         city:"Lahore",
//     }
//     let course_name= "Web and App Development";
//     localStorage.setItem("User Data",JSON.stringify(user1));
//     localStorage.setItem("Class/ Course",course_name);

//     let user1data= localStorage.getItem("User Data");
//     console.log(user1data);
//     let user1_parse= JSON.parse(user1data);
//     console.log(user1_parse);

//     document.getElementById("name").innerHTML=user1_parse.name;
// }

function user_data(){
    let user_data={
        First_Name:document.getElementById("fname").value,
        Last_name:document.getElementById ("lname").value,
        password:document.getElementById("pass").value,
        re_password:document.getElementById("repass").value,
    }
    localStorage.setItem("User Data",JSON.stringify(user_data));
    let user_data_parse=JSON.parse(user_data);
    console.log(user_data_parse);
}
function clear_user_data(){
    localStorage.clear();
}
function user_login(){
    let user_login_form={
        firstname:document.getElementById("userfname").value,
        password:document.getElementById("userpassword").value,
    };

if(
    user_login_form.firstname==localStorage.getItem("First_name") &&
    user_login_form.password==localStorage.getItem("password")
){
alert("you are successfully login");
}
else{
    alert("Login Failed");
}
}
