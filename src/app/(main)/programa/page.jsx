import DinamicBanner from "../components/DinamicBanner/DinamicBanner"

function Programa() {
    return (
        <div>
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
