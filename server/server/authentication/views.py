from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.contrib.auth.models import User


def home(request):
    return render(request, 'home.html')


def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


def check_login_status(request):
    if request.user.is_authenticated:
        return JsonResponse({'isLoggedIn': True})
    else:
        return JsonResponse({'isLoggedIn': False})


def get_all_users(request):
    if request.method == 'GET':
        users = User.objects.all()
        user_data = [{'username': user.username, 'email': user.email} for user in users]
        return JsonResponse({'users': user_data})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    

def sign_up(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)
            if user is not None:
                login(request, user)
                return JsonResponse({'success': True, 'message': 'Signup successful'})
            else:
                return JsonResponse({'success': False, 'message': 'Signup failed'}, status=400)
        else:
            return JsonResponse({'success': False, 'errors': form.errors}, status=400) 
    else:
        form = UserCreationForm()
    return render(request, 'sign_up.html', {'form': form})


def log_in(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'success': True, 'message': 'Authentication successful'})
            else:
                return JsonResponse({'success': False, 'message': 'Authentication failed'}, status=400)
        else:
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
    else:
        form = AuthenticationForm()
    return render(request, 'log_in.html', {'form': form})


def log_out(request):
    logout(request)
    return JsonResponse({'success': True, 'message': 'Logged out successfully'})


@login_required
def restricted_view(request):
    return render(request, 'restricted.html')