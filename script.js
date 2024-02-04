const min = Math.ceil(document.querySelector("#min").value)

function random(){
    
    const max = Math.floor(document.querySelector("#max").value)
  
    alert(Math.floor(Math.random() * (max - min + 1) + min));
    console.log(min, max)
  
}

function clear_all(){
    window.location.reload(true);
}