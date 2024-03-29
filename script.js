
 setTimeout(()=>{
    document.querySelector('.preloader').attributes[1].value = "hide";
    document.querySelector('.wrapper').attributes[1].value = "show"
     },3000)

var hourEl = document.getElementById("hour");
var minuteEl = document.getElementById("minute");
var secondEl = document.getElementById("second");
var ampmEl = document.getElementById("ampm");
 function updateHour() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
 
 if(h > 12){
    h= h-12;
    ampm = "PM";
 }

 h=h<10 ? "0" + h :h;
 m=m<10 ? "0" + m :m;
 s=s<10 ? "0" + s :s;

 hourEl.innerText = h;
 minuteEl.innerText = m;
 secondEl.innerText = s;
 ampmEl.innerText = ampm;
 setTimeout(()=>{
    updateHour();
 }, 1000);
 }
 updateHour();
