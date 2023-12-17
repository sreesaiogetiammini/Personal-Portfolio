// components/RecordsGrid.tsx
import React from 'react';


interface RecordsGridProps {
  svgUrls: string[]; // Array of SVG URLs
}

const SkillsGrid: React.FC<RecordsGridProps> = ({ svgUrls }) => {
  const records = Array.from({ length: svgUrls.length }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap">
      {records.map((record) => (
        <div key={record} className="w-1/4 p-4">
          <img src={svgUrls[record - 1]} alt={`SVG ${record}`} className="w-full h-auto" />
          <p className="mt-2 text-center">Record {record}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
