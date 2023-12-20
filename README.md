# BlazeKitHub
This is an idea to consolidate all the tools needed in daily work life into a single application.

Feel free to modify and use as per your needs.

### Theme Customization
This application uses MudBlazor components. You can read further documentation [here](https://mudblazor.com/docs/overview) 

To update the theme color, follow these steps:
1. Add your colors in ThemeHelper.cs
2. Update the Palette and PaletteDark objects according to your theme in MainLayout.razor. 
3. For best practices, use theme variables, e.g. Color="@Color.Primary" in components so minimal changes are required in components when updating the theme.  

To update typography and fonts, follow these steps:
1. Go to google fonts and copy the CDN for the font you'd like to use. 
2. Paste the CDN in the head tag of index.html
3. Set the font family in MainLayout.razor

For font families that are supported in all browsers by default, you can skip step 1 and 2. 