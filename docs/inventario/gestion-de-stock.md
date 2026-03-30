---
id: gestion-de-stock
title: Gestión de stock
sidebar_position: 3
---

# Gestión de stock

PediloFácil incluye un sistema de control de stock para productos y sabores. Podés elegir controlar el inventario de forma precisa o simplemente marcar productos como disponibles o no.

## Tipos de inventario

### Stock rastreado

Cuando un producto tiene **"Rastrea inventario"** activado, el sistema descuenta automáticamente las unidades vendidas y puede alertarte cuando el stock es bajo.

**Flujo automático**:

1. Cliente confirma un pedido → stock se descuenta inmediatamente
2. Si el pedido se cancela → stock se repone automáticamente
3. Si el stock llega a cero → el producto pasa automáticamente al estado **Agotado**

### Stock ilimitado

Para productos de producción continua (o cuando no necesitás controlar el stock), podés marcar el producto como **"Stock ilimitado"**. En este caso, el sistema nunca descuenta ni alerta por stock bajo.

Útil para productos que siempre tenés disponibles, como cucuruchos o materias primas.

## Umbral de stock bajo

Cada producto tiene un **umbral de stock bajo** (por defecto: 5 unidades). Cuando el stock disponible cae por debajo de ese umbral, el producto aparece como alerta en el **Dashboard** bajo la categoría "Productos con stock bajo".

Podés personalizar el umbral de cada producto según tu operación (ej: para un producto que vendés de a docenas, quizás el umbral debería ser 24).

## Stock de sabores

Los sabores del helado a granel también tienen control de stock independiente:

- Si el stock de un sabor llega a cero, se marca automáticamente como **Sin stock**
- El bot no ofrece sabores sin stock
- El Dashboard te alerta sobre sabores sin stock

## Alertas en el Dashboard

El panel principal muestra en tiempo real:

| Alerta                       | Descripción                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| **Productos con stock bajo** | Productos cuyo stock cayó por debajo del umbral configurado |
| **Sabores sin stock**        | Sabores con stock en cero (no disponibles en el bot)        |

## Ajuste manual de stock

Podés actualizar el stock de cualquier producto o sabor manualmente desde su ficha en el panel. Esto es útil para:

- Ajuste después de un inventario físico
- Corrección de errores
- Ingreso de nuevo stock

## Impacto en el bot

El bot nunca ofrece productos ni sabores sin stock disponible:

- **Producto agotado** → el bot no lo muestra ni lo recomienda
- **Sabor sin stock** → el bot no lo ofrece en la selección de sabores
- **Stock insuficiente** → si el cliente quiere 3 unidades pero solo hay 2, el bot informa el stock disponible

## Productos sin control de inventario

Si desactivás "Rastrea inventario" en un producto (y no es "Stock ilimitado"), el producto se muestra siempre disponible sin importar el stock. Usá esta opción solo si manejás el stock fuera del sistema.
