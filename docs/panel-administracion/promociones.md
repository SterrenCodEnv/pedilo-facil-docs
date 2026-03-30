---
id: promociones
title: Promociones
sidebar_position: 5
---

# Promociones

Desde la sección de **Promociones** podés crear descuentos y ofertas que el bot aplica automáticamente a los pedidos de tus clientes.

## ¿Cómo funciona?

Las promociones se aplican en dos momentos:

1. **Durante el checkout (estimación)** — El bot muestra al cliente el descuento estimado antes de confirmar el pedido.
2. **Al crear el pedido** — Se aplican con la lógica final y se reflejan en el PDF y en el panel.

No hace falta que el cliente ingrese un código. El sistema detecta automáticamente qué promociones aplican según el contenido del carrito.

## Tipos de promoción

### X por Y (ej: 3x2, 2x1)

El cliente paga menos unidades de las que lleva. La promoción descuenta las unidades más baratas del grupo.

**Ejemplo**: "3x2 en Postres" — si el cliente lleva 3 postres, paga solo 2. Si lleva 6, paga 4.

Configurás:

- Cantidad que lleva el cliente (ej: 3)
- Cantidad que paga (ej: 2)
- Cantidad mínima requerida para activar
- A qué aplica (toda la tienda / categorías / productos específicos)

---

### Descuento porcentual (ej: 30% OFF)

Se aplica un porcentaje de descuento sobre el subtotal de los productos incluidos.

**Ejemplo**: "50% OFF en Tortas" — si el cliente lleva una torta de $25.000, paga $12.500.

Configurás:

- Porcentaje de descuento
- Cantidad mínima de unidades para activar
- A qué aplica (toda la tienda / categorías / productos específicos)

---

### Precio fijo para combo

Un conjunto de productos a un precio fijo total.

**Ejemplo**: "2 cucuruchos + 1 pote familiar = $18.900" — independientemente de los precios individuales.

Configurás:

- El precio fijo del combo
- Los productos que componen el combo (via campo `comboItems`)

---

### Cantidad fija a precio fijo

Se ofrece una cantidad específica de un producto a un precio especial.

**Ejemplo**: "2 kilos de helado a $22.000" — si el cliente pide exactamente 2kg, paga ese precio en vez del precio regular.

Configurás:

- La cantidad objetivo (ej: 2.0 kg)
- El precio fijo (ej: $22.000)
- A qué aplica (toda la tienda / categorías / productos específicos)

---

## Alcance de una promoción

Cada promoción puede aplicar a:

| Alcance                   | Descripción                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| **Toda la tienda**        | Aplica a todos los productos del carrito                                 |
| **Categorías**            | Aplica solo a las categorías que seleccionés (ej: solo TORTAS y POSTRES) |
| **Productos específicos** | Aplica solo a los productos que seleccionés por nombre                   |

## Vigencia y estado

Cada promoción tiene fecha de inicio y fecha de fin. Los posibles estados son:

| Estado         | Descripción                                                          |
| -------------- | -------------------------------------------------------------------- |
| **Activa**     | Vigente y aplicándose en este momento                                |
| **Inactiva**   | Deshabilitada manualmente (no aplica aunque esté en rango de fechas) |
| **Programada** | La fecha de inicio está en el futuro                                 |
| **Vencida**    | La fecha de fin ya pasó                                              |

## Opciones avanzadas

- **Prioridad** — Si hay varias promociones aplicables al mismo carrito, la de mayor prioridad se aplica primero.
- **Acumulable** — Si está marcada, puede combinarse con otras promociones. Si no, solo se aplica la de mayor prioridad.

## ¿El bot menciona las promociones?

Sí. El bot tiene acceso a las promociones activas de tu franquicia y puede mencionarlas en la conversación. Si el cliente pregunta "¿tienen alguna promo?", el bot le informa las vigentes.

Además, al mostrar el resumen del carrito antes de confirmar, el bot muestra el descuento estimado desglosado.

## Las promociones en el PDF y en el panel

El pedido confirmado muestra en el comprobante PDF cada promoción aplicada con el monto descontado. En el panel, el detalle de la orden también muestra las promociones aplicadas.

En la sección **Analíticas**, podés ver cuánto descuento total otorgaste, el descuento promedio por pedido y cuáles fueron las 5 promociones más usadas en el período.
