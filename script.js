const width = screen.width;

let r = 25; //rayon de la balle
let x = 50; //position horizontal de la balle
let y = 500; //position verticale de la balle
let dt = 10; //dure de deplacement de la balle
let p = 2; //puissance de la frappe de la balle
let d = 1; // decelleration de la vitesse de la basse
let c = 0.78; // coefficient de rebus

let angle = 1;
let vx = 10; //vitesse deplacement horizontal de la balle
let vy = 0; //vitesse deplacement vertical de la balle

let balle = document.getElementById("balle");
balle.style.top = y + "px";
balle.style.left = x + "px";

async function onPlay() {
    let stop = false;
    vx = 10;
    vy = 0;
    vx = vx * p;
    while (!stop) {
        let obstacle = !(x < (width - (r * 2)));
        while (!obstacle) {
            vx = vx - (vx * (d / 100))
            x += vx;
            balle.style.left = x + "px";
            balle.style.top = y + "px";
            stop = vx <= 0;
            obstacle = !(x < (width - (r * 2))) || x <= 0;
            await sleep(dt);
        }
        console.log(0);
        stop = vx <= 0;
        obstacle = x <= 0;
        while (!obstacle) {
            vx = vx - (vx * (c / 100));
            x -= vx;
            balle.style.left = x + "px";
            balle.style.top = y + "px";
            stop = vx <= 0;
            obstacle = !(x < (width - (r * 2))) || x <= 0;
            await sleep(dt);
        }
        console.log('stop', stop);
    }
    balle.style.top = "50px";
    balle.style.left = "50px";
}

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}