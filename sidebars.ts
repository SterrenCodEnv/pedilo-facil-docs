import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "¿Qué es PediloFácil?",
    },
    {
      type: "doc",
      id: "planes-de-suscripcion",
      label: "📋 Planes de Suscripción",
    },
    {
      type: "category",
      label: "🖥️ Panel de Administración",
      collapsed: false,
      items: [
        "panel-administracion/dashboard",
        "panel-administracion/pedidos",
        "panel-administracion/inventario",
        "panel-administracion/sabores",
        "panel-administracion/promociones",
        "panel-administracion/leads",
        "panel-administracion/analiticas",
        "panel-administracion/capacidad-y-demoras",
      ],
    },
    {
      type: "category",
      label: "🤖 Bot de WhatsApp",
      collapsed: false,
      items: [
        "bot-whatsapp/que-es",
        "bot-whatsapp/flujo-de-conversacion",
        "bot-whatsapp/busqueda-inteligente",
        "bot-whatsapp/seleccion-sabores",
        "bot-whatsapp/checkout-y-pedidos",
        "bot-whatsapp/medios-de-pago",
        "bot-whatsapp/delivery",
        "bot-whatsapp/restricciones-dieteticas",
        "bot-whatsapp/casuisticas-especiales",
      ],
    },
    {
      type: "category",
      label: "📦 Carga de Inventario",
      collapsed: false,
      items: [
        "inventario/formas-de-carga",
        "inventario/catalogo-global",
        "inventario/gestion-de-stock",
      ],
    },
    {
      type: "doc",
      id: "comprobantes-pdf",
      label: "📄 Comprobantes PDF",
    },
  ],
};

export default sidebars;
