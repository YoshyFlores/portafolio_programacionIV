<script setup>
import Bloque from "./InvesComponent.vue";
</script>
<template>


  <div class="container text-center">
  <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"><h2>Semana 1: Introducción a JavaScript</h2></div>
    
    <br />
    <div class="col-lg-6 mx-auto">
      <Bloque
        title="¿Qué es JavaScript?"
        text="Es un lenguaje de programación que ha sido diseñado con el propósito de que los desarrolladores puedan crear páginas webs interactivas. Brinda una gran gama de elementos que vuelven más atractivos a la vista los elementos que componen la página, lo que permite brindar al usuario una mejor experiencia en el sitio web.
        Este lenguaje de programación surgió como una tecnologia del lado del navegador para hacer que las aplicaciones fueran más dinámicas, por ejemplo, mediante JavaScript los navegadores eran capaces de responder a la interacción del usuario.
        JavaScript fue creado por Netscape en 1995. En 1994 cambio su nombre a ECMA International. 1997, JS envía su documentación para que ECMA cree une estándar. ECMAScript es la versión estandarizada. "
      />
      <Bloque
        title="Funcionamiento JavaScript"
        text=" El código de este es interpretado, mediante el motor V8 es traducido directamente a lenguaje de máquina. En la actualidad se puede utilizar tanto del lado del cliente como del lado del servidor. "
      />
      <Bloque
        title="JavaScript, lado del cliente: "
        text=" El funcionamiento en el navegador."/>
      <div class="text-center">
          <div class="border border-success p-2 mb-2"> <h7>El motor V8 está dentro del navegador.</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Todos los principales navegadores incluyen su propio motor JavaScript.</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Las funciones JavaScript realizan cambios en HTML y CSS.</h7></div>
      </div>
      <br/>
      <Bloque
        title=" JavaScript, lado del servidor: "
        text="uso del lenguaje de codificación del servidor de Backend."
        />
      <div class="text-center">
          <div class="border border-success p-2 mb-2"> <h7>El motor se encuentra en el servidor.</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Una función de JS puede acceder a la base de datos.</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Admite un alto nivel de personalización de la respuesta del sitio web según sus requisitos.</h7></div>
      </div>
      <br/>
      <Bloque title="Bibliotecas" text="Son colecciones de fragmentos de código previamente escritos que se pueden volver a utilizar para realizar funciones estándar de JavaScript."/>      
      <div class="text-center">
          <div class="border border-success p-2 mb-2"> <h7>Visualización de datos</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Manipulación del DOM</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Formularios.</h7></div>
      </div>
      <br />
      <Bloque title="Marcos" text="Colección de fragmentos de código escritos previamente que realizan diversas funciones y se pueden reutilizar."></Bloque>
      <br />
      <div class="text-center">
        <div class="p-3 bg-info bg-opacity-10 p-2 mb-2"> <h5>Tipos de datos, los siguientes son los admitidos según ECMAScript son:</h5></div>
        <div class="border border-success p-2 mb-2"> <h7>Boolean</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Null</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Undefined</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Number</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>String</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Symbol</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Object</h7></div>
      </div>
    </div>
      <br />
      <br/>
    <div class="container text-center">
  <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"><h2>Semana 2: Bootstrap, VueJS.</h2></div>
    
    <br />
    <div class="col-lg-6 mx-auto">
      <Bloque title="¿Qué es Bootstrap?" text="Marco de desarrollo web que ayuda a los desarrolladores a crear interfaces web. Concebido en 2011 por Marck Otto y Jacob Thornton. Ha tenido muchos cambios desde el día que se lanzo el 19 de agosto de 2011. Antes era una colección de reglas de CSS. Bootstrap 4 sigue siendo muy similar a sus antecesores. El propósito de este sigue siendo permitir a los desarrolladores el crear diseños y ayudar a desarrollar una apariencia con estilos interactivos." />
    <Bloque
        title="Diseño"
        text="Posee contenedores responsivos, capaces de ajustar el diseño de la pagina determinados por el tamaño de una pantalla. Tiene un diseño de cuadricula de 12 y columnas permiten organizar de forma flexible los elementos, así mismo tiene objetos multimedia que funcionan como bloques de construcción y clases de utilidad que permiten manipular los elementos de forma responsiva."
      />
      <Bloque
        title="Contenido"
        text="Formato básico que componen los documentos de las paginas web, basado en etiquetas y su estructura sirve para mostrar los contenidos de las páginas."
      />
      <Bloque
        title="Componentes"
        text="Mediante estos se puede construir características fundamentales de un sitio web. Estos abarcan las construcciones fundamentales que se esperaría de un kit de herramientas de desarrollo. "
      />
      <Bloque
        title="Soporte móvil"
        text="Permite crear sitios web compatibles con dispositivos móviles de una forma fácil. Está diseñado para funcionar en todas las resoluciones y tamaños de pantalla."
      />
      <Bloque
        title="Clases"
        text="Bootstrap ofrece una gran selección de clases de utilidad para encapsular las reglas de estilos necesarias."
      />
      <Bloque
        title="Compatibilidad"
        text="Soporta la mayoría de los navegadores modernos."
      />
      <Bloque
        title="Cuadricula"
        text="El sistema grid consiste en una serie de clases y consultas que ayudan a diseñar la página."
      />
      <Bloque
        title="Texto más grande"
        text="El tamaño de fuente es de 2px, aumentando de 14px a 16px. Bootstrap 4 reemplazó paneles, pozos y miniaturas con un nuevo concepto: tarjetas."
      />
      <Bloque
        title="Controles de formularios"
        text="Permite el tamaño del control de entrada, así como clases para denotar bloques y controles de entrada de nivel en línea. "
      />
      <Bloque
        title="Personalización"
        text="Permite la facilidad para personalizar los sitios, habilitando y deshabilitando preferencias CSS."
      />
      <Bloque
        title="¿Qué es VueJS?"
        text="Marco progresivo utilizado para construir interfaces de usuario. 
        Este está diseñado desde cero para ser adoptable de forma incremental. 
        La biblioteca principal se centra solo en la capa de vista y es fácil de 
        recoger e integrar con otras bibliotecas o proyectos existentes. Es una librería JavaScript pensada 
        para tener un framework para desarrollar páginas web. Vue permite crear 
        todas las vitas necesarias para la pagina de una forma dinámica, puede conectarse al servidor 
        para tener datos dinámicos de una base de datos."
      />
        <div class="text-center">
        <div class="p-3 bg-info bg-opacity-10 p-2 mb-2"><h5>Características Vue.JS</h5></div>
        <div class="border border-success p-2 mb-2"> <h7>Modularidad: Permite crear módulos que van a construir la aplicación completa. Los módulos deben tener funcionamiento independiente pero que al integrarlos deben trabajar.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Reactividad: Capacidad de poder cambiar o modificar el valor de una etiqueta en tiempo real.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Componentes web: Vue se basa en componentes y el rendering declarativo. Elementos independientes que pueden ser reutilizables.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Virtual DOM: Manipular el DOM, capacidad de operar las etiquetas HTML. Vue crea una copia del DOM original, crea un objeto del DOM= Virtual DOM.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Eventos y transiciones: La acción que realiza el usuario. El resultado de la acción.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Lifecicle: Se puede controlar lo que ocurre antes de que se cargue el componente, lo que pasa justo al cargarse o al destruirse.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Aplicaciones SPA: Posee un paquete especial para tener un sistema de rutas.</h7></div>
        <div class="border border-success p-2 mb-2"> <h7>Mixins: Son funciones y lógica de los componentes que se pueden reutilizar y reusar en otros componentes web.</h7></div>
      </div>
