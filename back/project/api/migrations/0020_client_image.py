# Generated by Django 2.2 on 2019-05-13 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_remove_client_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='image',
            field=models.CharField(default='https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg', max_length=400, null=True),
        ),
    ]