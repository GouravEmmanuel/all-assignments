//Like a react framework 
//Reconsiler 
//React has reconsiler which help to change states by it diff.
//Here is the simple was to do by clearing everything.
createDomElements(data){
    var parentElement=document.getElementById("mainArea");
    parentElement.innerHTML="";
    for (var i=0;i<data.length;i++){
        var childele=document.createElement("div");
       // childele.innerHTML=data[i].title;
        var grandChild1=document.createElement("span");
        grandChild1.innerHTML=data[i].title;
        var grandChild2=document.createElement("span");
        grandChild2.innerHTML=data[i].description;
       
        var grandChild3=document.createElement("button");
        grandChild3.innerHTML="Delete";
        grandChild3.setAttribute("onclick","deleteTodo(" +data[i].id+ ")");
        childele.append(grandChild1);
        childele.append(grandChild2);
      
        childele.append(grandChild3);
        parentElement.appendChild(childele); 
    }
    
}

window.setInterval(()=>{
    let todos=[]
    for(let i=0;i<Math.floor(Math.random()*100);i++){
        todos.push({
            title:"Go to GYM",
            description:"Go to GYM at 5",
            id=i+1
        })
    }
    createDomElements(todos);
},1000)