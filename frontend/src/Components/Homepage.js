import AskUs from "./AskUs";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import IncreaseSale from "./IncreaseSale";

function Homepage() {
    return (
        <>
            <section>
                <Hero />
                <IncreaseSale />
                <AskUs />
                <ContactUs />
            </section>
        </>
    );
}

export default Homepage;