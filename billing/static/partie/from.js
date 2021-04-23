$(document).ready(function(){
    $('#abcdi').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
           
        });       
    }); 


$('#form1').submit(function(e)
{
save();
return false;
});
function save()
    {     
        $.ajax({
            url:'/rr/',
            method:'POST',
            data:$('#form1').serialize(),
            dataType:'JSON',
            success:function(data)
            {
                if(data.status=='true')
                {
                    $.toast({
                        heading: 'Success Message',
                        text: 'partie Successfully Added to List.',
                        position: 'top-right',
                        loaderBg:'#ff6849',
                        icon: 'info',
                        hideAfter: 3000, 
                        stack: 6
                      });               
                    $('#add-contact').modal('hide');               
                    location.reload(); // then reload the page.(3)                                
                }
                else{
                    $.toast({
                        heading: 'Error Message',
                        text: 'Something Went Wrong!! Same partie Name',
                        position: 'top-right',
                        loaderBg:'#ff6849',
                        icon: 'warning',
                        hideAfter: 3500, 
                        stack: 6
                      });
                      $('[name="partie_name"]').focus();
                }
            }
        });
    }


    function updateData(id,name,address,phone_no,GST_NO,state_code){
        $('[name="partie_id"]').val(id);
        $('[name="button"]').html('Edit');
        $('[name="partie_name"]').val(name);
        $('[name="Address"]').val(address);
        $('[name="Phone_no"]').val(phone_no);
        $('[name="GST_NO"]').val(GST_NO);
        $('[name="state_code"]').val(state_code);
        $('#myModalLabel').html('Edit partie');
        $('#add-contact').modal('show');


    }
    function deleteData(id)
    {
            swal({   
                title: "Are you sure?",   
                text: "You will not be able to recover this imaginary file!",   
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Yes, delete it!",   
                closeOnConfirm: false, 
            }, 
            function(isConfirm){   
                if (isConfirm) {     
                    swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
                    window.location.href="/delete_par/?id="+id;  
                } else {     
                    swal("Cancelled", "Your imaginary file is safe :)", "error");   
                } 
                 });   
    }


    
function openModel(){
    $('#form1')[0].reset();
    $('#myModalLabel').html('Add New Pratie');
    $('[name="button"]').html('Save');
    $('#add-contact').modal('show');
}


function getdata(id)
{   
    $.ajax({
        url:'/invoicee/',
        type:'GET',
        data:{id:'id'}   
    });
}

      
