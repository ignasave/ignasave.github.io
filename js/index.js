/* -------------- Click Handlers -------------- */

const onClickMobileSideButton = () => {
    const sideButtons = document.getElementsByClassName('mobile-side-buttons')[0]
    const classes = sideButtons.classList
    
    if(classes.contains('open')){
        classes.remove('open')
    } else {
        classes.add('open')
    }
}