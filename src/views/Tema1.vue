<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Datos estratégicos

    img(src="@/assets/curso/tema1/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-contenido-a10.mb-3
          p.mb-0 En la economía digital actual, los datos se consideran uno de los activos más valiosos de cualquier organización. La capacidad de recopilar, interpretar y aplicar información de manera estratégica determina la ventaja competitiva de las empresas. 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p La gestión de datos no se limita a almacenarlos, sino que requiere un enfoque integral que permita su transformación en conocimiento accionable, capaz de mejorar procesos, optimizar recursos, aumentar la satisfacción del cliente y generar nuevas oportunidades de negocio. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 Esta unidad proporciona los fundamentos necesarios para comprender el valor de los datos y sus fuentes digitales, así como las mejores prácticas para su gestión a lo largo de todo su ciclo de vida. Se abordarán conceptos, tipos de datos, herramientas digitales, análisis de ejemplos reales y la forma en que las empresas aplican los datos estratégicos para tomar decisiones fundamentadas.   
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Valor y fuentes digitales

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los datos estratégicos son aquellos que poseen un valor real para la toma de decisiones y la planificación de estrategias empresariales. Su relevancia se mide no por la cantidad, sino por la calidad, relevancia y capacidad de transformación en información útil. Un dato aislado tiene poco valor; sin embargo, cuando se organiza, se analiza y se cruza con otras fuentes, se convierte en un activo estratégico, capaz de generar insights y orientar la estrategia corporativa.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Importancia en la toma de decisiones

    p.mb-5.z-2 A continuación, se relaciona los elementos que hacen parte de los datos estratégicos 

    .fullwidth-bg.fullwidth-bg--1
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 1.
      span Datos estratégicos 
    img.mb-4.mb-lg-5.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema1/4-mob.png", alt="La figura muestra cómo el uso estratégico de los datos contribuye a la toma de decisiones y a la generación de valor en las organizaciones. Mediante diferentes situaciones empresariales, muestra su utilidad para comprender el comportamiento del cliente, mejorar procesos internos, analizar resultados y orientar la innovación. En conjunto, evidencia cómo la información actualizada y confiable puede apoyar la eficiencia, la adaptación de productos y servicios y el fortalecimiento de la experiencia del cliente.")
    img.mb-4.mb-lg-5.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema1/4.png", alt="La figura muestra cómo el uso estratégico de los datos contribuye a la toma de decisiones y a la generación de valor en las organizaciones. Mediante diferentes situaciones empresariales, muestra su utilidad para comprender el comportamiento del cliente, mejorar procesos internos, analizar resultados y orientar la innovación. En conjunto, evidencia cómo la información actualizada y confiable puede apoyar la eficiencia, la adaptación de productos y servicios y el fortalecimiento de la experiencia del cliente.")

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .bg-img.p-4.rounded-4.py-3.py-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 #[strong Ejemplo práctico]: una empresa de retail analiza los datos de navegación y compra de sus clientes durante tres meses. Identifica que los productos de tecnología tienen un pico de demanda durante los fines de semana, mientras que la ropa se vende más en días de semana. Con este insight, la empresa puede ajustar promociones, inventario y estrategias de envío para cada categoría, aumentando ventas y reduciendo costos logísticos. 
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-110(src="@/assets/curso/tema1/5.png", alt="")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Tipos de datos digitales 

    .bg-terciario.rounded-4.p-4.py-3.mb-4.mb-lg-5.z-2
      .row.justify-content-center.align-items-center
        .col-lg-10
          h5 Datos internos
          p.mb-0 Son aquellos generados y administrados por la propia organización. Constituyen la principal fuente de información para analizar el desempeño empresarial, conocer al cliente y apoyar la toma de decisiones. Entre las fuentes de información de datos internos tenemos: 
        .col-lg-2.d-none.d-lg-block
          figure
            img.imgw-85(src="@/assets/curso/tema1/6.png", alt="")

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-xl-8
        TabsA.color-acento-botones.custom-tabs.mb-4.mb-lg-0
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="CRM <em>(Customer Relationship Management)</em>: ")
            p.mb-0 Almacena información de clientes, historial de compras, preferencias y solicitudes de servicio. Estos datos permiten segmentar clientes, personalizar promociones y fortalecer las estrategias de fidelización. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="ERP <em>(Enterprise Resource Planning)</em>: ")
            p.mb-0 Integra información sobre inventarios, órdenes de compra, facturación y pagos. Su análisis facilita la planificación de la producción, el control de existencias y la optimización de los recursos 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Datos operativos y financieros: ")
            p.mb-0 Incluyen costos, gastos, ingresos y balances. Son utilizados para evaluar el desempeño financiero, controlar recursos y apoyar la planeación estratégica de la organización.  
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Interacciones de atención al cliente: ")
            p.mb-0 Comprenden correos electrónicos, chats, llamadas y tickets de soporte. Su análisis permite identificar oportunidades de mejora, optimizar los procesos de atención y aumentar la satisfacción del cliente. 
      .col-sm-6.col-lg-4.d-none.d-xl-block
        figure
          img(src="@/assets/curso/tema1/7.png", alt="" data-aos="zoom-in-down")

    .bg-contenido-a10.rounded-4.p-4.py-3.mb-4.z-2
      .row.justify-content-center.align-items-center
        .col-lg-2.d-none.d-lg-block
          figure
            img.imgw-122(src="@/assets/curso/tema1/8.png", alt="")
        .col-lg-10
          h5 Datos externos
          p.mb-0 Son aquellos obtenidos de fuentes ajenas a la organización y complementan la información interna, proporcionando una visión más amplia del mercado, los consumidores y el entorno competitivo. Entre los más representativos tenemos: 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider.p-4.z-2.rounded-1
          SlyderA(tipo="b")
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Redes sociales 
              p.mb-0 Recopilan comentarios, reacciones, menciones e indicadores de interacción (#[em engagement]). Esta información permite evaluar la reputación de la marca, conocer la percepción de los clientes e identificar tendencias de comportamiento. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Estudios de mercado 
              p.mb-0 Incluyen encuestas, investigaciones sectoriales y reportes especializados. Su análisis facilita el benchmarking, la identificación de oportunidades y el diseño de estrategias comerciales. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Datos gubernamentales 
              p.mb-0 Comprenden estadísticas demográficas, indicadores económicos y normatividad vigente. Estos datos apoyan la planeación de inversiones, el análisis del entorno y la toma de decisiones estratégicas. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Información de competidores 
              p.mb-0 Corresponde a precios, promociones, campañas comerciales y acciones públicas del mercado. Su seguimiento permite comparar el desempeño de la organización, identificar oportunidades de mejora y fortalecer el posicionamiento competitivo. 
      
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Valor de los datos

    p.mb-4 El valor de los datos digitales se mide por su capacidad para generar información confiable, relevante y accionable. Los datos de alta calidad permiten:

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-9.col-lg-6.col-xl-5
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-57.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Predicciones precisas sobre comportamiento del cliente.
      .col-sm-9.col-lg-6.col-xl-5
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-57.mb-4.mb-lg-0(src="@/assets/curso/tema1/11.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Segmentación efectiva para campañas de #[em marketing] personalizadas.
      .col-sm-9.col-lg-6.col-xl-5
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-57.mb-4.mb-lg-0(src="@/assets/curso/tema1/12.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Medición del impacto de estrategias y ajustes de negocio. 
      .col-sm-9.col-lg-6.col-xl-5
        .bg-contenido-a10.rounded-4.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-57.mb-4.mb-lg-0(src="@/assets/curso/tema1/13.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Toma de decisiones fundamentadas, minimizando riesgos e incertidumbre. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-img.p-4.rounded-4.py-3.py-lg-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 #[strong Ejemplo práctico]: una tienda de cosméticos utiliza análisis de datos de clientes para identificar que un grupo de usuarios de 25 a 35 años compra principalmente productos veganos. Al crear promociones dirigidas a este segmento, la tienda logra incrementar las ventas en un 18 % en dos meses, demostrando el valor estratégico del dato bien interpretado.
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-70(src="@/assets/curso/tema1/14.png", alt="")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Ciclo y gestión del dato

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez comprendido el valor y las fuentes de los datos, es esencial conocer cómo se gestionan a lo largo de su ciclo de vida. Un manejo adecuado asegura que los datos sean confiables, seguros y útiles para la toma de decisiones estratégicas. 
    
    .fullwidth-bg.fullwidth-bg--1
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Ciclo de vida del dato 

    .rounded-4.p-4.py-3.mb-4.z-2.bg-primario-p5
      p.mb-0.text-center El ciclo de vida del dato incluye cinco etapas fundamentales: 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/16.svg' alt='')
            h5.text-center Recopilación
            p.mb-0.text-center Consiste en obtener datos relevantes desde diferentes fuentes, como interacciones con clientes, formularios, redes sociales, canales digitales, sistemas empresariales y transacciones, procurando que sean pertinentes para los objetivos establecidos. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/16.svg' alt='')
            h5.text-center Almacenamiento
            p.mb-0.text-center Organiza y conserva los datos en sistemas, bases de datos o plataformas tecnológicas que facilitan su disponibilidad, consulta y protección, aplicando condiciones adecuadas de seguridad, acceso y conservación. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/16.svg' alt='')
            h5.text-center Análisis
            p.mb-0.text-center Examina e interpreta los datos mediante técnicas y herramientas que permiten identificar patrones, tendencias, relaciones y comportamientos, transformándolos en información útil para apoyar decisiones y mejorar la atención al cliente. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/16.svg' alt='')
            h5.text-center Explotación
            p.mb-0.text-center Utiliza los datos analizados para generar conocimiento, apoyar decisiones, personalizar la atención, anticipar necesidades y alimentar soluciones de inteligencia artificial que contribuyan a mejorar los procesos y la experiencia del cliente. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/16.svg' alt='')
            h5.text-center Depuración
            p.mb-0.text-center Revisa y corrige los datos recopilados para identificar registros duplicados, incompletos, incorrectos o inconsistentes, mejorando su calidad y confiabilidad antes de utilizarlos en análisis, decisiones o soluciones basadas en inteligencia artificial. 
      .col-lg-4.d-none.d-lg-block
        figure
          img.imgw-324(src='@/assets/curso/tema1/21.png', alt='')

    img(src="@/assets/curso/tema1/22.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10.mb-3
          p.mb-0 La captura de pantalla de la página principal de Google Cloud en español presenta el mensaje “La nueva forma de usar la nube comienza aquí”. La interfaz muestra opciones para comenzar gratis o contactar ventas, junto a un video destacado sobre inteligencia artificial y plataforma #[em multicloud]. La página resalta servicios de computación en la nube orientados a la creación de aplicaciones, análisis de datos y seguridad empresarial. 

    .fullwidth-bg.fullwidth-bg--1
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Buenas prácticas de gestión

    .rounded-4.p-4.py-3.mb-4.z-2.bg-primario-p5
      p.mb-0 Una gestión adecuada de los datos permite a las empresas tomar mejores decisiones, optimizar sus procesos y convertir la información en oportunidades de crecimiento.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-9.col-lg-6.col-xl-5.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-50.mb-4.mb-lg-0(src="@/assets/curso/tema1/23.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Mantener exactitud y consistencia en todos los registros. 
      .col-sm-9.col-lg-6.col-xl-5.mb-3
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-50.mb-4.mb-lg-0(src="@/assets/curso/tema1/24.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Proteger la seguridad y privacidad de la información. 
      .col-sm-9.col-lg-6.col-xl-5.mb-3.mb-lg-0
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-50.mb-4.mb-lg-0(src="@/assets/curso/tema1/25.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Actualizar constantemente los datos para reflejar la realidad de la operación.  
      .col-sm-9.col-lg-6.col-xl-5
        .bg-contenido-a10.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2
              figure
                img.imgw-50.mb-4.mb-lg-0(src="@/assets/curso/tema1/26.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p.mb-0 Utilizar herramientas que permitan automatizar procesos de análisis y depuración, reduciendo errores y tiempo de gestión. 

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .bg-img.p-4.rounded-4.py-3.py-lg-4.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 #[strong Ejemplo práctico]: una empresa de #[em e-commerce] recopila datos internos (CRM y ERP) y externos (redes sociales y estadísticas de mercado). Analizando tres meses de información:
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-85(src="@/assets/curso/tema1/27.png", alt="")

    .row.justify-content-center.mb-2
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/28.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-3
            h4.mb-3 Detecta
            p.mb-0 Que ciertos productos tienen alta demanda solo en fines de semana.
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/29.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-3
            h4.mb-3 Identifica
            p.mb-0 Que un segmento específico responde mejor a campañas por correo electrónico.  
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/30.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-3
            h4.mb-3 Depura
            p.mb-0 Registros duplicados de clientes antiguos y actualiza información faltante. 

    .bg-contenido-a20.rounded-4.p-4.py-3.mb-4.mb-lg-5.z-2
      p.mb-0 #[strong Resultado]: la empresa aumenta un 15% la conversión, optimiza el inventario y mejora la eficiencia de sus campañas digitales. Esto demuestra cómo el ciclo completo del dato agrega valor estratégico real. 

    .row.justify-content-center.z-2
      .col-xl-10
        .tarjeta.bg-terciario.p-4.py-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure.position-relative
                img.position-custom(src="@/assets/curso/tema1/31.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Metodologías de trabajo y ciclo de vida de los datos – Data Science
                  p.mb-0 Dar clic en el enlace de este video para continuar con la explicación del ciclo de vida del dato y comprender de manera más amplia cómo se implementa la gestión de datos a lo largo de sus diferentes fases: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=shdBRha_fi4" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
