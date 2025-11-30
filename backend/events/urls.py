from django.urls import path
from .views import EventListAPIView, EventDetailAPIView
from .auth_views import login_user

urlpatterns = [
    path('events/', EventListAPIView.as_view()),
    path('events/<int:pk>/', EventDetailAPIView.as_view()),
    path('login/', login_user),
]
