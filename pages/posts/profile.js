import Image from "next/image"; {/* 1. Import Image component from next/image */}
const profile = () => {
  return (
    <div> {/* 2. Add component and add src, heigth and weight of the image*/}
      <Image  
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="abstract image"
      /> 
    </div>
  )
}

export default profile