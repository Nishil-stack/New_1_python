from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from .models import *
import json
# @cache_control(no_cache=True, must_revalidate=True, no_store=True)

def invoice1(request):
    return render(request,'index.html') 

def abc(request):
    try:
        id = request.GET.get('id')
        data = partie.objects.get(pk=id)
        d={
            'data':data,
            # 'da':
        }
        return render(request,'invoice.html',d)            
    except BaseException:
        return render(request,'invoice.html')            
    
def view_partie(request):
    data = partie.objects.filter()
    da = {
        'view':data,       
    }
    return render(request,'form.html',da)  
def form1(request):
    try:
        id=request.POST.get('partie_id')  
        if(int(id) == 0):   
            p = partie()  
        else:
            p = partie.objects.get(id=id)  
        p.name = request.POST.get('partie_name')
        p.address = request.POST.get('Address') 
        p.phone_no = request.POST.get('Phone_no')
        p.GST_NO = request.POST.get('GST_NO') 
        p.state_code = request.POST.get('state_code')                
        p.save()                 
        data={
            'status':'true',
        }
    except BaseException:
        data={
            'status':'false',
        }
    return JsonResponse(data)


def delete_partie(request):
    try:
        y = request.GET.get('id')
        a = partie.objects.get(id = y)
        a.delete()
    except BaseException:
        pass
    return redirect('/formm/')    
