import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
const doc = new jsPDF();

export const pdfDownloader = (header: any, body: any) => {
  autoTable(doc, {
    head: header,
    body: body,
  });
  console.log(doc);

  // for (let index = 0; index < 5; index++) {
  //   doc.addPage();
  // }
  doc.save('users.pdf');
};
