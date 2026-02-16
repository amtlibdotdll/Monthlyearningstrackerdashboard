import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { month: 'January', unit1: 21000, unit2: 0 },
  { month: 'February', unit1: 0, unit2: 17000 },
  { month: 'March', unit1: 0, unit2: 14000 },
  { month: 'April', unit1: 0, unit2: 19000 },
];

export function MonthlyComparison() {
  return (
    <div className="bg-white rounded-[15px] border border-[#dcdcdc] p-[30px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[16px] mb-[30px]">
        Monthly Sales Comparison
      </p>
      
      {/* Legend */}
      <div className="flex justify-center gap-[20px] mb-[30px]">
        <div className="flex items-center gap-[5px]">
          <div className="w-[12px] h-[12px] rounded-full bg-[#38BDF8]" />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#1a1a1a] text-[13px]">
            Unit
          </p>
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="w-[12px] h-[12px] rounded-full bg-[#BAE6FD]" />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#1a1a1a] text-[13px]">
            Unit
          </p>
        </div>
      </div>
      
      {/* Bar Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="0" stroke="#dcdcdc" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#1a1a1a', fontSize: 12, fontFamily: 'Inter' }}
              axisLine={{ stroke: '#dcdcdc' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#1a1a1a', fontSize: 12, fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 21000]}
              ticks={[0, 7000, 14000, 21000]}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #dcdcdc',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
              formatter={(value: number) => [`${value.toLocaleString()} EUR`, '']}
            />
            <Bar dataKey="unit1" fill="#38BDF8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="unit2" fill="#BAE6FD" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
