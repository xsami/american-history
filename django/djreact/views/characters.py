from django.http import HttpResponse

def index(req):
    return HttpResponse('<h2><Waiting to see you/h2>')