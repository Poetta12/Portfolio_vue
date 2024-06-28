var  RGPD = RGPD || {
	SENTENCE : "Ce site utilise des cookies pour vous fournir la meilleure expérience de navigation possible grâce au logiciel Matomo.",
	IMGSRCBUTTON : "",
	TEXTBUTTON : "Accepter",
	TEXTREFUSEDBUTTON : "Refuser",
	IMGSRCFOOTER : ""

}

RGPD.blockHTMLRgpd = [
    `<div id="rgpd" class="app-bgcolor-violetblue app-color-white">
        <h4>
        ${RGPD.SENTENCE}
        </h4>
        <button id="ok" class="link-btn app-color-white app-bgcolor-darkgray text-center"><span>${RGPD.TEXTBUTTON}</span></button>
        <button id="notok" class="link-btn app-color-white app-bgcolor-darkgray text-center"><span>${RGPD.TEXTREFUSEDBUTTON}</span></button>
    </div>`
]

RGPD.init = function () {
	RGPD.insertblockHTMLRgpd();	
	// RGPD.cssInsertStyle();
}; // end function RGPD.init

RGPD.insertblockHTMLRgpd = function() {
	try {
		document.body.insertAdjacentHTML('afterend', RGPD.blockHTMLRgpd);
	} catch (ex) {
		alert(ex);
	}
}; // end function RGPD.insertblockHTMLRgpd
RGPD.cssInsertStyle = function() {
	// let rgpd = document.querySelector('#rgpd'),
	// 	rgpdStyle = rgpd.style,
	// 	rgpdTextStyle = document.querySelector('#rgpd h4').style,
	// 	rgpdAcceptStyle = document.querySelector('#ok').style,
	// 	rgpdAcceptTextStyle = document.querySelector('#ok span').style;
	// // RGPD Block Style 
	// rgpdStyle.bottom = '0'; 
	// rgpdStyle.left = '0'; 
	// rgpdStyle.right = '0'; 
	// rgpdStyle.height = '150px'; 
	// rgpdStyle.width = "100%"; 	
	// rgpdStyle.backgroundColor = "#f1f1f1"; 	
	// rgpdStyle.zIndex = "1000"; 
	// rgpdStyle.padding = ".85em";
	// // RGPD accept Style 
 //    rgpdAcceptStyle.right = "12vw";
 //    rgpdAcceptStyle.width = "150px";
 //    rgpdAcceptStyle.bottom = "2vh";
	// // RGPD accept Text Style 
	// rgpdAcceptTextStyle.left = "calc(100% / 3.5)";
	// rgpdAcceptTextStyle.top = "calc(100% / 3)";
}
