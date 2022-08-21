import {useComment} from '../context/commentContext';

export default function CommentList({author, description, id, date}) {

    return (
        <>
        <div
            className=' bg-card-pallete w-halfview  pt-5 pb-6 px-6 rounded-md mt-3'
        >
            <div
                className='w-full inline-flex justify-between items-center mb-6'
            >
                <h1 className='text-blackcustom font-extrabold text-2xl'>{author}</h1>
                <p className='text-blackcustom font-medium text-xl'>{date}</p>
            </div>
            <div className='w-full'>
                <p className='text-blackcustom font-semibold text-lg'>{description}</p>
            </div>
        </div>
        </>
    );
};
