// function createrow()
// {   
//     var ad = document.getElementById('table');
//     var i = document.createElement('tr');
//     var text = [
//                 '<td><input type="number" class="form-control" placeholder="no" style="border: none;"/> </td>',
//                 '<td><input type="text" class="form-control" placeholder="description"style="border: none;" /></td>',
//                 '<td><input type="text"style="border: none;" placeholder="HSN_code"class="form-control"/></td>',
//                 '<td><input type="number"style="border: none;"placeholder="Qty"class="form-control qty"/></td>',
//                 '<td><input type="number"style="border: none;"placeholder="rate"class="form-control"/></td>',
//                 '<td><input type="number"style="border: none;" placeholder="Amount"class="form-control"/></td>',
              
//         ].join('');
    
//     i.innerHTML = text;
//     ad.appendChild(i);
// }



function multi(id){
    qun=$("#a"+id).val();
    rate=$("#b"+id).val();
    $("#c"+id).val(parseFloat(qun*rate));
    subtotal();
}
function subtotal(){
    var i;
    var subtotal=0;
    for (i = 1; i <= 10; i++) {
        
        subtotal = Number($("#c"+i).val())+Number(subtotal); 
      }
    $("#subtotal").val(subtotal);
}

function percentageCgst(va){
    subtotal = $("#subtotal").val();
    var gst =Number(subtotal) - (Number(subtotal)*(va/100));
    $("#CGST").val(gst);
}

function percentageSgst(va){
    subtotal = $("#CGST").val();
    var gst =Number(subtotal) - (Number(subtotal)*(va/100));
    $("#SGST").val(gst); 
}

function percentageIgst(va){
    subtotal = $("#SGST").val();
    var gst =Number(subtotal) - (Number(subtotal)*(va/100));
    $("#IGST").val(gst);   
}