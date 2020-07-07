
function myFunction(){
    document.getElementById("switcherTypes").innerHTML = `<h1>BACKGROUND GRADIENT SWITCHER</h1> <span class="button" id = "img1" onclick = "document.getElementById('body').style.backgroundImage='linear-gradient(wheat, pink)'"></span> <span class="button" id="img2" onclick="document.getElementById('body').style.backgroundImage='linear-gradient(rgb(161, 71, 161), rgb(66, 66, 134))'"></span> <span class="button" id="img3" onclick="document.getElementById('body').style.backgroundImage='linear-gradient(white, black)'"></span> <span class="button" id="img4" onclick="document.getElementById('body').style.backgroundImage='linear-gradient(cyan, yellowgreen)'"></span><span class="button" id="img5" onclick="document.getElementById('body').style.backgroundImage='linear-gradient(yellowgreen, coral)'"></span><span class="button" id="img6" onclick="document.getElementById('body').style.backgroundImage='linear-gradient(crimson, violet)'"></span><span class="button" id="img7" onclick="document.getElementById('body').style.backgroundImage='linear-gradient(yellow, crimson)'"></span><br><p>click on the button to change the background gradient </p> `
}
function myFunction2(){
   document.getElementById("switcherTypes").innerHTML = `<h1>FONT SWITCHER BUTTONS</h1>
        <span class="button1" id="font1" onclick="document.getElementById('changefont').style.fontSize='20px'">20 px</span>
        <span class="button1" id="font2" onclick="document.getElementById('changefont').style.fontSize='25px'">25 px</span>
        <span class="button1" id="font3" onclick="document.getElementById('changefont').style.fontSize='30px'">30 px</span>
        <span class="button1" id="font4" onclick="document.getElementById('changefont').style.fontSize='35px'">35 px</span>
        <span class="button1" id="font5" onclick="document.getElementById('changefont').style.fontSize='40px'">40 px</span>
        <span class="button1" id="font6" onclick="document.getElementById('changefont').style.fontSize='45px'">45 px</span>
        <span class="button1" id="font7" onclick="document.getElementById('changefont').style.fontSize='50px'">50 px</span>
        <p>click on the button to change the font of the text</p>`
}