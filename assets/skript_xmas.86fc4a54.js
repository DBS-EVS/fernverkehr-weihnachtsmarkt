import"https://unpkg.com/@workadventure/scripting-api-extra@^1";var n=void 0,e=!1,p="https://www.youtube.com/embed/nHxsomFVJtU";function a(){n!==void 0&&(n.close(),n=void 0)}var t="music_modern",i="directions2";WA.room.onEnterZone("directions1",()=>{n=WA.ui.openPopup("popUpStart",`Willkommen! Du findest folgende Bereiche:

Oben Rechts: IT & Regelwerk

Unten Rechts: Rettungsz\xFCge

Unten Links:ZKB, FeB, Fahrzeugeinsatz

Oben Links: Auswertung und Abschluss`,[{label:"Schlie\xDFen",callback:o=>{e=!0,a()}}])});WA.room.onLeaveZone("directions1",()=>{a(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(t,()=>{n=WA.ui.openPopup("popUpMusicModern","Musik?",[{label:"Her damit!",callback:o=>{WA.nav.openCoWebSite(p),e=!0,a()}}])});WA.room.onLeaveZone(t,()=>{a(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(i,()=>{n=WA.ui.openPopup("popUpDirections2","M\xF6chtest du die Aufgabe starten?",[{label:"KIRA Entwicklung",callback:o=>{WA.nav.openTab(WA.state.it_1)}},{label:"PP-FZD Tipps",callback:o=>{WA.nav.openTab(WA.state.it_2)}},{label:"IMS",callback:o=>{WA.nav.openTab(WA.state.it_3)}},{label:"Z\xFCge zur\xFCckhalten",callback:o=>{WA.nav.openTab(WA.state.it_4)}}])});WA.room.onLeaveZone(i,()=>{a()});WA.room.onEnterZone("game_fire",()=>{WA.nav.openCoWebSite(WA.state.game_classic),e=!0});WA.room.onLeaveZone("game_fire",()=>{e&&(WA.nav.closeCoWebSite(),e=!1)});
