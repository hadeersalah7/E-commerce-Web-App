import { LoginForm } from "../components"
import loginImage from "../assets/Group 2014.png"
import { motion } from 'framer-motion';
const Login = () => {
    return (
        <main className="flex w-screen h-screen justify-between flex-wrap overflow-hidden">
            <section className="w-[50%] flex justify-center items-center">
                <LoginForm />
            </section>

            <section className="w-1/2  m-0 p-0 flex justify-end items-center">
                <motion.img
                    src={loginImage}
                    alt="Login Image"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </section>
        </main>
    )
}

export default Login