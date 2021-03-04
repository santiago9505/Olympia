# Ecommerse Olympia Challenge

Development repository not ready for deployment.

## CREACION DEL AMBIENTE VIRTUAL

Nota: yo coloco python3 en las instrucciones por que tambien tengo python2, asi evito confusiones.

En la consola colocar lo siguiente:

    python3 -m venv venv 

el primer venv es el nombre del paquete el segundo es el nombre del ambiente virtual, no importa si lo creas en la carpeta del repositorio, ya esta ignorado en el .gitignore

Activas el paquete  usando 

    source venv/bin/activate


En la ventana de la consola debe aparecer "(venv) user@username", para desactivar solo escribir "deactivate"

Con el ambiente activado actualizar el paquete pip con la siguiente instruccion

    python3 -m pip install pip --upgrade


Usar archivo requirements.txt para instalar los paquetes

    pip install -r requirements.txt


Una vez instalados usar el archivo manage.py para arrancar el servidor de django, solo como prueba

    python3 manage.py runserver


Si arranca el servidor todo va bien, debes crear las migraciones con los siguientes comandos

    python3 manage.py makemigrations

    python3 manage.py migrate

Te crea una base de datos SQLite3 en local, pudedes usar DBbrowser Sqlite para ver el contenido, vas a usar las tablas 

* auth_user
* users_profile
* productos_comentario
* productos_producto

ir a 127.0.0.1:8000/admin y ver si aparece el log in de django

si aparece crear un superuser usando 

    python3 manage.py createsuperuser

Haz el log in en la direccion /admin y estas listo para usar la API

las urls disponibles son:

* admin/
* api/productos/
* api/productos/\<str:product_type>
* api/comentarios/comentario_save
* api/users/
* api/users/\<str:username>







