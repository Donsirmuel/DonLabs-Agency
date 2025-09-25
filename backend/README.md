# Backend scaffold (Django)

This folder contains a small Django app scaffold with models, admin registration, DRF serializers and viewsets for Products and Orders.

Quick integration steps:

1. Create a Django project (if you don't have one):

   python -m venv .venv
   .venv\Scripts\activate
   pip install django djangorestframework
   django-admin startproject mysite

2. Copy this `backend` folder into your Django project (or move the files into an app), then add the app to `INSTALLED_APPS` in `settings.py`:

   INSTALLED_APPS = [
       ...
       'rest_framework',
       'your_app_name',
   ]

3. Run migrations and create a superuser:

   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser

4. Start the development server:

   python manage.py runserver

5. Admin site: visit /admin and log in with the superuser account to manage Product and Order entries quickly.

6. API endpoints (DRF):
   - /api/products/
   - /api/orders/

Security note: ensure production deployments use HTTPS, and protect admin endpoints behind authentication and IP restrictions where appropriate.

Editor / Pylance setup (optional but recommended):

1. Create and activate a virtual environment in this project folder:

   python -m venv .venv
   .venv\Scripts\activate

2. Install dependencies from the `requirements.txt` provided next to this README (this helps VS Code/Pylance pick up types):

   pip install -r requirements.txt

3. In VS Code: open the Command Palette -> Python: Select Interpreter and choose the `.venv` interpreter. Restart the TS/Pylance server if necessary.

Installing the optional typing packages (django-stubs and djangorestframework-stubs) will improve type checking for editor diagnostics.
