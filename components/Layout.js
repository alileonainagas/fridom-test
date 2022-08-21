export default function Layout({children}) {
    return(
        <div
            className='w-full min-h-screen pt-8 pb-8 flex flex-col items-center bg-blackcustom bg-imagecustom'
        >
            {children}
        </div>
    )
}