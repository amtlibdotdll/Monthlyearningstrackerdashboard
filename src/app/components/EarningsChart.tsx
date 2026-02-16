import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { time: '10:23 PM 10/11', quarter: 2, month: 1 },
  { time: '10:30 PM 10/11', quarter: 8, month: 6 },
  { time: '10:40 PM 10/11', quarter: 20, month: 18 },
  { time: '10:50 PM 10/11', quarter: 25, month: 24 },
  { time: '11:00 PM 10/11', quarter: 28, month: 26 },
  { time: '11:10 PM 10/11', quarter: 25, month: 23 },
  { time: '11:20 PM 10/11', quarter: 21, month: 20 },
  { time: '11:30 PM 10/11', quarter: 18, month: 17 },
  { time: '11:40 PM 10/11', quarter: 14, month: 12 },
  { time: '11:50 PM 11/11', quarter: 9, month: 6 },
];

export function EarningsChart() {
  return (
    <div className="bg-white rounded-[15px] border border-[#dcdcdc] p-[30px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[30px]">
        <div className="flex items-center gap-[10px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[16px]">
            Today
          </p>
          <ChevronDown className="w-[19px] h-[19px] text-[#1a1a1a]" />
        </div>
        
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[5px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a]" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#1a1a1a] text-[13px]">
              Quarter
            </p>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#3bb4ef]" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#3bb4ef] text-[13px]">
              Month
            </p>
          </div>
        </div>
      </div>
      
      {/* Subheader */}
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[14px] mb-[20px]">
        Earnings
      </p>
      
      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="0" stroke="#dcdcdc" vertical={false} />
            <XAxis 
              dataKey="time" 
              tick={{ fill: '#1a1a1a', fontSize: 12, fontFamily: 'Inter' }}
              axisLine={{ stroke: '#dcdcdc' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#1a1a1a', fontSize: 14, fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #dcdcdc',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="quarter" 
              stroke="#1a1a1a" 
              strokeWidth={2}
              dot={{ fill: '#1a1a1a', strokeWidth: 2, r: 4, stroke: '#fdfdfd' }}
            />
            <Line 
              type="monotone" 
              dataKey="month" 
              stroke="#3bb4ef" 
              strokeWidth={2}
              dot={{ fill: '#3bb4ef', strokeWidth: 2, r: 4, stroke: '#fdfdfd' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
