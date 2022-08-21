import '../styles/globals.css';
import {CommentProvider} from '../context/commentContext';

function MyApp({ Component, pageProps }) {
  return (
    <CommentProvider>
      <Component {...pageProps} />
    </CommentProvider>
  )
}

export default MyApp
