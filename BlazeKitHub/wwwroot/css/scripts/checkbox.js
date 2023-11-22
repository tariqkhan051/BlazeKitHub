var table;
function checkUncheck() {
    $('#selectAll').change(function () {
        var cells = table.rows({ 'search': 'applied' }).nodes();
        $(cells).find(':checkbox').prop('checked', $(this).is(':checked'));
    });
}
function uncheckCheckboxes() {
    $('input[name="checkbox"]').each(function () {
        this.checked = false;
    });
}