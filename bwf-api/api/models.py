from django.contrib.auth.models import User
from django.db import models


def upload_path_handler(instance, filename):
    return "avatars/{id}/{file}".format(id=instance.user.id, file=filename)


class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_path_handler, blank=True)


class Group(models.Model):
    name = models.CharField(max_length=32, null=False, unique=False)
    location = models.CharField(max_length=32, null=False)
    description = models.CharField(max_length=256, null=False, unique=False)

    class Meta:
        unique_together = ('name', 'location')

    def __str__(self):
        return '%s, %s' % (self.name, self.location)


class Event(models.Model):
    team1 = models.CharField(max_length=32, blank=False)
    team2 = models.CharField(max_length=32, blank=False)
    time = models.DateTimeField(null=False, blank=False)
    score1 = models.IntegerField(null=True, blank=True)
    score2 = models.IntegerField(null=True, blank=True)
    group = models.ForeignKey(Group, related_name='events', on_delete=models.CASCADE)
