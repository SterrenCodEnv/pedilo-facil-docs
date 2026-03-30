---
id: restricciones-dieteticas
title: Restricciones dietéticas
sidebar_position: 8
---

# Restricciones dietéticas

El bot puede ayudar a clientes con necesidades alimentarias especiales a encontrar productos adecuados para ellos. La información que muestra el bot proviene directamente de los datos que cargás en cada producto del inventario.

## Tipos de restricciones que el bot maneja

| Restricción                         | Campo del producto    | Ejemplo de consulta del cliente                            |
| ----------------------------------- | --------------------- | ---------------------------------------------------------- |
| **Sin lactosa / Sin leche**         | Contiene leche: No    | "Necesito algo sin lactosa" / "Soy intolerante a la leche" |
| **Sin gluten / Sin TACC / Celíaco** | Contiene gluten: No   | "¿Tienen algo sin gluten?" / "Soy celíaco"                 |
| **Vegano**                          | Es vegano: Sí         | "Quiero algo vegano" / "Sin productos de origen animal"    |
| **Sin azúcar**                      | Es sin azúcar: Sí     | "Soy diabético, ¿qué tienen?" / "Necesito sin azúcar"      |
| **Bajo en azúcar**                  | Es bajo en azúcar: Sí | "Algo reducido en azúcar"                                  |
| **Kosher**                          | Es kosher: Sí         | "¿Tienen certificación kosher?"                            |

## ¿Cómo filtra el bot?

El bot usa búsqueda semántica combinada con los filtros de los campos técnicos del producto. Si un cliente dice "tengo celíacos en casa", el bot busca productos con el campo **Contiene gluten: No** marcado.

## Responsabilidad del dueño: cargar los datos correctamente

:::warning Los filtros solo funcionan si los datos están cargados
Si cargás un producto que no contiene gluten pero dejás el campo "Contiene gluten" en blanco o en "Sí", el bot **no podrá recomendarlo** a clientes celíacos.

De la misma manera, si marcás incorrectamente que un producto "no contiene gluten" cuando sí lo contiene, podrías generar un problema serio para un cliente con enfermedad celíaca.
:::

## El bot siempre aclara al cliente

Además de filtrar los productos, el bot incluye aclaraciones al cliente:

- Cuando recomienda productos por restricción dietética, aclara que se basa en la información del catálogo del local.
- El bot no garantiza composición exacta — eso es responsabilidad del fabricante (en este caso, Grido).

## Sabores y restricciones

Los sabores también tienen campos de alergenos (Contiene leche / Contiene gluten / Kosher). Cuando el cliente está seleccionando sabores para helado a granel y tiene una restricción dietética, podés configurar los sabores para que aparezcan o no según disponibilidad.

## Categorías con mayor probabilidad de cumplir restricciones

| Restricción           | Categorías a revisar                                    |
| --------------------- | ------------------------------------------------------- |
| Sin lactosa           | Líneas especiales, Frizzio (congelados), Frutas al agua |
| Sin gluten / Sin TACC | Líneas especiales (verificar uno a uno)                 |
| Vegano                | Líneas especiales, Frutas al agua                       |
| Sin azúcar            | Líneas especiales (productos "sin azúcar" de Grido)     |

:::tip Completá los campos de alergenos en todos tus productos
Es una buena práctica tener completos los campos de alergenos en cada producto. Ayuda a los clientes con restricciones a hacer pedidos con confianza y mejora la experiencia del bot.
:::
