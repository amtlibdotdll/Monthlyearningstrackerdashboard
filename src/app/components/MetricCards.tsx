function MetricCard({
  title,
  value,
  subtitle,
  startDate,
  endDate,
  bordered = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  bordered?: boolean;
}) {
  return (
    <div className="bg-[#fdfdfd] rounded-[10px] p-[20px] relative" style={{ 
      border: bordered ? '1.5px solid #512ECE' : '1.5px solid #dcdcdc' 
    }}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[14px] mb-[20px]">
        {title}
      </p>
      
      <div className="flex flex-col items-center justify-center mt-[20px] mb-[30px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#1a1a1a] text-[64px]">
          {value.split('.')[0]}
          {value.includes('.') && (
            <span className="text-[64px]">.{value.split('.')[1]}</span>
          )}
          <span className="text-[40px]">K</span>
        </p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] opacity-50 text-[14px] text-right mt-[8px]">
          {subtitle}
        </p>
      </div>
      
      <div className="border-t border-dashed border-[#512ECE] pt-[12px] mt-[30px]" style={{
        borderColor: bordered ? '#512ECE' : '#dcdcdc'
      }}>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] opacity-50 text-[14px]">
              Start
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[14px] mt-[3px]">
              {startDate}
            </p>
          </div>
          <div className="text-right">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] opacity-50 text-[14px]">
              End
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[14px] mt-[3px]">
              {endDate}
            </p>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[14px] text-center mt-[12px] cursor-pointer hover:opacity-70">
          Details and Consumers
        </p>
      </div>
    </div>
  );
}

function SimpleMetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-[#fdfdfd] rounded-[10px] p-[20px] border border-[#dcdcdc]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#1a1a1a] text-[14px] mb-[20px]">
        {title}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#1a1a1a] text-[64px] text-center my-[30px]">
        {value}
      </p>
    </div>
  );
}

export function MetricCards() {
  return (
    <div className="flex flex-col gap-[20px]">
      <MetricCard
        title="Earned This Quarter"
        value="18"
        subtitle="18,147 EUR"
        startDate="01/01/2023"
        endDate="01/05/2024"
        bordered={true}
      />
      
      <MetricCard
        title="Earned this Month"
        value="7.8"
        subtitle="7,817 EUR"
        startDate="01/04/2023"
        endDate="01/05/2024"
      />
      
      <SimpleMetricCard
        title="Average per Book"
        value="167"
      />
      
      <SimpleMetricCard
        title="Books Published"
        value="215"
      />
    </div>
  );
}
