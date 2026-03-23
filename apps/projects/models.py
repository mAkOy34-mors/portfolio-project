from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    description = models.TextField()
    tech_stack = models.CharField(max_length=300, help_text="Comma separated")
    github_link = models.URLField()
    live_demo_link = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def tech_list(self):
        return [tech.strip() for tech in self.tech_stack.split(',')]