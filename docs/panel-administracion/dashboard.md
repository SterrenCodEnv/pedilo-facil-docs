---
id: dashboard
title: Dashboard Principal
sidebar_position: 1
---

# Dashboard Principal

Al ingresar al panel de administración, lo primero que ves es el **dashboard**: una vista rápida del estado actual de tu local.

## Tarjetas de KPIs

En la parte superior del dashboard encontrás seis tarjetas con los indicadores más importantes del día:

| Indicador                    | Qué muestra                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| **Órdenes hoy**              | Cantidad total de órdenes recibidas en el día (todos los estados)           |
| **Pendientes / Confirmadas** | Órdenes que están esperando ser procesadas (estados PENDIENTE y CONFIRMADO) |
| **En preparación**           | Órdenes que ya marcaste como "En preparación"                               |
| **Facturación hoy**          | Suma total del monto de las órdenes del día (excluye canceladas)            |
| **Productos publicados**     | Cantidad de productos activos visibles para el bot                          |
| **Total productos**          | Cantidad total de productos registrados (incluye borradores y suspendidos)  |

## Órdenes activas por estado

Una vista rápida de cuántas órdenes tenés actualmente en cada estado:

- **Pendientes** — Esperando confirmación del cliente (se cancelan automáticamente si pasan más de 5 minutos sin confirmar)
- **Confirmadas** — El cliente confirmó el pedido, todavía no lo pusiste en preparación
- **En preparación** — Actualmente trabajando en el pedido
- **Listas** — Pedido terminado, aguardando que el cliente lo retire o lo reciba

## Alertas automáticas

El dashboard mostrará alertas cuando:

- Hay productos con **stock bajo** (igual o menor al umbral configurado, por defecto 5 unidades)
- Hay **sabores sin stock** (marcados como agotados)
- Hay **pedidos pendientes que están por vencer** (más de 5 minutos sin confirmar)
- El **número de WhatsApp no está verificado** o WhatsApp está deshabilitado

:::warning Pedidos pendientes que vencen
Si un cliente arma un carrito pero no confirma el pedido en 5 minutos, la orden queda en estado pendiente. El sistema te alerta cuando hay órdenes en esa situación para que las revises o canceles.
:::

## Distribución de productos por estado

Una barra o gráfico rápido que muestra cuántos productos tenés en cada estado (borrador, publicado, agotado, suspendido).

## Acceso rápido

Desde el dashboard podés navegar directamente a:

- **Pedidos** — Ver y procesar todas las órdenes
- **Inventario** — Gestionar productos
- **Sabores** — Gestionar el catálogo de sabores (para helados por kilo)
- **Promociones** — Configurar ofertas y descuentos
- **Leads** — Ver clientes potenciales captados
- **Analíticas** — Reportes completos de tu local
