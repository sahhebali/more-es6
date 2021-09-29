
/* এ খানে 31/7,31/8,31/9  এই তিন্ টা মডিউল আডভান্স পরে দেখলেও ছলবে   */

class Support {
    name;
    designation = 'support web developer';
    addres = 'india';
    constructor(name, addres) {
        this.name = name;
        this.addres = addres;
    }
    startsesion() {
        console.log(this.name, 'start a support sesion');
    }
}






const ammir = new Support('amirKhan', 'india');
const salman = new Support('salmanKhan', 'austrelia');
const sharuk = new Support('sharukKhan', 'amerika');
const aksay = new Support('aksayKumar', 'londin');
console.log(ammir, salman, sharuk, aksay);
// console.log(salman);
// ammir.startsesion();
// salman.startsesion();