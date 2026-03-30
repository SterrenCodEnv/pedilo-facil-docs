---
id: pedidos
title: Gestión de Pedidos
sidebar_position: 2
---

# Gestión de Pedidos

La sección de **Pedidos** es el corazón de tu operación diaria. Desde acá recibís, procesás y completás todas las órdenes de tu local.

## Ciclo de vida de una orden

Cada pedido pasa por los siguientes estados, en este orden:

```
PENDIENTE → CONFIRMADO → EN PREPARACIÓN → LISTO → COMPLETADO
                ↓               ↓              ↓
            CANCELADO       CANCELADO      (no se puede cancelar desde aquí)
```

### Estados en detalle

| Estado             | Qué significa                                                  | Quién lo genera                                                |
| ------------------ | -------------------------------------------------------------- | -------------------------------------------------------------- |
| **Pendiente**      | El cliente armó el carrito con el bot pero todavía no confirmó | Bot automáticamente                                            |
| **Confirmado**     | El cliente dijo "Sí, confirmo" en el chat                      | Bot automáticamente                                            |
| **En preparación** | Marcaste el pedido como que lo estás preparando                | Vos (desde el panel)                                           |
| **Listo**          | Marcaste el pedido como terminado, esperando retiro o entrega  | Vos (desde el panel)                                           |
| **Completado**     | El cliente retiró o recibió el pedido                          | Vos (desde el panel)                                           |
| **Cancelado**      | El pedido fue cancelado                                        | Vos o el cliente, desde cualquier estado antes de "Completado" |

:::info Notificación automática al marcar "Listo"
Cuando marcás un pedido como **Listo**, el sistema envía automáticamente un mensaje por WhatsApp al cliente avisándole que puede pasar a retirar (o que el pedido está en camino si eligió delivery).

Ejemplo del mensaje que recibe el cliente:

> _¡Hola Juan! Tu pedido GRD-000023 está listo. 🍦 Podés pasar a retirar tu pedido por Grido Belgrano. ¡Gracias por tu compra!_
> :::

## Lista de pedidos

La pantalla de pedidos muestra todos los pedidos de tu local en una tabla con:

- **Número de orden** (ej: `GRD-000023`)
- **Cliente** — Nombre y teléfono del cliente (captados por el bot)
- **Estado** — Con código de color (naranja = pendiente, verde = listo, etc.)
- **Monto total** — Con descuentos aplicados ya descontados
- **Forma de entrega** — Retiro en local o delivery
- **Medio de pago** — Efectivo o transferencia bancaria
- **Fecha y hora** — Cuándo se creó la orden

Podés filtrar por:

- Estado (pendiente, confirmado, en preparación, etc.)
- Rango de fechas
- Número de orden (búsqueda por código)

## Detalle de una orden

Al hacer clic en cualquier pedido podés ver:

- **Detalle de los ítems** — Nombre del producto, cantidad, precio unitario y subtotal
- **Sabores seleccionados** — Para los helados por kilo que permiten elegir sabores
- **Notas del cliente** — Si el cliente dejó alguna aclaración
- **Promociones aplicadas** — Descuentos automáticos que se aplicaron
- **Desglose del monto** — Subtotal, descuento, costo de envío (si aplica) y **total final**
- **Comprobante PDF** — Botón para descargar o ver el PDF generado automáticamente
- **Datos de entrega** — Dirección (si eligió delivery) o "Retiro en local"
- **Estado del pago** — Si pagó en efectivo o si hizo transferencia (y si enviaste el comprobante)

## Gestión de pagos por transferencia

Si el cliente eligió pagar por transferencia bancaria, en el detalle de la orden verás el **estado del pago**:

| Estado de pago          | Qué significa                                                     |
| ----------------------- | ----------------------------------------------------------------- |
| **Pendiente**           | El cliente aún no realizó la transferencia                        |
| **Comprobante enviado** | El cliente adjuntó el comprobante en el chat                      |
| **Verificado**          | Vos confirmaste que recibiste el pago                             |
| **Rechazado**           | Rechazaste el comprobante (el cliente deberá reenviar uno válido) |

Podés cambiar el estado del pago directamente desde el detalle del pedido.

## Cancelar un pedido

Podés cancelar una orden en cualquier estado siempre que no esté **Completada**. Al cancelar, el sistema restaura el stock de todos los productos del pedido automáticamente.

Si cancelás una orden, podés agregar un **motivo de cancelación** que queda registrado para tus reportes.

## Gestión de stock al crear pedidos

Cuando se crea una orden (un cliente confirma), el sistema **reduce el stock inmediatamente** para evitar que dos clientes pidan el mismo producto al mismo tiempo. Si cancelás una orden, el stock se restaura automáticamente.

:::tip Número de orden
El número de orden tiene el formato `[CÓDIGO-FRANQUICIA]-[NÚMERO]`. Por ejemplo: `GRD-BEL-001-000023`. Este código identificador es único para cada ordre de tu local.
:::
