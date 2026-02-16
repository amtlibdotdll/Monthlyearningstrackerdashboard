import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'January', value: 2200, color: '#E0F2FE' },
  { name: 'February', value: 1800, color: '#BAE6FD' },
  { name: 'March', value: 1500, color: '#7DD3FC' },
  { name: 'April', value: 1300, color: '#38BDF8' },
  { name: 'May', value: 1800, color: '#0EA5E9' },
  { name: 'June', value: 2100, color: '#0284C7' },
  { name: 'July', value: 2400, color: '#0369A1' },
];

export function EarningsByBook() {
  return (
    <div className="bg-white rounded-[15px] border border-[#dcdcdc] p-[30px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[16px] mb-[30px]">
        Purchase by Segment
      </p>
      
      {/* Legend */}
      <div className="flex justify-center gap-[20px] mb-[20px] flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-[5px]">
            <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: item.color }} />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#1a1a1a] text-[13px]">
              Unit
            </p>
          </div>
        ))}
      </div>
      
      {/* Pie Chart */}
      <div className="h-[280px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #dcdcdc',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Month Labels */}
      <div className="grid grid-cols-4 gap-[10px] mt-[20px] text-center">
        {data.map((item, index) => (
          <p key={index} className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#1a1a1a] text-[12px]">
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}
