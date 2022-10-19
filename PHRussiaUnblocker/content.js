(function () {
    console.log("PHUnblocker: content.js loaded");
    function insertPageScript(text) {
        let parent = document.documentElement;
        let script = document.createElement('script');
        script.text = text;
        script.async = false;
        parent.insertBefore(script, parent.firstChild);
        parent.removeChild(script);
    }
    function insertPageScriptEx(textOrFunc, vals) {
        if (typeof (textOrFunc) == "function")
            textOrFunc = "(" + textOrFunc + (")(" + JSON.stringify(vals) + ");");
        insertPageScript(textOrFunc);
    }

setTimeout(function (){
        var injectFunc = function injectFunc(param) {

            console.log("PHUnblocker: script enjected for " + self.location);
            ///age-verification-container
                        //age-verification-wrapper
            document.getElementById("age-verification-container").outerHTML = "";
            document.getElementById("age-verification-wrapper").outerHTML = "";
            console.log("PHUnblocker: enjected script executed");
        };
        insertPageScriptEx(injectFunc, {});
}, 500);
        

})();

