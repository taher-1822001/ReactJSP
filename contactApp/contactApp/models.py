from django.db import models
import uuid
class Registration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField()
    last_name = models.CharField()
    email = models.EmailField()
    phone = models.BigIntegerField()
    password = models.CharField()

    