from django.contrib import admin
from .models import Transaction
# Register your models here.


class TransactionAdmin(admin.ModelAdmin):
    list_display=["payment_id","order_id","signature","amount","datetime","user","events","quantity"]

admin.site.register(Transaction,TransactionAdmin)
