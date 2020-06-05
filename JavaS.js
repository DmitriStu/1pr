function rC(textBlock) {
    var r = Math.round(255.0*Math.random());
    var g = Math.round(255.0*Math.random());
    var b = Math.round(255.0*Math.random());
    var div = document.getElementById("textBlock");
    div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
function zoomIn(textBlock) {
    var div = document.getElementById("textBlock");
    div.style.width = document.getElementById('plusW').value +"px";
    div.style.height= document.getElementById('plusH').value + "px";
    div.style.backgroundColor = "#" + document.getElementById('ranColor').value;
}