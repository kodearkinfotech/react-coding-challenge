import React from "react";
import Link from "next/link";

type LayoutProps = {
  title?: string;
  pageName?: string;
  children?: React.ReactNode;
};
export function Layout({ title, pageName = "Page", children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Header pageName={pageName} />
      <main className="flex-grow max-w-screen-lg mx-auto p-2 w-full ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

type HeaderProps = {
  pageName?: string;
};
function Header({ pageName = "" }: HeaderProps) {
  return (
    <div>
      <header className="w-full bg-blue-600">
        <div className=" w-full max-w-screen-lg mx-auto px-2  h-14 flex items-center text-gray-50 justify-between">
          <h1 className="text-2xl font-bold">
            <Link href="/">Demo Streaming</Link>
          </h1>
          <nav className=" space-x-4">
            <Link href="/login">Login</Link>
            <a>Register</a>
          </nav>
        </div>
      </header>
      <div className="bg-gray-800 ">
        <div className=" max-w-screen-lg mx-auto px-2  h-14 flex items-center text-gray-50 text-xl">
          {pageName}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full   flex  bg-gray-800 text-xs text-gray-300">
      <div className="max-w-screen-lg mx-auto px-2 py-6  w-full space-y-4 ">
        <div className=" divide-x divide-gray-400">
          <Link href="/" className="pr-2">
            Home
          </Link>
          <Link href="/" className="px-2">
            Terms and Conditions
          </Link>
          <Link href="/" className="px-2">
            Privacy Policy
          </Link>
          <Link href="/" className="px-2">
            Collection Statement
          </Link>
          <Link href="/" className="px-2">
            Help
          </Link>
          <Link href="/" className="px-2">
            Manage Account
          </Link>
        </div>
        <div className="text-gray-400">
          Copyright &copy; 2022 Demo Stream. All rights reserved.
        </div>

        {/* Social + App links */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between items-center">
          <div className=" flex space-x-4">
            <img
              className="h-6 w-6"
              src="/assets/social/facebook-white.svg"
              alt="Facebook"
            />
            <img
              className="h-6 w-6"
              src="/assets/social/twitter-white.svg"
              alt="Twitter"
            />
            <img
              className="h-6 w-6"
              src="/assets/social/instagram-white.svg"
              alt="Instagram"
            />
          </div>
          <div className="flex space-x-3">
            <div className="w-32 h-10">
              <Link href="/">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/store/app-store.svg"
                  alt="App Store"
                />
              </Link>
            </div>
            <div className="w-32 h-10">
              <Link href="/">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/store/play-store.svg"
                  alt="Play Store"
                />
              </Link>
            </div>
            <div className="w-32 h-10">
              <Link href="/">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/store/windows-store.svg"
                  alt="Microsoft Store"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
