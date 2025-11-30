from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def login_user(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response({"error": "Email and password required"}, status=400)

    # FIX: Use filter().first() instead of get()
    user_obj = User.objects.filter(email=email).first()

    if user_obj is None:
        return Response({"error": "User with this email does not exist"}, status=404)

    # Authenticate using username
    user = authenticate(username=user_obj.username, password=password)

    if not user:
        return Response({"error": "Invalid password"}, status=400)

    refresh = RefreshToken.for_user(user)

    return Response({
        "message": "Login successful",
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "username": user.username,
        "email": user.email
    })
