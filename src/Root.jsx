import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      
      <div className="col-span-3 bg-gray-200 p-4">
        Navbar
      </div>
      <div className="col-span-9 p-4">
       <Outlet/>
      </div>

    </div>
  );
}
