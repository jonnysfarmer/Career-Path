from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your models here.
# class Prescription(models.Model):
#     # one user can have many prescriptions, but one prescription can only have one user
#     user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
#     # medicine can belong to many users, and one user can have many prescriptions, but a prescription can only have one medicine
#     medicine = models.ForeignKey(Medicine, related_name='medicine', on_delete=models.CASCADE)
#     # we ask user to enter the number of DAYS DOSAGE their prescription contains
#     number_days_doses = models.IntegerField(blank=True, null=True)
#     # we can track how often we've alerted you to a prescription renewal, and compare with this to alert you to make a doctors appointment
#     number_repeats = models.IntegerField(blank=True, null=True)
#     # including optional doctor id in case we get to stretch goals
#     doctor = models.ForeignKey(Doctor, related_name='doctor', on_delete=models.CASCADE, blank=True, null=True)

#     def __str__(self):
#         return f'{self.medicine}'

class Company(models.Model):
    name = models.CharField(max_length=200)
    industry = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name}'

    # Need to add some more stuff

class Job(models.Model):
    company = models.ForeignKey(Company, related_name='comapny', on_delete=models.CASCADE)
    experience = models.IntegerField(blank=True, null=True)
