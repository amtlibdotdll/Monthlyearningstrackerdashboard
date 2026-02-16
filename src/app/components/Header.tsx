import svgPaths from "../../imports/svg-b63lqgeujy";
import imgEllipse8 from "figma:asset/4643c08f239dfd5b611e050106be3acb162602ae.png";
import { Bell, HelpCircle, MessageSquare, Grid3X3, Camera } from 'lucide-react';

function DashboardLogo() {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="relative size-[37px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <g>
            <path d={svgPaths.p10e47580} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3d332d00} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#1a1a1a] text-[24px]">Dashboard</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative w-[250px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[40px] px-[15px] pr-[40px] rounded-[10px] border border-[#dcdcdc] bg-white font-['Inter:Regular',sans-serif] text-[14px] text-[#1a1a1a] outline-none focus:border-[#512ECE]"
      />
      <div className="absolute right-[12px] top-1/2 -translate-y-1/2">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.75 15.75L12.4875 12.4875" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] hover:bg-[#f0f0f0] transition-colors">
      {children}
    </button>
  );
}

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-[#dcdcdc] z-50">
      <div className="h-[100px] px-[60px] flex items-center justify-between">
        <DashboardLogo />
        <SearchBar />
        <div className="flex items-center gap-[12px]">
          <IconButton>
            <Bell className="w-[20px] h-[20px] text-[#9197B3]" />
          </IconButton>
          <IconButton>
            <MessageSquare className="w-[20px] h-[20px] text-[#9197B3]" />
          </IconButton>
          <IconButton>
            <HelpCircle className="w-[20px] h-[20px] text-[#9197B3]" />
          </IconButton>
          <IconButton>
            <div className="w-[24px] h-[24px] bg-[#512ECE] rounded-[6px] flex items-center justify-center">
              <Grid3X3 className="w-[16px] h-[16px] text-white" />
            </div>
          </IconButton>
          <IconButton>
            <Camera className="w-[20px] h-[20px] text-[#9197B3]" />
          </IconButton>
          <div className="ml-[14px]">
            <img alt="User avatar" className="size-[50px] rounded-full" src={imgEllipse8} />
          </div>
        </div>
      </div>
    </div>
  );
}