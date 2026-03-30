---
id: leads
title: Leads
sidebar_position: 6
---

# Leads

Los **leads** son registros de potenciales clientes que interactuaron con tu local de alguna manera. PediloFácil captura leads automáticamente desde WhatsApp y también te permite crear registros manualmente.

## ¿Para qué sirve?

El módulo de Leads te permite:

- Saber qué clientes se contactaron pero no compraron
- Dar seguimiento a clientes interesados
- Registrar el progreso de la conversación (contactado, calificado, convertido)
- Identificar clientes con alta prioridad para hacer seguimiento manual

## Fuentes de leads

| Fuente       | Descripción                                                              |
| ------------ | ------------------------------------------------------------------------ |
| **WhatsApp** | Creado automáticamente cuando alguien inicia una conversación con el bot |
| **Manual**   | Creado por el dueño del local desde el panel                             |

Cada vez que alguien manda un mensaje por WhatsApp por primera vez, el sistema crea automáticamente un lead **Nuevo** con el número de teléfono del cliente. Si el cliente ya existía, el lead queda vinculado a su historial.

## Estados del lead

Los leads siguen este flujo de progresión:

```
NUEVO → CONTACTADO → CALIFICADO → PEDIDO REALIZADO → CONVERTIDO
                                                    ↘ PERDIDO
```

| Estado               | Cuándo se usa                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| **Nuevo**            | Recién llegó, todavía no hubo seguimiento                                                        |
| **Contactado**       | Alguien del local se puso en contacto (fecha de último contacto se registra automáticamente)     |
| **Calificado**       | El cliente tiene interés real y fue identificado como potencial comprador                        |
| **Pedido realizado** | El cliente hizo al menos un pedido                                                               |
| **Convertido**       | El cliente fue convertido en cliente frecuente (fecha de conversión se registra automáticamente) |
| **Perdido**          | El cliente ya no tiene interés o no respondió                                                    |

## Prioridades

Cada lead puede tener una prioridad asignada:

| Prioridad   | Uso sugerido                                                          |
| ----------- | --------------------------------------------------------------------- |
| **Baja**    | Lead frío, no requiere atención inmediata                             |
| **Media**   | Lead activo, seguimiento en los próximos días                         |
| **Alta**    | Lead con intención de compra clara                                    |
| **Urgente** | Requiere atención inmediata (ej: cliente con queja o pedido especial) |

## Información de cada lead

Cada ficha de lead puede contener:

- **Teléfono** — Número de WhatsApp del cliente
- **Nombre** — Si el cliente lo registró con el bot
- **Email** — Si se obtuvo
- **Mensaje** — El mensaje inicial o comentario del cliente
- **Fuente** — WhatsApp o Manual
- **Estado** — Nuevo / Contactado / Calificado / etc.
- **Prioridad** — Baja / Media / Alta / Urgente
- **Producto de interés** — Si el lead surgió consultando un producto específico
- **Pedido asociado** — Si el lead eventualmente hizo un pedido
- **Fecha de último contacto** — Se actualiza automáticamente cuando se pasa a "Contactado"
- **Fecha de conversión** — Se registra automáticamente cuando se marca como "Convertido"

## Leads automáticos desde WhatsApp

El flujo automático de un lead desde WhatsApp es aproximadamente este:

1. Cliente manda mensaje → lead creado como **Nuevo**
2. Bot interactúa y cliente muestra interés / agrega al carrito → puede avanzar a **Calificado**
3. Cliente confirma un pedido → avanza a **Pedido realizado**
4. Cliente se convierte en cliente frecuente → podés marcarlo como **Convertido**

## Filtros disponibles

En el panel podés filtrar leads por:

- Estado (uno o varios)
- Fuente (WhatsApp / Manual)
- Prioridad
- Rango de fechas

## Relación con las analíticas

En la sección **Analíticas**, podés ver la distribución de leads por estado: cuántos hay en cada etapa del embudo de conversión.
