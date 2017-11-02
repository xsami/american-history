from django.db import models
import os

def get_image_path(instance, filename):
    return os.path.join('djreact/static/images/characters', filename)

class Character(models.Model):
    name = models.CharField(max_length=50)
    profile_image = models.ImageField(upload_to=get_image_path, blank=True, null=True)

    def __str__(self):
        return unicode(self.name)