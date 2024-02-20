using BlazeKitHub.Components.Dialogs;
using Microsoft.JSInterop;
using MudBlazor;

namespace BlazeKitHub.Services
{
    public class ErrorDialogService : IErrorDialogService
    {
        private readonly IDialogService _dialogService;
        private readonly IJSRuntime _jsRuntime;
        private readonly IConfiguration _configuration;

        public ErrorDialogService(IDialogService dialogService, IJSRuntime jsRuntime, IConfiguration configuration)
        {
            _dialogService = dialogService;
            _jsRuntime = jsRuntime;
            _configuration = configuration;
        }

        public async Task ShowErrorDialog(string message, string details)
        {
            var version = _configuration.GetSection("error-dialog-version")?.Value ?? "v1";
            
            if (version == "v2")
            {
                var parameters = new DialogParameters<ErrorDialog>
                {
                    { x => x.model, new ErrorDialog.Model { Message = message, Details = details} }
                };

                var options = new DialogOptions() {
                    MaxWidth = MaxWidth.ExtraSmall
                };

                var dialog = await _dialogService.ShowAsync<ErrorDialog>("Error", parameters, options);
                var result = await dialog.Result;

                // Handle dialog result if needed
                if (!result.Canceled)
                {
                    // Handle logic when the dialog is confirmed
                }
            }
            else
            {
                await _jsRuntime.InvokeVoidAsync("errorModal", message, details);
            }
        }
    }
}
