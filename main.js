document.addEventListener("DOMContentLoaded", function(e){


    function setHour (){
        let time = new Date();
        let hours = time.getHours() * 30;
        let minutes = time.getMinutes() * 6;
        let seconds = time.getSeconds() * 6;
        const secondHand = document.querySelector('div.hand.second-hand');
        const minuteHand = document.querySelector('div.hand.min-hand');
        const hourHand = document.querySelector('div.hand.hour-hand');
        secondHand.style.transform = `rotate(${seconds}deg)`;
        minuteHand.style.transform = `rotate(${minutes}deg)`;
        hourHand.style.transform = `rotate(${hours}deg)`;
        console.log(time);
     }
    setInterval(setHour,1000);

});
