A production-grade personal portfolio website built with Django, showcasing clean architecture, modern UI/UX, and scalable project structure.

![Django Version](https://img.shields.io/badge/django-4.2%2B-brightgreen)
![Python Version](https://img.shields.io/badge/python-3.10%2B-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Live Demo

🔗 [https://michomoreno.pythonanywhere.com](https://michomoreno.pythonanywhere.com)

---

## Features

- Modern, responsive design built with pure HTML, CSS, and JavaScript
- Dynamic content structure powered by Django backend
- Project showcase with single-image preview per project
- Contact form with validation and success messages
- Scroll animations and interactive hover effects using JavaScript
- SEO-friendly meta tags and custom 404 page
- Fully responsive design for desktop, tablet, and mobile devices

---

## Tech Stack

 **Backend**  Django 4.2, Python 3.10+ 
 **Frontend**  HTML5, CSS3, JavaScript
 **Database** SQLite (development) 
 **Deployment**  PythonAnywhere 
 **Version Control**  Git & GitHub 

---

## Project Structure
portfolio_project/
├── manage.py
├── apps/
│ ├── core/ # Home, About, Profile
│ ├── skills/ # Skills model & views
│ ├── projects/ # Projects with images
│ ├── education/ # Education timeline
│ └── contact/ # Contact form & messages
├── portfolio_project/ # Project settings
├── static/ # CSS, JS, images
├── templates/ # HTML templates
├── media/ # User uploaded files
└── requirements.txt # Dependencies

text

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mAkOy34-mors/portfolio-project.git
cd portfolio-project
2. Create virtual environment
macOS / Linux:

bash
python -m venv venv
source venv/bin/activate
Windows:

bash
python -m venv venv
venv\Scripts\activate
3. Install dependencies
bash
pip install -r requirements.txt
4. Configure environment variables
Create a .env file in the project root:

env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
5. Run migrations
bash
python manage.py makemigrations
python manage.py migrate
6. Create superuser
bash
python manage.py createsuperuser
7. Collect static files
bash
python manage.py collectstatic
8. Run development server
bash
python manage.py runserver
9. Access the site
Website: http://127.0.0.1:8000

Admin Panel: http://127.0.0.1:8000/admin

Deployment on PythonAnywhere
1. Upload project
Upload your project files or clone from GitHub directly on PythonAnywhere.

2. Create virtual environment
bash
mkvirtualenv --python=/usr/bin/python3.10 myenv
pip install -r requirements.txt
3. Configure Web App
Choose Manual configuration

Select Python 3.10

Set source code & working directory to your project path

4. WSGI configuration
Replace the WSGI file content with:

python
import os
import sys

path = '/home/yourusername/portfolio_project'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'portfolio_project.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
5. Static & Media files
In the Web tab under Static files:

URL	Directory
/static/	/home/yourusername/portfolio_project/staticfiles
/media/	/home/yourusername/portfolio_project/media
6. Production settings
Update settings.py:

python
DEBUG = False
ALLOWED_HOSTS = ['yourusername.pythonanywhere.com']
7. Reload web app
Click the green Reload button. Your site will go live at https://yourusername.pythonanywhere.com

Admin Panel Features
Login at: /admin

You can manage:

Profile – Personal information, photo, social links

Skills – Categories and individual skills with proficiency levels

Projects – Title, description, tech stack, images, links

Education – Institution, degree, years, description

Contributing
This is a personal portfolio project. Suggestions and feedback are welcome.

License
This project is licensed under the MIT License.

Contact
For inquiries, use the contact form on the website or email:
📧 michomoreno34@gmail.com
