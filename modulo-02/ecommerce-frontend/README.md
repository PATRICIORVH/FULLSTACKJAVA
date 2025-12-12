# Módulo02–Módulo03 — E-commerce Frontend con Carrito y Autenticación

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
<img width="1365" height="683" alt="Captura 11" src="https://github.com/user-attachments/assets/e61c06fb-0ae6-4ef0-b146-1b543023eea3" />
<img width="1365" height="680" alt="Captura 22" src="https://github.com/user-attachments/assets/4864c98e-c8f8-41c8-9c48-a72fe5ee1521" />
<img width="1365" height="678" alt="Captura 33" src="https://github.com/user-attachments/assets/f059cf0a-6593-4b92-bd5a-d0b41b549d5a" />
<img width="1365" height="678" alt="Captura 44" src="https://github.com/user-attachments/assets/cf11728d-f042-4af6-b68d-0d2ddb9e3521" />
<img width="1365" height="676" alt="Captura 55" src="https://github.com/user-attachments/assets/f5f1a865-fd7e-47a2-94be-d00f40cae8f3" />
