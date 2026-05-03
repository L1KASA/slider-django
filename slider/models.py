from django.db import models
from filer.fields.image import FilerImageField


class SliderItem(models.Model):
    image = FilerImageField(
        verbose_name="Изображение",
        blank=False,
        null=True,
        on_delete=models.SET_NULL,
        related_name='slider_items'
    )
    title = models.CharField(
        verbose_name='Заголовок',
        max_length=200,
        blank=True,
        help_text='Заголовок для слайда'
    )
    is_active = models.BooleanField(
        verbose_name='Активно',
        default=True,
        help_text='Отображать слайд на сайте'
    )
    my_order = models.PositiveIntegerField(
        verbose_name='Порядок сортировки',
        default=0,
        help_text='Чем меньше число, тем выше слайд'
    )

    class Meta:
        verbose_name = 'Элемент слайда'
        verbose_name_plural = 'Элементы слайда'
        ordering = ['my_order', '-id']

    def __str__(self):
        return self.title or f'Слайд {self.id}'
