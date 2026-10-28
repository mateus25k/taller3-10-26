# Guía de Despliegue: Servidor Web Nginx con DuckDNS en Nueva Máquina Virtual

Esta guía detalla el proceso completo para la creación de una nueva máquina virtual, la instalación y configuración de un servidor web Nginx con un sitio personalizado adaptativo (responsive con HTML, CSS y JavaScript), y la asociación de un subdominio mediante DuckDNS para acceso externo.

---

## Índice
1. [Creación y Configuración de la Máquina Virtual](#1-creación-y-configuración-de-la-máquina-virtual)
2. [Instalación de Nginx](#2-instalación-de-nginx)
3. [Diseño y Desarrollo de la Página Web](#3-diseño-y-desarrollo-de-la-página-web)
4. [Configuración del Servidor Virtual (Nginx Server Block)](#4-configuración-del-servidor-virtual-nginx-server-block)
5. [Configuración del Subdominio DuckDNS](#5-configuración-del-subdominio-duckdns)
6. [Pruebas de Acceso Externo](#6-pruebas-de-acceso-externo)

---

## 1. Creación y Configuración de la Máquina Virtual
- Se creó una nueva máquina virtual distinta a la del taller previo utilizando el hipervisor de Oracle VirtualBox.
- Se reutilizó la configuración de red (Adaptador Puente / Red NAT) establecida en la infraestructura inicial del taller.

📸 **Captura 1:** *Panel de VirtualBox mostrando la nueva máquina virtual encendida y su configuración de red.*
*(Inserta aquí tu imagen: `![Captura 1](imagenes/vm_config.png)`)*

---

## 2. Instalación de Nginx
Una vez iniciada la máquina virtual e ingresando por SSH o consola, se procedió a actualizar los repositorios e instalar Nginx:

```bash
sudo apt update
sudo apt install nginx -y
