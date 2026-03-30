---
id: medios-de-pago
title: Medios de pago
sidebar_position: 6
---

# Medios de pago

El bot acepta dos métodos de pago: **efectivo** y **transferencia bancaria**.

## Efectivo

Si el cliente elige pagar en efectivo:

- El bot registra el método de pago
- No se requiere ninguna acción adicional antes de confirmar el pedido
- El cobro se realiza al momento de la entrega (delivery) o del retiro (si es en local)

No hay ninguna verificación de pago desde el panel para los pedidos en efectivo.

---

## Transferencia bancaria

Si el cliente elige pagar con transferencia:

### Paso 1 — El bot comparte los datos bancarios

El bot envía al cliente los datos bancarios de tu local (tal como están configurados en el sistema). El cliente usa esos datos para hacer la transferencia desde su app bancaria.

### Paso 2 — El cliente envía el comprobante

Una vez que el cliente hace la transferencia, el bot le pide que envíe el comprobante. El cliente puede enviarlo como imagen o como archivo.

### Paso 3 — Vos verificás el pago desde el panel

Desde el detalle del pedido en tu panel, podés ver el comprobante enviado por el cliente y marcarlo como:

| Estado                   | Acción                                                       |
| ------------------------ | ------------------------------------------------------------ |
| **Pendiente**            | Estado inicial, el comprobante aún no fue enviado o revisado |
| **Comprobante recibido** | El cliente envió el comprobante, a la espera de verificación |
| **Verificado**           | Vos confirmaste que el pago fue recibido correctamente       |
| **Rechazado**            | El comprobante no corresponde o el pago no fue recibido      |

:::important La verificación del pago es manual
PediloFácil **no se integra con bancos ni plataformas de pago**. La verificación de transferencias es siempre manual: vos revisás el comprobante y marcás el pago como verificado o rechazado.
:::

## ¿Qué pasa si el cliente no envía el comprobante?

El pedido queda creado de todas formas. Desde el panel podés ver que el método de pago es transferencia y que el estado es "Pendiente" — esto te indica que tenés que hacer seguimiento con ese cliente.

## Configuración de datos bancarios

Los datos bancarios que el bot comparte con el cliente (CBU/CVU, alias, nombre del titular) se configuran en los ajustes de tu franquicia desde el panel.

:::tip Mantené actualizados los datos bancarios
Si cambiás de cuenta o de alias, actualizalos en el panel antes de que el bot los comparta con un cliente.
:::
