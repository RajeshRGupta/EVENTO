from rest_framework.views import APIView
from rest_framework import status
from .razorpay_serializers import *
from rest_framework.response import Response
from rest_framework import generics,permissions
from rest_framework.permissions import IsAuthenticated
from .rezorpay.main import RazorpayClient



rz_client=RazorpayClient()

class CreateOrderAPIView(APIView):
    def post(self,request):
        create_order_serializer=CreateOrderSerializer(
            data=request.data
        )
        if create_order_serializer.is_valid():
            order_response=rz_client.create_order(
                amount=create_order_serializer.validated_data.get('amount'),
                currency=create_order_serializer.validated_data.get('currency')
            )
            response={
                'status_code':status.HTTP_201_CREATED,
                'message':'order created',
                'data':order_response
            }
            return Response(response,status=status.HTTP_201_CREATED)
        else:
            response={
                'status_code':status.HTTP_400_BAD_REQUEST,
                'message':'bad request',
                'error':create_order_serializer.errors
            }
            return Response(response,status=status.HTTP_400_BAD_REQUEST)
        


# class TranactionAPIView(APIView):
#     def post(self,request):
#         transaction_serializer= TrasactionModelSerializer(data=request.data)
#         if transaction_serializer.is_valid():
#             rz_client.verify_payment(
#                 razorpay_order_id=transaction_serializer.validated_data.get("order_id"),
#                 razorpay_payment_id=transaction_serializer.validated_data.get("payment_id"),
#                 razorpay_signature=transaction_serializer.validated_data.get("signature")
#             )
#             transaction_serializer.save()
#             response={
#                 "status_code":status.HTTP_201_CREATED,
#                 "message":"transaction crated"
#             }
#             return Response(response,status=status.HTTP_201_CREATED)
#         else:
#             response={
#                 "status_code":status.HTTP_400_BAD_REQUEST,
#                 "message":"bad request",
#                 "error":transaction_serializer.errors
#             }
#             return Response(response,status=status.HTTP_400_BAD_REQUEST)
        


# class CreateTranactionAPIView(generics.CreateAPIView):
#     queryset = Transaction.objects.all()
#     serializer_class = CreateTrasactionModelSerializer
#     def perform_create(self, serializer_class):
#         serializer_class.save(user=self.request.user)
#     def create(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data)

#         if serializer.is_valid():
#             rz_client.verify_payment(
#                 razorpay_order_id=serializer.validated_data.get("order_id"),
#                 razorpay_payment_id=serializer.validated_data.get("payment_id"),
#                 razorpay_signature=serializer.validated_data.get("signature")
#             )
#             serializer.save()
#             response={
#                 "status_code":status.HTTP_201_CREATED,
#                 "message":"transaction crated"
#             }
#             return Response(response,status=status.HTTP_201_CREATED)
#         else:
#             response={
#                 "status_code":status.HTTP_400_BAD_REQUEST,
#                 "message":"bad request",
#                 "error":serializer.errors
#             }
    

class CreateTranactionAPIView(generics.CreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = CreateTrasactionModelSerializer
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def perform_create(self, serializer):
        # Attach the user to the transaction
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            try:
                # Verify the payment
                rz_client.verify_payment(
                    razorpay_order_id=serializer.validated_data.get("order_id"),
                    razorpay_payment_id=serializer.validated_data.get("payment_id"),
                    razorpay_signature=serializer.validated_data.get("signature")
                )
                # Save the transaction
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                response = {
                    "status_code": status.HTTP_201_CREATED,
                    "message": "Transaction created",
                    "transaction_id": serializer.instance.id
                }
                return Response(response, status=status.HTTP_201_CREATED, headers=headers)
            except Exception as e:
                response = {
                    "status_code": status.HTTP_400_BAD_REQUEST,
                    "message": "Payment verification failed",
                    "error": str(e)
                }
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
        else:
            response = {
                "status_code": status.HTTP_400_BAD_REQUEST,
                "message": "Bad request",
                "error": serializer.errors
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

class TranactionAPIView(generics.ListAPIView):
    queryset=Transaction.objects.all()
    serializer_class=TrasactionModelSerializer


