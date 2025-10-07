import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDFReport = (options) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.setTextColor(40, 40, 40);
  doc.text('Analytics Pro Report', 20, 30);
  
  // Add date
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 45);
  
  // Add summary table
  doc.autoTable({
    startY: 60,
    head: [['Metric', 'Value', 'Change']],
    body: [
      ['Total Revenue', '$45,231', '+12%'],
      ['Active Users', '12,389', '+8%'],
      ['Conversion Rate', '3.2%', '-2%'],
      ['Avg. Session', '4m 12s', '+15%'],
    ],
    theme: 'grid',
    headStyles: {
      fillColor: [99, 102, 241],
      textColor: 255,
    },
  });
  
  // Add charts section
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 40);
  doc.text('Performance Overview', 20, doc.lastAutoTable.finalY + 20);
  
  // Save the PDF
  doc.save(`analytics-report-${new Date().toISOString().split('T')[0]}.pdf`);
};