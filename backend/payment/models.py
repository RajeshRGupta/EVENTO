from django.db import models
from project_accounts_api.models import *

# Create your models here.

class Transaction(models.Model):
    payment_id=models.CharField(max_length=100,verbose_name='Payment ID')
    order_id=models.CharField(max_length=100,verbose_name='Order ID')
    signature=models.CharField(max_length=200,verbose_name='Signature')
    amount=models.IntegerField(verbose_name='Amount')
    datetime=models.DateTimeField(auto_now_add=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    events = models.ForeignKey(Eventes, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default = 1)
    def __str__(self):
        return str(self.id)

