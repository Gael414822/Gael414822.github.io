import http from 'http';

const servidor = http.createServer((req, res) => {
console.log('Solicitud GET: Enviando interfaz');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
  <h1>Pokémon API</h1>
    <div id="info"></div>

    <script>
      async function obtenerDato() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/gengar');
        const data = await res.json();
        
        const div = document.getElementById("info");
        div.innerHTML = \`
          <img src="\${data.sprites.front_default}">
          <p style="color:purple">Nombre: \${data.name}</p>
        \`;
      }
      obtenerDato();
    </script>
  `);
});

const puerto = 3333; 

servidor.listen(puerto, () => {
  console.log(`Servidor de pokemon en http://localhost:${puerto}`);
});