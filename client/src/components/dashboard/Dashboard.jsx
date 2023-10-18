import SidebarWithHeader from "../sharedLayout/Sidebar";
import ClientCard from "./ClientCard";
import FindClient from "./FindClient";
import OrderOfService from "./OrderOfService";

const Dashboard = () => {
  return (
    <SidebarWithHeader>
      <FindClient />
    </SidebarWithHeader>
  );
};
export default Dashboard;
