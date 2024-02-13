# BlazeKitHub: Streamlined On-Premises Development

Your All-in-One Solution for Collaborative On-Premises Development

## About
 
BlazeKitHub is your go-to tool for efficient on-premises development, offering a comprehensive suite of features to streamline your workflow. Stay synchronized across teams effortlessly by storing and sharing vital information securely. Remotely watch and deploy applications, manage instances with ease, and enjoy a centralized hub for accessing and downloading the latest applications necessary for development tasks.

With BlazeKitHub, say goodbye to manual work with built-in online tools that automate repetitive tasks, saving you time and effort. Monitor the status of APIs working on the backend directly from the platform and seamlessly integrate third-party APIs without the hassle of managing credentials.

Boost productivity with code generation capabilities that automatically generate code based on UI input, accelerating development cycles. Fully customizable to adapt to your specific work needs, BlazeKitHub offers both light and dark mode theme support for personalized user experience.

Experience streamlined on-premises development like never before with BlazeKitHub - your all-in-one solution for collaborative and efficient development workflows.

## Features Usage and Modifications

### Backend API

Go to [BlazeKitHub API](https://github.com/tariqkhan051/blaze-kit-hub-api) and follow instructions to setup backend.

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