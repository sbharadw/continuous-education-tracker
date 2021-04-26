import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    role: "admin:true"
   
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    role: "admin:true",
    role2: "educator:true",
    role3: "undefined"
  },
  {
    path: "/table",
    name: "Nurse List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    role: "admin:true",
    role2: "educator:true"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "ADD HOURS",
    icon: "nc-icon nc-watch-time",
    component: Upgrade,
    layout: "/admin",
    role: "admin:true",
    role3: "undefined"
  }

];

export default dashboardRoutes;

//exact path="/admin/user"
  //         "/admin/table"
