import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiSpeakerphone, HiUserGroup } from 'react-icons/hi';
import { FaCartShopping } from 'react-icons/fa6';
import { MdAnalytics } from 'react-icons/md';

const SidebarPromoter = ({ activeLink }: any) => {
  return (
    <section className="h-screen sticky top-0">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin"
              icon={HiChartPie}
              active={activeLink === 'dashboard'}
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/event"
              icon={HiSpeakerphone}
              active={activeLink === 'events'}
            >
              Events
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/attendens"
              icon={HiUserGroup}
              active={activeLink === 'attendees'}
            >
              Attendees
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/transaction"
              icon={FaCartShopping}
              active={activeLink === 'transactions'}
            >
              Transactions
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/analytics"
              icon={MdAnalytics}
              active={activeLink === 'analytics'}
            >
              Analytics
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </section>
  );
};

export default SidebarPromoter;
