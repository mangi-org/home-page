venv/Scripts/activate

python.exe .\manage.py makemigrations
python.exe .\manage.py migrate
python.exe .\manage.py initadmin
python.exe .\manage.py collectstatic
python.exe .\manage.py runserver 0.0.0.0:8000