---
id: sabores
title: Sabores
sidebar_position: 4
---

# Sabores

La sección de **Sabores** te permite gestionar el listado de sabores disponibles en tu local para los productos de helado a granel (**Helado por kilo**).

## ¿Para qué sirve?

Cuando un cliente pide un cuarto de kilo, medio kilo o un kilo de helado, el bot le pregunta qué sabores quiere. La lista que se muestra es exactamente la que vos configures en esta sección.

Solo aplica a productos de la categoría **Helado por kilo** que tengan activada la opción "Permite selección de sabores".

## Estado de un sabor

Cada sabor puede estar en uno de estos estados:

| Estado            | Descripción                         | ¿El bot lo ofrece?                         |
| ----------------- | ----------------------------------- | ------------------------------------------ |
| **Disponible**    | Sabor habilitado para pedir         | Sí                                         |
| **Sin stock**     | Sabor agotado temporalmente         | No                                         |
| **De temporada**  | Disponible solo en ciertos períodos | Depende de si está disponible para ordenar |
| **Discontinuado** | Retirado del catálogo               | No                                         |

:::important Si marcás un sabor como "Sin stock", el bot no lo ofrece
El cliente nunca verá un sabor que no esté disponible. Tu dashboard te alerta en el panel principal si hay sabores sin stock.
:::

## Categorías de sabores

Los sabores están organizados por categorías para que el bot los muestre de forma ordenada al cliente:

| Categoría             | Ejemplos                                             |
| --------------------- | ---------------------------------------------------- |
| **Cremas**            | Crema americana, Tramontana, Vainilla                |
| **Fruta a la crema**  | Frutilla, Frambuesa, Limón                           |
| **Fruta al agua**     | Limón, Naranja, Frutilla al agua                     |
| **Chocolates**        | Chocolate, Chocolate amargo, Brownie                 |
| **Cremas especiales** | Menta granizada, Fior di latte, Marrón glacé         |
| **Dulces de leche**   | Dulce de leche, Dulce de leche granizado, Reggianito |

## Datos de cada sabor

Cada sabor tiene:

- **Nombre** — El nombre como se muestra al cliente (ej: "Dulce de leche granizado")
- **Descripción** — Descripción opcional adicional
- **Categoría** — Una de las 6 categorías de sabores
- **Estado** — Disponible / Sin stock / De temporada / Discontinuado
- **Disponible para ordenar** — Interruptor rápido para activar/desactivar sin cambiar el estado
- **Alergenos**: Contiene leche / Contiene gluten / Es kosher
- **Control de stock** — Rastrea inventario / stock actual / stock ilimitado

## Control de stock de sabores

Al igual que los productos, los sabores pueden tener inventario rastreado. Cuando el stock de un sabor llega a cero con rastreo activado, el sistema lo marca automáticamente como **Sin stock**.

## Asociación con productos

Cada producto de **Helado por kilo** tiene su propio listado de sabores disponibles (una selección del catálogo general de sabores de tu franquicia). Esto te permite tener, por ejemplo:

- En el **cuarto de kilo** (minFlavors: 1, maxFlavors: 2): máximo 2 sabores
- En el **medio kilo** (maxFlavors: 3): hasta 3 sabores
- En el **kilo** (maxFlavors: 4): hasta 4 sabores

El bot respeta estas reglas automáticamente.
