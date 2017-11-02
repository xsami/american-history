from django.http import HttpResponse, JsonResponse
from django.core import serializers
from history.models import character as ch

def index(req):
    character_list = ch.Character.objects.all()
    data = serializers.serialize("json", ch.Character.objects.all())
    return HttpResponse(data)