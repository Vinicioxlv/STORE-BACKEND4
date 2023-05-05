# STORE-BACKEND4
Backend de Ecommerce usando nodejs y express js, se conecta al frontend "STORE-FRONT".\
Para ejecutarlo se deben colocar los siguientes comandos npm install y npm start.\
Se deben agregar variables de entornoen un archivo .env para la conexión con la base de datos en mongo db:\
USER_MONGO= ''
USER_MONGO_PASS=''
MONGO_ID_PASS= ''
JWT_SECRET_PS=''
Cuenta con las siguientes caracteristicas:\
-Modelo Vista Controlador\
-Middleware para autorizacion de accesos de usuario\
-Serivices de autorizacion y autenticacion.\
-Controllers de producto CRUD.\
-Apis de usarios, regisro, productos.\
-Archivo con la configuracion para el despliegue en vercel
