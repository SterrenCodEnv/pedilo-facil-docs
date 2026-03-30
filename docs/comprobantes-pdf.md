---
id: comprobantes-pdf
title: Comprobantes PDF
sidebar_position: 4
---

# Comprobantes PDF

Cada pedido confirmado genera automáticamente un **comprobante PDF** que sirve como recibo de la compra.

## ¿Cuándo se genera el PDF?

El PDF se genera automáticamente en el momento en que el cliente confirma el pedido (transición a estado **PENDIENTE**). No es necesaria ninguna acción manual de tu parte.

## ¿Qué contiene el comprobante?

El PDF tiene el formato de un comprobante de pedido con la siguiente información:

### Encabezado

- Nombre de tu franquicia
- Título "Comprobante de Pedido"

### Datos del pedido

- Número de pedido (ej: `GRD-BEL-000023`)
- Fecha y hora de creación
- Nombre del cliente
- Teléfono del cliente
- Tipo de entrega (Retiro en local / Delivery a domicilio)
- Dirección de entrega (si es delivery)
- Método de pago (Efectivo / Transferencia)

### Detalle de productos

Tabla con cada producto del pedido:

| Producto          | Sabores                                            | Cantidad | Precio unitario | Subtotal |
| ----------------- | -------------------------------------------------- | -------- | --------------- | -------- |
| Helado 1kg        | Dulce de leche / Chocolate / Tramontana / Frutilla | 1        | $X.XXX          | $X.XXX   |
| Pote Familiar Nº2 | —                                                  | 2        | $X.XXX          | $X.XXX   |

Los sabores elegidos aparecen debajo del nombre del producto (aplica a helado a granel).

### Totales

- Subtotal (suma de todos los ítems sin descuentos)
- Descuentos aplicados (una línea por cada promoción, con el nombre de la promo y el monto)
- Costo de envío (si aplica)
- **TOTAL** final

### Notas

Si el pedido tiene notas especiales, se incluyen al final.

### Pie de página

"¡Gracias por tu compra!"

## ¿Dónde se guarda el PDF?

El PDF se almacena automáticamente en la nube (Cloudflare R2) en la ruta:

```
order-pdfs/{telefono-del-cliente}/{número-de-pedido}.pdf
```

Una vez generado, la URL del PDF queda guardada en el registro del pedido en la base de datos. Si por algún motivo el PDF no pudo generarse en el primer intento, el sistema lo regenera cuando lo consultás desde el panel.

## ¿Cómo accedo al PDF de un pedido?

Desde el **detalle del pedido** en el panel de administración, hay un botón para ver o descargar el comprobante PDF del pedido.

## ¿El cliente recibe el PDF?

El PDF se genera del lado del sistema. El cliente recibe por WhatsApp una confirmación del pedido con el número de pedido, pero no recibe el PDF directamente. Vos podés enviarlo manualmente si lo necesitás.

## Usos del comprobante

- **Registro interno**: tener un registro de cada pedido con todos los detalles
- **Control en la entrega**: verificar lo que el cliente pidió al momento del retiro o entrega
- **Verificación de pago**: el número de pedido sirve como referencia para cruzar con comprobantes de transferencia

## Notificación al dueño cuando hay un pedido nuevo

Además del PDF, cuando se crea un pedido nuevo recibís inmediatamente:

1. **Notificación en tiempo real** en tu panel de administración (aparece el pedido en la lista con estado PENDIENTE)
2. **Notificación push** si tenés las notificaciones activadas en el navegador

Esto te permite atender los pedidos apenas llegan sin necesidad de estar mirando el panel constantemente.
