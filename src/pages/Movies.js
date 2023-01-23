import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { SearchBar } from "../components/SearchBar/SearchBar"

const Movies = () => {
    return (
        <>
            <SearchBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default Movies