from django.shortcuts import render, HttpResponse

import datetime
# Create your views here.

def index(request):
    context = {
        'date': datetime.datetime.now().date()
    }
    return render(request, 'index.html', context)
    # return HttpResponse("This is home page")
def about(request):
    return render(request, 'about.html')
def services(request):
    return render(request, 'services.html')
def contact(request):
    return render(request, "contact.html")