<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cliente digital
    
    img(src="@/assets/curso/tema2/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-contenido-a10
          p.mb-0 El cliente digital se ha convertido en el eje central de las estrategias empresariales. Las marcas ya no pueden asumir que todos los clientes son iguales; cada usuario interactúa con la empresa de forma única, utilizando múltiples canales digitales: aplicaciones móviles, redes sociales, correos electrónicos, sitios web y #[em marketplaces].

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Perfil y comportamiento

    p.mb-5.z-2 El perfil del cliente digital representa un conjunto de características, intereses y patrones de comportamiento que permiten a la organización conocer a sus usuarios y anticipar sus decisiones. Se construye mediante la recopilación de datos de múltiples fuentes, combinando información demográfica, psicográfica, conductual y tecnológica. 

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 2.
      span Criterios de segmentación digital
    img.mb-5.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema2/2-mob.png", alt="La figura presenta diferentes criterios utilizados para segmentar a los clientes en entornos digitales. La información permite identificar y agrupar públicos de acuerdo con sus características personales, ubicación, intereses, comportamientos de compra y preferencias tecnológicas. Esta clasificación facilita a las organizaciones comprender mejor a sus clientes, reconocer necesidades y hábitos, personalizar las interacciones y orientar estrategias de atención, comunicación y servicio apoyadas en datos relevantes")
    img.mb-5.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema2/2.png", alt="La figura presenta diferentes criterios utilizados para segmentar a los clientes en entornos digitales. La información permite identificar y agrupar públicos de acuerdo con sus características personales, ubicación, intereses, comportamientos de compra y preferencias tecnológicas. Esta clasificación facilita a las organizaciones comprender mejor a sus clientes, reconocer necesidades y hábitos, personalizar las interacciones y orientar estrategias de atención, comunicación y servicio apoyadas en datos relevantes")

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .bg-img.bg-img--2.p-4.rounded-4.py-3.py-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 #[strong Ejemplo práctico]: una empresa de servicios financieros observa que los clientes jóvenes (18 - 30 años) prefieren interactuar con la app móvil para consultar saldos y realizar transferencias, mientras que los adultos mayores (45 - 60 años) prefieren la banca web en escritorio y contacto telefónico para resolver consultas. Esta información permite diseñar experiencias diferenciadas para cada segmento.   
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-110(src="@/assets/curso/tema2/3.png", alt="")

    .titulo-con-imagen.mb-4.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Importancia del comportamiento digital 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p Analizar el comportamiento digital permite anticiparse a las decisiones del cliente, identificar segmentos con mayor potencial de compra y diseñar estrategias personalizadas. Los insights obtenidos también ayudan a prevenir abandono de clientes, mejorar tasas de conversión y optimizar la inversión en marketing. 
        .bg-img.bg-img--3.p-4.rounded-4.py-3.py-lg-4
          .row.justify-content-center.align-items-center
            .col-xl-10
              p.mb-0 #[strong Ejemplo ampliado:] Una plataforma de e-learning analiza las interacciones de sus usuarios y detecta que los estudiantes que completan un curso en el primer intento tienden a inscribirse en más cursos. La plataforma decide enviar recomendaciones personalizadas y promociones a estos usuarios, aumentando la retención y las ventas de cursos adicionales.  
            .col-lg-2.d-none.d-xl-block
              figure
                img.imgw-110(src="@/assets/curso/tema2/3.png", alt="")
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Segmentación y experiencia 

    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La segmentación digital permite dividir el mercado en grupos específicos de usuarios con características y comportamientos similares. Aplicar criterios adecuados facilita la personalización de estrategias, optimizando recursos y aumentando la efectividad de las campañas digitales. A partir del perfil identificado, se aplican los siguientes criterios: 

    .bg-primario-p5.p-4.rounded-4.mb-4.mb-lg-5.z-2
      p.mb-0 En cuanto a la Experiencia del cliente digital (CX digital) es la percepción que el usuario tiene al interactuar con la marca. Una experiencia satisfactoria se logra mediante: 

    .bg-slider.bg-slider--xl.p-4.z-2.rounded-1.mb-4.mb-lg-5
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Personalización
              p Adapta contenidos, recomendaciones, ofertas y formas de atención según las características, preferencias, comportamientos e historial del cliente, utilizando datos relevantes para ofrecer una experiencia más pertinente y cercana. 
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una tienda virtual recomienda productos según las compras y búsquedas realizadas previamente por el cliente. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema2/6.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Usabilidad
              p Facilita que el cliente utilice sitios web, aplicaciones y otros canales digitales de manera sencilla, intuitiva y eficiente, reduciendo dificultades durante la búsqueda de información, compra o solicitud de atención. 
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una aplicación permite consultar un pedido y solicitar soporte mediante opciones claras y fáciles de localizar. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema2/7.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Omnicanalidad
              p Integra los diferentes canales de comunicación y atención para mantener la continuidad de la información y permitir que el cliente avance en su interacción sin tener que iniciar nuevamente el proceso. 
              p.mb-4.mb-lg-0 #[strong Ejemplo:] un cliente inicia una consulta por chat y posteriormente continúa por teléfono sin repetir la información suministrada. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema2/8.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Soporte eficiente 
              p Proporciona respuestas oportunas y soluciones adecuadas a las necesidades del cliente mediante la articulación de personas, canales y herramientas tecnológicas, incluyendo soluciones de inteligencia artificial cuando resulten pertinentes. 
              p.mb-4.mb-lg-0 #[strong Ejemplo:] un asistente virtual resuelve una consulta frecuente y deriva al asesor los casos que requieren atención especializada. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema2/9.png", alt="")

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .bg-img.bg-img--2.p-4.rounded-4.py-3.py-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 #[strong Ejemplo práctico]: una tienda de retail online identifica que los usuarios que agregan productos a la cesta, pero no completan la compra suelen abandonar por .col-sm-8falta de información sobre envío y devoluciones. Al mostrar avisos claros de políticas y tiempo de entrega, la tienda aumenta la conversión en un 12%.  
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-110(src="@/assets/curso/tema2/3.png", alt="")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
