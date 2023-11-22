function dataTable() {
    $(document).ready(function () {
        table = $('#deploymentTable').DataTable({
            responsive: true
        })

        return table;

    });
}
function getFilteredValue() {
    let result = $('#deploymentTable').DataTable().search();

    return result;
}
function destroyDataTable() {
    table = $('#deploymentTable').DataTable().destroy();
}