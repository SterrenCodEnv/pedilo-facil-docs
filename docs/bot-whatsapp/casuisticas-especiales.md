---
id: casuisticas-especiales
title: Casos especiales
sidebar_position: 9
---

# Casos especiales

Esta sección describe situaciones específicas que pueden ocurrir en las conversaciones del bot y cómo se manejan.

## El cliente pregunta por algo que no existe

Si el cliente busca un producto que no está en el catálogo publicado de tu local, el bot responde honestamente que no lo tiene disponible. No inventa productos ni precios. El bot puede sugerir alternativas similares si las hay.

**Ejemplo**: "¿Tienen helado de pistacho?" → El bot responde que no está disponible y puede sugerir otros sabores de crema especial.

---

## El cliente quiere hablar con una persona

Si el cliente dice "quiero hablar con una persona", "necesito atención humana", "no me está ayudando el bot" o frases similares, el bot envía una señal de **solicitud de contacto humano**.

En ese momento:

- El cliente recibe un mensaje informando que en breve lo van a contactar
- Vos recibís una notificación en tu panel para que tomes la conversación manualmente
- El bot deja de responder activamente a ese cliente hasta que se resuelva

---

## El cliente escribe fuera del horario de atención

El bot conoce los horarios de atención configurados para tu local. Si el cliente escribe fuera de ese horario, el bot informa los horarios y puede tomar el mensaje para que lo gestiones cuando abras. No puede crear pedidos fuera del horario.

---

## El cliente tiene un reclamo o queja

Si el bot detecta que el cliente está realizando un reclamo o expresando insatisfacción (queja sobre un pedido anterior, producto en mal estado, demora, etc.), escala automáticamente a atención humana. El bot no intenta resolver quejas por sí mismo.

---

## El cliente quiere cambiar algo durante el checkout

El cliente puede modificar el carrito en cualquier paso del checkout sin cancelar. Si dice "agregame un bombón" o "sacá la torta", el bot ejecuta el cambio y sigue en el mismo paso del checkout con el total actualizado.

Si el cliente quiere cancelar el checkout por completo, puede hacerlo en cualquier momento antes de confirmar. El carrito se mantiene intacto y puede reiniciar el checkout cuando quiera.

---

## El cliente intenta pedir un producto con stock insuficiente

Si un producto tiene rastreo de inventario activo y el cliente intenta agregar más unidades de las disponibles, el bot informa el stock disponible y pregunta cuántas unidades quiere el cliente dentro de lo disponible.

---

## El cliente no completa la selección de sabores

Si el cliente agrega un helado a granel al carrito pero no completa la selección de sabores en 10 minutos, el estado de "esperando sabores" expira. El bot informa al cliente que debe volver a agregar el producto para elegir los sabores.

---

## El cliente modifica el pedido después de confirmar

Una vez confirmado, el pedido no puede modificarse a través del bot. Si el cliente quiere cambiar algo, debe comunicarse directamente con vos. Vos podés cancelar el pedido desde el panel si fuera necesario.

---

## El número está en la lista negra

Si un número de teléfono está incluido en la lista de teléfonos bloqueados (por abuso, spam u otro motivo), el bot no responde a esos mensajes. Podés gestionar la lista negra desde el panel.

---

## El cliente envía imágenes o archivos

Con excepción de los comprobantes de transferencia bancaria (que se solicitan en el flujo de pago), el bot no procesa imágenes ni archivos enviados por el cliente. El bot responde al texto.

---

## El cliente escribe en otro idioma

El bot responde en español rioplatense. Si el cliente escribe en otro idioma, el bot intenta entender el mensaje y responde en español.
