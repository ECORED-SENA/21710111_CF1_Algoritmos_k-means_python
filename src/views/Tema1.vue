<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1.fst-italic Machine Learning

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Las máquinas de aprendizaje son un campo de la inteligencia artificial que se enfoca, principalmente, en el uso de datos y algoritmos: con ellos, imitan la forma en la que las personas aprenden y, de manera progresiva, van mejorando su precisión.      
      
    p(data-aos="fade-down").my-5 Sobre la implementación de sistemas de aprendizaje automático, es posible afirmar que:
    .row.justify-content-center.align-items-center.mb-4        
      .col-lg-3.my-3      
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/6.png', alt='')
      .col-lg-7.my-3      
        LineaTiempoD.color-primario(data-aos="fade-left")
          p(numero="1" titulo="Escritura de programas") Las personas que los implementan, no escriben programas por sí mismos.         
          p(numero="2" titulo="Recopilación de datos") Se recopilan datos y, luego, se da la orden al computador para buscar un programa que calcule una salida para cada valor de entrada.           
          p(numero="3" titulo="Generación de modelos") Como resultado de esto, se genera un modelo, que no es más que un archivo que se ha entrenado para reconocer determinados tipos de patrones.          
          p(numero="4" titulo="Entrenamiento del modelo") Es posible entrenar un modelo con un conjunto de datos y proporcionar un algoritmo que puede usar para averiguar y obtener información de esos datos.          
          p(numero="5" titulo="Alimentación del modelo") Una vez el modelo ya está entrenado, se puede usar para ser alimentado con los datos que no ha visto antes y realizar predicciones sobre estos.

    h5(data-aos="fade-down").mb-5 El esquema que se muestra a continuación, expone el modelo #[i Machine Learning]:     

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span Modelo #[i Machine Learning]
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/7.svg', alt='Esquema gráfico que da cuenta del modelo machine learning: Recolección y preparación de datos, ejecución de algoritmos para obtención de un modelo óptimo, Utilización del modelo obtenido.')

    h5(data-aos="fade-down").mb-4 Las máquinas de aprendizaje se dividen en tres diferentes tipos de aprendizaje: 
    .row.justify-content-center.mb-4          
      .col-lg-4.col-md-7.my-3(data-aos="fade-left")
        .bg3.px-3.brad.h-100
          .row.justify-content-center.align-items-center         
            .col-auto.my-2
              img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/8.svg', alt='') 
            .col.my-2
              h5.mb-0(data-aos="fade-down") Aprendizaje no supervisado
      .col-lg-4.col-md-7.my-3(data-aos="fade-down")
        .bg3.px-3.brad.h-100
          .row.justify-content-center.align-items-center         
            .col-auto.my-2
              img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/9.svg', alt='') 
            .col.my-2
              h5.mb-0(data-aos="fade-down") Aprendizaje supervisado 
      .col-lg-4.col-md-7.my-3(data-aos="fade-right")
        .bg3.px-3.brad.h-100
          .row.justify-content-center.align-items-center         
            .col-auto.my-2
              img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/10.svg', alt='') 
            .col.my-2
              h5.mb-0(data-aos="fade-down") Aprendizaje semisupervisado
           
    h5(data-aos="fade-down").mb-5 Algunas generalidades importantes de tener en cuenta, sobre el #[i machine learning], son:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.my-3     
        TabsC.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Aprendizaje supervisado")
            h4 Aprendizaje supervisado
            p Si se le enseña a un algoritmo el resultado que se desea obtener para un determinado valor, basado en la relación existente entre muchas observaciones y entre variables de entrada y salida, a esto se le denomina generalizar el conocimiento y, por tanto, se estaría hablando de #[b aprendizaje supervisado].     
          .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Otros algoritmos")
            h4 Otros algoritmos
            p También podría darse entre otros algoritmos basados en aprendizaje supervisado, donde existe la regresión lineal y logística, máquinas de vectores de soporte.  
          .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Aprendizaje no supervisado")
            h4 Aprendizaje no supervisado
            p Si se busca conocimiento o patrones entre un montón de datos, de los cuales no se conocen relaciones entre sus variables, no hay datos de referencia, entonces se está hablando de #[b aprendizaje no supervisado].    
          .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Algoritmos del aprendizaje no supervisado")
            h4 Algoritmos del aprendizaje no supervisado
            p Entre algoritmos de aprendizaje no supervisado, existen el #[i clustering] o agrupamiento, #[i K-means] o K-medias y reglas de asociación.  
          .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Modelos predictivos")
            h4 Modelos predictivos
            p En general, los modelos predictivos se aprenden de manera supervisada, mientras que los modelos descriptivos son producidos por técnicas de aprendizaje no supervisado.  
      .col-lg-3.my-3      
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/11.png', alt='')  

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Conjuntos de datos 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3      
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/12.png', alt='')   
      .col-lg-8.my-3     
        p(data-aos="fade-down") Los datos son el insumo más valioso cuando se habla de ciencia de datos y un término muy usado en la actualidad es el #[b #[i.t1 Big Data]] que, como su nombre lo indica, hace referencia a conjuntos de datos muy grandes.
        .bg4.px-4.mb-3(data-aos="flip-down")
          .row.justify-content-center.align-items-center         
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/13.png', alt='')           
            .col.my-3
              p.mb-0 Se han definido tres cualidades para #[b #[i Big Data]]: volumen, velocidad y variedad. Entonces es posible ver que este implica grandes conjuntos de datos (volumen), de diversos tipos (variedad) y que se generan muy rápidamente (velocidad). 

        .row.justify-content-center.align-items-center         
          .col-auto.my-3
            img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/14.png', alt='')           
          .col.my-3
            p.mb-0 La siguiente infografía muestra la relación entre cada concepto, preste atención:  

    img.img-a.img-t.mb-5(data-aos="fade")(src='@/assets/curso/temas/t1-infog.svg', alt='La infografía representa la relación entre las cualidades del Big Data de la siguiente manera: En primer lugar, se aborda el aspecto del volumen mediante el registro de diversas fuentes como información de salud, transacciones de seguros, datos de sensores móviles y otros. En segundo lugar, se explora la cualidad de la variedad, incluyendo datos tanto estructurados como no estructurados, que abarcan una amplia gama de formatos y tipos de información. Por último, se analiza la importancia de la velocidad en el manejo de los datos, desde el procesamiento en lotes hasta la capacidad de trabajar con datos en tiempo real, near time y mediante streaming.')           

    h5(data-aos="fade-down").mb-5 A continuación, se mencionan eventos sobre volumen, velocidad y variedad: 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Volumen y velocidad" :icono="require('@/assets/curso/temas/16.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Volumen y velocidad 
            p Como ejemplo de volumen, se puede observar que YouTube sube más de quinientas (500) horas de videos por minuto. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='') 
      .py-4.py-md-5(titulo="Volumen" :icono="require('@/assets/curso/temas/17.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Volumen 
            p En Twitter, se publican por día 500 millones de tuits; y si se mira en otros ámbitos laborales, se podría tomar el área de la salud, donde se cuenta con millones de historias clínicas de pacientes en los centros médicos y hospitales. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='') 
      .py-4.py-md-5(titulo="Velocidad" :icono="require('@/assets/curso/temas/18.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Velocidad 
            p La velocidad con que se suben videos a YouTube o la velocidad a la que un tuit se expande en la red es enorme; el solo hecho de viajar con aplicaciones como Waze proporciona, en tiempo real, la ubicación a millones y millones de usuarios. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='')     
      .py-4.py-md-5(titulo="Variedad" :icono="require('@/assets/curso/temas/19.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Variedad 
            p Los datos son de muchas variedades, pueden ser no estructurados, como los videos y el audio, o muy estructurados, como los tamaños de los videos subidos a YouTube, las distancias recorridas por transportadores obtenidas por GPS, o datos de pacientes en centros médicos. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/25.png', alt='') 
      .py-4.py-md-5(titulo="Volumen, velocidad y variedad" :icono="require('@/assets/curso/temas/20.svg')")
        .row.justify-content-center.align-items-start 
          .col-lg-6.my-3
            h4 Volumen, velocidad y variedad 
            p Lo anterior demuestra que existen montañas de información, que está ahí lista para ser explorada y puede ser usada para contestar preguntas, realizar predicciones con ella y aportar en la toma de decisiones en las empresas, usando estadística, matemáticas, computación, transformación, visualización de datos. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='')                                  

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/27.png', alt='')           
      .col.my-3
        p.mb-0 Habiendo hablado de ciencia de datos, se debe conectar con el concepto de datos en informática, los cuales son representaciones simbólicas (vale decir: numéricas, alfabéticas, algorítmicas, etc.) de un determinado atributo o variable cualitativa o cuantitativa, o sea: la descripción codificada de un hecho empírico, un suceso, una entidad. 

    h5(data-aos="fade-down").mb-5 En general, existe un conjunto de valores de variables cualitativas o cuantitativas, los cuales se pueden detallar a continuación:

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/28.png', alt='')
      .col-lg-8.my-3(data-aos="fade-right") 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bgac")
          div.ps-5(titulo="Cualitativas") 
            p Brindan información sobre las cualidades, tales como:
            ul.lista-ul.fa-ul 
              li 
                i.fas.fa-angle-right
                p.mb-0 País de nacimiento
              li 
                i.fas.fa-angle-right
                p.mb-0 Ciudad de nacimiento
              li 
                i.fas.fa-angle-right
                p.mb-0 Sexo 
            p.mb-0 Estas variables se describen con textos y no necesariamente los datos deben estar ordenados. Se clasifican en #[b ordinales], cuando representan algún valor ordenado según una escala establecida. Y en #[b cuasi cuantitativa o nominales] si no representan un orden.
          div.ps-5(titulo="Cuantitativas") 
            p Están relacionadas con cantidades, se representan con números y se miden en una escala ordenada o continua, tales como:
            ul.lista-ul.fa-ul 
              li 
                i.fas.fa-angle-right
                p.mb-0 Altura
              li 
                i.fas.fa-angle-right
                p.mb-0 Peso
              li 
                i.fas.fa-angle-right
                p.mb-0 Presión arterial 
            p.mb-0 Pueden ser #[b discretas], si se representan por números enteros, o #[b continuas], si se representan con números reales.

    h5(data-aos="fade-down").mb-5 En relación con la #[i Big Data], se destacan algunos aspectos como:

    .row.bg5.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center

          .col-md-6.col-lg-4.mb-4.mb-md-0.up(data-aos="fade-right")
            img(src='@/assets/curso/temas/29.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.pb-4(columnas="col-lg-6")(data-aos="fade-right")
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 1 
                p.mb-0 En la actualidad existen millones de datos que, quizá, no están tan ordenados como se debería.     
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 2 
                p.mb-0 Tales datos podrían ser, por ejemplo, el censo de población o la gran cantidad de historias clínicas; y es en este aspecto donde es importante la exploración de la información y la respuesta a preguntas formuladas sobre esa información. 
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 3 
                p.mb-0 El manejo de datos puede ser mucho más complejo de lo que se imagina, ya que va desde usar los datos inmersos en las imágenes para reconocer las mismas, hasta llegar al reconocimiento de dígitos o caracteres.  
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 4 
                p.mb-0 Por ejemplo, esta situación se da en el caso de que se quiera obtener información de historias clínicas no automatizadas, reconocimiento de patrones en la información, reconocimiento automático de voz, etc.
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 5 
                p.mb-0 #[b Los datos no estructurados] tienen estructura interna, pero no están predefinidos por modelos de datos. Pueden ser generados por personas o una máquina, en formato textual o no textual. 

    p(data-aos="fade-down").mb-5 A través de las siguientes figuras (figuras 2 y 3), conozca un ejemplo de identificación de tipos de datos en el Python. Se trata de un #[b #[i.t1 Dataset]] cuyos datos contienen cuatro características (longitud y anchura de sépalos y pétalos) de 50 muestras de tres especies de iris (iris setosa, iris virginica e iris versicolor). 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.up
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span Extracto de datos de #[i dataset]
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/32.png', alt='Imagen de un dataset y sus respectivos datos, a través de los cuales se obtienen características, en este caso, de una especie de flor (Iris).')     

    .bg6  
      p(data-aos="fade-down").mb-5 En Python, usando Jupyter Lab, se pueden ver algunos tipos de variables usando el siguiente código:
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.up
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 3.
            span Variables
          img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/33.svg', alt='Ilustración de un código usado en Phyton para la obtención de ciertas variables.')   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3     
        p(data-aos="fade-down") Se observan, después de imprimir los tipos de datos de iris, las variables sepal_length (longitud del sépalo), sepal_width (ancho de sépalo), petal_length (longitud de pétalo), petal_width (ancho de pétalo), que son de tipo float64 y, por tanto, se habla de variables cuantitativas.
        .bg7.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La variable #[b #[i.t1 Species]] (especie) es de tipo #[b #[i.t1 object]], que puede ser de cualquier tipo, por ejemplo, texto; en este caso, representa una variable cualitativa.        
      .col-lg-4.my-3      
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/12.png', alt='')   

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 #[i Clustering]         
                             
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3      
        img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/34.png', alt='')   
      .col-lg-8.my-3     
        p(data-aos="fade-down") En el #[b #[i.t1 aprendizaje supervisado]] el objetivo es mapear una entrada con una salida, con valores correctos suministrados por un supervisor. Por su parte, en el #[b #[i.t1 aprendizaje no supervisado]] no existe ese supervisor y solo existen datos de entrada; aquí el objetivo es describir similitudes en los datos de entrada y así observar patrones que aparecen con más frecuencia que otros, entonces la idea es investigar qué es lo que sucede con estos datos y qué no.
        .bg4.px-4.mb-3(data-aos="flip-down")
          .row.justify-content-center.align-items-center         
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/35.png', alt='')           
            .col.my-3
              p.mb-0 En términos estadísticos, lo que se hace es estudiar la densidad de los datos, agrupándolos en clústeres; todos los patrones, asociaciones, relaciones; y los clústeres son extraídos de los mismos datos.  

        .row.justify-content-center.align-items-center         
          .col-auto.my-3
            img.img-a.img-t(data-aos="fade")(src='@/assets/curso/temas/36.png', alt='')           
          .col.my-3
            p.mb-0 Existen varias técnicas para realizar #[i clustering] basadas en agrupamiento con #[i K-Means]. A continuación, se presenta un #[i clustering] jerárquico:      


    .bg8.p-4.p-md-5
      .bgw.p-4.brad 
        SlyderE(indicadores="derecha")
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Agrupamiento jerárquico
              p Es un método para agrupar datos basándose en la distancia entre ellos, buscando que los datos que queden en un clúster sean lo más parecidos posibles. Este tipo de agrupaciones ayuda a las organizaciones, por ejemplo, a que sus precios, bienes, servicios y cualquier aspecto de sus negocios estén bien dirigidos a sus clientes.  
              p Esta jerarquía muestra los datos similares a una estructura de árbol llamada dendrograma. A su vez, existen dos formas de agrupar los datos: aglomerante y divisivo.
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')       
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Enfoque ascendente 
              p En el caso de aglomerante, es un enfoque ascendente, cada elemento se piensa primero como un clúster de un solo elemento.  Los dos clústeres más parecidos se unen en un nuevo clúster más grande en cada fase del método (nodos); este método se repite hasta que todos los puntos pertenezcan a un único clúster grande (raíz).          
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')  
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 #[i Clustering] divisivo 
              p En el #[i clustering] divisivo, funciona en forma descendente: comienza en la raíz, donde todos los elementos están en un solo clúster y luego separa los más diversos en dos en cada fase de iteración. Se itera el procedimiento hasta que todos los elementos estén en su grupo.          
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')       
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1.fst-italic K-means 
              p Es uno de los algoritmos de máquinas de aprendizaje no supervisado más utilizados en ciencia de datos, el objetivo es, igual que en el caso anterior, agrupar datos con características similares e identificar patrones que muchas veces no se pueden observar a simple vista.          
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='') 
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Antes y después del #[i K-means] 
              p En el caso de #[i K-means] o K-medias, el algoritmo elige aleatoriamente una cantidad k de centroides iniciales que marcan el centro de cada clúster. Cada punto se ubica con su centroide más cercano, usando cualquier medida de distancia, tal como la distancia euclídea.          
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='')       
          .row.justify-content-center
            .col-lg-5.my-3
              h4.t1 Ventajas 
              ul.lista-ul.fa-ul 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Es un algoritmo veloz y eficiente, en términos de costo computacional, para segmentar datos.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Es sencillo de implementar y aplicar.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Produce clústeres más definidos que el #[i clustering] jerárquico.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Puede manejar grandes datos.           
            .col-lg-7.my-3
              img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
