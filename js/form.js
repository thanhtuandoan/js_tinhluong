$(document).ready(
    function() {
    
        $("#submit").click(function() {
            var sale = parseInt($("#sale").val());
            var salary = 0;
            var personal_income_tax = 0;

            if(sale = "" || sale < 0){
                alert("loi, nhap lai");
            } else if(sale > 0 && sale < 5000) {
                salary = sale * 0.05;
                var thu_nhap = $("#salary").val(salary);
            } else if( 5000 <= sale <= 10000) {
                salary = sale * 0.1;
                var thu_nhap = $("#salary").val(salary);
            } else if(sale > 100000) {
                salary = sale * 0.1;
                var thu_nhap = $("#salary").val(salary);
            }

            if(salary >= 1000) {
                $("#personal_income_tax").val("10%");
                personal_income_tax = 0.1;
            } else{
                $("#personal_income_tax").val("0%");
                personal_income_tax = 0;
            }
            var sale1 = $("#sale").val();
            if (sale1 == "") {
                alert("hay nhap sale");
            } else{
                var total = salary - salary * personal_income_tax;
                $("#total").val(total);
            }
        })

        $("#clear").click(function() {
            $("#sale").val("");
            $("#salary").val("");
            $("#personal_income_tax").val("");
            $("#total").val("");
        })

        
    }
)