<br/>
    <Bloque title="Vue CLI" text="Vue tiene su propia interfaz de línea de comandos. Permite inicializar una aplicación Vue con la configuración que se desea."/>
      <br />
      <h5>Existen diferentes formas de inicializar una aplicación:</h5>
      <div class="text-center">
          <div class="border border-success p-2 mb-2"> <h7>vue init webpack</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>vue init webpack-simple</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>vue init browserify</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>vue init browserify-simple</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>vue init simple</h7></div>
      </div>
    </div>
      <br/>
      <br/>

    <div class="container text-center">
  <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"><h2>Semana 3: Rendering declarativo, Directivas personalizadas, Representación de lista.</h2></div>
    
    <br />
    <div class="col-lg-6 mx-auto">
      <Bloque title="¿Qué es el DOM?"/>
      <Bloque title="Rendering declarativo" text=""/>
      <h5>El rendering es una opción de VueJS que permite interactuar con el DOM, para lo cual se tendría:</h5>
      <div class="text-center">
          <div class="border border-success p-2 mb-2"> <h7>Vista: HTML</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Estado: Datos JS</h7></div>
          <div class="border border-success p-2 mb-2"> <h7>Usuario: interactúa e introduce cambios en la vista.</h7></div>
      </div>
      <br/>
      <Bloque text="En el acaso de la vista se encarga de decirle al estado que hay cambios, y el estado le responde con una nueva vista. Por otra parte, el estado se encarga de decirle a la vista como y cuando compilar y lo que debe esperar, a esta función se le llama como render."/>
      <div class="border border-success p-2 mb-2"> <h7>Comando para crear un proyecto: vue créate vuejs-app</h7></div>
      <div class="border border-success p-2 mb-2"> <h7>Comando para ejecutar el proyecto: npm run serve</h7></div>
      <br/>
      <Bloque title="Reder" text="Los sitios web dinámicos son creados cuando existe la posibilidad de representar datos."/>
      <Bloque title="Directivas" text="Son atributos especiales que se colocan en las etiquetas HTML y están prefijados por v-. Por ejemplo, v-for, v-bind, v-on. Estas permiten realizar acciones dinámicas que no se pueden realizar en HTML por si solo, pero vue permite utilizar sus etiquetas <template>"/>
  
  <div class="text-center">
    <div class="p-3 bg-info bg-opacity-10 p-2 mb-2"> <h5>Dichas directivas están formadas por varias partes:</h5></div>
    <div class="border border-success p-2 mb-2"> <h7>Directivas: es el nombre de la directiva, se puede abreviar con un carácter.</h7></div>
    <div class="border border-success p-2 mb-2"> <h7>Argumento: se indican con un parámetro.</h7></div>
    <div class="border border-success p-2 mb-2"> <h7>Modificador: Se puede modificar el comportamiento de las directivas.</h7></div>
    <div class="border border-success p-2 mb-2"> <h7>Valor: Se requiere establecer un valor. Se escribe como el valor de un atributo HTML.</h7></div>
  </div>
