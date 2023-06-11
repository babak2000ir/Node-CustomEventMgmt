import eventManager from "./event-manager.js";

eventManager.subscribe("event", function h1(handled) {
    console.log("event 1");
    handled(h1);
});
eventManager.subscribe("event", function h2(handled) {
    console.log("event 2")
    handled(h2);
});
eventManager.subscribe("event", function h3(handled) {
    console.log("event 3")
    handled(h3);
});
eventManager.subscribe("event", function h4(handled) {
    console.log("event 4")
    handled(h4);
});

eventManager.trigger("event").then(() => console.log("event triggered"));