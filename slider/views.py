from django.shortcuts import render

from slider.models import SliderItem


def index(request):
    slides = SliderItem.objects.filter(is_active=True)
    return render(request, 'index.html', {'slides': slides})
