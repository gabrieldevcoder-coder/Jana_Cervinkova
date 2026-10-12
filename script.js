document.addEventListener("DOMContentLoaded", ()=>{
    const tlacitko = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    tlacitko.addEventListener("click", () => {
        nav.classList.toggle("otevrene");
    });

const ZobrazitViceCertifikatu = document.querySelector(".vice-certifikatu");
const SkryteCertifikaty = document.querySelectorAll(".skryte-certifikaty");
let status = -1;
ZobrazitViceCertifikatu.addEventListener("click", () => {
    SkryteCertifikaty.forEach(cert => {
        cert.classList.toggle("zobrazit");
    });
    if(status === 1){
            ZobrazitViceCertifikatu.textContent = "Zobrazit více certifikátů";
        }
        else if(status === -1){
            ZobrazitViceCertifikatu.innerHTML = '<a href="#certifikaty" style=" color: inherit; text-decoration: none; display: block;">Skrýt certifikáty</a>'
        }
        status*=-1;
});



});