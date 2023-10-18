import SidebarWithHeader from "../sharedLayout/Sidebar";
import ClientCard from "./ClientCard";
import FindClient from "./FindClient";
import OrderOfService from "./OrderOfService";

const Dashboard = () => {
  return (
    <SidebarWithHeader>
      <OrderOfService />
    </SidebarWithHeader>
  );
};
export default Dashboard;
