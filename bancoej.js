/**
 * Express permite manejar rutas dinámicas mediante parámetros.
 * Esto es útil para consultar recursos específicos sin crear una ruta por cada ID.
 */
import express from 'express';
const app = express();
const puerto = 1984;

// Simulación de base de datos de préstamos de Kueski
const baseDeDatosPrestamos = [
    { id: '9982', monto: 2000, estatus: 'Pagado' },
    { id: '10243', monto: 1500, estatus: 'Pendiente' },
    { id: '11500', monto: 5000, estatus: 'Aprobado' }
];

/**
 * Ruta con parámetro: el ":id" actuará como una variable.
 * Si el usuario entra a /prestamo/9982, req.params.id valdrá "9982".
 */
app.get('/prestamo/:id', (req, res) => {
    const idBuscado = req.params.id;
    const prestamo = baseDeDatosPrestamos.find(p => p.id === idBuscado);

    if (prestamo) {
        // Respuesta exitosa con los datos del préstamo encontrado
        res.status(200).json({
            mensaje: "Préstamo localizado con éxito",
            datos: prestamo
        });
    } else {
        // Si el ID no existe en nuestra "base de datos"
        res.status(404).json({
            mensaje: "Error: El folio de préstamo no existe"
        });
    }
});

app.listen(puerto, () => {
    console.log(`Servidor de pruebas iniciado en puerto ${puerto}`);
});