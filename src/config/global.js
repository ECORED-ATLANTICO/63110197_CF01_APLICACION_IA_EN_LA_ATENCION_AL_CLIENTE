export default {
  global: {
    Name: 'IA, datos y cliente digital',
    Description:
      'El componente formativo desarrolla competencias para gestionar datos estratégicos, comprender el comportamiento del cliente digital, aplicar métricas web y KPI, evaluar la rentabilidad mediante conversión y ROI, interpretar resultados y tomar decisiones basadas en datos, utilizando herramientas de visualización como tableros de control y reportes estratégicos',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
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
        titulo: 'Datos estratégicos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Valor y fuentes digitales ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ciclo y gestión del dato ',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cliente digital ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Perfil y comportamiento ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Segmentación y experiencia ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métricas web ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Métricas e indicadores (KPI) ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tráfico y conversión ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Rentabilidad digital ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conversión y adquisición ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'ROI y optimización ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis y decisiones ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Interpretación de resultados ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Decisiones basadas en datos ',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Visualización ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tableros de control ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Reportes estratégicos ',
            hash: 't_6_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Adquisición',
      significado:
        'Proceso de captar nuevos clientes mediante estrategias digitales.',
    },
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de reglas que procesan datos para generar resultados automáticos.',
    },
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de examinar información para obtener conclusiones útiles.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'Grandes volúmenes de datos que requieren herramientas especializadas para su procesamiento.',
    },
    {
      termino: 'Cliente digital',
      significado:
        'Usuario que interactúa con marcas a través de entornos digitales.',
    },
    {
      termino: 'Conversión',
      significado:
        'Acción en la que un usuario cumple el objetivo esperado en un canal digital.',
    },
    {
      termino: 'Costo por adquisición (CPA)',
      significado:
        'Inversión promedio necesaria para obtener un nuevo cliente.',
    },
    {
      termino: 'Dato estratégico',
      significado:
        'Información relevante que apoya la toma de decisiones organizacionales.',
    },
    {
      termino: 'Decisiones basadas en datos',
      significado:
        'Elección de acciones sustentadas en evidencia cuantificable.',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'Percepción generada por la interacción del usuario con la marca.',
    },
    {
      termino: 'Fuentes digitales',
      significado:
        'Canales en línea que generan datos como sitios web y redes sociales.',
    },
    {
      termino: 'Indicador',
      significado: 'Variable que permite medir el desempeño de un proceso.',
    },
    {
      termino: 'Interpretación de resultados',
      significado:
        'Análisis de métricas para comprender su impacto y significado.',
    },
    {
      termino: 'KPI',
      significado:
        'Indicador clave de desempeño alineado con objetivos estratégicos.',
    },
    {
      termino: 'Métrica web',
      significado:
        'Medición cuantitativa del comportamiento en entornos digitales.',
    },
    {
      termino: 'Optimización',
      significado:
        'Proceso de mejora continua para aumentar eficiencia y resultados.',
    },
    {
      termino: 'Perfil digital',
      significado:
        'Conjunto de características y comportamientos del usuario en línea.',
    },
    {
      termino: 'Rentabilidad digital',
      significado:
        'Capacidad de generar beneficios económicos en canales digitales.',
    },
    {
      termino: 'ROI',
      significado:
        'Retorno sobre la inversión que mide la ganancia obtenida frente al gasto realizado.',
    },
    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares.',
    },
    {
      termino: 'Tablero de control',
      significado:
        'Herramienta visual que integra indicadores clave en tiempo real.',
    },
    {
      termino: 'Tasa de conversión',
      significado: 'Porcentaje de usuarios que realizan la acción deseada.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso de seleccionar acciones con base en análisis previo.',
    },
    {
      termino: 'Tráfico web',
      significado: 'Cantidad de visitantes que ingresan a un sitio digital.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información para facilitar su comprensión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chunir-Panjon, R. P., Vásquez-Erazo, E. J., & Álvarez-Gavilanes, J. E. (2024). Analítica web y métricas de resultados: evaluación de la efectividad de las estrategias digitales. <em>Revista Metropolitana de Ciencias Aplicadas</em>, <em>7</em>(2), 155-164.',
      link: 'https://remca.umet.edu.ec/index.php/REMCA/article/view/462',
    },
    {
      referencia:
        'Comunicación Digital. (2017). <em>Manual de marketing digital para formadores</em>. Comunicación Digital.',
      link: 'https://comunicaciondigital.com.co/wp-content/uploads/2020/04/manual-marketing-digital.pdf',
    },
    {
      referencia:
        'Gómez, J. (2019). <em>Métricas digitales y KPI: Guía práctica para la gestión y medición del rendimiento online</em>. Editorial Académica Española.',
      link: '',
    },
    {
      referencia:
        'Kaushik, A. (2011). <em>Analítica Web 2.0: El arte de analizar resultados y la ciencia de centrarse en el cliente</em>. Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M., & Sánchez, P. (2020). <em>Marketing digital y analítica web: Conceptos, métricas y estrategias</em>. Ediciones Gestión Actual.',
      link: '',
    },
    {
      referencia:
        'SENA. (2025). <em>Guía de gestión de datos y métricas digitales</em>. Servicio Nacional de Aprendizaje.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
