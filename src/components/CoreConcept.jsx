import {CORE_CONCEPTS} from "../data.js";
import CoreConcepts from "./CoreConcepts.jsx";
import Section from "./Section.jsx";
export default function CoreConcept(){
    return(
        <Section title ="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=><CoreConcepts key= {conceptItem.title} {...conceptItem} />)}
            </ul>
        </Section>
    );
}