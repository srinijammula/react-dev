import { useRouteError } from "react-router"

export const Error = () => {
    const e=useRouteError()
    return (
        <div>
            <h1>Wrong URL</h1>
            <h2>{e.status}: {e.statusText}</h2>
        </div>
    )
}