import"https://unpkg.com/@workadventure/scripting-api-extra@^1";var e=!1,o=void 0,i="https://www.youtube-nocookie.com/embed/R6g8H13lqpE?autoplay=1";function n(){o!==void 0&&(o.close(),o=void 0)}var p="music_modern",t="directions2";WA.room.onEnterZone(p,()=>{o=WA.ui.openPopup("popUpMusicModern","Musik?",[{label:"Her damit!",callback:a=>{WA.nav.openCoWebSite(i,!1,"autoplay; encrypted-media"),e=!0,n()}}])});WA.room.onLeaveZone(p,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(t,()=>{o=WA.ui.openPopup("popUpDirections2","M\xF6chtest du die Aufgabe starten?",[{label:"KIRA Entwicklung",callback:a=>{WA.nav.openTab(WA.state.it_1)}},{label:"PP-FZD Tipps",callback:a=>{WA.nav.openTab(WA.state.it_2)}},{label:"IMS",callback:a=>{WA.nav.openTab(WA.state.it_3)}},{label:"Z\xFCge zur\xFCckhalten",callback:a=>{WA.nav.openTab(WA.state.it_4)}}])});WA.room.onLeaveZone(t,()=>{n()});WA.room.onEnterZone("game_fire",()=>{WA.nav.openCoWebSite(WA.state.game_classic),e=!0});WA.room.onLeaveZone("game_fire",()=>{e&&(WA.nav.closeCoWebSite(),e=!1)});