import GenericBanner from "../components/GenericBanner/GenericBanner";

const dataBanner = {
    imgUrl:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgAboutus.png?alt=media&token=b9f7b84d-7e6c-4718-a417-1fa2aadca7d5",
    titleMessage:'', //mensaje que va en el titulo
    titleEmphasis:'Sobre Nosotros', // el enfasis del texto que va color azul
    message:'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit', //mensaje del banner
}

    function QuienesSomos() {
        return (
            <>
                <main style={{maxWidth: "1290px", margin:"0 auto"}}>
                    <GenericBanner resource={dataBanner}/>
                </main>
            </>
        );
    }

    export default QuienesSomos;

