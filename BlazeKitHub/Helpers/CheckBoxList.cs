using Microsoft.AspNetCore.Components;

namespace BlazeKitHub.Helpers
{
    public class CheckBoxListBase : ComponentBase
    {

        public List<Method>? MethodsList { get; set; }
        protected List<string> SelectedIds = new();

        protected override void OnInitialized()
        {
            MethodsList = GetCarrierMethods();
        }

        private List<Method> GetCarrierMethods()
        {
            var vSubOne = new Method()
            {
                Name = "createLabel",
                Value = "Create Label"
            };
            var vSubTwo = new Method()
            {
                Name = "register",
                Value = "Register",
            };
            var vSubThree = new Method()
            {
                Name = "createManifest",
                Value = "Create Manifest",
            };
            var vSubFour = new Method()
            {
                Name = "track",
                Value = "Track",
            };
            var vSubFive = new Method()
            {
                Name = "getRates",
                Value = "Get Rates",
            };
            var vSubSix = new Method()
            {
                Name = "voidLabels",
                Value = "Void Labels",
            };
            var vSubSeven = new Method()
            {
                Name = "schedulePickup",
                Value = "Schedule Pickup"
            };
            var vSubEight = new Method()
            {
                Name = "cancelPickup",
                Value = "Cancel Pickup",
            };
            var vSubNine = new Method()
            {
                Name = "getServicePoints",
                Value = "Get Service Points",
            };
            var vSubTen = new Method()
            {
                Name = "getServicePoint",
                Value = "Get Service Point"
            };
            var vSubEleven = new Method()
            {
                Name = "getRelayPoints",
                Value = "Get Relay Points",
            };
            var vSubList = new List<Method>
            {
                vSubOne, vSubTwo, vSubThree, vSubFour, vSubFive,vSubSix,
                vSubSeven, vSubEight, vSubNine, vSubTen, vSubEleven
            };

            return vSubList;
        }
    }
    public class Method
    {
        public string? Name { get; set; }

        public string? Value { get; set; }
    }
}
