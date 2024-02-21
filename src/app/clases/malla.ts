export interface Curso {
  codigo: string
  nombre: string
  creditos: number
  ih: number
  componente: string
  area: string
  ciclo: string
  tipologia: string
}

export interface Semestre {
  id: number
  nombre: string,
  cursos: Curso[]
}
export interface Plan {
  semestres: Semestre[]
}
export interface Componente {
  abr: string,
  nombre: string,
  color: string
  grad: string
}

export const  Componentes: Componente[] = [
  { abr: 'UP', nombre: 'Unipacifico', color: '#779600', grad: '#5d7700' },
  { abr: 'Fu', nombre: 'Fundamentación', color: '#0085f9', grad: '#044c8d' },
  { abr: 'CB', nombre: 'Ciencias Básicas', color: '#00b1af', grad: '#007776' },
  { abr: 'CC', nombre: 'Ciencias Computacionales', color: '#953944', grad: '#83303b' },
  { abr: 'In', nombre: 'Investigación', color: '#e10096', grad: '#aa0073' },
  { abr: 'GO', nombre: 'Gestión Organizacional', color: '#909539', grad: '#6a6e29' },
  { abr: 'AI', nombre: 'Administración de la Información', color: '#fc3b14', grad: '#b82203' },
  { abr: 'DS', nombre: 'Desarrollo de Software', color: '#d39c14', grad: '#97710b' },
  { abr: 'RC', nombre: 'Redes y Comunicaciones', color: '#399542', grad: '#27652c' },
  { abr: 'El', nombre: 'Electivas', color: '#85420a', grad: '#633107' },
  { abr: 'Lo', nombre: 'Logística', color: '#3e3995', grad: '#28245e' },
]

