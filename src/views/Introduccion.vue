<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4        
      .col-lg-8.my-3      
        .row.justify-content-center.align-items-center.bg2.py-4.px-5         
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='') 
          .col.my-3
            p(data-aos="fade-down") Le damos la bienvenida al componente formativo denominado “#[b Introducción al #[i Machine Learning]]”, el cual hace parte del programa de formación complementaria “Algoritmo de agrupamiento no supervisado #[i K-means] con Python”. 
            h4(data-aos="fade-down").mb-0 Para comenzar, preste atención al video que se muestra enseguida:  
      .col-lg-4.my-3    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kKJQVNbk8N8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
          figcaption Video. Introducción al Machine Learning



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
