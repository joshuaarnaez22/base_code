/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@chakra-ui/react';
import { FaFileCsv } from 'react-icons/fa';

const styles = StyleSheet.create({
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  table: {
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
  row1: {
    width: '33%',
  },
  row2: {
    width: '33%',
  },
  row3: {
    width: '33%',
  },
});

// eslint-disable-next-line react/prop-types
const Pdf = ({ users }) => {
  console.log(users);
  const PdfData = () => {
    return (
      <>
        <Document>
          <Page style={styles.body}>
            <View style={styles.table}>
              <View style={[styles.row, styles.bold, styles.header]}>
                <Text style={styles.row1}>Username</Text>
                <Text style={styles.row2}>Role</Text>
                <Text style={styles.row2}>Status</Text>
              </View>
              {users.length &&
                users.map((row, i) => (
                  <View key={i} style={styles.row} wrap={false}>
                    <Text style={styles.row1}>
                      <Text style={styles.bold}>{row.username}</Text>,
                    </Text>
                    <Text style={styles.row2}>{row.role}</Text>
                    <Text style={styles.row2}>{row.status}</Text>
                  </View>
                ))}
            </View>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </Page>
        </Document>
      </>
    );
  };
  return (
    <PDFDownloadLink document={<PdfData />} fileName="resume.pdf">
      {({ loading }) =>
        !loading && (
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Document
          </Button>
        )
      }
    </PDFDownloadLink>
  );
};
export default React.memo(Pdf);
