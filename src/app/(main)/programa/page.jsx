import DinamicBanner from "../components/DinamicBanner/DinamicBanner"

function Programa() {
    return (
        <div>
            <h1 style={{textAlign: "center", padding:"20px"}}>Programa page</h1>
            <h1 style={{textAlign: "center", padding:"20px"}}></h1>
            <DinamicBanner
                imageSrc='/assets/images/banner/banner_img.png'
                title='Conoce nuestro Programa'
                message='Distintas modalidades para ayudarte'
                customStyles={{ banner: 'programa-banner', bannerImg: 'programa-img', bannerTextBox: 'programa-textbox', bannerTitle: 'programa-title', bannerMessage: 'programa-message' }}
            />
        </div>
        
    )
}

export default Programa
