# Generated by Django 2.2 on 2019-05-13 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_auto_20190513_1714'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='image',
            field=models.CharField(default='https://cdn5.vectorstock.com/i/1000x1000/82/59/anonymous-user-flat-icon-vector-18958259.jpg', max_length=400, null=True),
        ),
    ]