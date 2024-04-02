import DinamicBanner from "../components/DinamicBanner/DinamicBanner"

function QuienesSomos() {
    return (
        <div>
            <DinamicBanner
                imageSrc='/assets/images/banner/quienessomosbanner.png'
                title='Sobre Nosotros'
                message='Revisa todo el material que tenemos para ti'
                customStyles={{ banner: 'somos-banner', bannerImg: 'somos-img', bannerTextBox: 'somos-textbox', bannerTitle: 'somos-title', bannerMessage: 'somos-message' }}
            />
        </div>
    )
}

export default QuienesSomos