<br/>
<br/>
<div class="text-center">
<div class="p-3 bg-info bg-opacity-10 p-2 mb-2"> <h5>Tipos de directivas:</h5></div>
<div class="border border-success p-2 mb-2"> <h7>Directivas básicas: v-pre, v-once, v-model…</h7></div>
<div class="border border-success p-2 mb-2"> <h7>Directivas condicionales: v-show, v-if, v-else…</h7></div>
<div class="border border-success p-2 mb-2"> <h7>Directivas de bucles: v-for.</h7></div>
<div class="border border-success p-2 mb-2"> <h7>Directivas avanzadas: v-bind, v-on, v-slot…</h7></div>
<div class="border border-success p-2 mb-2"> <h7>Directivas personalizadas: proporcionan un mecanismo para asignar cambios de datos a un comportamiento arbitrario de DOM.</h7>
</div>
  </div>

      <br/>
      <Bloque title="Representación de lista" text="Se puede representar una lista usando la directiva v-for. La sintaxis requiere que especifique la matriz de origen para iterar, y un alias que se usará para hacer referencia a cada elemento en la iteración. "/>
      <br/>
    </div>

    <div class="container text-center">
  <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"><h2>Semana 4: Eventos, Manejadores de eventos, Modificadores de eventos, Clases y estilos en tiempo real.</h2></div>
    
    <br />
    <div class="col-lg-6 mx-auto">
    <br />
      <Bloque title="¿Qué son los eventos?" text="En JavaScript, la interacción con el usuario se consigue mediante la captura de los eventos que este produce. Un evento es la acción que el usuario realiza. 
      Los eventos se capturan mediante los manejadores de eventos. Se puede utilizar la directiva v-on para escuchar eventos del DOM.
      Para muchos controladores es más compleja por lo que es posible mantener el valor del atributo v-on, en este caso v-on también puede aceptar el nombre del método al que quiere llamar." />
      <Bloque title="Manejadores de línes" text="En lugar de enlazar al nombre de un método, se puede utilizar métodos en una declaración JavaScript"/>
      <Bloque title="Modificadores de eventos" text="VueJS proporciona modificadores de eventos para v-on para manejar detalles de eventos del DOM. Como: event.preventDefault() Oevent.stopPropagation()"/>
      <h5>Modificadores:</h5>
      <div class="container text-center">
    <div class="row g-2" >
    <div class="col-6" >
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.stop</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.prevent</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.capture</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.self</div>
    </div>
  </div>
      </div>
    
