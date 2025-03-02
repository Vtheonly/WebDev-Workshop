

document.getElementById("btn").onclick = function name(params) {
    document.getElementById("inp").value = "hey"
}


const getBtn = document.getElementById("btnget");


const result = document.getElementsByClassName("result")[0];
const inp = document.getElementById("inp").value;

getBtn.onclick = function () {

    result.innerHTML = inp;


}