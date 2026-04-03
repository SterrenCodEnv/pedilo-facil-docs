---
id: flujo-de-conversacion
title: Flujo de conversación
sidebar_position: 2
---

# Flujo de conversación

El bot guía al cliente por un flujo estructurado de pasos para armar y confirmar su pedido. Cada mensajes del cliente puede avanzar, retroceder o mantenerse en la misma etapa según lo que el bot necesita para completar el pedido.

## Etapas de la conversación

```
1. REGISTRO DEL NOMBRE
   ↓
2. PREFERENCIA DE ENTREGA
   ↓
3. EXPLORACIÓN Y ARMADO DEL CARRITO
   ↓
   (si hay helado a granel: SELECCIÓN DE SABORES)
   ↓
4. INICIO DEL CHECKOUT
   ↓
5. TIPO DE ENTREGA (si no fue elegido antes)
   ↓
   (si es delivery: DIRECCIÓN DE ENTREGA)
   ↓
6. MÉTODO DE PAGO
   ↓
7. CONFIRMACIÓN FINAL
   ↓
   ✅ PEDIDO CREADO
```

---

### 1. Registro del nombre

Cuando alguien escribe por primera vez, el bot le pregunta cómo se llama. Es un paso obligatorio antes de avanzar porque el nombre se registra en el comprobante PDF y en el pedido.

El bot ignora saludos ("hola"), emojis o números — solo acepta un nombre real.

**Detección de intención desde el primer mensaje**: si el cliente escribe "quiero un kilo de dulce de leche" en el primer mensaje, el bot registra esa intención y la retoma después de pedir el nombre.

---

### 2. Preferencia de entrega

Una vez registrado el nombre, el bot pregunta si el cliente prefiere **retiro en local** o **delivery a domicilio** como preferencia general. Esta preferencia queda guardada para futuras conversaciones del mismo número.

---

### 3. Exploración y armado del carrito

El cliente puede:

- Pedir productos específicos ("quiero 2 cucuruchos de chocolate")
- Buscar por descripción ("algo para regalo sin gluten")
- Preguntar por categorías ("¿qué tortas tienen?")
- Ver el carrito actual
- Quitar productos del carrito
- Vaciar el carrito
- Consultar las promociones vigentes

El bot muestra los productos disponibles con nombre, precio y una breve descripción. El cliente elige qué agregar.

---

### 3b. Selección de sabores (solo para helado a granel)

Si el cliente agrega un producto del tipo **Helado por kilo** que requiere selección de sabores, la conversación entra en un estado especial.

El bot muestra los sabores disponibles agrupados por categoría y espera que el cliente elija. Tiene un límite de tiempo de **10 minutos**: si el cliente no elige los sabores en ese lapso, el sistema cancela esa selección y el cliente debe volver a iniciarla.

Ver más en [Selección de sabores](./seleccion-sabores).

---

### 4. Inicio del checkout

Cuando el cliente dice que quiere confirmar su pedido (o cuando el bot detecta que está listo), se inicia el checkout. El bot muestra un resumen del carrito con:

- Todos los productos y cantidades
- Sabores elegidos (para helado a granel)
- Promociones aplicadas y descuento estimado
- Subtotal y total estimado

---

### 5. Tipo de entrega y dirección

Si el cliente no indicó su preferencia, el bot pregunta si prefiere retiro o delivery. Si elige delivery, pide la dirección. El sistema valida que la dirección esté dentro del radio de entrega habilitado por tu local.

---

### 6. Método de pago

El bot pregunta si el cliente va a pagar en efectivo o con transferencia. Ver más en [Medios de pago](./medios-de-pago).

---

### 7. Confirmación final

El bot presenta el resumen completo del pedido y pregunta al cliente si confirma o quiere modificar algo. Si confirma, el pedido se crea y:

- Se genera el comprobante PDF
- Recibís una notificación en tu panel
- El cliente recibe confirmación y el número de pedido

---

## Tiempo de expiración de sesión

Los estados del checkout tienen un tiempo límite de **15 minutos de inactividad**. Si el cliente no responde y la sesión expira, el carrito se mantiene pero el checkout se cancela y el cliente debe reiniciarlo.

## Modificar el carrito durante el checkout

Si el cliente quiere agregar, quitar o cambiar productos **durante** cualquier paso del checkout, puede hacerlo sin cancelar. El bot ejecuta la modificación, actualiza el carrito y el checkout se adapta automáticamente — el cliente sigue donde estaba sin tener que reiniciar el proceso.

## Cancelar el checkout

Si el cliente quiere abandonar el checkout por completo, puede decir "cancelar" o "no quiero". El bot cancela el checkout y vuelve al estado de exploración con el carrito intacto.
