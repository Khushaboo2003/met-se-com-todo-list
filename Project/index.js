let save=document.querySelector('#savebtn');
let todobtn=document.querySelector('#tobtn');
let popup = document.querySelector("#popup");
let Name=document.querySelector("#name");
let description=document.querySelector("#description");
let dnone=document.querySelector(".d-none");
let reg=document.querySelector(".overlay");
let Priority=document.querySelector("#priority");

console.log(Name);
console.log(description);
console.log(reg);
console.log(Priority);
console.log(todobtn);

todobtn.addEventListener("click", () => {
    popup.classList.remove("d-none");
  });
  
save.addEventListener("click", () => {
    popup.classList.add("d-none");
});
localStorage.setItem("user-Name",Name.value);
localStorage.setItem("user-description",description.value);
localStorage.setItem("user-Priority",Priority.value);