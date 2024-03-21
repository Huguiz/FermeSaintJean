export default function Contact() {
    return (
        <section className="flex flex-col items-center flex-1 justify-around">
            <h1 className="title text-2xl">Nous contacter ?</h1>
            <p>Vous pouvez venir directement à la ferme</p>
            <div className="text-center">
                <h2>Téléphone</h2>
                <p>Marty : 06 06 06 60 06 06</p>
                <p>Laurent : 07 07 07 07 07</p>
            </div>
            <div>
                <h2>Adresse</h2>
                Lieu dit Saint Jean
                05150 VALDOULE
            </div>
            <div class="w-80">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d710.0327447862168!2d5.494744131049516!3d44.46728616519708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2ses!4v1711022836063!5m2!1sfr!2ses"
                    style={{ width: "100%", height: "450px", border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}