from rest_framework import serializers
from ..models import Transaction
from project_accounts_api.models import *
from project_accounts_api.serializers import *


class CreateOrderSerializer(serializers.Serializer):
    amount=serializers.IntegerField()
    currency=serializers.CharField()


class CreateTrasactionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Transaction
        fields=["payment_id","order_id","signature","amount","events","quantity"]


class TrasactionModelSerializer(serializers.ModelSerializer):
    events=EventSerializer()
    user=UserSerializer()
    class Meta:
        model=Transaction
        fields=["payment_id","order_id","signature","amount","events","user","quantity"]