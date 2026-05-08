---
id: checkout-y-pedidos
title: Checkout y creación de pedidos
sidebar_position: 5
---

# Checkout y creación de pedidos

El checkout es el proceso final por el que el cliente confirma su pedido. El bot guía al cliente paso a paso.

## Inicio del checkout

El checkout comienza cuando el cliente dice que quiere confirmar o pagar. El bot verifica que el carrito no esté vacío y muestra el **resumen del pedido**:

- Listado de productos con cantidad y precio unitario
- Sabores elegidos (para helado a granel)
- Promociones aplicables y descuento estimado
- Subtotal y total estimado

En este momento también se validan:

- **Monto mínimo de pedido**: si el total no alcanza el mínimo configurado, el bot informa el monto mínimo y no permite continuar.
- **Disponibilidad de stock**: si algún producto quedó sin stock desde que fue agregado al carrito, el bot lo informa.

## Tipo de entrega

Si el cliente no eligió preferencia de entrega antes, el bot pregunta: ¿retiro en local o delivery?

- **Retiro en local**: el cliente pasa a buscar el pedido personalmente.
- **Delivery**: el bot pide la dirección y valida que esté dentro del radio de entrega habilitado. Se calcula y muestra el costo de envío.

## Método de pago

El bot pregunta si el cliente va a pagar en efectivo o con transferencia bancaria.

Ver detalles en [Medios de pago](./medios-de-pago).

## Aviso de demora estimada

Antes de confirmar, si el local tiene activada la **gestión de capacidad** y en ese momento hay cola de pedidos, el bot muestra un aviso con el tiempo estimado de espera:

> _⏰ En este momento tenemos alta demanda. El tiempo estimado de preparación es de aproximadamente **20 minutos**._

Este aviso es informativo. El cliente puede confirmar de todas formas o cancelar el checkout.

Ver cómo configurar los rangos de demora en [Capacidad y Demoras](../panel-administracion/capacidad-y-demoras).

## Confirmación final

El bot presenta el resumen completo (productos, entrega, pago, total con descuentos y envío si aplica) y pregunta al cliente si confirma.

**Flujo rápido**: si el cliente da el método de pago y confirma en el mismo mensaje (ej: "efectivo, dale confirmá"), el bot registra el pago y confirma el pedido de una sola vez, sin preguntas adicionales.

Si el cliente confirma:

1. Se crea el pedido en el sistema con estado **PENDIENTE**
2. El stock de los productos se descuenta inmediatamente
3. Se genera el comprobante PDF automáticamente
4. Recibís una notificación en tu panel de administración
5. El cliente recibe un mensaje de confirmación con el número de pedido

## Número de pedido

El número de pedido tiene el formato `{código-franquicia}-{número secuencial de 6 dígitos}`.

**Ejemplo**: `GRD-BEL-000023`

## Modificar el carrito durante el checkout

El cliente puede agregar, quitar o cambiar productos en cualquier paso del checkout sin necesidad de cancelar. El bot ejecuta la modificación y el checkout continúa automáticamente — no hace falta reiniciar el proceso.

**Ejemplo**: si durante el paso de pago el cliente dice "agregame un bombón más", el bot busca el producto, lo agrega al carrito y vuelve a preguntar el método de pago con el total actualizado.

## Cancelar el checkout

Si el cliente quiere abandonar el checkout por completo, puede decir "cancelar" o "no quiero". El bot cancela el proceso y vuelve al estado de exploración con el carrito intacto.

## ¿Qué pasa si el cliente no confirma?

Si el cliente no confirma el pedido dentro de los 15 minutos de inactividad del checkout, la sesión expira. El carrito se mantiene pero el checkout se cancela. El cliente puede reiniciarlo cuando quiera.

Los pedidos en estado **PENDIENTE** que llevan más de 5 minutos sin ser confirmados aparecen como alerta en tu Dashboard.

## Modificaciones post-confirmación

Una vez que el pedido está confirmado, no puede ser modificado por el cliente vía bot. Para cambios o cancelaciones, el cliente debe comunicarse directamente con vos y vos podés actualizar el estado desde el panel.
