

const PruebasBanner = ({ data }) => {
    const { imgSrc, text, mobile, button } = data;

 
    const imageUrl = mobile ? '/ruta-imagen-movil.jpg' : '/ruta-imagen-desktop.jpg';

    return (
        <div className="banner">
            <img src={imageUrl} alt="Banner" />
            <p>{text}</p>
            {button && <button>Ver más</button>}
        </div>
    );
};

export default PruebasBanner;
