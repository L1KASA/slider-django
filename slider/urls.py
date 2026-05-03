from . import views
from django.urls import path

app_name = 'slider'

urlpatterns = [
    path('', views.index, name='index'),
]