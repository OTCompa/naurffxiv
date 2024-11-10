import "../globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import NavMenu from "../components/NavMenu";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
/*
export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
        <SessionProvider session={session}>
          <main>
            <NavMenu />
          {children}
          </main>
        </SessionProvider>
  );
}
*/
export default async function RootLayout({ children }) {
  
  return (
          <main>
          {children}
          </main>
  );
}