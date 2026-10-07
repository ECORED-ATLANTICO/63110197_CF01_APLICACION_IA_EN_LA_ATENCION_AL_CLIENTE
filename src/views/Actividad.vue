<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de IA, análisis de datos y cliente digital.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre el uso de datos, métricas y análisis del cliente digital para la toma de decisiones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa identifica que sus clientes realizan más compras los fines de semana. ¿Qué utilidad tiene esta información para la organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar promociones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tomar decisiones comerciales basadas en información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir inventarios permanentemente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis de datos permite tomar decisiones comerciales fundamentadas y mejorar resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes fuentes corresponde a un dato externo para la organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Historial de compras del CRM.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro de inventario del ERP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comentarios en redes sociales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Facturación interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las redes sociales constituyen una fuente externa de información para la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué etapa del ciclo del dato transforma información en conocimiento útil para la toma de decisiones?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recopilación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Análisis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depuración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis permite convertir datos en información útil para la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una empresa elimina registros duplicados de clientes. ¿Qué etapa del ciclo del dato está aplicando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Explotación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conversión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Segmentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depuración.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La depuración mejora la calidad y confiabilidad de los datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué dimensión del cliente digital se relaciona con dispositivos y plataformas utilizadas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conductual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Psicográfica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tecnológica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Demográfica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La dimensión tecnológica analiza dispositivos y plataformas utilizadas por el cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué criterio de segmentación se utiliza para diferenciar clientes según ciudad o región?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Geográfico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conductual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Psicográfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La segmentación geográfica clasifica clientes según ubicación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el principal beneficio de personalizar recomendaciones según compras anteriores?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el tráfico web.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar métricas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la conversión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La personalización mejora la experiencia y satisfacción del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué indicador permite medir si una estrategia digital genera registros o compras?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Geolocalización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Segmentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La conversión mide acciones de valor realizadas por los usuarios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica debe cumplir un KPI para facilitar su seguimiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser ambiguo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Basarse en opiniones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cumplir criterios SMART.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medirse una sola vez.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los KPI deben ser específicos, medibles, alcanzables, relevantes y temporales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de tráfico corresponde a usuarios que escriben directamente la URL en el navegador?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orgánico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Directo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Referido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pagado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El tráfico directo proviene de usuarios que ingresan directamente al sitio web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el principal propósito de medir la tasa de conversión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conocer el número total de empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar qué porcentaje de visitantes realiza una acción deseada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Medir únicamente visitas al sitio web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar costos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La tasa de conversión permite medir el porcentaje de usuarios que realizan una acción esperada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué métrica refleja usuarios que abandonan una compra antes de finalizarla?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Leads generados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'CTR.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carrito abandonado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Visitantes únicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El indicador de carrito abandonado permite identificar oportunidades de mejora en el proceso de compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Una campaña genera muchos visitantes, pero pocas compras. ¿Qué aspecto debería analizar primero la empresa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conversión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Nómina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario físico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La conversión permite identificar la efectividad de una estrategia digital.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el propósito principal del ROI en entornos digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clasificar clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir visitas web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medir el retorno obtenido frente a la inversión realizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El ROI permite evaluar la rentabilidad de las inversiones realizadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué acción contribuye directamente a mejorar la calidad de los datos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Duplicar registros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar información relevante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualizar y validar registros periódicamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir fuentes de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La actualización y validación de datos garantiza información confiable para la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál herramienta facilita visualizar indicadores y resultados de forma integrada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Chat.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tablero de control.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Red social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los tableros de control permiten visualizar información estratégica de manera integrada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué ventaja ofrece un reporte estratégico basado en datos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir la planeación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar riesgos completamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la necesidad de análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los reportes estratégicos facilitan la toma de decisiones fundamentadas en información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Cuál situación evidencia una decisión basada en datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar promociones según resultados de métricas web.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lanzar una campaña por intuición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar indicadores comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener estrategias sin evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las decisiones basadas en datos utilizan información verificable para orientar acciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué beneficio genera comprender el comportamiento del cliente digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la incertidumbre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar la segmentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la personalización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Anticipar necesidades y preferencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Comprender el comportamiento del cliente facilita la personalización y mejora de la experiencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué los datos son considerados un activo estratégico para las organizaciones?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplazan todos los procesos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permiten generar información para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque eliminan la necesidad de análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque solo sirven para almacenar registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los datos aportan información valiosa para la planeación, el análisis y la toma de decisiones organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
