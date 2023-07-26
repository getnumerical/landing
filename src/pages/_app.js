import { Toaster } from "react-hot-toast";
import '../styles/tailwind.css'


export default function App({
  Component,
  pageProps: { ...pageProps }
}) {
  return (
    <>
    <Component {...pageProps} />
    <Toaster position="top-center" gutter={8} />
    </>
  )
}
