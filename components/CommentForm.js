import { useState } from "react";
import { useComment } from "../context/commentContext";
import Image from "next/image";
import ALALOGO from '../assets/ALA-DEV-LOGO.svg';


export default function CommentForm() {

    /* User Data Entry State */
    const [comment, setComment] = useState({
        author: '',
        description: ''
    });

    /* Comment Creation Instance From Context */
    const {createComment} = useComment();
    
    /* Input Validation on Submit */
    const handleChange = e => {
        const {value, name} =  e.target;
        setComment({...comment, [name]: value});
    }

    /* Form Submit + Comment Creation */
    const handleSubmit = e => {
        e.preventDefault();
        createComment(comment.author, comment.description);

        /* Clear inputs */
        setComment({
            author: '',
            description: ''
        });
        e.target.reset();
    }

    return (
        <>
        <form 
            className='bg-coral-pallete w-halfview pt-3 pb-6 px-6 rounded-md mt-6 mb-6'
            onSubmit={handleSubmit}
        >
            <div className="inline-flex items-center w-full justify-between">
            <h1
                className='mb-4 font-sans font-extrabold text-3xl text-blackcustom'
            >Ingresa tu comentario</h1>
            <Image src={ALALOGO} alt='ala-logo' height={150} width={180} />
            </div>

            <input
                type='text'
                name='author' 
                placeholder='Nombre del autor'
                className='bg-input-pallete focus:outline-none placeholder:text-white focus:text-blackcustom w-1/2 px-2 py-1 mb-4 rounded' 
                onChange={handleChange}
            />
            <textarea
                name='description' 
                placeholder='Escriba su comentario.'
                rows='4'
                className='bg-slate-300 focus:outline-none placeholder:textarea-pallete focus:text-blackcustom w-full px-2 py-1 mb-4 rounded'
                onChange={handleChange}
            ></textarea>
            <button
                className='bg-button-pallete font-semibold hover:opacity-90 px-2 py-2 rounded text-slate-200 disabled:opacity-30 float-right'
                disabled={!comment.author || !comment.description}            
            >Enviar comentario</button>
        </form>
        </>
    );
};
