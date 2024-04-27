import GenericBanner from "../components/GenericBanner/GenericBanner";

const dataBanner = {
    imgUrl:"/assets/banner/quienesSomos.png",
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

