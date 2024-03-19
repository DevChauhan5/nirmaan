import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <Image
        src={"/svgs/not-found.svg"}
        alt='404 - Page not found'
        className=''
        height={600}
        width={600}
        />
    </div>
  )
}

export default NotFound