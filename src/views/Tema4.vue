<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Rentabilidad digital 

    img(src="@/assets/curso/tema4/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 La rentabilidad digital es uno de los objetivos centrales de cualquier estrategia basada en datos. No basta con generar tráfico o interacción; es fundamental que esas acciones se traduzcan en resultados económicos sostenibles. 

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Conversión y adquisición 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La conversión ocurre cuando un usuario realiza una acción específica que genera valor para la empresa. Esta acción puede ser comprar un producto, registrarse en un formulario, descargar un recurso digital o suscribirse a un servicio. La conversión es el paso final del proceso digital y representa el cumplimiento del objetivo estratégico. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p #[strong Concepto de adquisición de clientes]. La adquisición de clientes se refiere al proceso mediante el cual una empresa atrae y convierte nuevos usuarios en clientes reales. Implica inversión en marketing digital, publicidad, contenido, automatización y estrategias comerciales. 
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-6
              p.mb-4.mb-lg-0 Uno de los indicadores más importantes en este proceso es el Costo de Adquisición de Cliente (CAC). 
            .col-sm-10.col-lg-6
              figure
                img(src="@/assets/curso/tema4/4.svg", alt="")

      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/3.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Esto tiene una importancia estratégica pues permite evaluar la eficiencia de las campañas digitales, facilita la comparación entre diferentes canales de adquisición, también ayuda a identificar segmentos más rentables y permite optimizar presupuestos de marketing. 
        .bg-terciario-t10.p-4.rounded-4.py-3
          p.mb-0 A continuación, se presentan los principales indicadores clave utilizados para medir la conversión y adquisición de clientes, junto con su definición, cálculo y relevancia estratégica. 
    
    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Indicadores clave en conversión y adquisición
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-2
          table
            thead
              tr(style="background-color: #F3F6FE")
                th Indicador 
                th Definición 
                th Fórmula 
                th Ejemplo práctico 
                th Valor estratégico 
            tbody
              tr(style="background-color: #E8EFFE")
                td #[strong Tasa de conversión.] 
                td % de usuarios que realizan acción deseada 
                td (Conversiones / Visitantes) x 100 
                td 8 % de visitantes compran 
                td Medir efectividad del sitio. 
              tr
                td #[strong CAC.] 
                td Costo de adquirir un cliente. 
                td Inversión / Nuevos clientes 
                td $ 5.000 / 250 clientes = $ 20 
                td Evaluar eficiencia de inversión. 
              tr(style="background-color: #E8EFFE")
                td #[strong CPA.] 
                td Costo por acción 
                td Inversión / Acciones 
                td $ 2.000 / 400 leads. 
                td Medir rentabilidad de campañas. 
              tr
                td #[strong CLV.] 
                td Valor total que un cliente genera durante su relación con la empresa 
                td Ingresos promedio x tiempo de relación 
                td Cliente genera $ 300 en 2 años 
                td Determinar rentabilidad a largo plazo 
        figcaption Nota. Adaptada de Chunir Panjon et al., (2024). 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .bg-img.bg-img--5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              p.mb-4.mb-lg-0.ps-xl-3 Ejemplo práctico. Una empresa invierte $10,000 en campañas digitales durante un mes y obtiene 400 nuevos clientes. 
            .col-sm-9.col-lg-4
              figure
                img(src="@/assets/curso/tema4/7.svg", alt="")
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-110(src="@/assets/curso/tema4/8.png", alt="")
    
    p.mb-0 El costo de adquisición por cliente es de $ 25. Si el valor promedio de compra es $ 120, la estrategia es rentable, pero aún puede optimizarse reduciendo costos o aumentando conversión.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 ROI y optimización 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La rentabilidad digital es uno de los objetivos centrales de cualquier estrategia basada en datos. No basta con generar tráfico o interacción; es fundamental que esas acciones se traduzcan en resultados económicos sostenibles. 
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Medir la rentabilidad implica analizar cómo los esfuerzos de marketing, ventas y experiencia digital contribuyen a generar ingresos, optimizar costos y maximizar el retorno de inversión (ROI). 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/9.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-8
        .bg-terciario-t5.p-4.rounded-4.mb-3.mb-lg-0
          p.mb-0 El retorno sobre la inversión (ROI) mide la rentabilidad de una acción o campaña digital. Permite determinar si los ingresos generados superan la inversión realizada. 
      .col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/tema4/10.svg", alt="")

    .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.z-2
      p.mb-0.text-center La interpretación del ROI se da de la siguiente manera: 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-9.col-lg-6.col-xl-4
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/11.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong ROI positivo]: cuando la estrategia genera ganancias. 
      .col-sm-9.col-lg-6.col-xl-4
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/12.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong ROI negativo]: cuando la inversión no está generando beneficios. 
      .col-sm-9.col-lg-6.col-xl-4
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/13.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong ROI alto]: cuando la estrategia es eficiente y rentable. 

    .row.justify-content-center.z-2.mb-4
      .col-lg-10.col-xl-8
        .bg-img.bg-img--6.p-4.rounded-4.py-3.py-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              p.mb-4.mb-lg-0 #[strong Ejemplo práctico]: una campaña publicitaria genera $ 15,000 en ventas con una inversión de $ 5,000.
            .col-sm-8.col-lg-6
              figure
                img(src="@/assets/curso/tema4/19.svg", alt="")
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-110(src="@/assets/curso/tema4/8.png", alt="")

    .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.z-2
      p.mb-0.text-center Esto significa que por cada dólar invertido se generaron dos dólares adicionales de ganancia. 

    p.mb-4.z-2 La optimización implica mejorar continuamente los resultados mediante: 

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/14.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Pruebas A/B en páginas de aterrizaje. 
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/15.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Mejora de experiencia de usuario (UX). 
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/16.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Ajuste de segmentación de campañas. 
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/17.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Automatización de procesos de #[em marketing].    
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema4/18.svg", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Análisis de métricas en tiempo real. 

    .fullwidth-bg.fullwidth-bg--2
    .bg-terciario-t10.p-4.rounded-4.py-3.mb-4.z-2
      p.mb-0.text-center En la siguiente tabla se presentan estrategias clave de optimización digital, su impacto esperado y ejemplos prácticos de aplicación.

    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Estrategias de optimización y su impacto 
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-2
          table
            thead
              tr(style="background-color: #F3F6FE")
                th Estrategia 
                th Descripción 
                th Impacto esperado 
                th Ejemplo práctico 
            tbody
              tr(style="background-color: #E8EFFE")
                td #[strong Pruebas A/B.] 
                td Comparación de dos versiones de una página 
                td Aumento de conversión 
                td Cambio de botón rojo a verde mejora 5 % conversiones. 
              tr
                td #[strong Segmentación avanzada.] 
                td Ajuste de públicos objetivos 
                td Reducción de CAC 
                td Enfocar anuncios en clientes recurrentes 

              tr(style="background-color: #E8EFFE")
                td #[strong Mejora UX.] 
                td Optimización de navegación y velocidad 
                td Disminución de rebote 
                td Reducir tiempo de carga a 2 segundos. 
              tr
                td #[strong Automatización]
                td Uso de herramientas CRM y #[em email marketing] 
                td Mayor eficiencia y retención 
                td #[em Emails] automatizados post-compra 
        figcaption Nota. Adaptada de Chunir Panjon et al., (2024). 

    p.mb-4.z-2 Relación entre CAC, CLV y ROI para que una estrategia sea sostenible: CLV > CAC, es decir, el valor que genera un cliente durante su vida útil debe ser mayor que el costo de adquirirlo. Esta relación permite determinar si el modelo de negocio es rentable a largo plazo. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-6
        .bg-img.bg-img--4.p-4.p-xl-5.rounded-4.mb-4.mb-lg-0
          p.mb-4 #[strong Ejemplo integral]. Una empresa digital presenta los siguientes datos: 
          .row.justify-content-center.align-items-center
            .col-xl-9
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  | Inversión mensual en #[em marketing]: $ 8.000. 
                li.mb-0
                  i.lista-ul__vineta
                  | Nuevos clientes: 320.  
                li.mb-0
                  i.lista-ul__vineta
                  | CAC: $ 25. 
                li.mb-0
                  i.lista-ul__vineta
                  | Ingreso promedio por cliente: $ 150. 
                li.mb-0
                  i.lista-ul__vineta
                  | ROI mensual: 180 %.  
            .col-lg-3.d-none.d-xl-block
              figure
                img(src="@/assets/curso/tema2/3.png", alt="")
      .col-lg-6
        p Al mejorar la segmentación y optimizar la página web, la empresa reduce el CAC a $ 20 y aumenta la conversión al 10 %, incrementando la rentabilidad general sin aumentar la inversión. 
        .tarjeta.bg-secundario-s5.p-4.py-3
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Métricas de publicidad digital
              p.mb-0 Puede consultar el siguiente recurso en YouTube para reforzar los conceptos abordados y ampliar su comprensión mediante ejemplos prácticos aplicados al tema: 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=k2lL8JMg98E" target="_blank")
                span Ir al recurso
                i.fas.fa-file-download









</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
