import React from 'react';
import Website from '@/components/website';
import { IWebsiteResource } from '@/services/types';

export const getStaticProps = async () => {
  const services: IWebsiteResource[] = [
    {
      img: 'mapcursor.png',
      title: 'Adoption',
      description:
        '  - This is the social, emotional, and legal process in which children who will not be raised by their birth parents become full and permanent legal members of another family while maintaining genetic and psychological connections to their birth family. We collect legal requirements or documents from those persons who are willing to adopt the child.',
    },
    {
      img: 'clock.png',
      title: 'Easy Access - "Click and Tick"',
      description:
        'A site which is easy to navigate allows users to find the content theyre looking for much faster. We provide a clear menu structure and the ability to navigate between pages quickly and efficiently.',
    },
    {
      img: 'phone.png',
      title: 'Schedule a Visit',
      description:
        ' I click to visit! "First and foremost, an orphanage visit can be aimed at providing love and affection to the orphans so that they can feel what it is like to be loved. This is an important objective because children who are not given love and attention often will develop many psychological illnesses such as depression.',
    },
    {
      img: 'mapcursor.png',
      title: 'Monitoring - "How we care"',
      description:
        ' The most important reason for monitoring each childs development is to find out if a childs development is on track. It is important to act early if there are signs of potential development delay because early treatment is so important for improving a childs skills and abilities.',
    },
  ];
  return {
    props: {
      services,
    },
  };
};

const Home = ({ services }: any) => {
  return <Website resources={services} />;
};

export default Home;
