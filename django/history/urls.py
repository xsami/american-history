from django.conf.urls import url
from views import characters as ch

urlpatterns = [
    url(r'^list/$', ch.index, name='list'),
]
