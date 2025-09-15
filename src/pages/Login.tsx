import { LoginForm } from "../components"
import loginImage from "../assets/Group 2014.png"
import { motion } from 'framer-motion';
const Login = () => {
    return (
        <main className="flex justify-between flex-wrap  w-full">
            <section className="w-[50%]">
                <LoginForm />
            </section>

            <section className="m-0 w-[50%]">
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