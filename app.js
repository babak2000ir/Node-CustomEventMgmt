import eventManager from "./event-manager.js";

eventManager.subscribe("event", (handled) => {
    console.log("event 1");
    handled();
});
eventManager.subscribe("event", (handled) => {
    console.log("event 2")
    handled();
});
eventManager.subscribe("event", (handled) => {
    console.log("event 3")
    handled();
});
eventManager.subscribe("event", (handled) => {
    console.log("event 4")
    handled();
});

eventManager.trigger("event").then(() => console.log("event triggered"));