</div>
<br/>
    <div class="col-lg-6 mx-auto">
      <h5>Modificadores de teclas</h5>
      <h6>Vue proporciona alias para las claves más utilizadas:</h6>
      <div class="container text-center">
  <div class="row g-2" >
    <div class="col-6" >
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.enter</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.tab</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.delete</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.esc</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.left</div>
    </div>
    <div class="col-6">
      <div class="bg-info-subtle p-2 text-dark bg-opacity-10">.right</div>
    </div>
  </div>
  </div>
</div>
    </div>
    </div>
<br/>
<br/>
<div class="col-lg-6 mx-auto">
      <Bloque title="Clases y estilos reactivos" text="Uso de binding para obtener clases y estilos reactivos"/>
      <Bloque title="Binding :class" text="Se puede definir clases al igual que con el atributo class pero aquí se usa comillas simples dentro de las comillas dobles, solo si se trata de un data se obvian las comillas simples. Se puede aplicar varias clases a una etiqueta HTML."/>
      <Bloque title="Bindig : style" text="Se puede cambiar el estilo de algún elemento HTML en tiempo de ejecución. Vue también nos permite usar los atributos class y style junto con los binding :class y :style."/> 
      <br/>
    </div>
    </div>
    

    <div class="container text-center">
  <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"><h2>Semana 5: Sistema de Componentes, Introducción al sistema de Componentes, Crear Componentes Custom.</h2></div>
    
    <br />
    <div class="col-lg-6 mx-auto">
    <br />
      <Bloque title="Introducción a los componentes" text="Componentes: En Vue.js es la forma de utilizar una instancia tantas veces como sea necesario. Mediante estos se puede crear elementos propios HTML que fácilmente se pueden utilizar en toda la aplicación." />
      <Bloque title="Registro Global de Componentes" text="Este se realiza al llamar al método component de Vue. Que se registre de forma global significa que estará disponible en cualquier componente de Vue. "/>
      <Bloque title="Registro Local de Componentes" text="Resulta que con el tiempo puede parecer sencillo comenzar a acumular componentes de manera global aun cuando no se utilicen en todas las vistas de una aplicación. Para esto Vue aporta la flexibilidad de agregar los componentes que se utilizarán en un componente específico."/>

    <h2>¿Comunicación entre Componentes: propiedades y eventos?</h2>
    <br/>
    <h3>Pasando datos mediante métodos</h3>
    <Bloque text="Envío de datos entre componentes: En Vue.js se envían datos desde un componente padre hacia el hijo mediante sus propiedades ( props ) y desde el componente hijo hacia el padre mediante eventos ( $emit )."/>
  
    <br/>
    <h2>Pasando datos mediante eventos</h2>
    <Bloque text="Paso de datos con el bus de eventos: un bus de eventos no es más que otra instancia de Vue. Una instancia que puede tener las mismas propiedades que cualquier otra instancia."/>
    <br/>

    </div>
  </div>
  </div>

</template>
