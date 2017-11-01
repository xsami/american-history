from django.db import models
import os

def get_image_path(instance, filename):
    return os.path.join('', str(instance.id), filename)

class Character(models.Model):
    name = models.charField(max_length=50)
    profile_image = models.ImageField(upload_to=get_image_path, blank=True, null=True)
