export default {
  global: {
    componenteFormativo: 'Introducción al <i>Machine Learning</i>',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre el <i>Machine Learning</i>, la forma en que las máquinas de aprendizaje son un campo de la inteligencia artificial que se enfoca, principalmente, en el uso de datos y algoritmos. Con el estudio responsable de estos contenidos, el aprendiz se afianzará en el manejo de máquinas y uso de algoritmos de aprendizaje supervisado, no supervisado y semisupervisado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Machine Learning</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conjuntos de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '<i>Clustering</i>',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aplicaciones de <i>clustering</i> de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Modelos de clasificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Algoritmos no supervisados',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21710111_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Conjunto de Datos',
      referencia:
        'Anaconda. (s. f.). <i>Installing on Windows</i>.  Anaconda Documentation.',
      tipo: 'Documento web',
      link: 'https://docs.anaconda.com/anaconda/install/windows/',
    },
    {
      tema: '1.2 <i>Clustering</i> ',
      referencia: 'Singh, S. (2017). <i>Iris.csv</i>. Kaggle.',
      tipo: '<i>Dataset</i>',
      link: 'https://www.kaggle.com/datasets/saurabh00007/iriscsv',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje automático',
      significado:
        'rama de la inteligencia artificial cuyo objetivo es implementar técnicas que permitan a los computadores aprender mediante un proceso de inducción del conocimiento.',
    },
    {
      termino: 'Aprendizaje automático supervisado',
      significado:
        'cuando el algoritmo recibe datos de entrenamiento consistentes en datos etiquetados. ',
    },
    {
      termino: 'Aprendizaje automático no supervisado',
      significado:
        'cuando el algoritmo identifica patrones y saca conclusiones de los datos que se le proporcionan.',
    },
    {
      termino: 'Clúster',
      significado:
        'conjunto de objetos o registros que son similares entre sí.',
    },
    {
      termino: '<i>Clustering</i>',
      significado:
        'proceso de dividir un conjunto de objetos o registros en subconjuntos llamados clústeres, que tienen similaridades.',
    },
    {
      termino: 'Distancia euclídea',
      significado:
        'es la longitud del segmento entre dos puntos; en el caso del <i>clustering</i>, define las observaciones más cercanas para asignarlas a un clúster.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'sistemas informáticos que pueden aprender como aprende un ser humano.',
    },
    {
      termino: '<i>Machine Learning</i>',
      significado: 'aprendizaje automático o máquinas de aprendizaje.',
    },
    {
      termino: '<i>K-means</i>',
      significado:
        'algoritmo de clasificación no supervisada (clusterización) que agrupa objetos en k grupos basándose en sus características. Tiene lenguaje de alto nivel usado para construir todo tipo de aplicaciones y muy usado en ciencia de datos.',
    },
    {
      termino: 'Python',
      significado:
        'es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de <i>software</i>, la ciencia de datos y el <i>machine learning</i>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abdulhamit, S. (2020). <i>Data analysis using python</i>. Academic Press.',
    },
    {
      referencia:
        'Anaconda. (s. f.). <i>Installing on Windows</i>.  Anaconda Documentation.',
      link: 'https://docs.anaconda.com/anaconda/install/windows/',
    },
    {
      referencia: 'Akram. (2018). <i>Mall-customers</i>. Kaggle.',
      link: 'https://www.kaggle.com/akram24/mall-customers',
    },
    {
      referencia:
        'Rusell, R. (2018). <i>Machine Learning. Step-by-Step Guide  to implement machine learning algorithms with python</i>.',
    },
    {
      referencia:
        'Severance, C. (2020). <i>Python para todos: explorando la información con Python 3</i>.',
    },
    {
      referencia: 'Singh, S. (2017). <i>Iris.csv</i>. Kaggle.',
      link: 'https://www.kaggle.com/datasets/saurabh00007/iriscsv',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Héctor Henry Jurado Soto',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Caterine Bedoya Mejía',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Metodóloga',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
