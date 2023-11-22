function executeCode(code) {
    return new Promise((resolve, reject) => {
        try {
            var output = '';
            console.log = function (text) {
                output += text + '\n';
            };
            eval(code);
            resolve(output);
        } catch (e) {
            reject(e);
        }
    });
}

function hideAndShowDiv(value) {

    if (value === "success") {
        $("#successMsg").show();
        setTimeout(function () { $("#successMsg").hide(); }, 5000)

        //})
        //$("#successMsg").show();
    }
    else if (value === "failed") {
        $("#errorMsg").show();
        setTimeout(function () { $("#errorMsg").hide(); }, 5000)
    }
    
}