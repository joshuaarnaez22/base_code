import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
const doc = new jsPDF();

export const pdfDownloader = (header: any, body: any) => {
  autoTable(doc, {
    startY: 30,
    head: header,
    body: body,
    didDrawPage: function (data) {
      doc.setFontSize(20);
      doc.setTextColor(40);
      doc.text('HEADER', data.settings.margin.left, 22);

      const pageSize = doc.internal.pageSize;
      const pageHeight = pageSize.height
        ? pageSize.height
        : pageSize.getHeight();
      doc.text('FOOTER', data.settings.margin.left, pageHeight - 10);
    },
  });
  doc.save('users.pdf');
};
