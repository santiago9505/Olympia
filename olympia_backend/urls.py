"""olimpya_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from productos import views as product_views
from django.conf.urls import url
from django.urls import include
from users import views as user_views
from compras import views as compras_views

urlpatterns = [
    path('admin/', admin.site.urls),

    #path productos
    path('api/productos/', product_views.productos_list),
    path('api/productos/<str:product_type>', product_views.productos_filtrados),

    #path comentarios
    path('api/comentarios/comentario_save', product_views.coment_save),

    #path users
    path('api/users/', user_views.user_list),
    path('api/users/<str:username>', user_views.users_filtrados),

    # path compras
    path('api/compra/generar_compra', compras_views.create_ord_compra),
    path('api/compra/generar_compra/<int:user_id>', compras_views.data_compra),
    
    # path login
      path('', include(('users.urls', 'users'), namespace='users')),
]
