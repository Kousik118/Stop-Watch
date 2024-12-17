var min=document.getElementById("input");
var sec=document.getElementById("inputs");
var timem=document.getElementById("input").value;
var times=document.getElementById("inputs").value;
var tempm=Number(timem);
var temps=Number(times);
var isRunning=false;
var c=0;
var watchIds;
var watchIdm;
function start(){
    if(!isRunning){
        isRunning=true;
        run()
    }
}
function run(){
    stoped=false;    
    function prints(){
        if(!stoped){
            if(temps<59){
                temps++
                if(temps>9){
                    sec.value=temps;
                }
                else{
                    sec.value="0"+temps;    
                }
            }
            else if(tempm){
                temps=0
                sec.value="00";
            }
            watchIds=setTimeout(prints,1000);
        }
    }
    prints()
    function printm(){
        if(!stoped){   
            tempm++
            if(tempm>9){
                min.value=tempm;
            }
            else{
                if(tempm>9){
                    sec.value=tempm;
                }
                else{
                    sec.value="0"+tempm; 
                }
            }
            watchIdm=setTimeout(printm,60000)
        }
    }
    printm()
}
function stop(){
    clearTimeout(watchIds);
    clearTimeout(watchIdm);
    isRunning=false;
}
function reset(){
    clearTimeout(watchIds);
    clearTimeout(watchIdm);
    isRunning=false;
    stoped=true;
    tempm=0
    temps=0
    sec.value="00";
    min.value="00";
}