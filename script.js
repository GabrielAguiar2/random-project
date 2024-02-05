

function random() {
    const min = Math.ceil(document.querySelector("#min").value)
    const max = Math.floor(document.querySelector("#max").value)
    if(max > min){
    alert(Math.floor(Math.random() * (max - min + 1) + min));
    console.log(min, max)
    }

    else{
        alert("O primeiro número deve ser MENOR do que o segundo!")
        window.location.reload(true);
    }
}

function clear_all() {
    window.location.reload(true);
}