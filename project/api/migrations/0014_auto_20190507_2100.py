# Generated by Django 2.2 on 2019-05-07 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_remove_coach_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='gym',
            name='area',
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='gym',
            name='best_sides',
            field=models.TextField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='gym',
            name='simulator_positions',
            field=models.IntegerField(default=None, null=True),
        ),
    ]