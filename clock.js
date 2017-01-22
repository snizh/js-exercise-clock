"use strict";

window.onload = function () {
  const canvas = document.getElementById("clock");
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.shadowBlur = 15;
  ctx.shadowColor = 'white';

  function degToRad(degree) {
    return degree * Math.PI / 180;
  }

  function redraw(timeStamp) {
    requestAnimationFrame(redraw);

    let now = new Date();
    let today = now.toDateString();
    let time = now.toLocaleTimeString();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    // Background
    var gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, '#333340');
    gradient.addColorStop(1, 'black');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);

    // Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours * 15) - 90));
    ctx.stroke();

    // Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 180, degToRad(270), degToRad((minutes * 6) - 90));
    ctx.stroke();

    // Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 160, degToRad(270), degToRad(((seconds + milliseconds / 1000) * 6) - 90));
    ctx.stroke();


    // Date
    ctx.font = '25px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(today, 160, 250);

    // Time
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(time, 190, 276);
  }

  requestAnimationFrame(redraw);
};