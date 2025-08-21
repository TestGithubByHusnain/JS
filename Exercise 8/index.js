const alarmAudio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');

function updateTime() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
    const alarmTime = document.getElementById('alarmTime').value;
    if (alarmTime) {
        const [alarmHour, alarmMinute] = alarmTime.split(':');
        if (
            now.getHours() === parseInt(alarmHour, 10) &&
            now.getMinutes() === parseInt(alarmMinute, 10) &&
            now.getSeconds() === 0
        ) {
            alarmAudio.play();
        }
    }
}

document.body.innerHTML = `
    <div style="font-size:2em;" id="clock"></div>
    <label>Set Alarm: <input type="time" id="alarmTime"></label>
`;

setInterval(updateTime, 1000);
updateTime();
