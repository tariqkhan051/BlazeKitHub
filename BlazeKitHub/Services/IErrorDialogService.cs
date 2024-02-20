namespace BlazeKitHub.Services
{
    public interface IErrorDialogService
    {
        Task ShowErrorDialog(string message, string details);
    }
}
