function successMessageModal(msg) {
    swal("All done!", msg, "success");
}
function successModal(msg, instanceCount = 1) {
    swal("Instance " + msg + "!", "You have successfully " + msg.toLowerCase() + ` ${instanceCount > 1 ? instanceCount + " instances" : "the instance"}.`, "success");
}
function errorModal(title, msg) {
    swal({
        icon: 'error',
        title: title,
        text: msg
    });
}