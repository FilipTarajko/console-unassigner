chrome.storage.local.get(['extension','warn','error','debug','log','info','optionFeedback'], function (val) {
    if (val.extension) {
        return;
    }
    for (setting of ['warn','error','debug','log','info']) {
        if (val[setting]) {
            if (val.optionFeedback) {
                console[setting](`disabling ${setting}`)
            }
            var script = document.createElement("script")
            script.textContent = `console.${setting} = () => {};`
            document.children[0].appendChild(script)
        }
    }
});