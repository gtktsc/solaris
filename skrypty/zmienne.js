var c = document.getElementById('can').getContext('2d');
c.canvas.width = window.innerWidth - 20;
c.canvas.height = window.innerHeight - 20;
var animacja =setInterval('draw()', 33);
var numerPocisku = 0;
var S = new Gwiazda(window.innerWidth / 2, window.innerHeight / 2, 30, 0.05);
var przeciwnicy = [];
var pociski = [];
var planety = [];
var orbity = [];
var atakujPlaneteNumer = 1;