function GetAddress() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.ipify.org?format=jsonp&callback=DisplayIP";
    document.getElementsByTagName("head")[0].appendChild(script);
};

function DisplayIP(response) {
    var dispIpElem = document.getElementById("user-public-ip-address");
    if (dispIpElem != null) {
        dispIpElem.innerHTML = response.ip;
    }
}

function copyClipboard(content) {
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(content);
    } else {
        unsecuredCopyToClipboard(content);
    }
}

function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
}

window.SearchModules = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const options = Array.from(document.querySelectorAll('.autocomplete-list li'));

    options.forEach((option) => {
        const text = option.innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });

    const autocompleteList = document.querySelector('.autocomplete-list');
    if (searchTerm === '' || options.every(option => option.style.display === 'none')) {
        autocompleteList.style.display = 'none';
    } else {
        autocompleteList.style.display = 'block';
    }
};

window.SelectOption = (option) => {
    const input = document.querySelector('.form-select');
    input.value = option;
    const event = new Event('input');
    input.dispatchEvent(event);
    const autocompleteList = document.querySelector('.autocomplete-list');
    autocompleteList.style.display = 'none';
};