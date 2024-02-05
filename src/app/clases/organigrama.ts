export interface Rap {
  id: string
  nivel: string
  detalle: string
}

export interface Rapid {
  id: string
}

export interface Tipocompetencia {
  abr: string
  nombre: string
  color: string
  activo: boolean
}

export interface Competencia {
  id: string
  abr: string
  detalle: string
  activo: boolean
  raps: Rapid[]
}

export interface Taxonomia {
  nombre: string
  color: string
}


export interface Organigrama {
  perfil: string
  raps: Rap[]
  taxonomias: Taxonomia[]
  tipocompetencias: Tipocompetencia[]
  competencias: Competencia[]
}

export const organigramaData: Organigrama = {
  perfil: 'El ingeniero de sistemas de la Universidad del Pacífico se caracteriza por ser una persona con alto sentido humanístico, pensamiento creativo y estratégico, comprometido con el desarrollo social, ambiental, cultural y económico de la región y del país; con capacidad para identificar, analizar, proponer soluciones soportadas en la utilización de la tecnología de la información y la comunicación, contribuyendo con ello al desarrollo de las organizaciones tanto a nivel operativo como gerencial aplicando su pensamiento crítico y habilidades de resolución de problemas complejos.\n Es un profesional con habilidades de comunicación efectiva, lo que le permite trabajar en equipos multidisciplinarios y participar en la toma de decisiones; con una actitud de aprendizaje continuo que le facilita afrontar los desafíos del campo disciplinar y le permite adaptarse al cambiante entorno tecnológico.',
  raps: [
    {id: 'B01', nivel: 'Recordar', detalle: 'Adquirir y comprender los principios básicos de la comunicación efectiva, incluyendo gramática, estructura de texto, y técnicas de presentación oral en el idioma materno y en inglés.'},
    {id: 'B02', nivel: 'Entender', detalle: 'Analizar y evaluar diferentes formas de expresión oral y escrita, comprendiendo cómo adaptar el estilo y el formato a distintos contextos y audiencias.'},
    {id: 'B03', nivel: 'Aplicar', detalle: 'Aplicar habilidades de comunicación efectiva en la creación y presentación de ideas, tanto oralmente como por escrito, en diferentes contextos académicos y situaciones cotidianas, utilizando el idioma materno y el inglés.'},
    {id: 'B04', nivel: 'Entender', detalle: 'Identificar los conceptos Básicos de formación profesional, integrando un conjunto de habilidades, tanto del área disciplinar, como de contextualización de la región y de la identidad universitaria'},
    {id: 'B05', nivel: 'Evaluar', detalle: 'Participar en un equipo multidisciplinar contribuyendo proactivamente en la solución de problemas.'},
    {id: 'B06', nivel: 'Crear', detalle: 'Reconocer los comportamientos adecuados para llevar a cabo un trabajo en equipo.'},
    {id: 'B07', nivel: 'Crear', detalle: 'Desarrollar teorías científicas y predicciones por medio de un conjunto de asignaturas que proporcionan habilidades asociadas a la interpretación del mundo y la naturaleza, facilitando la realización de modelos abstractos teóricos las cuales permiten dar respuesta a interrogantes o fenómenos en los laboratorios.'},
    {id: 'B08', nivel: 'Evaluar', detalle: 'Comunicar asertivamente resultados en el campo de estudio pertinente, incluso en un idioma extranjero.'},
    {id: 'B09', nivel: 'Evaluar', detalle: 'Valorar la importancia de una comunicación clara y efectiva de los análisis y propuestas en el campo de las TIC para asegurar la comprensión y participación de los distintos actores involucrados.'},
    {id: 'B10', nivel: 'Crear', detalle: 'Presentar efectivamente, ideas, proyectos, informes y/o documentos de trabajo de manera escrita, oral y digital, utilizando herramientas TIC.'},
    {id: 'B11', nivel: 'Analizar', detalle: 'Analizar y descomponer problemas complejos en sus componentes fundamentales, utilizando conceptos matemáticos y físicos para comprender sus causas y efectos en contextos específicos de ingeniería de sistemas.'},
    {id: 'B12', nivel: 'Evaluar', detalle: 'Evaluar diferentes enfoques y métodos de solución para problemas complejos a través de las ciencias básicas, aplicando criterios lógicos y razonamiento crítico para seleccionar las estrategias más efectivas.'},
    {id: 'B13', nivel: 'Crear', detalle: 'Crear un plan de acción detallado que incluya las actividades necesarias para alcanzar los objetivos establecidos.'},
    {id: 'B14', nivel: 'Evaluar', detalle: 'Evaluar la importancia de las tareas pendientes de ejecución para asignarles una prioridad evitando la procrastinación y el desperdicio de tiempo.'},
    {id: 'B15', nivel: 'Crear', detalle: 'Evaluar el seguimiento al plan de acción para asegurar el cumplimiento de los plazos establecidos.'},
    {id: 'B16', nivel: 'Aplicar', detalle: 'Ilustrar asertivamente resultados en el campo de estudio pertinente, incluso en un idioma extranjero.'},
    {id: 'B17', nivel: 'Aplicar', detalle: 'Presentar efectivamente, ideas, proyectos, informes y/o documentos de trabajo de manera escrita, oral y digital, utilizando herramientas TIC.'},
    {id: 'B18', nivel: 'Entender', detalle: 'Comunicar asertivamente resultados en el campo de estudio pertinente.'},

    {id: 'G01', nivel: 'Entender', detalle: 'Comprender y analizar cómo las TIC pueden ser aplicadas en el ámbito académico para mejorar el aprendizaje y la investigación. Esto incluye la comprensión de diferentes herramientas y plataformas digitales, su propósito y su impacto en el proceso educativo.'},
    {id: 'G02', nivel: 'Aplicar', detalle: 'Aplicar efectivamente las TIC en situaciones académicas reales, como la realización de investigaciones, la elaboración de proyectos y la presentación de trabajos académicos. Esto implica una capacidad práctica para seleccionar y utilizar herramientas tecnológicas adecuadas para cada tarea académica específica.'},
    {id: 'G03', nivel: 'Entender', detalle: 'Adquirir conocimientos fundamentales sobre las Tecnologías de la Información y las Comunicaciones, incluyendo herramientas y plataformas digitales actuales, para fundamentar el desarrollo de proyectos innovadores.'},
    {id: 'G04', nivel: 'Aplicar', detalle: 'Aplicar de manera efectiva las TIC en la creación y desarrollo de proyectos innovadores, utilizando habilidades técnicas para implementar soluciones prácticas y creativas que aborden necesidades específicas.'},
    {id: 'G05', nivel: 'Entender', detalle: 'Comprender los principios y la importancia de la responsabilidad social y el compromiso ciudadano, incluyendo el conocimiento de problemas sociales actuales y la necesidad de un enfoque ético en la toma de decisiones.'},
    {id: 'G06', nivel: 'Entender', detalle: 'Analizar y reflexionar sobre el impacto de las acciones individuales y colectivas en la sociedad, comprendiendo el papel de la ciudadanía activa en la promoción de cambios sociales positivos y sostenibles.'},
    {id: 'G07', nivel: 'Aplicar', detalle: 'Aplicar conceptos de responsabilidad social y compromiso ciudadano en proyectos y actividades concretas, demostrando iniciativa y liderazgo en la promoción de la ética, la equidad y el bienestar comunitario.'},
    {id: 'G08', nivel: 'Crear', detalle: 'Crear un plan de acción detallado que incluya las actividades necesarias para alcanzar los objetivos establecidos.'},
    {id: 'G09', nivel: 'Evaluar', detalle: 'Evaluar la importancia de las tareas pendientes de ejecución para asignarles una prioridad evitando la procrastinación y el desperdicio de tiempo.'},
    {id: 'G10', nivel: 'Crear', detalle: 'Realizar seguimiento al plan de acción para asegurar el cumplimiento de los plazos establecidos.'},
    {id: 'G11', nivel: 'Aplicar', detalle: 'Mostrar compromiso con el aprendizaje continuo, reconociendo fortalezas, debilidades y oportunidades para mejorar en su campo profesional.'},
    {id: 'G12', nivel: 'Analizar', detalle: 'Integrar nuevos conocimientos según sea necesario, utilizando estrategias de aprendizaje autónomo adecuadas en la resolución de problemas específicos.'},
    {id: 'G13', nivel: 'Aplicar', detalle: 'Demostrar un compromiso constante con la equidad, considerando y respetando la diversidad de perspectivas y experiencias, tanto en el ejercicio profesional como en la toma de decisiones'},
    {id: 'G14', nivel: 'Evaluar', detalle: 'Integrar de manera proactiva responsabilidades éticas en todas las acciones profesionales, tomando decisiones informadas y conscientes que contribuyan al bienestar y desarrollo sostenible de la sociedad.'},
    {id: 'G15', nivel: 'Entender', detalle: 'Demostrar comprensión de los principios fundamentales del cálculo diferencial e integral y su aplicación en la modelización de fenómenos físicos y sistemas de ingeniería.'},
    {id: 'G16', nivel: 'Aplicar', detalle: 'Resolver problemas de optimización y tasas de cambio en contextos de ingeniería de sistemas, aplicando técnicas de cálculo diferencial e integral de manera efectiva en proyectos interdisciplinarios.'},
    {id: 'G17', nivel: 'Entender', detalle: 'Explicar los conceptos de Física Mecánica y Electromagnetismo y su relevancia en la ingeniería de sistemas, particularmente en la construcción de modelos de sistemas mecánicos y electrónicos.'},
    {id: 'G18', nivel: 'Aplicar', detalle: 'Aplicar conocimientos de Física para diseñar experimentos sencillos y simular sistemas que formen parte de soluciones tecnológicas integradas en proyectos multidisciplinarios.'},
    {id: 'G19', nivel: 'Crear', detalle: 'Crear soluciones de base tecnológicas'},
    {id: 'G20', nivel: 'Evaluar', detalle: 'Evaluar diferentes dimensiones de un proyecto'},
    {id: 'G21', nivel: 'Analizar', detalle: 'Analizar las diferentes dimensiones de un proyecto'},
    {id: 'G22', nivel: 'Analizar', detalle: 'Diferenciar críticamente entre el método científico y otras formas de adquisición de conocimiento en el contexto de estudios de casos de proyectos de ingeniería.'},
    {id: 'G23', nivel: 'Evaluar', detalle: 'Evaluar la relevancia de la ciencia y el método científico en la mejora de prácticas y procesos en la ingeniería de sistemas.'},
    {id: 'G24', nivel: 'Crear', detalle: 'Diseñar métodos innovadores que integren principios del método científico para abordar desafíos complejos en la ingeniería de sistemas.'},
    {id: 'G25', nivel: 'Aplicar', detalle: 'Dirigir y participar en proyectos grupales, aplicando habilidades de liderazgo y colaboración en equipos multidisciplinarios, y demostrando efectividad en la comunicación y gestión de la diversidad cultural.'},
    {id: 'G26', nivel: 'Evaluar', detalle: 'Evaluar y mejorar dinámicas de equipo y desempeño grupal en proyectos de ingeniería de sistemas, aplicando técnicas de cultura organizativa y gestión de conflictos.'},
    {id: 'G27', nivel: 'Analizar', detalle: 'Tomar decisiones informadas en proyectos de ingeniería de sistemas, basadas en un análisis integral de factores económicos, técnicos y de mercado.'},
    {id: 'G28', nivel: 'Crear', detalle: 'Realizar análisis estratégicos y proponer soluciones innovadoras en casos de estudio, considerando tendencias del sector, innovación tecnológica y sostenibilidad.'},
    {id: 'G29', nivel: 'Entender', detalle: 'Comprende la importancia de la toma de decisiones efectiva en el ámbito personal y profesional'},
    {id: 'G30', nivel: 'Aplicar', detalle: 'Utiliza adecuadamente técnicas y herramientas para la toma de decisiones en contextos complejos, fundamentándote en fuentes de información confiables'},
    {id: 'G31', nivel: 'Crear', detalle: 'Crear ideas de negocios soportadas en las tecnologías para cumplir con los objetivos de las organizaciones.'},
    {id: 'G32', nivel: 'Entender', detalle: 'Identificar temas y problemas de actualidad con respecto al entorno local, regional y global, con el fin de relacionarlos con propuestas de soluciones creativas y eficientes.'},
    {id: 'G33', nivel: 'Evaluar', detalle: 'Evaluar metodologías que puedan usarse para dar soluciones a problemas del medio desde el campo disciplinar'},
    {id: 'G34', nivel: 'Analizar', detalle: 'Analizar y comparar diversas tecnologías emergentes y metodologías para determinar su viabilidad y potencial impacto en la resolución de problemas socioeconómicos complejos.'},
    {id: 'G35', nivel: 'Evaluar', detalle: 'Evaluar críticamente el impacto de las soluciones tecnológicas en contextos socioeconómicos, proponiendo estrategias que promuevan un desarrollo sostenible.'},
    {id: 'G36', nivel: 'Evaluar', detalle: 'Evaluar alternativas para la toma de decisiones basado en fuentes confiables de información'},
    {id: 'G37', nivel: 'Entender', detalle: 'Identificar los elementos clave en el proceso de toma de decisiones'},
    {id: 'G38', nivel: 'Aplicar', detalle: 'Aplicar técnicas y herramientas apropiadas para la toma de decisiones en situaciones complejas.'},

    {id: 'D01', nivel: 'Analizar', detalle: 'Recopilar y organizar información de manera eficiente con base en la normativas y estándares organizacionales asegurando el cumplimiento de políticas y procedimientos establecidos.'},
    {id: 'D02', nivel: 'Aplicar', detalle: 'Aplicar técnicas de análisis financiero y contabilidad en la evaluación de proyectos tecnológicos, demostrando habilidades en el análisis de viabilidad económica y eficiencia operativa.'},
    {id: 'D03', nivel: 'Analizar', detalle: 'Realizar estudios de caso que impliquen la integración de conocimientos de administración de empresas en el contexto de la gestión de proyectos de tecnología, enfocándose en estrategias de financiamiento, presupuestación y evaluación de riesgos.'},
    {id: 'D04', nivel: 'Crear', detalle: 'Desarrollar proyectos que apliquen metodologías de gestión de la calidad para mejorar la eficiencia de los procesos y la calidad de los productos en el ámbito de la ingeniería de sistemas.'},
    {id: 'D05', nivel: 'Evaluar', detalle: 'Evaluar y mejorar procesos existentes en estudios de casos simulados o reales, aplicando técnicas de mejora continua y aseguramiento de la calidad.'},
    {id: 'D06', nivel: 'Evaluar', detalle: 'Elaborar modelos de sistemas complejos que representen fenómenos del mundo y la naturaleza, respaldados por un sólido fundamento teórico y metodológico.'},
    {id: 'D07', nivel: 'Aplicar', detalle: 'Utilizar la información gestionada de manera efectiva para tomar decisiones fundamentadas, evaluando las implicaciones y consecuencias de sus elecciones en el contexto de optimizar el desempeño del proceso.'},
    {id: 'D08', nivel: 'Evaluar', detalle: 'Proponer soluciones tecnológicas para abordar problemas de investigación identificados, derivados de una detallada recopilación y organización de la información en un contexto específico.'},
    {id: 'D09', nivel: 'Crear', detalle: 'Utilizar herramientas avanzadas y métodos innovadores para abordar problemas complejos, demostrando un dominio práctico de las tecnologías actuales.'},
    {id: 'D10', nivel: 'Evaluar', detalle: 'Analizar críticamente las soluciones propuestas, evaluando su viabilidad, eficacia y eficiencia en la resolución de desafíos complejos.'},
    {id: 'D11', nivel: 'Evaluar', detalle: 'Integrar conocimientos y perspectivas para generar soluciones más completas e innovadoras en un entorno de colaboración con profesionales de diversas disciplinas.'},
    {id: 'D12', nivel: 'Evaluar', detalle: 'Valorar el rendimiento de las cadenas de suministro existentes en estudios de caso seleccionados para identificar puntos críticos y proponer mejoras basadas en sostenibilidad y eficiencia operativa.'},
    {id: 'D13', nivel: 'Crear', detalle: 'Diseñar un proyecto integral que mejore una cadena de suministro, justificando las estrategias de optimización de transporte, almacenamiento y distribución a través de análisis de coste-beneficio y sostenibilidad.'},
    {id: 'D14', nivel: 'Aplicar', detalle: 'Emplear modelos matemáticos y herramientas estadísticas avanzadas en proyectos de logística para optimizar operaciones, con especial atención en la variabilidad y la incertidumbre de los sistemas logísticos.'},
    {id: 'D15', nivel: 'Analizar', detalle: 'Organizar datos de múltiples fuentes en el contexto de la logística para identificar patrones y tendencias que informen la toma de decisiones y la formulación de modelos de optimización.'},
    {id: 'D16', nivel: 'Entender', detalle: 'Recopila información de manera eficiente relacionada con los requisitos y requerimientos para el desarrollo de actividades inherentes a la profesión'},
    {id: 'D17', nivel: 'Crear', detalle: 'Crea ideas de negocios soportadas en las tecnologías para cumplir con los objetivos de las organizaciones.'},
    {id: 'D18', nivel: 'Crear', detalle: 'Diseñar soluciones tecnológicas innovadoras que incorporen principios de diferentes disciplinas, asegurando que estos sistemas sean éticamente sólidos y alineados con los valores humanísticos.'},
    {id: 'D19', nivel: 'Aplicar', detalle: 'Aplicar un conjunto integrado de conocimientos disciplinarios para el desarrollo de sistemas computacionales que respondan a retos operativos y gerenciales actuales.'},
    {id: 'D20', nivel: 'Entender', detalle: 'Identificar temas y problemas de actualidad con respecto al entorno local, regional y global, con el fin de relacionarlos con propuestas de soluciones creativas y eficientes.'},
    {id: 'D21', nivel: 'Evaluar', detalle: 'Evaluar metodologías que puedan usarse para dar soluciones a problemas del medio desde el campo disciplinar.'},

    {id: 'E01', nivel: 'Entender', detalle: 'Comprender y describir el comportamiento de señales en tiempo continuo y discreto, utilizando los fundamentos del cálculo para analizar sus características y comportamiento.'},
    {id: 'E02', nivel: 'Aplicar', detalle: 'Implementar transformadas de Fourier y Laplace en la solución de problemas sencillos de procesamiento de señales y comunicaciones, sentando las bases para futuros cursos especializad'},
    {id: 'E03', nivel: 'Crear', detalle: 'Proponer soluciones en el campo de las TIC que afecta positivamente el desarrollo económico y social en un contexto determinado'},
    {id: 'E04', nivel: 'Evaluar', detalle: 'Evaluar la viabilidad y factibilidad de propuestas en términos técnicos, económicos, ambientalmente sostenibles y sociales'},
    {id: 'E05', nivel: 'Crear', detalle: 'Formular sistemas alternativos para la solución de problemas del ámbito de la ingeniería de sistemas.'},
    {id: 'E06', nivel: 'Analizar', detalle: 'Analizar el impacto económico y social que se espera lograr con la implementación de una propuesta.'},
    {id: 'E07', nivel: 'Aplicar', detalle: 'Implementar campañas de mercadeo y análisis de mercado en proyectos simulados, utilizando técnicas y herramientas de mercadeo para identificar necesidades del mercado relacionadas con productos tecnológicos.'},
    {id: 'E08', nivel: 'Analizar', detalle: 'Analizar tendencias del mercado y comportamientos del consumidor para desarrollar estrategias de mercadeo efectivas en el sector tecnológico, integrando conocimientos de análisis de mercado y comunicación comercial.'},
    {id: 'E09', nivel: 'Aplicar', detalle: 'Gestionar recursos tecnológicos en proyectos de ingeniería de sistemas, demostrando habilidades en la optimización del uso de tecnología y en la gestión de infraestructuras tecnológicas.'},
    {id: 'E10', nivel: 'Evaluar', detalle: 'Evaluar la eficiencia y eficacia de las tecnologías implementadas en proyectos tecnológicos, aplicando principios de gestión tecnológica y sostenibilidad.'},
    {id: 'E11', nivel: 'Entender', detalle: 'Comprender y explicar los principios y teorías de las ciencias de la computación que fundamentan el modelaje matemático y el diseño de experimentos computacionales.'},
    {id: 'E12', nivel: 'Aplicar', detalle: 'Aplicar técnicas de modelaje matemático para resolver problemas específicos, diseñando y ejecutando experimentos que validen los modelos propuestos.'},
    {id: 'E13', nivel: 'Analizar', detalle: 'Analizar y sintetizar los resultados de experimentos computacionales para evaluar la efectividad de los modelos matemáticos aplicados en contextos reales y situaciones prácticas.'},
    {id: 'E14', nivel: 'Aplicar', detalle: 'Aplicar métodos matemáticos y algoritmos computacionales para modelar y resolver problemas complejos en un contexto práctico.'},
    {id: 'E15', nivel: 'Analizar', detalle: 'Analizar los requerimientos de problemas complejos y desglosarlos en componentes manejables que puedan ser abordados con soluciones computacionales.'},
    {id: 'E16', nivel: 'Evaluar', detalle: 'Diseñar y sintetizar soluciones innovadoras que integren los principios matemáticos y computacionales para abordar desafíos reales de manera efectiva y creativa.'},
    {id: 'E17', nivel: 'Crear', detalle: 'Formular los requisitos del sistema de software en coherencia con los procesos de la ingeniería de requisitos.'},
    {id: 'E18', nivel: 'Crear', detalle: 'Diseñar el sistema de software de acuerdo con los requisitos del sistema'},
    {id: 'E19', nivel: 'Crear', detalle: 'Implementar medidas de seguridad que permitan salvaguardar los recursos de hardware y software de la organización basado en estándares de calidad'},
    {id: 'E20', nivel: 'Crear', detalle: 'implementar planes y políticas que permitan el uso adecuado y optimizado de recursos de hardware y software de la organización'},
    {id: 'E21', nivel: 'Evaluar', detalle: 'Evaluar críticamente las políticas y procedimientos actuales de ingeniería de procesos dentro de una organización para identificar oportunidades de mejora continua y asegurar la calidad de las operaciones logísticas.'},
    {id: 'E22', nivel: 'Crear', detalle: 'Crear un marco de políticas de operaciones logísticas que integre las mejores prácticas de calidad y gestión, y desarrollar un plan de implementación evaluando su impacto en la eficiencia operativa y la satisfacción del cliente.'},
    {id: 'E23', nivel: 'Crear', detalle: 'Crear el sistema de software teniendo en cuenta los requisitos de la organización y diseño de la solución'},
    {id: 'E24', nivel: 'Aplicar', detalle: 'Planear casos de pruebas unitarias de acuerdo con los criterios técnicos'},
    {id: 'E25', nivel: 'Aplicar', detalle: 'Aplicar casos de pruebas unitarias de acuerdo con los criterios técnicos'},
    {id: 'E26', nivel: 'Evaluar', detalle: 'Utilizar herramientas y metodologías avanzadas para el análisis de procesos y resultados, así como para la ejecución y análisis de pruebas de software, con el fin de detectar y corregir posibles defectos, siguiendo estándares y mejores prácticas de la industria.'},
    {id: 'E27', nivel: 'Crear', detalle: 'Aplicar estrategias de control de calidad en el ciclo de vida del software, incluyendo la gestión de configuración, control de versiones y gestión de cambios, asegurando la integridad y consistencia del sistema.'},
    {id: 'E28', nivel: 'Crear', detalle: 'Documentar la solución de software de acuerdo con los lineamientos, normas y estándares de la industria.'},
    {id: 'E29', nivel: 'Crear', detalle: 'Diseñar redes de datos que integre servicios telemáticos y cumpla con los estándares de calidad y disponibilidad, demostrando habilidad para anticipar necesidades futuras y para adaptarse a las tendencias emergentes en tecnología de redes.'},
    {id: 'E30', nivel: 'Evaluar', detalle: 'Evaluar sistemas de redes y comunicaciones existentes en estudios de caso reales para identificar y corregir vulnerabilidades, optimizar el rendimiento y asegurar la conformidad con los protocolos y regulaciones actuales.'},
    {id: 'E31', nivel: 'Crear', detalle: 'Crear proyectos que incorporen IoT, ciberseguridad y análisis de Big Data para dar soluciones innovadoras a los retos planteados por la industria 4.0.'},
    {id: 'E32', nivel: 'Evaluar', detalle: 'Evaluar la efectividad y seguridad de las soluciones tecnológicas desarrolladas, optimizando su desempeño en base a criterios de la industria 4.0.'},
  ],
  taxonomias: [
    { nombre: 'Recordar', color: '#ffc107' },
    { nombre: 'Entender', color: '#4caf50' },
    { nombre: 'Aplicar', color: '#03a9f4' },
    { nombre: 'Analizar', color: '#b578de' },
    { nombre: 'Evaluar', color: '#ff1582' },
    { nombre: 'Crear', color: '#ff8300' },
  ],
  tipocompetencias: [
    { abr: 'CB', nombre: 'Básica', color: '#fedc97', activo: false },
    { abr: 'CG', nombre: 'General', color: '#81c3d7', activo: false },
    { abr: 'CD', nombre: 'Disciplinar', color: '#fbc3bc', activo: false },
    { abr: 'CE', nombre: 'Especificas', color: '#9cc5a1', activo: false },
  ],
  competencias: [
    { id: '01', abr: 'CB', detalle: 'Utilizar eficientemente la comunicación oral y escrita, expresándose de manera clara y concisa, con el propósito de transmitir ideas, información y conocimientos de manera efectiva en diversos contextos.',
      activo: false,
      raps: [
        {id: 'B01'},
        {id: 'B02'},
        {id: 'B03'},
        {id: 'B07'},
        {id: 'B08'},
        {id: 'B09'},
        {id: 'B10'},
        {id: 'B16'},
        {id: 'B17'},
        {id: 'B18'},
      ]
    },
    { id: '02', abr: 'CB', detalle: 'Organizar y planificar el tiempo con el fin de lograr una eficiente gestión, cumpliendo con los objetivos y plazos establecidos.',
      activo: false,
      raps: [
        {id: 'B01'},
        {id: 'B02'},
        {id: 'B13'},
        {id: 'B14'},
        {id: 'B15'},
      ]
    },
    {id: '03', abr: 'CB', detalle: 'Desarrollar habilidades para llevar a cabo tareas de forma independiente y en colaboración con otros, con el propósito de alcanzar objetivos específicos en diferentes contextos.',
      activo: false,
      raps: [
        {id: 'B04'},
        {id: 'B05'},
        {id: 'B06'},
      ]},
    { id: '04', abr: 'CB', detalle: 'Identificar y resolver problemas complejos utilizando el pensamiento crítico',
      activo: false,
      raps: [
        {id: 'B11'},
        {id: 'B12'},
      ]},
    {id: '01', abr: 'CG', detalle: 'Emprender proyectos e iniciativas innovadoras soportadas en Tecnologías de la Información y las Comunicaciones',
      activo: false,
      raps: [
        {id: 'G03'},
        {id: 'G04'},
      ]},
    {id: '02', abr: 'CG', detalle: 'Ejercer la responsabilidad social y el compromiso ciudadano activamente',
      activo: false,
      raps: [
        {id: 'G05'},
        {id: 'G06'},
        {id: 'G07'},
      ]},
    {id: '03', abr: 'CG', detalle: 'Utilizar las TIC de forma efectiva para satisfacer necesidades específicas en contextos académicos',
      activo: false,
      raps: [
        {id: 'G01'},
        {id: 'G02'},
      ]},
    { id: '04', abr: 'CG', detalle: 'Organizar y planificar el tiempo con el fin de lograr una eficiente gestión personal y profesional, cumpliendo con los objetivos y plazos establecidos.',
      activo: false,
      raps: [
        {id: 'G08'},
        {id: 'G09'},
        {id: 'G10'},
      ]},
    { id: '05', abr: 'CG', detalle: 'Aprender en forma continua y autónoma, actualizando conocimientos y habilidades, con el propósito de adaptarse y crecer en el entorno profesional.',
      activo: false,
      raps: [
        {id: 'G11'},
        {id: 'G12'},
      ]},
    { id: '06', abr: 'CG', detalle: 'Aplicar principios morales y normas de conducta en el ejercicio profesional, garantizando la integridad, la equidad y la responsabilidad en todas las acciones realizadas, con el propósito de contribuir al bienestar de la sociedad.',
      activo: false,
      raps: [
        {id: 'G13'},
        {id: 'G14'},
      ]},
    {id: '07', abr: 'CG', detalle: 'Utilizar eficientemente los principios del cálculo diferencial e integral para modelar y resolver problemas básicos, contribuyendo a la fundamentación matemática necesaria para el desarrollo operativo y estratégico en la ingeniería de sistemas.',
      activo: false,
      raps: [
        {id: 'G15'},
        {id: 'G16'},
      ]},
    {id: '08', abr: 'CG', detalle: 'Comprender y aplicar los principios de la Física para el modelado, análisis y diseño de sistemas mecánicos y electrónicos, facilitando así la capacidad de conceptualizar y desarrollar infraestructuras tecnológicas y soluciones innovadoras.',
      activo: false,
      raps: [
        {id: 'G17'},
        {id: 'G18'},
      ]},
    { id: '09', abr: 'CG', detalle: 'Desarrollar soluciones creativas y efectivas ante desafíos comunitarios, aplicando las bases teóricas y técnicas de la ingeniería de sistemas adquiridas durante la formación de pregrado, para contribuir significativamente al bienestar comunitario.',
      activo: false,
      raps: [
        {id: 'G19'},
        {id: 'G20'},
        {id: 'G21'},
      ]},
    {id: '10', abr: 'CG', detalle: 'Ejecutar tareas con autonomía y colaborar eficientemente en equipos multidisciplinarios, adaptándose a distintos contextos y contribuyendo al logro de objetivos comunes, mediante la aplicación de habilidades interpersonales y técnicas especializadas.',
      activo: false,
      raps: [
        {id: 'G22'},
        {id: 'G23'},
        {id: 'G24'},
      ]},
    {id: '11', abr: 'CG', detalle: 'Liderar y colaborar en equipos multidisciplinarios, aplicando habilidades de comunicación y cultura organizativa para fomentar un entorno de trabajo eficiente y efectivo en proyectos de ingeniería de sistemas.',
      activo: false,
      raps: [
        {id: 'G25'},
        {id: 'G26'},
      ]},
    {id: '12', abr: 'CG', detalle: 'Tomar decisiones de manera efectiva y oportuna, evaluando diferentes opciones y analizando sus consecuencias, con el propósito de alcanzar resultados óptimos en situaciones variadas y complejas, basado en información relevante y confiable.',
      activo: false,
      raps: [
        {id: 'G27'},
        {id: 'G28'},
        {id: 'G29'},
        {id: 'G30'},
        {id: 'G36'},
        {id: 'G37'},
        {id: 'G38'},
      ]},
    {id: '13', abr: 'CG', detalle: 'Desarrollar la habilidad de adaptarse rápidamente a las nuevas tecnologías y metodologías emergentes, aplicando un pensamiento crítico y estratégico para resolver problemas complejos y fomentar el desarrollo sostenible en diversos contextos socioeconómicos.',
      activo: false,
      raps: [
        {id: 'G34'},
        {id: 'G35'},
      ]},

    { id: '01', abr: 'CD', detalle: 'Gestionar eficientemente la información de un proceso específico, atendiendo a los requisitos organizacionales, con el propósito de tomar decisiones fundamentadas utilizando estándares de calidad establecidos.',
      activo: false,
      raps: [
        {id: 'D01'},
        {id: 'D06'},
        {id: 'D07'},
        {id: 'D08'},
        {id: 'D16'},
      ]},
    {id: '02', abr: 'CD', detalle: 'Analizar y aplicar principios de gestión empresarial y financiera para evaluar la eficiencia operativa y la viabilidad económica de proyectos tecnológicos, integrando conocimientos de administración de empresas, análisis financiero y contabilidad.',
      activo: false,
      raps: [
        {id: 'D02'},
        {id: 'D03'},
      ]},
    {id: '03', abr: 'CD', detalle: 'Desarrollar y gestionar estrategias de calidad y procesos de mejora continua en el ámbito de proyectos de ingeniería de sistemas, aplicando metodologías de gestión de la calidad para asegurar la excelencia en productos y servicios.',
      activo: false,
      raps: [
        {id: 'D04'},
        {id: 'D05'},
      ]},
    {id: '04', abr: 'CD', detalle: 'Generar soluciones innovadoras utilizando herramientas, métodos y técnicas apropiadas, con el propósito de abordar y resolver desafíos complejos de manera efectiva y eficiente.',
      activo: false,
      raps: [
        {id: 'D09'},
        {id: 'D10'},
        {id: 'D11'},
      ]},
    {id: '05', abr: 'CD', detalle: 'Evaluar críticamente las cadenas de suministro y los procesos logísticos para proponer mejoras estratégicas que optimicen el transporte, almacenamiento y distribución de bienes y servicios, aplicando principios de sostenibilidad y eficiencia.',
      activo: false,
      raps: [
        {id: 'D12'},
        {id: 'D13'},
      ]},
    {id: '06', abr: 'CD', detalle: 'Desarrollar y aplicar modelos analíticos avanzados para la solución de problemas complejos en logística, empleando herramientas matemáticas y estadísticas que permitan la optimización de sistemas en contextos variables',
      activo: false,
      raps: [
        {id: 'D14'},
        {id: 'D15'},
      ]},
    {id: '07', abr: 'CD', detalle: 'Generar ideas de negocios soportadas en las tecnologías de la información y la comunicación, teniendo en cuenta su viabilidad.',
      activo: false,
      raps: [
        {id: 'D17'},
      ]},
    {id: '08', abr: 'CD', detalle: 'Dominar el diseño y desarrollo de soluciones tecnológicas innovadoras que integren conceptos interdisciplinarios, fomentando el avance de sistemas computacionales en alineación con los valores humanísticos y las necesidades operativas y gerenciales.',
      activo: false,
      raps: [
        {id: 'D18'},
        {id: 'D19'},
      ]},

    {id: '01', abr: 'CE', detalle: 'Generar propuestas de alto valor para el sector de las TIC que respondan a necesidades concretas, mediante una integración de conocimientos técnicos y una comprensión profunda del impacto económico y social de las intervenciones tecnológicas.',
      activo: false,
      raps: [
        {id: 'E03'},
        {id: 'E04'},
        {id: 'E05'},
        {id: 'E06'},
      ]},
    {id: '02', abr: 'CE', detalle: 'Implementar estrategias de mercadeo y gestión comercial para identificar y satisfacer las necesidades del mercado, utilizando habilidades de análisis de mercado y técnicas de mercadeo en el contexto de la ingeniería de sistemas.',
      activo: false,
      raps: [
        {id: 'E07'},
        {id: 'E08'},
      ]},
    {id: '03', abr: 'CE', detalle: 'Gestionar eficientemente recursos y tecnologías dentro de las organizaciones, aplicando los principios de la gestión tecnológica para optimizar el uso de tecnologías en proyectos de ingeniería de sistemas.',
      activo: false,
      raps: [
        {id: 'E09'},
        {id: 'E10'},
      ]},
    {id: '04', abr: 'CE', detalle: 'Aplicar la teoría de las ciencias de la computación en situaciones reales apoyado en el modelaje matemático y diseño de experimentos.',
      activo: false,
      raps: [
        {id: 'E11'},
        {id: 'E12'},
        {id: 'E13'},
      ]},
    {id: '05', abr: 'CE', detalle: 'Desarrollar soluciones innovadoras a problemas complejos mediante la aplicación de principios matemáticos y computacionales',
      activo: false,
      raps: [
        {id: 'E14'},
        {id: 'E15'},
        {id: 'E16'},

      ]},
    {id: '06', abr: 'CE', detalle: 'Capacidad para definir los requisitos y diseñar el sistema de software de acuerdo con los requerimientos de la organización y modelos de la industria.',
      activo: false,
      raps: [
        {id: 'E17'},
        {id: 'E18'},

      ]},
    {id: '07', abr: 'CE', detalle: 'Capacidad para administrar la infraestructura tecnológica con el objeto de mantener, optimizar y salvaguardar los recursos tecnológicos que permitan que las organizaciones puedan operar eficientemente apoyándose en estándares del sector de las TI.',
      activo: false,
      raps: [
        {id: 'E19'},
        {id: 'E20'},
      ]},
    {id: '08', abr: 'CE', detalle: 'Formular y evaluar políticas y procedimientos de ingeniería que aseguren la calidad y mejoren continuamente las operaciones logísticas en el ámbito de la ingeniería de sistemas.',
      activo: false,
      raps: [
        {id: 'E21'},
        {id: 'E22'},
      ]},
    {id: '09', abr: 'CE', detalle: 'Participar en el desarrollo el sistema de software teniendo en cuenta los requisitos de la organización y el diseño de la solución.',
      activo: false,
      raps: [
        {id: 'E23'},
        {id: 'E24'},
        {id: 'E25'},
      ]},
    {id: '10', abr: 'CE', detalle: 'Capacidad para asegurar la calidad de los sistemas de software de acuerdo con los parámetros técnicos y estándares de la industria.',
      activo: false,
      raps: [
        {id: 'E26'},
        {id: 'E27'},
        {id: 'E28'},
      ]},
    {id: '11', abr: 'CE', detalle: 'Diseñar y gestionar soluciones de redes, servicios telemáticos y comunicaciones con el objetivo de asegurar la fiabilidad, calidad y disponibilidad de los servicios, aplicaciones e infraestructura TI, respetando lineamientos técnicos y normativos del sector.',
      activo: false,
      raps: [
        {id: 'E29'},
        {id: 'E30'},
      ]},
    {id: '12', abr: 'CE', detalle: 'Aplicar conocimientos y técnicas avanzadas en áreas como IoT, ciberseguridad y Big Data para desarrollar y ejecutar proyectos prácticos dentro de los laboratorios tecnológicos, abordando demandas de la industria 4.0',
      activo: false,
      raps: [
        {id: 'E31'},
        {id: 'E32'},
      ]},
    {id: '13', abr: 'CE', detalle: 'Aplicar técnicas de cálculo para el análisis básico de señales en tiempo continuo y discreto, preparando el terreno para el uso de herramientas avanzadas',
      activo: false,
      raps: [
        {id: 'E01'},
        {id: 'E02'},
      ]},
  ]
};
