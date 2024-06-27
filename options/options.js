async function runOptionSetup(option){
    await chrome.storage.local.get(option, function (val) {
        document.getElementById(option).checked = val[option];
        document.getElementById(option).addEventListener("change", async (e) => {
            await chrome.storage.local.set({ [option]: e.target.checked });
        });
    });
}

for (option of ['extension','warn','error','debug','log','info','optionFeedback']) {
    runOptionSetup(option)
}
