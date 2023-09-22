from django.conf import settings
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Initialize admin user'

    def handle(self, *args, **options):
        username = settings.DJANGO_SUPERUSER_USERNAME
        email = settings.DJANGO_SUPERUSER_EMAIL
        password = settings.DJANGO_SUPERUSER_PASSWORD

        if not User.objects.filter(username=username).exists():
            print('Creating account for %s (%s)' % (username, email))
            admin = User.objects.create_superuser(email=email,
                                                  username=username,
                                                  password=password)
            admin.save()
        else:
            print('Admin account has already been initialized.')
