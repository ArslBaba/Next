import '../styles/globals.css'
import SwiperCore,{Autoplay} from 'swiper'

function MyApp({ Component, pageProps }) {
  SwiperCore.use([Autoplay])
  return <Component {...pageProps} />
}

export default MyApp
