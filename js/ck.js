var x = document.getElementsByClassName('player_name');
var arr=[];

function sixman(){

    for(var i in x){
        if(x[i].value != undefined && x[i].value !=''){
            arr.push(x[i].value);
        }
    }
    if(arr.length==6){
    function suffle(){
        arr.sort(()=>Math.random()-0.5);
    }
    suffle(arr);    
    
    var aTeam=document.getElementsByClassName("aTeam");
    aTeam[0].innerHTML=arr[0];
    aTeam[1].innerHTML=arr[1];
    aTeam[2].innerHTML=arr[2];
    
    var bTeam=document.getElementsByClassName("bTeam");
    bTeam[0].innerHTML=arr[3];
    bTeam[1].innerHTML=arr[4];
    bTeam[2].innerHTML=arr[5];
    arr=[];
    }
    else{
        alert("6명을입력하세요");
        arr=[]
    }
}

function eightman(){

    for(var i in x){
        if(x[i].value != undefined && x[i].value !=''){
            arr.push(x[i].value);
        }
    }
    if(arr.length==8){
    function suffle(){
        arr.sort(()=>Math.random()-0.5);
    }
    suffle(arr);    

    var aTeam=document.getElementsByClassName("aTeam");
    aTeam[0].innerHTML=arr[0];
    aTeam[1].innerHTML=arr[1];
    aTeam[2].innerHTML=arr[2];
    aTeam[3].innerHTML=arr[3];

    var bTeam=document.getElementsByClassName("bTeam");
    bTeam[0].innerHTML=arr[4];
    bTeam[1].innerHTML=arr[5];
    bTeam[2].innerHTML=arr[6];
    bTeam[3].innerHTML=arr[7];
    arr=[];
    }
    else{
        alert("8명을 입력하세요!");
        arr=[];
    }
}

function reset(){
    for(var i in x)
       x[i].value="";
    
    var aTeam=document.getElementsByClassName("aTeam");
    aTeam[0].innerHTML="player1";
    aTeam[1].innerHTML="player2";
    aTeam[2].innerHTML="player3";
    aTeam[3].innerHTML="player4";

    var bTeam=document.getElementsByClassName("bTeam");
    bTeam[0].innerHTML="player5";
    bTeam[1].innerHTML="player6";
    bTeam[2].innerHTML="player7";
    bTeam[3].innerHTML="player8";
    arr=[];
}