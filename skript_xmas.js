import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
var isCoWebSiteOpened =  false;

var currentPopup = undefined
var urlMusikModern = "https://www.youtube-nocookie.com/embed/OdGNY8AKLzo?autoplay=1";
	
	
    function closePopUp(){
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }

    var zoneMusikModern = "music_modern";
    var zoneDirections = "directions";
    var zoneDirections2 = "directions2";
	
	
	
	
	

    WA.room.onEnterZone(zoneMusikModern, () => {
    currentPopup =  WA.ui.openPopup("popUpMusicModern","Musik?",[
            {
                label: "Her damit!",
                callback: (popup => {
                    WA.nav.openCoWebSite(urlMusikModern, false, "autoplay; encrypted-media");
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