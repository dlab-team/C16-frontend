import { ToastContainer } from "react-toastify"

export const metadata = {
    title: "Red de Cuidados",
    description: "La Red Nacional de Cuidados, reúne a diversas organizaciones públicas y privadas de la sociedad civil a lo largo de todo Chile.",
}

export default function layout({ children }) {
    return (
        <body>
            {children}
            <ToastContainer />
        </body>
    )
}
