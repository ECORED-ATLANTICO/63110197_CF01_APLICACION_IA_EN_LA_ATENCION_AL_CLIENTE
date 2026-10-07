<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis y decisiones 

    img(src="@/assets/curso/tema5/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 La interpretación de resultados constituye la fase crítica del proceso analítico, ya que es el punto donde los datos dejan de ser cifras aisladas y se convierten en conocimiento estratégico. En el contexto digital, las organizaciones generan grandes volúmenes de información: tráfico web, tasas de conversión, costos de adquisición, comportamiento del usuario, interacción en redes sociales y rendimiento publicitario. Sin embargo, el valor no reside en la acumulación de datos, sino en su comprensión profunda y contextualizada. 
    
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Interpretación de resultados 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-7
        p Interpretar implica responder preguntas fundamentales: ¿qué está ocurriendo?, ¿por qué está ocurriendo?, ¿qué consecuencias tiene para la estrategia?, y ¿qué decisiones se derivan de esta información? Este proceso requiere pensamiento crítico, comprensión del modelo de negocio y capacidad de relacionar variables aparentemente independientes. 
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Por ejemplo, una disminución en la tasa de conversión no puede analizarse de manera aislada. Puede estar asociada a múltiples factores: cambios en la segmentación del público, modificación en el mensaje publicitario, problemas técnicos en la plataforma o incluso factores externos como variaciones estacionales. El análisis riguroso exige contrastar datos históricos, revisar métricas complementarias y comprender el contexto competitivo. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/2.png", alt="")
    
    p.mb-4.z-2 Desde una perspectiva metodológica, la interpretación estratégica se apoya en distintos niveles de análisis: 

    .fullwidth-bg.fullwidth-bg--2
    .bg-slider.bg-slider--xl.p-4.z-2.rounded-1.mb-4.mb-lg-5
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Análisis descriptivo 
              p Describe qué ocurrió mediante datos históricos, identificando comportamientos, resultados y tendencias. 
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una tienda virtual analiza las ventas mensuales y determina qué productos fueron los más comprados por sus clientes. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema5/3.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Análisis diagnóstico 
              p Explica por qué ocurrió una situación, relacionando datos para identificar causas y factores asociados.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa analiza reclamos y descubre que el aumento de quejas se relaciona con retrasos en las entregas. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema5/4.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Análisis predictivo 
              p Estima qué podría ocurrir utilizando datos históricos, patrones y modelos analíticos.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una plataforma de comercio electrónico anticipa qué clientes tienen mayor probabilidad de realizar una nueva compra según su comportamiento previo. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema5/5.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Análisis prescriptivo 
              p Recomienda qué acciones realizar a partir de datos, predicciones y alternativas disponibles para alcanzar mejores resultados.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] un sistema recomienda ofrecer un descuento personalizado a clientes con alta probabilidad de abandonar una compra. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema5/6.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Estos niveles no son independientes; forman un proceso progresivo que fortalece la toma de decisiones. Una organización que se limita al análisis descriptivo permanece en un nivel operativo. En cambio, cuando integra análisis predictivo y prescriptivo, evoluciona hacia un enfoque estratégico y prospectivo. 
        .bg-terciario-t10.p-4.rounded-4.py-3
          p.mb-0 Además, la interpretación efectiva requiere reconocer patrones y anomalías. Las tendencias sostenidas indican comportamientos estructurales del mercado, mientras que las variaciones abruptas pueden revelar problemas críticos o nuevas oportunidades. En este sentido, la interpretación se convierte en una herramienta de anticipación estratégica. 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-7
        p Asimismo, la interpretación estratégica exige alineación con los objetivos organizacionales. No todas las métricas tienen el mismo peso. En una empresa enfocada en crecimiento, el volumen de adquisición puede priorizarse sobre la rentabilidad inmediata. En cambio, en una organización orientada a consolidación financiera, el ROI y el margen operativo serán prioritarios. 
        .bg-secundario-s5.p-4.rounded-4.py-3
          p.mb-0 En consecuencia, interpretar resultados no es un acto técnico aislado, sino un proceso gerencial que conecta datos con visión empresarial.
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/8.png", alt="")
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Decisiones basadas en datos 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La toma de decisiones basada en datos representa un cambio paradigmático en la gestión empresarial contemporánea. Tradicionalmente, las decisiones estratégicas dependían en gran medida de la experiencia y la intuición directiva. Si bien estos elementos siguen siendo valiosos, el entorno digital exige respaldo cuantitativo para minimizar incertidumbre y riesgo. 
        .bg-terciario-t10.p-4.rounded-4.py-3
          p.mb-0 Decidir con base en datos implica integrar análisis estadístico, comprensión del mercado y evaluación de escenarios. El proceso no consiste simplemente en observar indicadores, sino en transformarlos en criterios objetivos que orienten la acción. 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-7
        p Cuando una organización detecta un aumento en el costo de adquisición de clientes (CAC), por ejemplo, no debe reaccionar de manera impulsiva reduciendo inversión. Debe analizar variables asociadas: competencia publicitaria, segmentación, calidad del contenido, comportamiento del usuario y tasa de conversión. 
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Solo a partir de este análisis integral puede determinar si la solución requiere optimización del embudo de ventas, ajuste presupuestario o rediseño estratégico. Desde una perspectiva estructural, la toma de decisiones basada en datos sigue un ciclo continuo: 
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/10.png", alt="")

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 5.
      span Toma de decisiones basada en datos
    img.mb-4.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema5/11-mob.png", alt="La figura representa un ciclo continuo para orientar la toma de decisiones basada en datos. El proceso inicia con la identificación de una situación, continúa con la obtención y análisis de información, la comparación de posibles alternativas y la ejecución de la decisión seleccionada. Finalmente, incorpora el seguimiento de los resultados para generar aprendizajes y realizar ajustes. En conjunto, muestra cómo los datos apoyan decisiones más estructuradas, justificadas y orientadas a la mejora continua")
    img.mb-4.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema5/11.png", alt="La figura representa un ciclo continuo para orientar la toma de decisiones basada en datos. El proceso inicia con la identificación de una situación, continúa con la obtención y análisis de información, la comparación de posibles alternativas y la ejecución de la decisión seleccionada. Finalmente, incorpora el seguimiento de los resultados para generar aprendizajes y realizar ajustes. En conjunto, muestra cómo los datos apoyan decisiones más estructuradas, justificadas y orientadas a la mejora continua")
          
    p.mb-4.z-2 Este ciclo transforma la gestión en un proceso dinámico y adaptable. 

    .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.z-2
      p.mb-0 Un componente fundamental es la cultura organizacional orientada a datos. La verdadera transformación ocurre cuando el análisis no depende únicamente de un área técnica, sino que permea todos los niveles jerárquicos. En una cultura #[em data-driven]:

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-sm-6.col-xl-5.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema5/12.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Las decisiones estratégicas se sustentan en indicadores. 
      .col-sm-6.col-xl-5.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema5/13.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Los equipos revisan métricas periódicamente. 
      .col-sm-6.col-xl-5.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema5/14.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Se fomenta la alfabetización digital. 
      .col-sm-6.col-xl-5.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema5/15.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Los errores se corrigen con base en evidencia. 
 
    .bg-contenido-a10.p-4.rounded-4.py-3.mb-4.z-2
      p.mb-0.text-center Esta cultura reduce la subjetividad y fortalece la competitividad. 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-5
        p En términos financieros, las organizaciones que adoptan decisiones basadas en datos suelen presentar mejoras en rentabilidad, optimización presupuestaria y eficiencia operativa. La capacidad de identificar oportunidades tempranas y anticipar riesgos proporciona ventajas sostenibles en mercados altamente dinámicos. 
        .bg-terciario.rounded-4.p-4.py-3.mb-4.mb-lg-0
          p.mb-0 Finalmente, es importante comprender que los datos no sustituyen el liderazgo, sino que lo fortalecen. La dirección estratégica requiere interpretación humana, criterio ético y visión de largo plazo. Los datos orientan; los líderes deciden. 
      .col-lg-7
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-8.col-sm-3
              figure
                img.imgw-95.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-9
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3(
                texto="“Charlas que venden” tema: “Decisiones y rentabilidad digital”."
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
