from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from .models import Group, Event, UserProfile
from .serializers import GroupSerializer, EventSerializer, GroupFullSerializer, UserSerializer, UserProfileSerializer


class UserProfileViewset(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class GroupViewset(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    """
        To get one particular group
    """

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = GroupFullSerializer(instance, many=False, context={'request': request})
        return Response(serializer.data)


class EventViewset(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        user_serializer = UserSerializer(user)
        return Response({'token': token.key, 'user':user_serializer.data})