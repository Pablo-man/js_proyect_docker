FROM nginx:alpine

# Copiar archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos al directorio web de Nginx
COPY . /usr/share/nginx/html

EXPOSE 80
