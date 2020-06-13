function insert(n){
                document.form.textview.value = document.form.textview.value+n
            }
            function equal(){
                var op = document.form.textview.value
                if(op){
                    document.form.textview.value = eval(op)
                }
            }
            function clean(){
                document.form.textview.value = ""

            }
            function back(){
                var op = document.form.textview.value
                document.form.textview.value = op.substring(0,op.length-1)
            }