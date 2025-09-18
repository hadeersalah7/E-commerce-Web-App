
import notFoundImage from "../assets/not-found.svg"
const Error = () => {
    return (
        <section className="text-center grid place-items-center">
            <img src={notFoundImage} alt="Route Not Found" className="w-1/2 my-12"/>
            <h3 className="text-xl text-gray-800 capitalize">Sorry! we can't find the page that you looking for.</h3>
        </section>
    )
}

export default Error