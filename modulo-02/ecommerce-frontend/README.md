# M2–M3 — E-commerce Frontend con Carrito y Autenticación

## Descripción

Este proyecto corresponde a la interfaz web de una tienda e-commerce llamada **SneakerSport**. Incluye navegación principal, listado de productos en tarjetas, página de detalle de producto y footer con información básica. Además, se implementa un carrito de compras con descuento y un flujo sencillo de inicio de sesión usando una contraseña maestra, como parte del módulo de desarrollo Full Stack.

Los textos en verde dentro del código HTML corresponden a comentarios que utilizo solo como guía para mi organización y entendimiento del proyecto. No se muestran en el navegador.

## Tecnologías

- HTML5  
- CSS3  
- Bootstrap 5 por CDN  
- JavaScript vanilla (sin frameworks adicionales)

## Ejecutar el proyecto

- Opción 1: Abrir el archivo `index.html` directamente en el navegador.  
- Opción 2: Usar la extensión **Live Server** en Visual Studio Code para recargar automáticamente los cambios.

## Funcionalidades de la interfaz

- Barra de navegación para moverse por el sitio.  
- Listado de productos en tarjetas con botón de compra.  
- Página de detalle de producto con imagen, precio y descripción.  
- Footer con información básica de la tienda.

## Funcionalidades de lógica (JavaScript)

- **Carrito de compras**  
  - Agregar productos desde el catálogo al carrito.  
  - Quitar productos directamente desde la tabla del carrito.  
  - Contador de la cantidad total de ítems en el carrito.  
  - Cálculo automático del total de la compra.  
  - Campo para ingresar el código de descuento `DESC15`, que aplica un 15% de rebaja al total.

- **Autenticación básica**  
  - Modal de Bootstrap para iniciar sesión y registro (interfaz).  
  - Uso de una `PASSWORD_MAESTRA = "1234"` para validar el ingreso.  
  - Si la contraseña es correcta, se cambia el estado en la barra de navegación a “Usuario logueado”, se cierra el modal y se muestra un mensaje de confirmación.  
  - Si la contraseña es incorrecta, se muestra un mensaje de error.

## Estructura principal

- `index.html`: página principal con navbar, catálogo, carrito y modal de autenticación.  
- `producto.html`: vista de detalle de producto.  
- `assets/css/styles.css`: estilos personalizados.  
- `assets/img/`: imágenes utilizadas en el sitio.  
- `app.js`: lógica de catálogo, carrito y autenticación.

## Capturas
