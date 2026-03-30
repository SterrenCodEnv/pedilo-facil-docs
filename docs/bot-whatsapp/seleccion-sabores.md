---
id: seleccion-sabores
title: Selección de sabores
sidebar_position: 4
---

# Selección de sabores

Cuando un cliente pide un producto de **Helado por kilo** que tiene habilitada la selección de sabores, el bot inicia una etapa especial para que el cliente elija qué sabores quiere.

## ¿Cuándo aplica?

Solo aplica a productos de la categoría **Helado por kilo** (cuarto de kilo, medio kilo, kilo) que tengan la opción **"Permite selección de sabores"** activada en el inventario.

Productos como Tentaciones, Tortas o Palitos **no** usan este flujo — vienen con sabores fijos definidos.

## ¿Cómo funciona?

1. El cliente agrega un helado a granel al carrito (ej: "quiero un kilo de helado")
2. El bot entra al estado de selección de sabores
3. El bot muestra los sabores disponibles agrupados por categoría:
   - Cremas
   - Frutas a la crema
   - Frutas al agua
   - Chocolates
   - Cremas especiales
   - Dulces de leche
4. El cliente elige los sabores que quiere
5. El bot valida que se cumplan los mínimos y máximos configurados
6. Una vez confirmados los sabores, vuelve al estado de exploración normal

## Límites de sabores por producto

Cada producto tiene configurados sus propios límites:

| Ejemplo de producto | Mínimo | Máximo |
| ------------------- | ------ | ------ |
| ¼ kilo              | 1      | 1 o 2  |
| ½ kilo              | 1      | 2 o 3  |
| 1 kilo              | 1      | 4      |

Si el cliente elige menos sabores de los requeridos, el bot no avanza hasta que complete la selección. Si elige más de los permitidos, el bot lo informa.

## Proporciones

Cuando el cliente elige múltiples sabores, el sistema registra la proporción aproximada de cada uno. Si el cliente no indica proporciones específicas, se divide en partes iguales.

**Ejemplo**: kilo con 4 sabores → 25% cada uno (0.25 de proporción).

## Tiempo límite

El bot espera hasta **10 minutos** para que el cliente complete la selección de sabores. Si el cliente no responde en ese tiempo, la selección se cancela y el cliente debe iniciarla de nuevo agregando el producto al carrito.

## Sabores sin stock

Si un sabor está marcado como **Sin stock** o no está disponible, el bot no lo ofrece. El cliente solo ve y puede elegir los sabores actualmente disponibles.

## ¿El cliente puede cambiar los sabores?

Sí, mientras el pedido no esté confirmado, el cliente puede vaciar el carrito y volver a elegir. Una vez que el pedido está creado (estado PENDIENTE o superior), los sabores quedan fijos en el registro.

## Registro en el pedido y en el PDF

Los sabores elegidos quedan registrados en el detalle del ítem del pedido y aparecen en el comprobante PDF debajo del nombre del producto.
