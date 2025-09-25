# type: ignore
from django.contrib import admin
from .models import Product, Order

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price_kobo", "inventory", "created_at")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name", "description")
    list_filter = ("created_at",)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "total_kobo", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("id",)
    readonly_fields = ("created_at", "updated_at")
