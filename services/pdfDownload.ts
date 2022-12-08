import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
const doc = new jsPDF();

export const pdfDownloader = (header: any, body: any) => {
  autoTable(doc, {
    head: header,
    body: body,
  });
  doc.save('users.pdf');
};
