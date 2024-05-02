const FAKE_RESOURCES_DATA = [
  {
    id: 1,
    title: 'Lymphangitis',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '3/6/2005',
    author: 'Emily Johnson',
  },
  {
    id: 2,
    title: 'Erythema multiforme NEC',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '1/31/2021',
    author: 'Emily Johnson',
  },
  {
    id: 3,
    title: 'Glaucoma w tumor or cyst',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Tutoriales',
    createdAt: '1/25/2015',
    author: 'John Smith',
  },
  {
    id: 4,
    title: 'Chr diastolic hrt fail',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '1/9/2008',
    author: 'John Smith',
  },
  {
    id: 5,
    title: 'Lower urin calcul NEC',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Tutoriales',
    createdAt: '7/17/2006',
    author: 'Sarah Davis',
  },
  {
    id: 6,
    title: 'NB cold injury syndrome',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '11/16/2017',
    author: 'John Smith',
  },
  {
    id: 7,
    title: "Tietze's disease",
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '5/9/2016',
    author: 'Emily Johnson',
  },
  {
    id: 8,
    title: 'Ankylosis-forearm',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '8/12/2005',
    author: 'Sarah Davis',
  },
  {
    id: 9,
    title: 'Mood disorder other dis',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '7/7/2000',
    author: 'Sarah Davis',
  },
  {
    id: 10,
    title: 'Mal neo lymph-inguin/leg',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Tutoriales',
    createdAt: '7/29/2010',
    author: 'Emily Johnson',
  },
  {
    id: 11,
    title: 'Transient hypersomnia',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '5/21/2000',
    author: 'John Smith',
  },
  {
    id: 12,
    title: 'Myoneural disorders NEC',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '10/20/2004',
    author: 'Sarah Davis',
  },
  {
    id: 13,
    title: 'Poison-antipsychotic NEC',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Tutoriales',
    createdAt: '2/2/2019',
    author: 'Emily Johnson',
  },
  {
    id: 14,
    title: 'comp in -p/p',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '3/24/2012',
    author: 'John Smith',
  },
  {
    id: 15,
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '1/4/2020',
    author: 'John Smith',
  },
  {
    id: 16,
    title: 'Unpow aircrf acc-chutist',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '7/29/2019',
    author: 'Sarah Davis',
  },
  {
    id: 17,
    title: 'Counslng sbstn use abuse',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '11/27/2013',
    author: 'Sarah Davis',
  },
  {
    id: 18,
    title: 'enterocele',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '3/4/2015',
    author: 'Emily Johnson',
  },
  {
    id: 19,
    title: 'Ab NOS w compl NEC-unsp',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '8/18/2010',
    author: 'Emily Johnson',
  },
  {
    id: 20,
    title: 'Open wound of face NOS',
    content: 'Cardiac retraining',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Testimonios',
    createdAt: '10/9/2006',
    author: 'Emily Johnson',
  },
  {
    id: 21,
    title: 'Monoc exotrop w v pattrn',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora provident dolor corrupti vel quibusdam aut esse doloribus quas error hic expedita cupiditate fugit odit harum ad reprehenderit, quia adipisci.',
    imgUrl:
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg',
    type: 'Manuales',
    createdAt: '11/6/2021',
    author: 'Emily Johnson',
  },
]

export default FAKE_RESOURCES_DATA
