---
id: busqueda-inteligente
title: Búsqueda inteligente de productos
sidebar_position: 3
---

# Búsqueda inteligente de productos

El bot usa inteligencia artificial para entender lo que el cliente busca, incluso cuando no sabe el nombre exacto del producto.

## ¿Cómo funciona?

En lugar de buscar por palabras clave exactas, el sistema analiza el **significado semántico** de la consulta del cliente y lo compara con el contexto completo de cada producto (nombre, descripción, categoría, alergenos, porciones, etc.).

## Ejemplos de búsquedas que el bot entiende

| Consulta del cliente                         | Lo que el bot puede encontrar                                              |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| "algo para regalo"                           | Tortas heladas, bombones, Casatta                                          |
| "quiero helados sin lactosa para 5 personas" | Líneas especiales, sorbetes al agua, productos sin leche marcados como tal |
| "algo para los chicos"                       | Palitos, cucuruchos, tentaciones individuales                              |
| "quiero armar una picada dulce"              | Bombones variados, pote familiar                                           |
| "cuánto sale un kilo de dulce de leche"      | Helado por kilo, sabor dulce de leche                                      |
| "algo vegano"                                | Productos marcados como veganos en el inventario                           |
| "sin TACC"                                   | Productos marcados como sin gluten                                         |

## Lo que el bot **no** hace

- **No inventa productos**: si no hay stock de algo que el cliente busca, el bot informa que no está disponible y sugiere alternativas.
- **No ofrece productos fuera de stock**: solo muestra productos con el estado **Publicado** y disponibles para ordenar.

## Búsqueda por sabor

Además de la búsqueda general, el cliente puede buscar específicamente por sabor:

- "¿Tienen dulce de leche granizado?"
- "Quiero algo de chocolate"
- "Tienen frutilla al agua?"

El bot busca en el catálogo de sabores y en los productos que contienen ese sabor.

## Cuántos resultados muestra

El bot devuelve los **8 productos más relevantes** para cada búsqueda. Si hay muchos resultados, el bot agrupa o prioriza los más relevantes.

## ¿Cómo mejorar los resultados de búsqueda?

La calidad de la búsqueda depende directamente de los datos que cargues en cada producto:

- **Descripciones completas**: cuanto más descriptivo, mejor
- **Alergenos marcados correctamente**: el cliente que busca "sin lactosa" o "sin gluten" solo encontrará productos que tengan esos campos marcados
- **Porciones y grammage**: si está cargado, el bot puede responder consultas como "algo para 10 personas"
- **Tags**: etiquetas como "vegano", "sin-TACC", "diabético", "regalo"

:::tip El bot no lee la mente, lee los datos
Si un producto es "sin lactosa" pero no tiene marcado el campo "Contiene leche: No", el bot no podrá recomendarlo en esa búsqueda. Completá bien los datos de cada producto.
:::
