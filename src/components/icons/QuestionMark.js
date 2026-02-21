'use client';
import { QuestionMarkIcon } from "@phosphor-icons/react";

const QuestionMark = ({ weight = 'regular' , customClasses }) => {
    return (
        <>
            <QuestionMarkIcon weight = {weight} className = {customClasses}/>
        </>
    );
};

export default QuestionMark;