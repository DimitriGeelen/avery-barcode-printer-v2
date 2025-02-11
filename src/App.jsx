import React, { useState } from 'react';
import BarcodeGenerator from './components/BarcodeGenerator';
import LabelTemplate from './components/LabelTemplate';
import TemplateInfo from './components/TemplateInfo';
import { AVERY_TEMPLATES } from './components/TemplateData';

function App() {
  const [barcodes, setBarcodes] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('5160');
  const [showTemplateInfo, setShowTemplateInfo] = useState(false);

  const handleBarcodeGenerate = (barcode) => {
    if (Array.isArray(barcode)) {
      // If receiving multiple barcodes
      setBarcodes(prevBarcodes => [...prevBarcodes, ...barcode]);
    } else {
      // If receiving a single barcode
      setBarcodes(prevBarcodes => [...prevBarcodes, barcode]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    setBarcodes([]);
  };

  const labelsPerPage = AVERY_TEMPLATES[selectedTemplate]?.labels.columns * 
                       AVERY_TEMPLATES[selectedTemplate]?.labels.rows || 0;
  const totalPages = Math.ceil(barcodes.length / labelsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Avery Label Barcode Printer</h1>
          <p className="text-sm text-gray-600">Version 2.0.0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Label Template</label>
              <button
                onClick={() => setShowTemplateInfo(!showTemplateInfo)}
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                {showTemplateInfo ? 'Hide' : 'Show'} Template Info
              </button>
            </div>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              {Object.entries(AVERY_TEMPLATES).map(([key, template]) => (
                <option key={key} value={key}>{template.name}</option>
              ))}
            </select>
            {showTemplateInfo && <TemplateInfo template={selectedTemplate} />}
          </div>
          
          <BarcodeGenerator onGenerate={handleBarcodeGenerate} />
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {barcodes.length} barcode{barcodes.length !== 1 ? 's' : ''} on {totalPages} page{totalPages !== 1 ? 's' : ''} 
            ({labelsPerPage} per page)
          </div>
          <div className="space-x-4">
            <button
              onClick={handleClear}
              disabled={barcodes.length === 0}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed"
            >
              Clear All
            </button>
            <button
              onClick={handlePrint}
              disabled={barcodes.length === 0}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed"
            >
              Print Labels
            </button>
          </div>
        </div>

        <div className="print-section bg-white p-4 rounded-lg shadow-sm">
          <LabelTemplate template={selectedTemplate} barcodes={barcodes} />
        </div>
      </div>
    </div>
  );
}

export default App;