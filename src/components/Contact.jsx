import { CiMail, CiLinkedin } from "react-icons/ci";

export const Contact = () => {

    return (
        <section id="contact" className="mb-10">
            <h2 className="text-3xl font-bold mb-5">Contact channels</h2>
            <div className="flex gap-10">
    
            <div className="flex flex-col gap-2 justify-center items-center">
            <a href="mailto:majabrunsvik@hotmail.com">
             <CiMail size={40}></CiMail>
             </a>
             <p>E-mail</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <a href="https://www.linkedin.com/in/maja-brunsvik-8751052a5/">
             <CiLinkedin size={40}></CiLinkedin></a>
             <p>Linked In</p>
            </div>
            </div>

        </section>
    )
}