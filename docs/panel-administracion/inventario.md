---
id: inventario
title: Inventario de Productos
sidebar_position: 3
---

# Inventario de Productos

La sección de **Inventario** te permite gestionar todos los productos que ofrece tu local: agregar nuevos, editar precios, controlar el stock y definir cuáles están disponibles para el bot.

## Estados de un producto

Cada producto puede estar en uno de estos cuatro estados:

| Estado         | Qué significa                                          | ¿El bot lo muestra?      |
| -------------- | ------------------------------------------------------ | ------------------------ |
| **Borrador**   | En construcción, todavía no está listo para publicar   | No                       |
| **Publicado**  | Disponible para pedidos, visible en el bot de WhatsApp | Sí                       |
| **Agotado**    | Sin stock, no se puede ordenar temporalmente           | No (el bot no lo ofrece) |
| **Suspendido** | Deshabilitado por el dueño                             | No                       |

:::important Solo los productos PUBLICADOS son atendidos por el bot
Si un producto está en borrador o suspendido, el bot no lo encontrará aunque el cliente lo pida explícitamente.
:::

## Categorías de productos Grido

Los productos están organizados por las categorías del catálogo oficial Grido:

| Categoría             | Qué incluye                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| **Tentación**         | Potes individuales 1L (Chocolate, Dulce de leche, Frutilla, etc.)                 |
| **Familiar**          | Potes 3L familiares (Pote 3L Nº1, Nº2, Nº3, Nº4)                                  |
| **Tortas**            | Tortas heladas (Torta Grido, Cookies and Cream, Frutillas con crema)              |
| **Bombones**          | Bombones (Crocante, Suizo, Escocés, Frutezza, Alfajor Secreto)                    |
| **Postres**           | Postres (Casatta, Almendrado, Crocantino, Delicia)                                |
| **Palitos**           | Palitos helados (Frutal, Cremoso, Bombón — disponibles en x1, x10 y x20 unidades) |
| **Frizzio**           | Pizzas, empanadas, bastoncitos y pechuguitas congeladas                           |
| **Helado por kilo**   | Helado a granel (1kg, ½kg, ¼kg) — permite que el cliente elija sabores            |
| **Cucuruchos**        | Cucuruchos y tacitas (packaging para helado artesanal)                            |
| **Líneas especiales** | Sin azúcar, veganos, yogurt helado y otros productos especiales                   |
| **Congelados**        | Frutas congeladas bañadas en chocolate (frambuesas, frutillas)                    |
| **Materia prima**     | Mermeladas, dulces y materias primas para elaboración                             |

## Datos de cada producto

Cada producto almacena la siguiente información:

### Información básica

- **Nombre** — El nombre completo del producto (ej: "Palito Frutal Frutilla x20uni")
- **Descripción** — Descripción detallada del producto
- **Precio** — Precio en pesos ARS
- **Categoría** — Una de las 12 categorías Grido
- **Imágenes** — Fotos del producto (se almacenan en la nube)

### Datos nutricionales y alergenos

- **Contiene leche** — Para filtros de clientes con intolerancia a la lactosa
- **Contiene gluten** — Para filtros de clientes celíacos / sin TACC
- **Es kosher** — Para filtros específicos
- **Es vegano** — Para clientes veganos
- **Sin azúcar / Bajo en azúcar** — Para clientes diabéticos o en dieta

### Datos del catálogo Grido

- **ID externo** — El código Id CG del Excel de Grido
- **Volumen (ml)** — Capacidad del producto
- **Peso (gramos)** — Peso del producto
- **Porciones** — Cuántas personas rinde el producto
- **Unidades por paquete** — Cuántas unidades trae el pack (ej: 20 palitos)
- **Puntos de fidelización** — Puntos del programa Grido

### Configuración de sabores (solo para Helado por kilo)

- **Permite selección de sabores** — Si el cliente puede elegir sabores al hacer el pedido
- **Mínimo de sabores** — Cuántos sabores mínimo debe elegir (ej: 1)
- **Máximo de sabores** — Cuántos sabores máximo puede elegir (ej: 4 en 1kg)

### Control de stock

- **Rastrea inventario** — Si el sistema debe descontar unidades al recibir pedidos
- **Stock actual** — Unidades disponibles
- **Umbral de stock bajo** — Cantidad a partir de la cual te alerta (por defecto: 5)
- **Stock ilimitado** — Para productos de producción continua donde no necesitás controlar stock

## Disponibilidad para pedidos

Cada producto tiene además un interruptor **"Disponible para ordenar"**. Si lo desactivás, el bot no ofrecerá ese producto aunque esté publicado (útil para suspender temporalmente un producto sin cambiar su estado).

## Cómo el bot encuentra los productos

El bot usa búsqueda semántica con inteligencia artificial. Cuando el cliente dice "quiero helados sin lactosa para 10 personas", el sistema analiza el contexto completo de cada producto (nombre, descripción, categoría, sabores, alergenos, porciones, stock) para encontrar los más relevantes.

Esto significa que los campos que cargues en cada producto **impactan directamente en qué tan bien el bot puede recomendar ese producto**.

:::tip Cargá bien las descripciones y los alergenos
Cuanto más completa esté la información del producto, mejor será la experiencia de tus clientes con el bot. Especialmente los campos de alergenos, porciones y si es vegano o sin azúcar.
:::
