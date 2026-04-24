//Escribe un comentario explicando para qué sirve http
//http sive para cargar el modulo nativo de http, permite trabajar con http sin descargar librerias externas 
//y lo mas importante es crear un servidor 
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
//Sirve para interactuar con el sistema de archivos de tu computadora o servidor.
import fs from 'fs';


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html    
     
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
         if (error) {
           //Escribe qué significa el 500 
           //El código 500 significa "Error Interno del Servidor"
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        // El código 200 significa "OK", la petición fue exitosa
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de los usuarios
    function getUsuarios(req, res) {
        //Esto representa un objeto JSON de un usuario
        //Agrega otro usuario
        const usuarios = [
        { "nombre": "Punk", "saldo": "0" },
        { "nombre": "Rock", "saldo": "20" }
    ];
      res.writeHead(200, { 'Content-Type': 'application/json' });      
    //Escribe qué hace la función stringify y por qué la tenemos que usar
      //convierte un arreglo en un string con formato JSON.
      res.end(JSON.stringify(usuarios));
    }

  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarMovimientos(req, res) {
        //Construye una página básica movimientos.html
        fs.readFile('movimientos.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las movimientos
    const movimientos = [
    { id: 1, concepto: 'Pago Nómina', monto: 1200 },
    { id: 2, concepto: 'Supermercado', monto: -85 }
];
    function getMoviminientos(req, res) {
    //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(movimientos));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Busca en otro lugar.');
    }
    function mostrarEquipo(req, res) {
const contenidoHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Equipo</title>
    </head>
    <body>
        <h1>Mi Equipo</h1>
        <p><strong>Nombre:</strong> Jesus Andres Marquez Martinez</p>
        <p><strong>Cualidad:</strong> Es muy bueno para escuchar y acompañar</p>
        
        <img src="mifoto.jpg" alt="Foto del equipo">
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(contenidoHTML);
  }
function mostrarOpinion(req, res) {
    const opinionHTML = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><title>Opinión</title></head>
        <body>
            <h1>Colonialismo Digital</h1>
            <p><strong>¿Riesgo?</strong> Sí, porque dependemos de infraestructura extranjera.</p>
            <p><strong>FreedomBox:</strong> Es un servidor personal para recuperar el control de tus datos.</p>
            <a href="https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south">Leer artículo</a>
        </body>
        </html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(opinionHTML);
}
function mostrarCheckout(req, res) {
  const html = `
    <h1>Kueski Pay - Checkout</h1>
    <p>Estas a un paso de completar tu compra.</p>
    <p><strong>Total a pagar:</strong> $1,200.00 MXN</p>
    <button onclick="alert('Redirigiendo a pago...')">Finalizar Compra</button>
    <br><br><a href="/">Cancelar y volver</a>
  `;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}
function mostrarAuth(req, res) {
  const html = `
    <h1>Inicio de Sesion - Kueski</h1>
    <form>
        <label>Email:</label><br>
        <input type="email" placeholder="ejemplo@kueski.com"><br><br>
        <label>password:</label><br>
        <input type="password"><br><br>
        <button type="button">Entrar</button>
    </form>
    <br><a href="/">Volver</a>
  `;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function mostrarUser(req, res) {
  const html = `
    <h1>Información del Usuario</h1>
    <ul>
        <li><strong>Nombre:</strong> Jesus Andres</li>
        <li><strong>Edad:</strong> 21 años</li>
        <li><strong>Ciudad:</strong> Guadalajara, Jalisco</li>
        <li><strong>Nivel de confianza:</strong> Oro</li>
    </ul>
    <a href="/">Volver al menú</a>
  `;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function mostrarSaldo(req, res) {
  const html = `
    <h1>Mi Saldo</h1>
    <p>Actualmente tienes un saldo disponible de:</p>
    <h2 style="color: green;">$5,450.00 MXN</h2>
    <p>Limite de credito: $10,000.00</p>
    <a href="/">Volver</a>
  `;  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function mostrarCashback(req, res) {
  const html = `
    <h1>Kueski Cashback</h1>
    <p>Por tus compras constantes, has generado:</p>
    <h3>$125.50 MXN acumulados</h3>
    <p>Puedes usar este dinero para pagar tus proximos prestamos.</p>
    <a href="/">Regresar</a>
  `;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function mostrarPrestamos(req, res) {
  const html = `
    <h1>Tus Prestamos</h1>
    <table border="1">
        <tr>
            <th>Folio</th>
            <th>Monto</th>
            <th>Estado</th>
        </tr>
        <tr>
            <td>#9982</td>
            <td>$2,000</td>
            <td>Pagado</td>
        </tr>
        <tr>
            <td>#10243</td>
            <td>$1,500</td>
            <td>Pendiente (Vence 30/04)</td>
        </tr>
    </table>
    <br><a href="/">Volver</a>
  `;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}
      //incluye el enlace a la documentación de createServer
      //https://nodejs.org/api/http.html
      //https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
      const servidor = http.createServer((req, res) => {
        const url = req.url;

        if (url === '/') {
          darBienvenida(req, res);
        } else if (url === '/api/usuarios') {
          getUsuarios(req, res);
        } else if (url === '/api/movimientos') {
          getMoviminientos(req, res);
        } 
        else if (url === '/usuarios') {
          mostrarPerfil(req, res);
        } 
        else if (url === '/movimientos') {
          mostrarMovimientos(req, res);
        } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
        else if (url === '/equipo') {
          mostrarEquipo(req, res);
        }
        else if (url === '/opinion') {
          mostrarOpinion(req, res);
          }
        else if (url === '/checkout') { 
    // Para pagar o finalizar proceso
          mostrarCheckout(req, res);
  }
        else if (url === '/auth') { 
    // Simulación de inicio de sesión
         mostrarAuth(req, res);
  }
        else if (url === '/user') { 
    // Información del perfil del usuario
          mostrarPerfil(req, res); 
  }
        else if (url === '/saldo') { 
    // Mostrar cuánto dinero tiene el usuario
          mostrarSaldo(req, res);
  }
        else if (url === '/cashback') { 
    // Mostrar beneficios acumulados
          mostrarCashback(req, res);
  }
        else if (url === '/prestamos') { 
    // Sección principal de Kueski: préstamos
          mostrarPrestamos(req, res);
  }
      //Haz una página equipo.html correspondiente
      
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html
