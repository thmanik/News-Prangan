import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

export default function Root() {
  return (
    <div >
      
      <Header/>
      <div className=" p-4">
       <Outlet/>
      </div>

    </div>
  );
}
