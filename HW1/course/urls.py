from django.urls import path
from . import views

urlpatterns = [
    path('add', views.add_course_post, name='add_course_post'),  
    path('list', views.list_course_post, name='list_course_post'),  
]


# from django.urls import path
# from . import views

# urlpatterns = [
#     path('add', views.add_post, name='add_post'),
#     path('list', views.list_post, name='list_post'),
# ]