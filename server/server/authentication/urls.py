from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('csrf/', views.get_csrf_token, name='get_csrf_token'),
    path('check-login-status/', views.check_login_status, name='check_login_status'),
    path('get-all-users/', views.get_all_users, name='get_all_users'),
    path('signup/', views.sign_up, name='sign_up'),
    path('login/', views.log_in, name='log_in'),
    path('logout/', views.log_out, name='logout'),
    path('restricted/', views.restricted_view, name='restricted')
]