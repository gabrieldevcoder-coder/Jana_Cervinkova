document.addEventListener("DOMContentLoaded", ()=>{
    const tlacitko = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    tlacitko.addEventListener("click", () => {
        nav.classList.toggle("otevrene");
    });

const ZobrazitViceCertifikatu = document.querySelector(".vice-certifikatu");
const SkryteCertifikaty = document.querySelectorAll(".skryte-certifikaty");

ZobrazitViceCertifikatu.addEventListener("click", () => {
    SkryteCertifikaty.forEach(cert => {
        cert.classList.toggle("zobrazit");
    });
});



});