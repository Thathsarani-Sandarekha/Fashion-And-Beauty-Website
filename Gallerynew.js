function FullView(imgUrl, desc) {
    
    document.getElementById("FullImg").src = imgUrl;
    document.getElementById("FullImgWindow").style.display = "block";  
    document.getElementById("description").innerHTML = desc;
}

function CloseFullImg() {
    document.getElementById("FullImgWindow").style.display = "none";
}
