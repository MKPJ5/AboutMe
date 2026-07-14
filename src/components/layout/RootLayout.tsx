import { Outlet } from "react-router";
import Navbar from "./NavBar";
// import Footer from "../components/Footer";  

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-3">
        <Outlet />
      </main>
    </>
  );
}