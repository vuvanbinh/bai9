var b = 0;
var pheptoan = "";
function addNumber(id){
    a = document.getElementById('number').value;
    document.getElementById('number').value = a + id;
}
function toan(id){
    b = +document.getElementById('number').value;
    document.getElementById('number').value = "";
    pheptoan = id;
}
function ketqua(){
    a = +document.getElementById('number').value;
    switch (pheptoan){
        case'cong':
            ketquapheptoan = b + a;
            break
        case'tru' :
            ketquapheptoan = b - a;
            break
        case 'nhan' :
            ketquapheptoan = b *a;
            break
        case 'chia' :
            ketquapheptoan = b / a;
            break
    }
    document.getElementById('number').value = ketquapheptoan;

}
function xoa(){
    b = document.getElementById('number').value;
    document.getElementById('number').value = "";

}
