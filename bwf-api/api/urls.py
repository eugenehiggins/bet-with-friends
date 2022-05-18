from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from api import views

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)
router.register(r'events', views.EventViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('authenticate/', views.CustomObtainAuthToken.as_view())
]