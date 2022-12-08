from django.shortcuts import render
from .models import Product

# Create your views here.

from django.shortcuts import render

# Create your views here.


def all_products(request):

    products = Product.objects.all()

    context = {
        'products': products
    }
    
    return render(request, 'products/products.html', context)
