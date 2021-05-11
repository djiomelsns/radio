class App{
    constructor(){
        var container = document.querySelector(".container");
        var content = document.querySelector(".content");
        
        container.style.height=screen.height +"px";
        if(screen.width < 600){
            container.style.width = screen.width +"px";
            
        }
    }
}
onload = new App();

class Audio{
    constructor(){
        this.play_pause =document.getElementById("play_pause");
        this.audioFile=document.getElementById("audioFile");
        this.name_radioo=document.getElementById("name_radio");
        this.yes;
        this.play_pause.addEventListener("click",()=>{
            this.play();
        } ); 
        

        this.name_radio=[];
        this.name_radio[0]="Blida";
        this.name_radio[1]="EL BAHJA";
        this.name_radio[2]="FIRET FM";

        this.link_radio=[];
        this.link_radio[0]="https://blida.ice.infomaniak.ch/09.aac";
        this.link_radio[1]="http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        this.link_radio[2]="http://95.173.162.182:9992/;stream.mp3";
       
        this.i=0
        this.setAudio();

        this.next =document.getElementById("next");
        this.previous =document.getElementById("previous");

        this.next.addEventListener("click",()=>{
            
            if(this.i<this.link_radio.length-1){
                this.i++;
                // this.yes=false;
            }else{
                this.i=0;
            }
            this.yes=false;
            localStorage.setItem("setPosition",this.i);
            this.setAudio();
        })
        this.previous.addEventListener("click",()=>{
            if(this.i>0){
                this.i--;
                // this.yes=false;

            }else{
                this.i=this.link_radio.length-1;
            }
            this.yes=false;
            localStorage.setItem("setPosition",this.i);
            this.setAudio();
        })
        

    }
    setAudio(){
        if(localStorage.getItem('setPosition')!=null){
            this.i=localStorage.getItem("setPosition");
        }
        
        this.audioFile.src = this.link_radio[this.i];
        this.name_radioo.innerHTML=this.name_radio[this.i];
        this.play()
    }
    play(){
        if(this.yes == false){
            this.audioFile.play();
           this.play_pause.src='pause.png'
            this.yes = true;
        }else{
            this.audioFile.pause();
            this.play_pause.src='play.png'
            this.yes=false;
        }
    }
}
onload =new Audio();
class Volume{
    constructor(){
        this.audioFile= document.getElementById("audioFile");
        this.audioFile.Volume=50/100;

        this.volumeRange= document.getElementById("volumeRange");
        this.volumeRange.addEventListener("change",()=>{
            this.audioFile.volume = this.volumeRange.value /100;
            
        })
        this.vitessRang = document.getElementById("vitessRang");
        this.vitessRang.playbackRate = 1;
        this.vitessRang.addEventListener("change",()=>{
            this.audioFile.playbackRate = this.vitessRang.value/100;
        })
    }
}
onload = new Volume();
class Colors{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color2 = document.getElementById("color2");
        this.color3 = document.getElementById("color3");
        this.color4 = document.getElementById("color4");
        this.color5 = document.querySelector(".footer");
        this.color6 = document.getElementsByTagName("input");
        if(localStorage.getItem("col")!=null){
            document.body.style.background=localStorage.getItem("col");
            // document.querySelector(".header").style.background= localStorage.getItem("col");
        }
        this.color1.addEventListener("click",()=>{
            this.color("linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%","#e61d8c");
        })
        this.color2.addEventListener("click",()=>{
            this.color("linear-gradient(315deg, #0beef9 0%, #48a9fe 74%","#0beef9");
            
        })
          this.color3.addEventListener("click",()=>{
            this.color("linear-gradient(315deg, #3ee577 0%, #42fcdb 74%","#3ee577");
            
        }) 
         this.color4.addEventListener("click",()=>{
            this.color("linear-gradient(315deg, #fff000 0%, #ed008c 74%","#fff000");
            
        })
    }
    color(couleur,couleur2){
        localStorage.setItem("col",couleur);
        document.body.style.background= couleur;
        this.color5.style.borderTop = "1px solid "+ couleur2; 
        this.color5.style.borderBottom="1px solid "+ couleur2; 
       
        // document.querySelector(".header").style.background=couleur;
    }

}
onload = new Colors();

