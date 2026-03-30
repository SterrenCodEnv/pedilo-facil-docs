---
id: delivery
title: Delivery
sidebar_position: 7
---

# Delivery

El bot puede gestionar pedidos con entrega a domicilio. Cada franquicia configura sus propias reglas de delivery desde el panel.

## Configuración de delivery

Desde los ajustes de tu franquicia podés definir:

| Configuración                       | Descripción                                                                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Monto mínimo de pedido**          | El total mínimo que debe alcanzar un pedido para poder solicitarse con delivery. Si el pedido no llega al mínimo, el bot informa al cliente.             |
| **Radio de entrega (km)**           | La distancia máxima desde tu local a la que hacés entregas. Si la dirección del cliente está fuera de ese radio, el bot informa que no llegás hasta ahí. |
| **Costo de envío**                  | El monto fijo que se suma al total del pedido para delivery. Se muestra al cliente antes de confirmar.                                                   |
| **Peso mínimo del pedido (gramos)** | Si existen limitaciones por peso mínimo para que valga la pena el envío.                                                                                 |
| **Peso máximo del pedido (gramos)** | Si hay un límite máximo de peso por capacidad de entrega.                                                                                                |

## ¿Cómo valida el bot la dirección?

Cuando el cliente escribe su dirección, el sistema la geocodifica (convierte a coordenadas geográficas) y calcula la distancia desde la dirección de tu local. Si la distancia supera el radio configurado, el bot informa al cliente y no permite continuar con delivery.

## Flujo de delivery en la conversación

1. El cliente elige **delivery** como tipo de entrega
2. El bot pide la dirección de entrega
3. El cliente escribe su dirección
4. El sistema valida:
   - ¿Está dentro del radio de entrega?
   - ¿El monto del pedido supera el mínimo?
   - ¿El peso del pedido está dentro de los límites?
5. Si todo está bien: el bot confirma la dirección y muestra el costo de envío que se sumará al total
6. Si algo no cumple: el bot explica el problema (ej: "Tu dirección está a más de los X km de nuestro radio de entrega")

## Delivery vs Retiro en el comprobante

El tipo de entrega (delivery o retiro) queda registrado en el pedido y figura en el comprobante PDF.

## Análisis de delivery

En la sección **Analíticas** podés ver la proporción de pedidos con delivery versus retiro en local en cualquier período de tiempo.

## Horarios de delivery

Los horarios en que aceptás delivery son parte de la configuración general de horarios de atención de tu franquicia. El bot informa al cliente si intenta hacer un pedido con delivery fuera de los horarios habilitados.

:::tip Si no hacés delivery, lo podés deshabilitar
Si tu local solo acepta retiro en local, podés configurar la franquicia para no ofrecer delivery. En ese caso, el bot no pregunta por el tipo de entrega y asume siempre retiro.
:::
