
import AuthPage from "./auth/AuthPage";
import { Metadata } from "next";



const page = async () => {


  return <div className="w-full h-screen grid place-items-center">

               <AuthPage/>
               
          </div>;
};

export default page;

const APP_NAME = "Skye";
const APP_DESCRIPTION = "Social media web application";

export const metadata: Metadata = {
  title: "Skye",
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "assets/icons/icon-384x384.png" },
    { rel: "shortcut icon", url: "assets/icons/icon-384x384.png" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa"],
};