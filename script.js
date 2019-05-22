function handleSaveButton(){
    /*
    
    Need to save the cookie with the name in the input and save the cookie with the counter, it also needs to hide who-are-you and show the greeting
    
    */

    var name = jQuery('#name').val();
    Cookies.set('name', name);
    Cookies.set('visits', 1);
    jQuery('#who-are-you').addClass('hidden');
    jQuery('#greeting').removeClass('hidden');
    jQuery('#greeting .name').html(name);
    jQuery('#greeting .number').html(1);
}

function handleForgetButton(){
    /*
    
    Need to delete the cookie for the name and the cookie for the counter, also needs to hide the greeting and show who-are-you
    
    */

    Cookies.remove('name');
    Cookies.remove('visits');
    jQuery('#greeting').addClass('hidden');
    jQuery('#who-are-you').removeClass('hidden');
}

function handlePageLoad(){
    /*

    read cookie for name, if it exists it needs to hide the who-are-you and show the greeting (and fill the values)

    */

    var name = Cookies.get('name');
    var visits = Cookies.get('visits');
    if(name != undefined){
        jQuery('#who-are-you').addClass('hidden');
        jQuery('#greeting').removeClass('hidden');
        jQuery('#greeting .name').html(name);
        visits = parseInt(visits) + 1;
        Cookies.set('visits', visits);
        jQuery('#greeting .number').html(visits);
    }

}

handlePageLoad();

jQuery('#save').click(handleSaveButton);
jQuery('#forget').click(handleForgetButton);