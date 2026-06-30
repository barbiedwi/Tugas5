function scrollToSection(){

document.getElementById("about").scrollIntoView({
behavior:"smooth"
});

}

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Pesan berhasil dikirim!");

form.reset();

});