const width = screen.width;
const height = screen.height;

let r = 25; //rayon de la balle
let x = 50; //position horizontal de la balle
let y = 500; //position verticale de la balle
let dt = 1000; //dure de deplacement de la balle en ms
let p = 2; //puissance de la frappe de la balle
let d = 0.5; // decelleration de la vitesse de la basse
let c = 0.78; // coefficient de rebus

let angle = 90;
let vx = 10; //vitesse deplacement horizontal de la balle
let vy = 0; //vitesse deplacement vertical de la balle

let balle = document.getElementById("balle");
balle.style.top = y + "px";
balle.style.left = x + "px";

async function onClick() {
    console.log('cos', dTrig(Math.cos, angle))
    console.log('sin', dTrig(Math.sin, angle))
    vx *= p;
    vy *= p;
    update();
}

async function update() {
    vx -= (vx * d / 100);
    vy -= (vy * d / 100);
    x += vx;
    y += vy;
    setPosition();
    if (x < (r * 2)) {
        x = r * 2;
        vx *= -c;
    }
    if (x > width - (r * 2)) {
        x = width - (r * 2);
        vx *= -c;
    }
    if (y < (r * 2)) {
        y = r * 2;
        vy *= -c;
    }
    if (y > height - (r * 2)) {
        y = height - (r * 2);
        vy *= -c;
    }
}

async function setPosition() {
    if ((vx > 0 && vx < 0.001) || (vx < 0 && vx > 0.001) || (vy > 0 && vy < 0.001) || (vy < 0 && vy > 0.001)) {
        return;
    }
    balle.style.left = x + "px";
    balle.style.top = y + "px";
    await sleep(dt / 100);
    update();
}

function dTrig(trigFunc, angle) {
    return trigFunc(angle * Math.PI / 180);
}

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}
