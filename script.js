function menushow(){
    let menumobile = document.querySelector(''.menumobile');
    if (menumobile.classlist.contains('open')){
        menumobile.classlist.remuve('open');
    } else {
        menumobile.classlist.add('open')
    }
}