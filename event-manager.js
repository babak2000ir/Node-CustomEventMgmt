const handlers = [];

function subscribe(event, handler) {
    if (!handlers[event]) {
        handlers[event] = [];
    }
    handlers[event].push(handler);
}

function unsubscribe(event, handler) {
    if (!handlers[event]) {
        return;
    }
    handlers[event] = handlers[event].filter(h => h !== handler);
}

async function trigger(event, ...args) {
    return new Promise((resolve, reject) => {
        if (!handlers[event]) {
            resolve();
        }
        let _handlers = [...handlers[event]];
        const handled = (sender) => {
            _handlers = _handlers.filter(h => h !== sender);
            if (_handlers.length === 0)
                resolve();
        }

        handlers[event].forEach(h => h(handled, ...args));
    });
}

export default {
    subscribe,
    unsubscribe,
    trigger
}