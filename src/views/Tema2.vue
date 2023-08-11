<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aplicaciones de #[i clustering] de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/44.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La #[b #[i.t1 clusterización]] usando #[b #[i.t1 K-means]] tiene un espectro bastante amplio de aplicaciones muy útiles en todas las ramas de la ciencia, tecnología, salud, transporte, astronomía, industria, educación, etc. 

    .row.justify-content-start.mb-3.pt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/45.svg', alt='')
          .list__txt.bg9.p-0.px-4
            h4.mb-1 Clasificación de documentos  

    p(data-aos="fade-down") Se pueden usar aplicaciones con #[i K-means] para clasificar documentos en múltiples categorías, basadas en temas del texto o documentos, dependiendo del contenido de las cadenas.   

    h5(data-aos="fade-down").mb-5.t1 A continuación, se presenta la clasificación:

    .bg8.p-5
      .bgw.p-4.brad 
        SlyderE(indicadores="derecha")
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Clasificación de textos 
              p.mb-0 Tiene una variedad de aplicaciones; por ejemplo, en salud, sería bastante importante obtener textos útiles de historias clínicas y clasificar pacientes por diagnósticos, procedimientos aplicados, medicamentos formulados, etc. Clasificación de email como spam o no spam, etiquetar automáticamente las consultas de los consumidores, detectar estados de ánimo de usuarios desde un tuit. 
        
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='Ilustración que expone los tipos de clasificación de textos: documentos en bases de datos, documentos con extensión documento, documento web, documento papel. Todos ellos pasan por el clasificador y se instalan en la base de datos.')   
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Detección de defectos de fábrica 
              p.mb-0 Una aplicación de #[i clusterización] con #[i K-means] es la detección de defectos de fábrica, reconociendo patrones. La figura muestra la captura de imágenes, procesamiento de imágenes, modelado y clasificación del objeto como bueno o defectuoso. 
        
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/47.png', alt='Gráfica que ejemplifica la captura de imágenes, su procesamiento, modelado y clasificación como bueno o defectuoso. ')
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Segmentación de clientes 
              p.mb-0 La segmentación de clientes es una de las aplicaciones más importantes del aprendizaje no supervisado, las empresas pueden identificar varios segmentos de clientes y luego dirigirse a grupos de usuarios potenciales. Lo que se hace es dividir una base de datos de clientes en grupos de personas que tienen semejanzas en género, edad, hábitos de consumo, intereses personales. 
        
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='Imagen que ilustra una segmentación: en ella, se selecciona un individuo de entre un segmento de tipo de personas; a quien se le ofrece el producto según necesidades identificadas por su tipo.')
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Beneficios de la segmentación 
              p El área comercial de la empresa formula esfuerzos de mercadeo diferentes y se adapta a las necesidades de cada cliente de acuerdo con el clúster en el que queda cada persona.

              p.mb-0 La empresa puede identificar, también, preferencias de clientes y conocer necesidades nuevas de mercado y así tomar decisiones y nuevas estrategias de mercadeo en forma efectiva. 
        
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/49.png', alt='Ilustración de segmentos o grupos de tipos de personas (género, edades, gustos, otros).')
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Congestión de tráfico 
              p.mb-0 El número de vehículos en las ciudades se incrementa de forma abrumadora, originando con esto congestión vehicular y, por tanto, aumentando la contaminación del medio ambiente, pérdidas de tiempo y costos en combustible, entonces es esencial   monitorear  el tráfico en las autopistas, identificando las más congestionadas, identificando patrones de congestión  y creando una clasificación en  segmentos de tráfico; esto ayuda a entidades estatales de tránsito  a optimizar el tránsito en dichas zonas. 
        
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/50.png', alt='Imagen que ejemplifica el tratamiento de los datos del tráfico en la base de datos y, luego de la clusterización, cómo toman decisiones las autoridades del tránsito.')

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Modelos de clasificación 
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/51.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 A continuación, una breve introducción a #[b #[i.t1 algoritmos de aprendizaje supervisado]]. Por su importancia en la clasificación de datos se puede encontrar que en este tipo de aprendizaje los algoritmos trabajan con observaciones y contienen variables de entrada y variables de salida o etiquetas relacionadas con las variables de entrada.

    p(data-aos="fade-down").my-5 Las técnicas de aprendizaje supervisado consisten en dos clases principales: #[b.t1 clasificación y regresión], dependiendo del tipo de problema de aprendizaje automático a resolver.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.up
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4.
          span Aprendizaje supervisado
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.svg', alt='Esquema que ilustra dos planos, según las dos clases de técnicas de aprendizaje supervisado: Clasificación y Regresión. ')    

    .bg10
      .row.justify-content-center.align-items-center.mb-4         
        .col-lg-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.svg', alt='')           
        .col.my-3
          h4 El modelo entrenado
          p.mb-0 Puede ser utilizado para predecir salidas de cualquier conjunto nuevo de datos de entrada. Estas técnicas se definen como supervisados  puesto que el modelo aprende de muestras de datos y sus salidas  en la fase de entrenamiento.      
      h5(data-aos="fade-down").mb-5 A continuación, se muestran más generalidades y aspectos destacados sobre las técnicas del aprendizaje supervisado:

      TabsA.color-acento-botones
        .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Regresión")
          .row.justify-content-center.align-items-center
            .col.my-3        
              h4 Regresión
              p.mb-0 Consiste en la estimación de un valor numérico con base en los datos de entrada; es una de las técnicas más usadas en #[i Machine Learning]. Por ejemplo, se podría generar un modelo de regresión cuya #[b variable Y] dependiente será el ingreso del empleado y #[b X] sería la variable independiente o explicativa; #[b X] puede estar relacionada con la educación de ese empleado, su experiencia, estrato, etc. En la fórmula presentada, se pretende estimar el valor #[b m], el cual es la pendiente de la regresión, y #[b B], que es el intercepto en eje #[b Y].                     
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg', alt='')           
        .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Clasificación")
          .row.justify-content-center.align-items-center
            .col.my-3        
              h4 Clasificación
              p.mb-0 Su objetivo es predecir etiquetas de salida de naturaleza categórica, por tanto, cada salida es una variable discreta entre un número limitado de resultados. Algunos ejemplos de aplicaciones de algoritmos de clasificación son la detección de fraudes, la detección de #[i spam], clasificación de enfermedades o diagnósticos basados en edad, sexo, azúcar en la sangre, etc., clasificación de imágenes, identificación de caracteres, clasificación de posibles clientes.                    
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.svg', alt='') 

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Algoritmos no supervisados
    .row.justify-content-center.mb-4         
      .col-lg-4.my-3(data-aos="fade-right")
        .bg11.p-3.j.brad.h-100
          p.mb-0 #[b.t1 El aprendizaje no supervisado] tiene la misión de descubrir similitudes, patrones o uniformidades dentro de los datos de entrada; en este caso, no existe un supervisor que etiquete los datos. Los algoritmos de este tipo de aprendizaje forman clústeres en forma autónoma y asignan observaciones a estos clústeres.  
   
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='') 

      .col-lg-4.my-3(data-aos="fade-left")
        .bg12.p-3.j.brad.h-100
          p.mb-0 Por ejemplo, si los datos son miles de fotos de leones y tigres, en el aprendizaje no supervisado el programa ordena las fotos de los leones en un clúster y la de los tigres en otro. Este algoritmo toma decisiones de ordenamiento de forma independiente, de acuerdo con características similares y características diferentes.     

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')
      .col-lg-8.my-3(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')        
          .col.my-3 
            p.mb-0 Un algoritmo no supervisado aprende de un modelo de clústeres a partir de los datos de entrenamiento que se pueden utilizar más tarde para asignar nuevos datos a los clústeres.                     

        h5.mb-4 Los algoritmos no supervisados se agrupan en problemas de asociación y agrupación, así:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bgac")
          div.ps-5(titulo="Asociación") 
            p Trabaja en función de reglas de asociación que permiten establecer asociaciones entre los datos dentro de bases de datos grandes. Por ejemplo, si un usuario compra carro nuevo, tiene probabilidades de comprar un seguro contra accidentes.
            p Así, los algoritmos combinan los datos basándose en los atributos que se comparten, aquí la idea no es encontrar semejanzas entre ellos, sino encontrar relaciones entre los datos.  
          div.ps-5(titulo="Reglas de asociación") 
            p Un concepto en este tipo de aprendizaje son las reglas de asociación que se usan para extraer conocimiento; estas reglas se obtienen de los datos históricos identificando relaciones entre los datos.  

            p Una regla se define como X -> Y, donde X y Y son conjuntos de datos distintos. 
          div.ps-5(titulo="Agrupamiento") 
            p Se trata de identificar un patrón en datos no categorizados y agrupados en clústeres o grupos. Se supone que los datos tienen similitudes identificadas por métricas de distancia, tales como la distancia euclídea. Así, dos registros que tengan una distancia mínima, en comparación con otras distancias, podrían pertenecer al mismo clúster. Es bien importante, entonces, conocer cómo se calcula la distancia. 

    .bg4.px-4.mb-3(data-aos="flip-down")
      .row.justify-content-center.align-items-center         
        .col-lg-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/60.png', alt='')           
        .col.my-3
          p.mb-0 Por medio de un ejemplo en Python y distancia euclídea, se identificarán los estados más similares en Estados Unidos, en cuanto a porcentaje de asaltos, asesinatos y secuestros por cada 100.000 habitantes, para cada uno de los 50 estados, usando el código fuente en Python. Este código fuente se puede ejecutar usando #[b #[i Jupyter lab]].

    h5(data-aos="fade-down").mb-5 Los resultados son los siguientes, ordenados en forma descendente y ascendente:  

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-5.up.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 5.
          span Resultado 1 de ejemplo
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.svg', alt='Imagen de tabla de resultados del ejemplo propuesto: Detalla los estados implicados, su cifras y distancias.')         
      .col-lg-5.up.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 6.
          span Resultado 2 de ejemplo
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg', alt='Imagen de tabla de resultados del ejemplo propuesto: Detalla los estados implicados, su cifras y distancias.')

    p(data-aos="fade-down").mb-5 Los estados con mayor distancia y, por tanto, completamente diferentes en porcentaje de asaltos, asesinatos y secuestros son Vermont y Florida, que presentan una distancia euclidiana calculada de 6.14, estos estarán en clústeres separados.   

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.svg', alt='')         
      .col-lg-8.up.my-3 
        .bg12.p-4.brad.mb-4(data-aos="fade-down")
          p.mb-0 Los estados con menor distancia y, por tanto, muy similares en porcentaje de asaltos, asesinatos y secuestros son New Hampshire y Iowa, que presentan una distancia euclidiana calculada de 0.21; estos podrían estar en el mismo clúster de porcentaje de asaltos, asesinatos y secuestros. 

        .row.justify-content-center.align-items-center        
          .col-lg-12.up
            .titulo-sexto.color-acento-contenido(data-aos="fade-left")
              h5 Figura 7.
              span Distancia euclídea
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.svg', alt='Gráfica que evidencia, según el ejemplo propuesto, los estados con mayor distancia y los estados con menor distancia.') 

    p(data-aos="fade-down").mb-4 La industria 4.0 va tomando gran importancia en estos últimos años; uno de sus objetivos es que cualquier proceso de producción, sea cual sea, esté completamente automatizado, evitando en lo posible que las personas trabajen en forma manual y dejando que las máquinas o equipos trabajen por sí solos, traduciendo esto en reducción de costos, seguridad, eficiencia y productividad en los resultados.
    .row.justify-content-center.align-items-end
      .col-lg-8.up.my-3 
        .bg13.p-4.brad(data-aos="fade-down")
          p.mb-0 Pero para llevar a cabo todo esto se requieren datos y estos datos no trabajan solos, existe el aprendizaje automático, que aprende de los datos que recibe constantemente, realiza predicciones, identifica patrones y es capaz de obtener conocimiento y conclusiones.                 
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/65.svg', alt='')         

    
</template>

<script>
export default {
  name: 'Tema2',
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
