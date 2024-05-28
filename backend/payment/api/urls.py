from django.urls import path
from .api_rezerpay import *

urlpatterns = [
    path('order/create/',CreateOrderAPIView.as_view(),name='create_order_api'),
    path('order/completed/',CreateTranactionAPIView.as_view(),name='completed_order_api'),
    path('order/show/',TranactionAPIView.as_view(),name='show_order_api')
]
