<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El componente formativo IA, datos y cliente digital aborda el estudio de los datos como activo estratégico y la comprensión del cliente en entornos digitales. En un contexto donde las decisiones ya no pueden basarse solo en la intuición, el análisis de información se convierte en una competencia fundamental para las organizaciones.
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 Su importancia radica en que permite interpretar comportamientos, medir resultados, evaluar rentabilidad y tomar decisiones más seguras y efectivas. Comprender al cliente digital y analizar métricas reales fortalece la competitividad, mejora la experiencia del usuario y optimiza los recursos de la empresa.
            .col-lg-2
              figure
                img.imgw-78(src="@/assets/curso/intro-2.png", alt="" data-aos="zoom-in-down")
        p.mb-0 El tema se abordará de manera progresiva, iniciando con los datos estratégicos y su gestión, continuando con el estudio del cliente digital y las métricas web, para luego analizar la rentabilidad, la toma de decisiones basadas en datos y finalizar con la visualización mediante tableros de control y reportes estratégicos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
