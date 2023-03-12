from django.urls import path

from chat.views import IndexView, RoomView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('chat/<str:room_name>/', RoomView.as_view(), name='room'),
]
