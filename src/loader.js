export default function loader (){
    $(".loader").addClass('active')

    setTimeout(() => {
        $(".loader").removeClass('active')
    }, 800);
}