export const Malla: Plan = {
  semestres: [
    {
      id: 1,
      nombre: 'Primero',
      cursos: [
        {
          codigo: 'IS0102',
          nombre: 'Introducción a la Ingeniería de Sistemas',
          creditos: 2,
          ih: 2,
          componente: 'Fundamentación',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0111',
          nombre: 'Algoritmia',
          creditos: 4,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0106',
          nombre: 'Cátedra Omar Barona',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0112',
          nombre: 'Lógica Matemática',
          creditos: 3,
          ih: 2,
          componente: 'Fundamentación',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0105',
          nombre: 'Vida Sana',
          creditos: 1,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0209',
          nombre: 'Matemáticas',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Ciencias Básicas', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0102C',
          nombre: 'Lectura y Composición I',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 2,
      nombre: 'Segundo',
      cursos: [
        {
          codigo: 'IS0208',
          nombre: 'Teoría de Sistemas',
          creditos: 2,
          ih: 2,
          componente: 'Administración de la Información',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0207',
          nombre: 'Programación Orientada a Objetos',
          creditos: 3,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: '---',
          nombre: 'Informática',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0201',
          nombre: 'Fundamentos de Investigación',
          creditos: 2,
          ih: 2,
          componente: 'Investigación',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0204',
          nombre: 'Álgebra Lineal',
          creditos: 3,
          ih: 2,
          componente: 'Ciencias Básicas',
          area: 'Ciencias Básicas', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0202C',
          nombre: 'Lectura y Composición II',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0103',
          nombre: 'Inglés I',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Nivelación', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 3,
      nombre: 'Tercero',
      cursos: [
        {
          codigo: 'IS0312',
          nombre: 'Análisis de Sistemas',
          creditos: 2,
          ih: 2,
          componente: 'Administración de la Información',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0310',
          nombre: 'Estructura de Datos',
          creditos: 3,
          ih: 2,
          componente: 'Administración de la Información',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0309',
          nombre: 'Electiva Institucional I',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0311',
          nombre: 'Administración de Empresas',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0005',
          nombre: 'Calculo Diferencial',
          creditos: 3,
          ih: 2,
          componente: 'Ciencias Básicas',
          area: 'Ciencias Básicas', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: '---',
          nombre: 'Física Mecánica',
          creditos: 2,
          ih: 2,
          componente: 'Ciencias Básicas',
          area: 'Ciencias Básicas', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0203C',
          nombre: 'Inglés II',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Nivelación', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 4,
      nombre: 'Cuarto',
      cursos: [
        {
          codigo: 'IS0411',
          nombre: 'Diseño de Sistemas',
          creditos: 2,
          ih: 2,
          componente: 'Administración de la Información',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0410',
          nombre: 'Bases de Datos',
          creditos: 3,
          ih: 2,
          componente: 'Administración de la Información',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0302',
          nombre: 'Contabilidad',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0404',
          nombre: 'Probabilidad y Estadística',
          creditos: 2,
          ih: 2,
          componente: 'Ciencias Computacionales',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0412',
          nombre: 'Mercadeo',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'GE0008',
          nombre: 'Cálculo Integral',
          creditos: 3,
          ih: 2,
          componente: 'Ciencias Básicas',
          area: 'Ciencias Básicas', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0304',
          nombre: 'Física Electromagnetismo',
          creditos: 2,
          ih: 2,
          componente: 'Ciencias Básicas',
          area: 'Ciencias Básicas', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 5,
      nombre: 'Quinto',
      cursos: [
        {
          codigo: 'IS0606',
          nombre: 'Ingeniería de Software',
          creditos: 2,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0704',
          nombre: 'Sistemas Operativos',
          creditos: 3,
          ih: 2,
          componente: 'Redes y Comunicaciones',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0504',
          nombre: 'Investigación de Operaciones',
          creditos: 2,
          ih: 2,
          componente: 'Logística',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0509',
          nombre: 'Análisis Financiero',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0602',
          nombre: 'Matemáticas Discretas',
          creditos: 3,
          ih: 2,
          componente: 'Ciencias Computacionales',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0403',
          nombre: 'Electrónica Digital',
          creditos: 2,
          ih: 2,
          componente: 'Redes y Comunicaciones',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        }

      ]
    },
    {
      id: 6,
      nombre: 'Sexto',
      cursos: [
        {
          codigo: '---',
          nombre: 'Calidad de Software',
          creditos: 3,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0613',
          nombre: 'Fundamentos de Redes',
          creditos: 3,
          ih: 2,
          componente: 'Redes y Comunicaciones',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0612',
          nombre: 'Electiva Institucional II',
          creditos: 2,
          ih: 2,
          componente: 'Unipacifico',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Fundamentación', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0701',
          nombre: 'Formulación de Proyectos',
          creditos: 2,
          ih: 2,
          componente: 'Investigación',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0610',
          nombre: 'Análisis Numérico',
          creditos: 2,
          ih: 2,
          componente: 'Ciencias Computacionales',
          area: 'Ciencias Básicas de Ingeniería', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0611',
          nombre: 'Arquitectura de Hardware',
          creditos: 2,
          ih: 2,
          componente: 'Redes y Comunicaciones',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0604',
          nombre: 'Ingeniería de Procesos',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 7,
      nombre: 'Septimo',
      cursos: [
        {
          codigo: 'IS0710',
          nombre: 'Arquitectura de Software',
          creditos: 2,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0712',
          nombre: 'Redes y Servicios',
          creditos: 3,
          ih: 2,
          componente: 'Redes y Comunicaciones',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0711',
          nombre: 'Electiva Profesional I',
          creditos: 2,
          ih: 2,
          componente: 'Electivas',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0801',
          nombre: 'Gestión Proyectos',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0802',
          nombre: 'Simulación Computacional',
          creditos: 3,
          ih: 2,
          componente: 'Investigación',
          area: 'Ciencias Computacionales', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0611',
          nombre: 'Laboratorio Tecnológico I',
          creditos: 2,
          ih: 2,
          componente: 'Electivas',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0601',
          nombre: 'Ingeniería Económica',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 8,
      nombre: 'Octavo',
      cursos: [
        {
          codigo: 'IS0806',
          nombre: 'Seminario Actualización I',
          creditos: 3,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0810',
          nombre: 'Electiva Profesional II',
          creditos: 2,
          ih: 2,
          componente: 'Electivas',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0706',
          nombre: 'Inteligencia Artificial',
          creditos: 3,
          ih: 2,
          componente: 'Ciencias Computacionales',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
        {
          codigo: '---',
          nombre: 'Anteproyecto Grado',
          creditos: 2,
          ih: 2,
          componente: 'Investigación',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0901',
          nombre: 'Gestión Calidad',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0805',
          nombre: 'Laboratorio Tecnológico II',
          creditos: 2,
          ih: 2,
          componente: 'Electivas',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0702',
          nombre: 'Ingeniería Logística',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
      ]
    },
    {
      id: 9,
      nombre: 'Noveno',
      cursos: [
        {
          codigo: 'IS0903',
          nombre: 'Seminario Actualización II',
          creditos: 3,
          ih: 2,
          componente: 'Desarrollo de Software',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0811',
          nombre: 'Seguridad Informática',
          creditos: 2,
          ih: 2,
          componente: 'Administración de la Información',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0910',
          nombre: 'Electiva Profesional III',
          creditos: 2,
          ih: 2,
          componente: 'Electivas',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS1005',
          nombre: 'Proyecto Grado',
          creditos: 3,
          ih: 2,
          componente: 'Investigación',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0912',
          nombre: 'Gestión Tecnológica',
          creditos: 2,
          ih: 2,
          componente: 'Gestión Organizacional',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Teórica Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0904',
          nombre: 'Laboratorio Tecnológico III',
          creditos: 2,
          ih: 2,
          componente: 'Electivas',
          area: 'Formación Específica', // Ejemplo de categoría
          ciclo: 'Profundización', // Ejemplo de categoría
          tipologia: 'Práctica' // Ejemplo de categoría
        },
        {
          codigo: 'IS0911',
          nombre: 'Ética y Legislación',
          creditos: 2,
          ih: 2,
          componente: 'Fundamentación',
          area: 'Formación Complementaria', // Ejemplo de categoría
          ciclo: 'Profesional', // Ejemplo de categoría
          tipologia: 'Teórica' // Ejemplo de categoría
        },
      ]
    },
  ]
}
