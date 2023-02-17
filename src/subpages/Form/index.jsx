import {useState} from "react";
import styles from "./Form.module.css";
import emailJS from "@emailjs/browser";

export default function Form() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    function sendEmail(e){
        e.preventDefault()

        if(name === ""| email === ""| message === ""){
            alert('Preencha todos os campos');
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailJS.send("service_1pg6w4c","template_y9dbavu",templateParams, "e8ioEGUfOrSXzdiVd")
            .then((response)=>{
                console.log("Email enviado", response.status, response.text)
                setName("")
                setMessage("")
                setEmail("")

            }, (err)=>{
                console.log("Erro: " , err)
            })
    }

    return (
        <>
            <form onSubmit={sendEmail} className={styles.form}>
                <h2 className={styles.title}>
                    Formulário de envio de email
                </h2>
                <input
                    className={styles.input}
                    placeholder="Digite o seu nome"
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />

                <input
                    className={styles.input}
                    placeholder="Digite o seu E-mail"
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <textarea
                    className={styles.textarea}
                    placeholder="Digite o seu comentário"
                    type="text"
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                />

                <button className={styles.button}>
                    Enviar
                </button>
            </form>
        </>
    )
}
