import eventManager from "./event-manager.js";

eventManager.subscribe("event", (handled) => {
    console.log("static event 1");
    handled();
});
eventManager.subscribe("event", (handled) => {
    setTimeout(() => {
        console.log("event 2 - 2 seconds delay");
        handled();
    }, 2000);
});
eventManager.subscribe("event", (handled) => {
    setTimeout(() => {
        console.log("event 3 - 1 second delay");
        handled();
    }, 1000);
});
eventManager.subscribe("event", (handled) => {
    console.log("static event 4")
    handled();
});

eventManager.trigger("event").then(() => console.log("event triggered"));