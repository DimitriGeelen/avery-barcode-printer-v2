import React from 'react';

export const AVERY_TEMPLATES = {
  // European Templates
  'L7160': {
    name: 'Avery L7160 (63.5 x 38.1 mm, 21 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 7,
      labelWidth: '63.5mm',
      labelHeight: '38.1mm',
      marginTop: '15mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7161': {
    name: 'Avery L7161 (63.5 x 46.6 mm, 18 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 6,
      labelWidth: '63.5mm',
      labelHeight: '46.6mm',
      marginTop: '13mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7163': {
    name: 'Avery L7163 (99.1 x 38.1 mm, 14 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 7,
      labelWidth: '99.1mm',
      labelHeight: '38.1mm',
      marginTop: '15mm',
      marginLeft: '4.65mm',
      marginRight: '4.65mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  // US Templates
  '5160': {
    name: 'Avery 5160 (1" x 2-5/8", 30 per sheet)',
    labels: {
      pageWidth: '8.5in',
      pageHeight: '11in',
      columns: 3,
      rows: 10,
      labelWidth: '2.625in',
      labelHeight: '1in',
      marginTop: '0.5in',
      marginLeft: '0.1875in',
      marginRight: '0.1875in',
      horizontalSpacing: '0.125in',
      verticalSpacing: '0'
    }
  },
  '5163': {
    name: 'Avery 5163 (2" x 4", 10 per sheet)',
    labels: {
      pageWidth: '8.5in',
      pageHeight: '11in',
      columns: 2,
      rows: 5,
      labelWidth: '4in',
      labelHeight: '2in',
      marginTop: '0.5in',
      marginLeft: '0.25in',
      marginRight: '0.25in',
      horizontalSpacing: '0.125in',
      verticalSpacing: '0'
    }
  }
};

const LabelTemplate = ({ template, barcodes }) => {
  const templateConfig = AVERY_TEMPLATES[template]?.labels;
  
  if (!templateConfig) return null;

  const labelsPerPage = templateConfig.columns * templateConfig.rows;
  const pageCount = Math.ceil(barcodes.length / labelsPerPage);
  const pages = [];

  // Create array of pages
  for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
    const pageStart = pageIndex * labelsPerPage;
    const pageEnd = Math.min(pageStart + labelsPerPage, barcodes.length);
    const pageBarcodes = barcodes.slice(pageStart, pageEnd);
    pages.push(pageBarcodes);
  }

  const containerStyle = {
    width: templateConfig.pageWidth,
    height: templateConfig.pageHeight,
    margin: '0 auto',
    backgroundColor: 'white',
    position: 'relative'
  };

  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  // Calculate grid positions for a single page
  const getPositions = (pageSize) => {
    const positions = [];
    const labelOuterWidth = `calc(${templateConfig.labelWidth} + ${templateConfig.horizontalSpacing})`;

    for (let row = 0; row < templateConfig.rows; row++) {
      for (let col = 0; col < templateConfig.columns; col++) {
        const index = row * templateConfig.columns + col;
        if (index < pageSize) {
          positions.push({
            left: `calc(${templateConfig.marginLeft} + (${labelOuterWidth} * ${col}))`,
            top: `calc(${templateConfig.marginTop} + (${templateConfig.labelHeight} * ${row}))`,
            width: templateConfig.labelWidth,
            height: templateConfig.labelHeight,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            padding: '2mm'
          });
        }
      }
    }
    return positions;
  };

  return (
    <div style={pageContainerStyle}>
      {pages.map((pageBarcodes, pageIndex) => (
        <div 
          key={pageIndex} 
          style={containerStyle} 
          className={`page ${pageIndex > 0 ? 'page-break' : ''}`}
        >
          {pageBarcodes.map((barcode, index) => {
            const positions = getPositions(pageBarcodes.length);
            if (index >= positions.length) return null;
            return (
              <div key={index} style={positions[index]} className="label">
                <img 
                  src={barcode.image} 
                  alt={barcode.value}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default LabelTemplate;