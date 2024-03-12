import Banner from "./components/Banner/Banner"


function layout({ children }) {
    return (
        <>
            <Banner />
            <>{children}</>
        </>

    )
}

export default layout
