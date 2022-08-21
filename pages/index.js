import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Layout from '../components/Layout';
import { RingLoader } from 'react-spinners';
import {useComment} from '../context/commentContext';

export default function Home() {

	/* Getting Updated Context Data Array */
  	const {comments, loading} = useComment();


  	return (
    	<Layout>
        	<CommentForm/>
			<div className='text-2xl text-white tracking-wider mt-6 mb-9 font-medium'>
				Comentarios
			</div>
			{loading && <RingLoader color='#E9E9E9' loading={loading} size={100} className='mt-3 mb-3' />}
			{
				comments.length === 0 ?
				<h1 className='text-lg text-gray-400 mt-3 mb-3 tracking-widest'>No Hay Comentarios</h1> :
				(<div 
					className='flex flex-col-reverse'
				>{
					comments.map((comment) => (
						<CommentList
						key={comment.id}
						author={comment.author}
						description={comment.description}
						id={comment.id}
						date={comment.date}
					/>
					))
				}</div>)
			}
    	</Layout>
  	)
}
