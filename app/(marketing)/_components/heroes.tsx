import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex -flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="/document4.jpeg" fill className="object-contain dark:hidden" alt="Documents"/>
          <Image src="/document4.jpeg" fill className="object-contain hidden dark:block" alt="Documents"/>
        </div>
        <div className="relative h-[400px] w-[400px]">
          <Image src="/document3.jpeg" fill className="object-contain dark:hidden" alt="Documents" />
          <Image src="/document3.jpeg" fill className="object-contain hidden dark:block" alt="Documents"/>
        </div>
        <div className="relative h-[400px] w-[400px]">
          <Image src="/document1.jpeg" fill className="object-contain dark:hidden" alt="Documents" />
          <Image src="/document1.jpeg" fill className="object-contain hidden dark:block" alt="Documents"/>
        </div>
      </div>
    </div>
  )
}