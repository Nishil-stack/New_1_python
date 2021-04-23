from django.db import models
from datetime import datetime

class partie(models.Model):
    name=models.CharField('name',max_length=40)
    address=models.CharField('address',max_length=200)
    phone_no=models.BigIntegerField('phone_no',default=None)
    state_code=models.IntegerField('state_code')
    GST_NO=models.CharField('GST_NO',max_length=20,unique=True)

class invoice(models.Model):
    name=models.ForeignKey(partie,related_name='partie_name',on_delete=models.CASCADE)
    address=models.ForeignKey(partie,related_name='partie_address',on_delete=models.CASCADE)
    GST_NO=models.ForeignKey(partie,related_name='partieGST_NO',on_delete=models.CASCADE)
    state_code=models.ForeignKey(partie,related_name='par_state_code',on_delete=models.CASCADE)
    invoice_no=models.CharField('invoice_no',max_length=20,unique=True)
    invoice_date=models.DateTimeField('invoice_date',default=datetime.now())
    challanno=models.CharField('challan_no',max_length=20,default=None)
    challan_date=models.DateTimeField('challan_date',default=None)
    PO_no=models.IntegerField('PO_no',default=None)
    Transport=models.CharField('Transport',max_length=100,default=None)
    LR_no=models.IntegerField('LR_no',default=None)
    LR_date=models.DateTimeField('LR_date',default=None)
    no=models.IntegerField('no',default=None)
    description=models.CharField('description',max_length=500)
    Hsncode=models.IntegerField('Hsncode',default=None)
    qty=models.IntegerField('qty')
    rate=models.IntegerField('rate')
    amount=models.IntegerField('amount')
    qty_total=models.IntegerField('total')  
    subtotal=models.FloatField('subtotal',max_length=50)
    CGST=models.FloatField('CGST',max_length=40)
    SGST=models.FloatField('SGST',max_length=40)
    IGST=models.FloatField('IGST',max_length=40)
    Round_OFF=models.FloatField('Round_OFF',max_length=40)
    final_total=models.FloatField('final_total',max_length=50)


