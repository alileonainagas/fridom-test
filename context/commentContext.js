import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

/* Initialized Context */
export const commentContext = createContext();

/* Comments Custom Hook */
export const useComment = () => useContext(commentContext);

export const CommentProvider = ({children}) => {

    /* Context Global State */
    const [comments, setComments] = useState([]);
    
    /* Loading Data State */
    const [loading, setLoading] = useState(false);

    /* Comment Date Instance */
    const commentDate = () => {
        const current = new Date();
        const minutes = String(current.getMinutes()).padStart(2, '0');
        const dateFormat = `${current.getFullYear()}/${(current.getMonth()+1)}/${current.getDate()} - ${current.getHours()}:${minutes}`;
        return dateFormat;
    }

    /* Comment Creation Function - Provider */
    const createComment = (author, description) => {
        setLoading(true);
        setTimeout(() => {
            setComments([...comments, {id:uuid(), author, description, date:commentDate()}]);
            setLoading(false);
        }, 2000);
    }

    return (
        <commentContext.Provider value={{comments, createComment, loading}}>
            {children}
        </commentContext.Provider>
    );
} 