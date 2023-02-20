from django.db import models

class UserTable(models.Model):
    user_email = models.EmailField(primary_key=True,max_length=90)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_admin = models.BooleanField()


class SchemeTable(models.Model):
    scheme_name = models.CharField(primary_key=True, max_length=50)
    no_of_entries = models.IntegerField()

