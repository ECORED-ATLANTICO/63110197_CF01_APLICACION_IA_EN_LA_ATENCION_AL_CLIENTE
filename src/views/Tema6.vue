<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Visualización 

    img(src="@/assets/curso/tema6/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10.mb-3
          p.mb-0 La visualización de datos en entornos digitales no debe entenderse como una etapa posterior al análisis, sino como parte integral del proceso estratégico.  

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Cuando los datos se representan gráficamente, no solo se presentan resultados: se construye una interpretación. Toda visualización implica una decisión sobre qué mostrar, qué omitir y cómo organizar la información para facilitar comprensión.
        .bg-terciario-t10.p-4.rounded-4.py-3
          p.mb-0 En contextos empresariales donde los indicadores se actualizan constantemente, la claridad visual determina la rapidez con la que una organización puede reaccionar. La representación adecuada reduce la ambigüedad y permite enfocar la atención en aquello que realmente impacta el desempeño. 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-7
        p No todo tipo de gráfico comunica lo mismo. La elección de la representación debe corresponder a la naturaleza del dato. Un error frecuente es utilizar formatos llamativos sin considerar si realmente facilitan comprensión. La coherencia visual implica que la estructura del gráfico ayude a responder una pregunta específica. Por ejemplo, cuando el interés está en observar evolución, la continuidad visual es prioritaria.  
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 En cambio, cuando se comparan segmentos, la diferenciación clara entre categorías es fundamental. La representación debe permitir que la conclusión principal sea visible sin necesidad de explicaciones extensas 
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/3.png", alt="")

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Tableros de control 

    p Antes de diseñar cualquier gráfico o tablero, la organización debe definir el propósito de la visualización. Mostrar todos los datos disponibles no es una estrategia; es una acumulación. La visualización estratégica actúa como un filtro que selecciona únicamente la información que influye en los objetivos institucionales. 
    p.mb-5 Este proceso implica tres decisiones clave: 

    .row.justify-content-center.mb-2
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/4.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-1.bg-contenido-a10
            h4.mb-3 Determinar qué variable refleja desempeño crítico 
            p Identifica el indicador que mejor evidencia el resultado de un proceso y permite reconocer situaciones que requieren atención, seguimiento o mejora para alcanzar los objetivos establecidos. 
            p.mb-0 #[strong Ejemplo]: en atención al cliente, analizar el tiempo promedio de respuesta para detectar demoras que afectan el servicio. 
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/5.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-1.bg-contenido-a10
            h4.mb-3 Identificar qué comparación aporta significado 
            p Establece el referente más adecuado para interpretar un dato, comparándolo con periodos anteriores, segmentos de clientes, metas o proyecciones, con el propósito de reconocer cambios, diferencias y tendencias relevantes. 
            p.mb-0 #[strong Ejemplo]: comparar la satisfacción del cliente actual con la del trimestre anterior para identificar su evolución. 
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/6.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-1.bg-contenido-a10
            h4.mb-3 Definir el nivel de detalle adecuado para el usuario final 
            p Determina qué cantidad y profundidad de información debe presentarse según las necesidades, responsabilidades y conocimientos de quien utilizará los datos, evitando información insuficiente o excesiva. 
            p.mb-0 #[strong Ejemplo]: un directivo recibe indicadores resumidos, mientras el responsable de servicio consulta resultados detallados por canal y periodo. 

    p Cuando estas decisiones no se toman con claridad, la visualización pierde coherencia y puede generar interpretaciones contradictorias. 
    p.mb-4 Definir preguntas estratégicas antes de elaborar una visualización facilita el análisis de la información y evita interpretaciones erróneas. Para ello, es recomendable responder aspectos como

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.px-4(titulo="¿Qué indicador es prioritario?")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Permite seleccionar el indicador que mejor representa el desempeño del proceso y que aporta información relevante para identificar necesidades, desviaciones o resultados que requieren atención.      
          .col-sm-8.col-lg-5
            figure
              img(src='@/assets/curso/tema6/7.png', alt='')
      .py-3.py-md-4.px-4(titulo="¿Qué tipo de comparación se requiere?")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Define cómo interpretar los resultados mediante comparaciones históricas, entre segmentos, frente a metas o mediante proyecciones, facilitando la identificación de cambios, tendencias y diferencias significativas.     
          .col-sm-8.col-lg-5
            figure
              img(src='@/assets/curso/tema6/8.png', alt='')
      .py-3.py-md-4.px-4(titulo="¿Quién utilizará la información? ")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Identifica al usuario o grupo destinatario para ajustar el contenido, nivel de detalle, lenguaje y forma de presentación de los datos según sus necesidades y responsabilidades.    
          .col-sm-8.col-lg-5
            figure
              img(src='@/assets/curso/tema6/9.png', alt='')
      .py-3.py-md-4.px-4(titulo="¿Qué acción podría derivarse de los resultados?")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Orienta la información hacia decisiones concretas, como ajustar procesos, personalizar la atención, corregir desviaciones, asignar recursos o implementar mejoras según los resultados obtenidos.   
          .col-sm-8.col-lg-5
            figure
              img(src='@/assets/curso/tema6/10.png', alt='')
 
    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El tablero de control no debe concebirse como un repositorio permanente de métricas, sino como un mecanismo de seguimiento que permita detectar variaciones relevantes. Su función principal es señalar desviaciones respecto a lo esperado. 
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Un tablero eficaz concentra indicadores estratégicos y facilita comparación temporal. Cuando está correctamente diseñado, permite responder de manera casi inmediata si el desempeño se mantiene estable o requiere intervención. 
        p.mb-0 El exceso de indicadores genera ruido visual. Por ello, es recomendable que el tablero incluya únicamente variables que impacten directamente en los objetivos organizacionales. A continuación, se muestran los elementos que fortalecen el tablero. 

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Reportes estratégicos 

    p La visualización de datos en entornos digitales no debe entenderse como una etapa posterior al análisis, sino como parte integral del proceso estratégico.  

    p Cuando los datos se representan gráficamente, no solo se presentan resultados: se construye una interpretación. Toda visualización implica una decisión sobre qué mostrar, qué omitir y cómo organizar la información para facilitar comprensión.

    p En contextos empresariales donde los indicadores se actualizan constantemente, la claridad visual determina la rapidez con la que una organización puede reaccionar. La representación adecuada reduce la ambigüedad y permite enfocar la atención en aquello que realmente impacta el desempeño. 
 
    img(src="@/assets/curso/tema6/12.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10.mb-4
          p.mb-0 Mientras el tablero facilita monitoreo continuo, el reporte estratégico permite reflexión estructurada. Su propósito no es repetir gráficos, sino explicar el significado de los resultados observados. Un reporte efectivo articula datos con contexto. Debe integrar:  

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-xl-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/13.svg' alt='')
            h5.text-center Descripción breve del período evaluado 
            p.text-center Contextualiza el reporte indicando el período analizado y los aspectos relevantes para comprender los resultados.  
            p.mb-0.text-center #[strong Ejemplo]: el informe presenta el desempeño de la atención digital durante el primer trimestre, considerando consultas y solicitudes recibidas. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/14.svg' alt='')
            h5.text-center Presentación visual de indicadores relevantes 
            p.text-center Organiza los principales indicadores mediante gráficos, tablas o recursos visuales que facilitan su lectura y comparación.  
            p.mb-0.text-center #[strong Ejemplo]: un tablero muestra el tiempo de respuesta, satisfacción del cliente y solicitudes resueltas durante el mes. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/15.svg' alt='')
            h5.text-center Interpretación argumentada de variaciones 
            p.text-center Explica los cambios identificados en los indicadores, relacionándolos con datos, situaciones o factores que permitan comprender su comportamiento. 
            p.mb-0.text-center #[strong Ejemplo]: el aumento del tiempo de respuesta se relaciona con un incremento de solicitudes durante una campaña. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/16.svg' alt='')
            h5.text-center Propuestas de acción fundamentadas 
            p.text-center Formula acciones de mejora sustentadas en los resultados e interpretaciones obtenidas, orientando la toma de decisiones.  
            p.mb-0.text-center #[strong Ejemplo]: redistribuir asesores hacia el canal con mayor demanda para reducir los tiempos de respuesta. 
      .col-lg-4.d-none.d-xl-block
        figure
          img.imgw-324(src='@/assets/curso/tema6/17.png', alt='')
 
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/18.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El valor del reporte radica en su capacidad de transformar números en argumentos. Cuando el documento solo presenta cifras, no aporta comprensión estratégica. En cambio, cuando conecta resultados con decisiones futuras, se convierte en herramienta de planificación. 
        .bg-terciario.p-4.rounded-4.py-3
          p.mb-0 La representación de datos implica responsabilidad. Ajustar escalas de manera desproporcionada, omitir periodos relevantes o seleccionar únicamente indicadores favorables puede distorsionar la realidad organizacional. 

    p.mb-4.z-2 La ética en la visualización requiere: 

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-sm-6.col-lg-5.col-xl-3.mb-3
        .bg-contenido-a20.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3
              figure
                img.imgw-60(src="@/assets/curso/tema6/19.svg", alt="" data-aos="zoom-in-down")
            .col-9
              p.mb-0 Transparencia en selección de datos. 
      .col-sm-6.col-lg-5.col-xl-3.mb-3
        .bg-contenido-a20.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3
              figure
                img.imgw-60(src="@/assets/curso/tema6/20.svg", alt="" data-aos="zoom-in-down")
            .col-9
              p.mb-0 Coherencia en escalas. 
      .col-sm-6.col-lg-5.col-xl-3.mb-3
        .bg-contenido-a20.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3
              figure
                img.imgw-60(src="@/assets/curso/tema6/21.svg", alt="" data-aos="zoom-in-down")
            .col-9
              p.mb-0 Claridad en periodos comparativos. 
      .col-sm-6.col-lg-5.col-xl-3.mb-3
        .bg-contenido-a20.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3
              figure
                img.imgw-60(src="@/assets/curso/tema6/22.svg", alt="" data-aos="zoom-in-down")
            .col-9
              p.mb-0 Precisión en interpretación. 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/23.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La visualización estratégica no consiste en producir gráficos atractivos, sino en facilitar comprensión significativa. Cuando se diseña con criterio analítico, se convierte en un instrumento que conecta información con acción. 
        .bg-contenido-a10.p-4.rounded-4.py-3.z-2
          p.mb-0 En entornos digitales dinámicos, la rapidez con la que se interpreta un indicador puede definir la diferencia entre reaccionar tarde o anticiparse al cambio. Por ello, integrar visualización, seguimiento y narrativa analítica es fundamental para consolidar una gestión basada en evidencia.  

    p.mb-5.z-2 Este es un ejemplo de introducción para un informe estratégico que analiza el desempeño digital de Nativa Verde S.A.S. durante el segundo trimestre de 2026 en el contexto colombiano. Se muestran indicadores clave, comportamiento del cliente y eficiencia del embudo digital para ilustrar cómo identificar oportunidades de optimización. El objetivo es ejemplificar cómo presentar hallazgos que fundamenten decisiones estratégicas orientadas a mejorar la rentabilidad y el retorno de inversión en canales digitales: 

    .row.justify-content-center.z-2
      .col-xl-10
        .tarjeta.bg-secundario-s5.p-4.py-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure.position-relative
                img.position-custom(src="@/assets/curso/tema1/31.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Análisis de desempeño digital – Nativa Verde 
                  p.mb-0 A manera de informe estratégico, se presenta indicadores clave, comportamiento del cliente y eficiencia del embudo digital para ilustrar cómo identificar oportunidades de optimización de Nativa Verde S.A.S.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Analisis-desempeño.pdf')" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download















</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
