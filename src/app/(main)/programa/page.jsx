import DinamicBanner from "../components/DinamicBanner/DinamicBanner"

function Programa() {
    return (
        <div>
            <h1 style={{textAlign: "center", padding:"20px"}}></h1>
            <DinamicBanner
                imageSrc='/assets/images/banner/programa.jpeg'
                title='Conoce nuestro Programa'
                message='Distintas modalidades para ayudarte'
                customStyles={{ banner: 'programaBanner', bannerImg: 'programaImg', bannerTextBox: 'programaTextbox', bannerTitle: 'programaTitle', bannerMessage: 'programaMessage' }}
            />
        </div>
        
    )
}

export default Programa
