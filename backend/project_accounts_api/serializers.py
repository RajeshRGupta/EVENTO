from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'
    def create(self, validated_data):
        user=User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            phone=validated_data['phone']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Genre
        # fields='__all__'
        exclude=['user',]

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Location
        # fields='__all__'
        exclude=['user',]


class EventSerializer(serializers.ModelSerializer):
    genre=GenreSerializer()
    adderss=LocationSerializer()
    class Meta:
        model=Eventes
        # fields='__all__'
        exclude=['user',]

class AddEventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Eventes
        # fields='__all__'
        exclude=['user',]


class OrganizerDocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model=OrganizerDocuments
        # fields='__all__'
        exclude=['user',]

class OrganizerDocumentsSerializerAdmin(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model=OrganizerDocuments
        fields='__all__'


class CartSerializer(serializers.ModelSerializer):
    events = EventSerializer()
    class Meta:
        model=Cart
        # fields='__all__'
        exclude=['user',]

class AddCartSerializer(serializers.ModelSerializer):
    # events = EventSerializer()
    class Meta:
        model=Cart
        # fields='__all__'
        exclude=['user',]
