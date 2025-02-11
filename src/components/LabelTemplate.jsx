import React from 'react';

export const AVERY_TEMPLATES = {
  // [Previous template definitions remain the same]
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