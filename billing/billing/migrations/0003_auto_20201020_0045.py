# Generated by Django 3.1.1 on 2020-10-19 19:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0002_invoice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoice',
            name='invoice_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 20, 0, 45, 53, 138463), verbose_name='invoice_date'),
        ),
    ]