'use client'
import React, { useState } from "react";

interface AnswersVisibleState {
    [key: string]: boolean;
}

const FAQ: React.FC = () => {
    const [answersVisible, setAnswersVisible] = useState<AnswersVisibleState>({});

    const toggleAnswer = (questionId: string) => {
        setAnswersVisible((prevAnswersVisible) => ({
            ...prevAnswersVisible,
            [questionId]: !prevAnswersVisible[questionId],
        }));
    };

    return (
        <div className=" bg-gray-100 min-h-screen flex flex-col justify-center items-center w-screen">
            <div className="max-md:ml-12 flex justify-center items-center">
                <span className="text-5xl lg:text-5xl text-[#004AAD] ">Perguntas frequentes</span>
            </div>
            <div className="container mx-auto px-4 py-8 w-full lg:w-1/2 ">
                <div className="faq-item border border-gray-300 rounded-lg mb-4 p-4 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => toggleAnswer('question1')}>
                        <span>Como posso melhorar minha pronúncia em inglês?</span>
                        <span>{answersVisible['question1'] ? '-' : '+'}</span>
                    </div>
                    {answersVisible['question1'] && (
                        <div className="answer bg-white border border-gray-300 rounded-lg p-4 mt-2">
                            Para melhorar sua pronúncia em inglês, pratique regularmente, ouça falantes nativos, assista a filmes e séries em inglês e considere fazer aulas com um professor experiente.
                        </div>
                    )}
                </div>

                <div className="faq-item border border-gray-300 rounded-lg mb-4 p-4 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => toggleAnswer('question2')}>
                        <span>Quais são as melhores maneiras de aprender vocabulário em inglês?</span>
                        <span>{answersVisible['question2'] ? '-' : '+'}</span>
                    </div>
                    {answersVisible['question2'] && (
                        <div className="answer bg-white border border-gray-300 rounded-lg p-4 mt-2">
                            Algumas das melhores maneiras de aprender vocabulário em inglês incluem a prática regular de leitura, o uso de aplicativos de vocabulário, a criação de cartões de vocabulário, e a prática de conversação com falantes nativos ou colegas de estudo.
                        </div>
                    )}
                </div>

                <div className="faq-item border border-gray-300 rounded-lg mb-4 p-4 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => toggleAnswer('question3')}>
                        <span>Como posso praticar minha habilidade de escrita em inglês?</span>
                        <span>{answersVisible['question3'] ? '-' : '+'}</span>
                    </div>
                    {answersVisible['question3'] && (
                        <div className="answer bg-white border border-gray-300 rounded-lg p-4 mt-2">
                            Para praticar sua habilidade de escrita em inglês, escreva regularmente em um diário, envie e-mails em inglês, participe de fóruns ou grupos de discussão online em inglês e peça feedback de um professor ou nativo.
                        </div>
                    )}
                </div>

                <div className="faq-item border border-gray-300 rounded-lg mb-4 p-4 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => toggleAnswer('question4')}>
                        <span>É importante praticar a conversação em inglês?</span>
                        <span>{answersVisible['question4'] ? '-' : '+'}</span>
                    </div>
                    {answersVisible['question4'] && (
                        <div className="answer bg-white border border-gray-300 rounded-lg p-4 mt-2">
                            Sim, é muito importante praticar a conversação em inglês. Isso ajuda a melhorar sua fluência, compreensão auditiva e confiança ao falar. Procure oportunidades para conversar com falantes nativos ou colegas de estudo e não tenha medo de cometer erros - é assim que se aprende.
                        </div>
                    )}
                </div>

                {/* Adicione mais perguntas e respostas conforme necessário */}
            </div>
        </div>
    );
}

export default FAQ;
