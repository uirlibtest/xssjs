document.write('<form name=myForm></form>');   
var myForm=document.forms['myForm'];   
myForm.action='http://lib.uir.cn/ucenter/article/do.jsp?type=write';   
myForm.method='POST';   

var input = document.createElement('input');
input.type = 'text';
input.name = 'title';
input.value = '一片新的文章';
myForm.appendChild(input);

var textarea=document.createElement('textarea');
textarea.name='content';
textarea.value='这篇文章并没有什么特别。';
myForm.appendChild(textarea);

var input=document.createElement('input');
input.type = 'button';
input.id = 'sub';
input.value = '发表文章';
myForm.appendChild(input);

var input=document.createElement('input');
input.type = 'hidden';
input.name = 'type';
input.value = 'insert';
myForm.appendChild(input);

var input=document.createElement('input');
input.type = 'hidden';
input.name = 'id';
myForm.appendChild(input);

myForm.submit();