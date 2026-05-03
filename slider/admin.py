from django.contrib import admin
from .models import SliderItem


@admin.register(SliderItem)
class SliderItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'my_order']
    list_editable = ['my_order', 'is_active']