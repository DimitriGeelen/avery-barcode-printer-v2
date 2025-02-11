import React from 'react';
import { AVERY_TEMPLATES } from './TemplateData';

const TemplateInfo = ({ template }) => {
  const templateData = AVERY_TEMPLATES[template];
  
  if (!templateData) return null;

  const { labels } = templateData;
  const labelsPerSheet = labels.columns * labels.rows;

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-md">
      <h3 className="font-medium text-gray-900 mb-2">Template Details</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Page Size</p>
          <p className="font-medium">{labels.pageWidth} × {labels.pageHeight}</p>
        </div>
        <div>
          <p className="text-gray-500">Labels per Sheet</p>
          <p className="font-medium">{labelsPerSheet}</p>
        </div>
        <div>
          <p className="text-gray-500">Label Size</p>
          <p className="font-medium">{labels.labelWidth} × {labels.labelHeight}</p>
        </div>
        <div>
          <p className="text-gray-500">Layout</p>
          <p className="font-medium">{labels.columns} × {labels.rows}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Printer Settings</h4>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Set paper size to {template.startsWith('L') ? 'A4' : 'Letter'}</li>
          <li>Set margins to "None" or minimum</li>
          <li>Disable any scaling options</li>
          <li>Enable background graphics</li>
        </ul>
      </div>
    </div>
  );
};

export default TemplateInfo;