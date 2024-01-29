// import Barcart from './Barcart';
import ChartTwo from './ProfitThisWeek';
import RecentOrders from './SalesOverview';
import SidebarPromoter from './SideBar';
import TopCart from './TopCart';

const PromoterDashboard = () => {
  return (
    <section className="flex w-full p-5 mt-5">
      <SidebarPromoter activeLink={'dashboard'} />

      <section className="min-h-screen w-full mt-10">
        <TopCart />
        <div className="pt-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <ChartTwo />
          <RecentOrders />
        </div>
      </section>
    </section>
  );
};

export default PromoterDashboard;
