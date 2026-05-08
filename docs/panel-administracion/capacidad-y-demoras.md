---
id: capacidad-y-demoras
title: Capacidad y Demoras
sidebar_position: 8
---

# Capacidad y Demoras

La función de **Capacidad y Demoras** te permite informar automáticamente a los
clientes cuánto tiempo estimado de espera tienen cuando hay cola de pedidos, sin
que vos tengas que hacer nada manualmente.

## ¿Cómo funciona?

Cuando un cliente está a punto de confirmar un pedido (tanto desde el bot de
WhatsApp como desde el carrito web), el sistema consulta cuántos pedidos activos
hay en ese momento (estados PENDIENTE, CONFIRMADO, EN PREPARACIÓN y LISTO). Luego
compara esa cantidad contra los rangos que vos configuraste y calcula cuántos
minutos de demora tiene el pedido.

Si hay demora estimada:

- En el **bot de WhatsApp**: el mensaje de confirmación del pedido incluye el tiempo estimado de espera.
- En el **carrito web**: aparece un aviso naranja con el tiempo estimado antes de que el cliente confirme.

Si no hay demora (pocos pedidos en cola o la función está desactivada), el flujo
es el mismo de siempre, sin ningún mensaje adicional.

## Activar la gestión de capacidad

Por defecto, la gestión de capacidad está **desactivada**. Para activarla:

1. Entrá a **Configuración → Capacidad y Demoras** en tu panel de administración.
2. Activá la opción **Gestión de capacidad habilitada**.
3. Configurá los rangos de demora (ver abajo).
4. Guardá los cambios.

## Configurar los rangos de demora

Los rangos de demora definen cuántos minutos de espera corresponden a cada
cantidad de pedidos activos. Se configuran como un JSON con pares
`cantidad_de_pedidos: minutos_de_demora`.

### Ejemplo de configuración

```json
{
  "3": 10,
  "6": 20,
  "10": 35
}
```

Esto significa:

| Pedidos activos | Demora estimada                                  |
| --------------- | ------------------------------------------------ |
| 0 – 2           | Sin demora (por debajo del primer umbral)        |
| 3 – 5           | ~10 minutos                                      |
| 6 – 9           | ~10 a 20 minutos (interpolado según la cantidad) |
| 10 o más        | ~35 minutos (o más, según la extrapolación)      |

:::tip Interpolación lineal
Entre dos umbrales, el sistema interpola linealmente. Por ejemplo, con la
configuración de arriba, si hay 8 pedidos activos el tiempo estimado sería
de aproximadamente 28 minutos (entre 20 y 35).
:::

### Deshabilitar la notificación de demora

Si querés activar la gestión de capacidad (para usar el conteo) pero **no**
enviar el mensaje de demora al cliente, podés desactivar la opción
**Notificación de demora habilitada**. El sistema igual calculará la demora
internamente pero no se la comunicará al cliente.

## Notificación al confirmar un pedido

Cuando un cliente confirma un pedido y hay demora estimada, recibe automáticamente
un mensaje por WhatsApp similar a:

> _Tu pedido fue confirmado. En este momento tenemos alta demanda — el tiempo estimado de preparación es de aproximadamente **20 minutos**. ¡Gracias por tu paciencia!_

Este mensaje se envía solo si:

- La gestión de capacidad está activada (`capacity_enabled = true`).
- La notificación de demora está activada (`capacity_delay_notification_enabled = true`).
- El cálculo da un tiempo de demora mayor a cero.

## Preguntas frecuentes

**¿Qué pasa si cambio la configuración en el medio del día?**
Los cambios se aplican en tiempo real. El próximo pedido que se confirme usará
los nuevos rangos.

**¿Afecta el conteo de pedidos a los de días anteriores?**
No. Solo se cuentan los pedidos con estados activos en ese momento: PENDIENTE,
CONFIRMADO, EN PREPARACIÓN y LISTO, sin importar la fecha de creación.

**¿Se puede desactivar sin perder los rangos configurados?**
Sí. Si desactivás **Gestión de capacidad habilitada**, los rangos quedan guardados
y podés volver a activarla cuando quieras sin reconfigurarlos.
