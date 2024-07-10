import { Route, Routes} from "react-router-dom";
import Header from "../components/admin/Header";
import Navbar from "../components/admin/Navbar";
import Dashboard from "../components/admin/DashBoard";
import Movies from "../components/admin/Movies";
import Actors from "../components/admin/Actor";
import NotFound from "../components/NotFound";



export default function AdminNavigator() {
    return (
      <div className="flex dark:bg-primary bg-white">
        <Navbar />
        <div className="flex-1 p-2 max-w-screen-xl">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }