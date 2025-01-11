import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from '@/constants/faq';

const FAQ: React.FC = () => {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                Preguntas frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;

