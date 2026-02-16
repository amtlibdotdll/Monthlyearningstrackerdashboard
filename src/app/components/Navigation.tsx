import { ChevronDown } from 'lucide-react';

const menuItems = [
  { label: 'Home', active: false },
  { label: 'Chatter', active: false },
  { label: 'Dashboards', active: true, hasDropdown: true },
  { label: 'Campaigns', active: false, hasDropdown: true },
  { label: 'Leads', active: false, hasDropdown: true },
  { label: 'Accounts', active: false, hasDropdown: true },
  { label: 'Contacts', active: false, hasDropdown: true },
  { label: 'Opportunities', active: false, hasDropdown: true },
  { label: 'Tasks', active: false, hasDropdown: true },
  { label: 'Files', active: false },
  { label: 'Forecasts', active: false },
  { label: 'Reports', active: false, hasDropdown: true },
  { label: 'Calendar', active: false },
  { label: 'Quotes', active: false, hasDropdown: true },
  { label: 'Analytics', active: false },
];

export function Navigation() {
  return (
    <div className="fixed top-[100px] left-0 right-0 bg-white border-b border-[#dcdcdc] z-40">
      <div className="h-[60px] px-[60px] flex items-center justify-center gap-[22px]">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-[5px]">
            <p className={`font-['Inter:${item.active ? 'Bold' : 'Medium'}',sans-serif] font-${item.active ? 'bold' : 'medium'} leading-[normal] not-italic text-[#1a1a1a] text-[14px] cursor-pointer hover:opacity-70 transition-opacity`}>
              {item.label}
            </p>
            {item.hasDropdown && (
              <ChevronDown className="w-[17px] h-[17px] text-[#1a1a1a]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
