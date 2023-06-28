import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";  // /!\  Penser à installer emailjs avec la commande : npm install @emailjs/browser  /!\

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMessage = document.querySelector('.form-message');  // /!\ Ne pas oublier le "." quand on va chercher une class ! /!\

        emailjs.sendForm(  // Méthode de emailjs
            'service_79o9cm9',  // Service ID (dispo sur le site emailjs)
            'template_p7euq48',  // Template ID (dispo sur le site emailjs)
            form.current,
            'oQ6CwaN07ta4jNX5R'  // Public key (dispo sur le site emailjs)
        )
            .then((result) => {
                console.log(result.text);
                form.current.reset(); // On vide le formulaire (seulement si le formulaire est envoyé)
                formMessage.innerHTML = "<p className='success'>Message Envoyé !</p>";
                setTimeout(() => {  // Fait disparaitre le message "Message envoyé !" au bout d'un certain temps
                    formMessage.innerHTML = "";
                }, 5000);  // 5000 --> Temps du TimeOut (ici, 5000ms)
            }, (error) => {
                console.log(error.text);
                formMessage.innerHTML = "<p className='error'>Une erreur s'est produite, veuillez réessayer...</p>";
                setTimeout(() => {  // Fait disparaitre le message "Une erreur s'est produite..." au bout d'un certain temps
                    formMessage.innerHTML = "";
                }, 10000);  // 10000 --> Temps du TimeOut (ici, 10000ms)
            });
    };

    return (
        <div className="form-container">
            <h2>Contactez-nous</h2>
            <form ref={form} onSubmit={sendEmail} className='form-content'> {/* ref --> lié au useRef ci-dessus, récupère toutes les informations (de chaque input dans la balise form) */}
                <label>nom</label>
                <input
                    type="text"
                    name="name"  // name --> nom identique à ce qu'on a mis dans le template (sur le site emailjs)
                    required
                    autoComplete='off '
                    id='name' />
                <label>Email</label>
                <input
                    type="email"
                    name="email"  // email --> nom identique à ce qu'on a mis dans le template (sur le site emailjs)
                    required
                    autoComplete='off '
                    id='email' />
                <label>Message</label>
                <textarea
                    name="message" // message --> nom identique à ce qu'on a mis dans le template (sur le site emailjs)
                    required
                    id='mess' />
                <input type="submit" value="Envoyer" className='hover button' />
            </form>
            <div className="form-message">

            </div>
        </div>
    );
};

export default ContactForm;