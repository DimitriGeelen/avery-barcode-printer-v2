import React from 'react';

export const AVERY_TEMPLATES = {
  // European Templates (A4 - 210mm x 297mm)
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
  'L7651': {
    name: 'Avery L7651 (38.1 x 21.2 mm, 65 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 5,
      rows: 13,
      labelWidth: '38.1mm',
      labelHeight: '21.2mm',
      marginTop: '13mm',
      marginLeft: '8.5mm',
      marginRight: '8.5mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7165': {
    name: 'Avery L7165 (99.1 x 67.7 mm, 8 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 4,
      labelWidth: '99.1mm',
      labelHeight: '67.7mm',
      marginTop: '13mm',
      marginLeft: '4.65mm',
      marginRight: '4.65mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7666': {
    name: 'Avery L7666 (70 x 52 mm, 12 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 6,
      labelWidth: '70mm',
      labelHeight: '52mm',
      marginTop: '13mm',
      marginLeft: '30mm',
      marginRight: '30mm',
      horizontalSpacing: '10mm',
      verticalSpacing: '0'
    }
  },
  'L7658': {
    name: 'Avery L7658 (25.4 x 10 mm, 189 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 7,
      rows: 27,
      labelWidth: '25.4mm',
      labelHeight: '10mm',
      marginTop: '13.5mm',
      marginLeft: '8.5mm',
      marginRight: '8.5mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7654': {
    name: 'Avery L7654 (45.7 x 25.4 mm, 40 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 4,
      rows: 10,
      labelWidth: '45.7mm',
      labelHeight: '25.4mm',
      marginTop: '13mm',
      marginLeft: '9.7mm',
      marginRight: '9.7mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7664': {
    name: 'Avery L7664 (70 x 72 mm, 8 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 4,
      labelWidth: '70mm',
      labelHeight: '72mm',
      marginTop: '13mm',
      marginLeft: '30mm',
      marginRight: '30mm',
      horizontalSpacing: '10mm',
      verticalSpacing: '0'
    }
  },
  'L7656': {
    name: 'Avery L7656 (46 x 11.1 mm, 84 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 4,
      rows: 21,
      labelWidth: '46mm',
      labelHeight: '11.1mm',
      marginTop: '13mm',
      marginLeft: '8.5mm',
      marginRight: '8.5mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'J8159': {
    name: 'Avery J8159 (63.5 x 33.9 mm, 24 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 8,
      labelWidth: '63.5mm',
      labelHeight: '33.9mm',
      marginTop: '13mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7159': {
    name: 'Avery L7159 (63.5 x 33.9 mm, 24 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 8,
      labelWidth: '63.5mm',
      labelHeight: '33.9mm',
      marginTop: '13mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  // US Templates (Letter - 8.5" x 11")
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

// Rest of the LabelTemplate component remains the same
const LabelTemplate = ({ template, barcodes }) => {
  // ... (rest of the component code remains unchanged)
};

export default LabelTemplate;