let github = document.getElementsByClassName('btn-github')[0];
let {href} = github;
github.remove();
let header = document.getElementsByTagName('header')[0];
header.innerHTML = `<div style="width: 100%; text-align: right; position: relative; margin-top: -10px;"><a href="${href}" style="padding-right: 20px;">View GitHub</a></div>${header.innerHTML}`;
let h1 = document.getElementById('a-title').getElementsByTagName('h1')[0];
h1.style.color = 'rgba(0,0,0,0)';
h1.innerHTML = '<span style="color: rgba(181, 232, 83, 1);">Programming Club Lessons</span>';
