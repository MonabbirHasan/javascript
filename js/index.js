var sound_one=document.querySelectorAll(".sound_one")
var result=document.getElementById("result");
var delete_input=document.querySelector(".all_clear_input")

window.addEventListener("keydown",(e)=>{
var keycode=e.keyCode;

result.value+=e.key
delete_input.onclick=()=>{
	result.value=""
}

console.log(keycode)
for (var i =0;i<8;i++){
switch (keycode) {
case 49:
sound_one[0].classList.add("active")
var audio=new Audio("sound/sound (1).mp3");
audio.play()
break;
case 50:
sound_one[1].classList.add("active")
var audio=new Audio("sound/sound (2).mp3");
audio.play()
break;
case 51:
sound_one[2].classList.add("active")
var audio=new Audio("sound/sound (3).mp3");
audio.play()
break;
case 52:
sound_one[3].classList.add("active")
var audio=new Audio("sound/sound (4).mp3");
audio.play()
break;
case 53:
sound_one[4].classList.add("active")
var audio=new Audio("sound/sound (5).mp3");
audio.play()
break;
case 54:
sound_one[5].classList.add("active")
var audio=new Audio("sound/sound (6).mp3");
audio.play()
break;
case 55:
sound_one[6].classList.add("active")
var audio=new Audio("sound/sound (7).mp3");
audio.play()
break;
case 56:
sound_one[7].classList.add("active")
var audio=new Audio("sound/sound (8).mp3");
audio.play()
break;
case 57:
sound_one[8].classList.add("active")
var audio=new Audio("sound/sound (9).mp3");
audio.play()
break;
case 58:
sound_one[9].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;



case 87:
sound_one[13].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 69:
sound_one[14].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 82:
sound_one[15].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 84:
sound_one[16].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 89:
sound_one[17].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 85:
sound_one[18].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 73:
sound_one[19].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 79:
sound_one[20].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 80:
sound_one[21].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 219:
sound_one[22].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 221:
sound_one[23].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 13:
sound_one[24].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 65:
sound_one[25].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 83:
sound_one[26].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 68:
sound_one[27].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 70:
sound_one[28].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 71:
sound_one[29].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 72:
sound_one[30].classList.add("active")
var audio=new Audio("sound/sound (11).mp3");
audio.play()
break;


case 74:
sound_one[31].classList.add("active")
var audio=new Audio("sound/sound (12).mp3");
audio.play()
break;


case 75:
sound_one[32].classList.add("active")
var audio=new Audio("sound/sound (13).mp3");
audio.play()
break;


case 76:
sound_one[33].classList.add("active")
var audio=new Audio("sound/sound (14).mp3");
audio.play()
break;


case 186:
sound_one[34].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 222:
sound_one[35].classList.add("active")
var audio=new Audio("sound/sound (11).mp3");
audio.play()
break;


case 220:
sound_one[36].classList.add("active")
var audio=new Audio("sound/sound (12).mp3");
audio.play()
break;


case 90:
sound_one[37].classList.add("active")
var audio=new Audio("sound/sound (13).mp3");
audio.play()
break;


case 88:
sound_one[38].classList.add("active")
var audio=new Audio("sound/sound (14).mp3");
audio.play()
break;


case 67:
sound_one[39].classList.add("active")
var audio=new Audio("sound/sound (15).mp3");
audio.play()
break;


case 86:
sound_one[40].classList.add("active")
var audio=new Audio("sound/sound (16).mp3");
audio.play()
break;


case 66:
sound_one[41].classList.add("active")
var audio=new Audio("sound/sound (17).mp3");
audio.play()
break;


case 78:
sound_one[42].classList.add("active")
var audio=new Audio("sound/sound (15).mp3");
audio.play()
break;


case 77:
sound_one[43].classList.add("active")
var audio=new Audio("sound/sound (13).mp3");
audio.play()
break;


case 188:
sound_one[44].classList.add("active")
var audio=new Audio("sound/sound (5).mp3");
audio.play()
break;


case 190:
sound_one[45].classList.add("active")
var audio=new Audio("sound/sound (6).mp3");
audio.play()
break;

case 191:
sound_one[46].classList.add("active")
var audio=new Audio("sound/sound (3).mp3");
audio.play()
break;

case 32:
sound_one[47].classList.add("active")
var audio=new Audio("sound/sound (7).mp3");
audio.play()
break;

case 38:
sound_one[49].classList.add("active")
var audio=new Audio("sound/sound (5).mp3");
audio.play()
break;

case 39:
sound_one[50].classList.add("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 40:
sound_one[51].classList.add("active")
var audio=new Audio("sound/sound (12).mp3");
audio.play()
break;

case 37:
sound_one[52].classList.add("active")
var audio=new Audio("sound/sound (15).mp3");
audio.play()
break;


}
}
})


// remove class

window.addEventListener("keyup",(e)=>{
var keycode=e.keyCode;
for (var i =0;i<8;i++){
switch (keycode) {
case 49:
sound_one[0].classList.remove("active")
var audio=new Audio("sound/sound (1).mp3");
audio.play()
break;
case 50:
sound_one[1].classList.remove("active")
var audio=new Audio("sound/sound (2).mp3");
audio.play()
break;
case 51:
sound_one[2].classList.remove("active")
var audio=new Audio("sound/sound (3).mp3");
audio.play()
break;
case 52:
sound_one[3].classList.remove("active")
var audio=new Audio("sound/sound (4).mp3");
audio.play()
break;
case 53:
sound_one[4].classList.remove("active")
var audio=new Audio("sound/sound (5).mp3");
audio.play()
break;
case 54:
sound_one[5].classList.remove("active")
var audio=new Audio("sound/sound (6).mp3");
audio.play()
break;
case 55:
sound_one[6].classList.remove("active")
var audio=new Audio("sound/sound (7).mp3");
audio.play()
break;
case 56:
sound_one[7].classList.remove("active")
var audio=new Audio("sound/sound (8).mp3");
audio.play()
break;
case 57:
sound_one[8].classList.remove("active")
var audio=new Audio("sound/sound (9).mp3");
audio.play()
break;
case 58:
sound_one[9].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

// case 48:
// sound_one[10].classList.remove("active")
// var audio=new Audio("sound/sound (10).mp3");
// audio.play()
// break;



case 87:
sound_one[13].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 69:
sound_one[14].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 82:
sound_one[15].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 84:
sound_one[16].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 89:
sound_one[17].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 85:
sound_one[18].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 73:
sound_one[19].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 79:
sound_one[20].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 80:
sound_one[21].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 219:
sound_one[22].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 221:
sound_one[23].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 13:
sound_one[24].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 65:
sound_one[25].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 83:
sound_one[26].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 68:
sound_one[27].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 70:
sound_one[28].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 71:
sound_one[29].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 72:
sound_one[30].classList.remove("active")
var audio=new Audio("sound/sound (11).mp3");
audio.play()
break;


case 74:
sound_one[31].classList.remove("active")
var audio=new Audio("sound/sound (12).mp3");
audio.play()
break;


case 75:
sound_one[32].classList.remove("active")
var audio=new Audio("sound/sound (13).mp3");
audio.play()
break;


case 76:
sound_one[33].classList.remove("active")
var audio=new Audio("sound/sound (14).mp3");
audio.play()
break;


case 186:
sound_one[34].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;


case 222:
sound_one[35].classList.remove("active")
var audio=new Audio("sound/sound (11).mp3");
audio.play()
break;


case 220:
sound_one[36].classList.remove("active")
var audio=new Audio("sound/sound (12).mp3");
audio.play()
break;


case 90:
sound_one[37].classList.remove("active")
var audio=new Audio("sound/sound (13).mp3");
audio.play()
break;


case 88:
sound_one[38].classList.remove("active")
var audio=new Audio("sound/sound (14).mp3");
audio.play()
break;


case 67:
sound_one[39].classList.remove("active")
var audio=new Audio("sound/sound (15).mp3");
audio.play()
break;


case 86:
sound_one[40].classList.remove("active")
var audio=new Audio("sound/sound (16).mp3");
audio.play()
break;


case 66:
sound_one[41].classList.remove("active")
var audio=new Audio("sound/sound (17).mp3");
audio.play()
break;


case 78:
sound_one[42].classList.remove("active")
var audio=new Audio("sound/sound (15).mp3");
audio.play()
break;


case 77:
sound_one[43].classList.remove("active")
var audio=new Audio("sound/sound (13).mp3");
audio.play()
break;


case 188:
sound_one[44].classList.remove("active")
var audio=new Audio("sound/sound (5).mp3");
audio.play()
break;


case 190:
sound_one[45].classList.remove("active")
var audio=new Audio("sound/sound (6).mp3");
audio.play()
break;

case 191:
sound_one[46].classList.remove("active")
var audio=new Audio("sound/sound (3).mp3");
audio.play()
break;

case 32:
sound_one[47].classList.remove("active")
var audio=new Audio("sound/sound (7).mp3");
audio.play()
break;

case 38:
sound_one[49].classList.remove("active")
var audio=new Audio("sound/sound (5).mp3");
audio.play()
break;

case 39:
sound_one[50].classList.remove("active")
var audio=new Audio("sound/sound (10).mp3");
audio.play()
break;

case 40:
sound_one[51].classList.remove("active")
var audio=new Audio("sound/sound (12).mp3");
audio.play()
break;

case 37:
sound_one[52].classList.remove("active")
var audio=new Audio("sound/sound (15).mp3");
audio.play()
break;

}
}
})