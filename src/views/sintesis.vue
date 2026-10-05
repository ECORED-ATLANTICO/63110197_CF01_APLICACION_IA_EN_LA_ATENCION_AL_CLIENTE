<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo IA, datos y cliente digital aborda los datos estratégicos, su valor, fuentes digitales, ciclo y gestión; continúa con el estudio del cliente digital desde el perfil, comportamiento, segmentación y experiencia; desarrolla las métricas web, incluyendo métricas e indicadores (KPI), tráfico y conversión; analiza la rentabilidad digital a partir de la conversión, adquisición, ROI y optimización; profundiza en el análisis y las decisiones mediante la interpretación de resultados y la toma de decisiones basadas en datos; y finaliza con la visualización a través de tableros de control y reportes estratégicos.
    
    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="La figura presenta la estructura temática del componente formativo IA, datos y cliente digital, integrando aspectos relacionados con el aprovechamiento de datos, conocimiento del cliente, medición del desempeño digital, rentabilidad, análisis para la toma de decisiones y visualización de información. En conjunto, muestra cómo estos elementos se articulan para comprender el comportamiento del cliente, evaluar resultados y utilizar información relevante para orientar decisiones y fortalecer los procesos de atención en entornos digitales. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
