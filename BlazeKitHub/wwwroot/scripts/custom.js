function renderJSON(jsonData) {
    const container = document.createElement('div');
    container.classList.add('container');

    const renderData = (data, parent) => {
        if (Array.isArray(data)) {
            const list = document.createElement('ul');
            list.classList.add('list');
            parent.appendChild(list);

            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-item');
                list.appendChild(listItem);
                renderData(item, listItem);
            });
        } else if (typeof data === 'object') {
            const collapsibleContainer = document.createElement('details');
            collapsibleContainer.classList.add('collapsible');
            const summary = document.createElement('summary');
            summary.textContent = Object.keys(data).join(', ');
            collapsibleContainer.appendChild(summary);
            parent.appendChild(collapsibleContainer);

            Object.values(data).forEach(value => {
                renderData(value, collapsibleContainer);
            });
        } else {
            const dataContainer = document.createElement('div');
            dataContainer.classList.add('data-container');
            const dataType = document.createElement('span');
            dataType.classList.add('data-type');
            dataType.textContent = typeof data;
            const dataValue = document.createElement('span');
            dataValue.classList.add('data-value');
            dataValue.textContent = data;
            dataContainer.appendChild(dataType);
            dataContainer.appendChild(dataValue);
            parent.appendChild(dataContainer);
        }
    };

    renderData(jsonData, container);

    document.body.appendChild(container);
}

//function copyPassword(inputField, password) {
//    var tempInput = document.createElement("input");
//    tempInput.value = password;
//    document.body.appendChild(tempInput);
//    tempInput.select();
//    document.execCommand("copy");
//    document.body.removeChild(tempInput);

//    // Show a small popup message above the input field
//    var popup = document.createElement("div");
//    popup.className = "copy-popup";
//    popup.textContent = "Password copied to clipboard";
//    inputField.parentNode.insertBefore(popup, inputField.nextSibling);
//    setTimeout(function () {
//        popup.parentNode.removeChild(popup);
//    }, 2000); // Remove the popup after 2 seconds
//}
window.copyPassword = function (password) {
    var tempInput = document.createElement("input");
    tempInput.value = password;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show a small popup message above the input field
    var popup = document.createElement("div");
    popup.className = "copy-popup";
    popup.textContent = "Password copied to clipboard";
    document.body.appendChild(popup); // Append to document body

    setTimeout(function () {
        popup.style.display = "none"; // Hide the popup after 2 seconds
    }, 2000); // Remove the popup after 2 seconds
}
