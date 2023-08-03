import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import repoNames from "../repos.json";
export const metadata: Metadata = {
  title: "Hello Next",
  description: "Hello Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-black text-white  p-5">
            <div className="flex flex-row">
              <h1 className=" pr-4 text-white-100">NextJs Server Components</h1>
              {repoNames.map((repo, index) => {
                return (
                  <Link
                    key={repo}
                    className=" pr-4 text-yellow-200 "
                    href={"/repo/" + repo}
                  >
                    <span style={{ textTransform: "capitalize" }}>{repo}</span>
                  </Link>
                );
              })}
            </div>
          </header>
          <div className="flex justify-center">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
