from django.contrib import admin
from django.urls import path
from . import controller

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',controller.invoice1),
    path('invoicee/',controller.abc),
    path('formm/',controller.view_partie),
    path('rr/',controller.form1),
    path('delete_par/',controller.delete_partie),
]
