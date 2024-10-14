import Image from "next/image";


interface HeadProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
}

export default function Hero(props: HeadProps) {
  return (
    <div className="relative h-96">
      <Image
       src={props.imageUrl}
       alt={props.imageAlt}
       fill
       style={{objectFit: 'cover'}}
      />

      <div className="flex justify-center items-center absolute inset-0">
        <h1 className="text-8xl text-white">{props.heading}</h1>
      </div>
    </div>
  )
}
