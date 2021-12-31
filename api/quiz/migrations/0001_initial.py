# Generated by Django 4.0 on 2021-12-31 07:20

import datetime
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Option",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.UUID("25fef436-d503-4c93-a90d-f4b9b89ca110"),
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("text", models.TextField(unique=True)),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Quiz",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.UUID("25fef436-d503-4c93-a90d-f4b9b89ca110"),
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("title", models.CharField(max_length=255)),
                (
                    "duration",
                    models.DurationField(default=datetime.timedelta(seconds=600)),
                ),
                ("enable_time", models.BooleanField(default=False)),
                ("enable_negative_marking", models.BooleanField(default=False)),
                (
                    "host",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="accounts.user"
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.UUID("25fef436-d503-4c93-a90d-f4b9b89ca110"),
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("question", models.TextField()),
                (
                    "answer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="answer",
                        to="quiz.option",
                    ),
                ),
                (
                    "options",
                    models.ManyToManyField(related_name="option", to="quiz.Option"),
                ),
                (
                    "quiz",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="quiz.quiz"
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
