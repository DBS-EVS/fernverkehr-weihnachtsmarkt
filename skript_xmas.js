import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
var isCoWebSiteOpened =  false;
var currentPopup = undefined
    
	
    var urlMusikModern = "https://www.youtube.com/embed/nHxsomFVJtU";
	
    function closePopUp(){
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }

    var zoneMusikModern = "music_modern";
    var zoneDirections = "directions";
    var zoneDirections1 = "directions1";
    var zoneDirections2 = "directions2";
	
	WA.room.onEnterZone("directions1", () => {
		
    currentPopup =  WA.ui.openPopup("popUpStart","Willkommen! Du findest folgende Bereiche:\n\nOben Rechts: IT & Regelwerk\nUnten Rechts: Rettungszüge\nUnten Links: ZKB, FeB, Fahrzeugeinsatz\nOben Links: Auswertung und Abschluss",[
            {
                label: "Schließen",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone("directions1", () =>{
        closePopUp();
    })
	
	
	
	

    WA.room.onEnterZone(zoneMusikModern, () => {
    currentPopup =  WA.ui.openPopup("popUpMusicModern","Musik?",[
            {
                label: "Her damit!",
                callback: (popup => {
                    WA.nav.openCoWebSite(urlMusikModern);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneMusikModern, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    

    

    WA.room.onEnterZone(zoneDirections2, () => {
    currentPopup =  WA.ui.openPopup("popUpDirections2","Möchtest du die Aufgabe starten?",[
            {
            label: "KIRA Entwicklung",
            callback: (popup => {
                WA.nav.openTab(WA.state.it_1);
            })
        },
        {
            label: "PP-FZD Tipps",
            callback: (popup => {
                WA.nav.openTab(WA.state.it_2);
            })
        },
		{
            label: "IMS",
            callback: (popup => {
                WA.nav.openTab(WA.state.it_3);
            })
        },
		{
            label: "Züge zurückhalten",
            callback: (popup => {
                WA.nav.openTab(WA.state.it_4);
            })
        }
    ]);
});


WA.room.onLeaveZone(zoneDirections2, () =>{
    closePopUp();

})




WA.room.onEnterZone("game_fire", () => {
   
            
    WA.nav.openCoWebSite(WA.state.game_classic);
	isCoWebSiteOpened = true;
                  
          
    })
WA.room.onLeaveZone("game_fire", () =>{
        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })