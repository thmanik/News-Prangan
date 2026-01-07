import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Root() {
  return (
    <div >

      <Header />
      <ScrollToTop />
      <div className=" p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
