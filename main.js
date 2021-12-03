nameofthestudentarray=[];

function submit(){
    var displaystudentarray=[];
    for(var a=1; a<=4;a++){
        var nameofstudent=document.getElementById("name_of_the_student_"+a).value;
        console.log(nameofstudent);
        nameofthestudentarray.push(nameofstudent);
    }
    console.log(nameofthestudentarray);
    var lengthofname=nameofthestudentarray.length;
    console.log(lengthofname);

    for(var b=0;b<lengthofname;b++){
     displaystudentarray.push("<h4>Name-"+nameofthestudentarray[b]+"</h4>");
     console.log(displaystudentarray);
    }

    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;

    var remove=displaystudentarray.join("");
    console.log(remove);

    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    var displaystudentarraysort=[];
    var lengthofname1=nameofthestudentarray.length;
    console.log(lengthofname1);

    for(var c=0;c<lengthofname1;c++){
    displaystudentarraysort.push("<h4>Name-"+nameofthestudentarray[c]+"</h4>");
    console.log(displaystudentarraysort);

    var remove=displaystudentarraysort.join("");
    console.log(remove);

    document.getElementById("display_name_without_commas").innerHTML=remove;
}
   
   


function newupdate(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+nameofthestudentarray+"</h1>";
}
  

