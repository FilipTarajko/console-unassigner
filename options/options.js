async function runOptionSetup(option){
    await chrome.storage.local.get(option, function (val) {
        document.getElementById(option).checked = val[option];
        document.getElementById(option).addEventListener("change", async (e) => {
            await chrome.storage.local.set({ [option]: e.target.checked });
            console.log(e.target.checked);
            chrome.storage.local.get(option, function (newVal) {
                console.log(`Set ${option} to ${newVal[option]}`)
            });
        });
    });
}

for (option of ['extension','warn','error','debug','log','info']) {
    runOptionSetup(option)
}
