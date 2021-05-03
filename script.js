var val = document.body.querySelector(".val");
var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var nme = document.body.querySelector(".name").style.visibility = "hidden";
var grade = document.body.querySelector(".grade").style.visibility = "hidden";
var submitbutt = document.body.querySelector(".submitbutt").style.visibility = "hidden";
var logbutt = document.body.querySelector(".logbutt");
var title = document.createElement("h1")

var username = document.body.querySelector(".username").value;
var password = document.body.querySelector(".password").value;

var list = [];
var list2 = [];
var pages = [
  {
    name: "Grade View",
    content: ""
  },
  {
    name: "Add Grade",
    content: ""
  }
]


function validate(){
  var valEle = document.body.querySelector(".valMess")
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  
  if (username==="cool"&&password==="password"){
    valEle.innerHTML = ""
    for(var i=0; i<pages.length; i++){
      createPage(pages[i]); 
    }
    
    document.body.querySelector(".username").style.visibility = "hidden";
    document.body.querySelector(".password").style.visibility = "hidden";
    document.body.querySelector(".logbutt").style.display = "none";
    
  }else if(username!=="cool"&&password==="password"){
    valEle.innerHTML="Incorrect username"
  
  }else if(username==="cool"&&password!=="password"){
    valEle.innerHTML = "Incorrect password"
    
 
  }
}

document.body.querySelector(".val").addEventListener("click", function(){
  validate()
});
document.body.querySelector(".submitbutt").addEventListener("click", function(){
  renderList()
});


function createPage(pg){
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
 });
  button.innerHTML = pg.name;
  nav.appendChild(button);
}

 function contentWrite(wd,pg){
  display.innerHTML="";
  
  if (pg == "Grade View"){
    viewGrade();
     document.body.querySelector(".grade").style.visibility="hidden";
     document.body.querySelector(".name").style.visibility="hidden";
     document.body.querySelector(".submitbutt").style.visibility="hidden";
  }
  if(pg == "Add Grade"){
    addPage();
  };
 }
  
function viewGrade(){
  document.body.querySelector(".subMess").style.visibility = "hidden";
  title.innerHTML = "View Grades";
  display.appendChild(title);
  renderList();
}

function addPage(){
  document.body.querySelector(".name").style.visibility = "visible";
  document.body.querySelector(".grade").style.visibility = "visible";
  document.body.querySelector(".submitbutt").style.visibility = "visible";
};

function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML = "";
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML="Student Name: " +list[i] +" | Grade: "+list2[i];
    listEle.appendChild(element);
  }
};

function submit(){
  var text = document.body.querySelector(".itemText").value;
  if(text.length>0){
    list.push(text);
    list2.push(text)
    document.body.querySelector(".subMess").innerHTML=""
  }else{
  document.body.querySelector(".subMess").innerHTML="Invalid character"
  }
  
  renderList();
}

document.body.querySelector(".submitbutt").addEventListener("click", function(){
  submit()
})

renderList();