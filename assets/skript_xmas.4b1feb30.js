import"https://unpkg.com/@workadventure/scripting-api-extra@^1";var o=!1,e=e=WA.ui.openPopup("popUpStart",`Willkommen! Du findest folgende Bereiche:

Oben Rechts: IT & Regelwerk

Unten Rechts: Rettungsz\xFCge

Unten Links: ZKB, FeB, Fahrzeugeinsatz

Oben Links: Auswertung und Abschluss`,[{label:"Schlie\xDFen",callback:n=>{t()}}]),i="https://www.youtube.com/embed/nHxsomFVJtU";function t(){e!==void 0&&(e.close(),e=void 0)}var a="music_modern",p="directions2";WA.room.onEnterZone("directions1",()=>{e=WA.ui.openPopup("popUpStart",`Willkommen! Du findest folgende Bereiche:

Oben Rechts: IT & Regelwerk

Unten Rechts: Rettungsz\xFCge

Unten Links: ZKB, FeB, Fahrzeugeinsatz

Oben Links: Auswertung und Abschluss`,[{label:"Schlie\xDFen",callback:n=>{t()}}])});WA.room.onLeaveZone("directions1",()=>{t()});WA.room.onEnterZone(a,()=>{e=WA.ui.openPopup("popUpMusicModern","Musik?",[{label:"Her damit!",callback:n=>{WA.nav.openCoWebSite(i),o=!0,t()}}])});WA.room.onLeaveZone(a,()=>{t(),o&&(WA.nav.closeCoWebSite(),o=!1)});WA.room.onEnterZone(p,()=>{e=WA.ui.openPopup("popUpDirections2","M\xF6chtest du die Aufgabe starten?",[{label:"KIRA Entwicklung",callback:n=>{WA.nav.openTab(WA.state.it_1)}},{label:"PP-FZD Tipps",callback:n=>{WA.nav.openTab(WA.state.it_2)}},{label:"IMS",callback:n=>{WA.nav.openTab(WA.state.it_3)}},{label:"Z\xFCge zur\xFCckhalten",callback:n=>{WA.nav.openTab(WA.state.it_4)}}])});WA.room.onLeaveZone(p,()=>{t()});WA.room.onEnterZone("game_fire",()=>{WA.nav.openCoWebSite(WA.state.game_classic),o=!0});WA.room.onLeaveZone("game_fire",()=>{o&&(WA.nav.closeCoWebSite(),o=!1)});
