import apple from "../assests/brand logos/icons8-apple.svg";
import asus from "../assests/brand logos/asus-6630-logo-svgrepo-com.svg";
import dell from "../assests/brand logos/dell-2-logo-svgrepo-com.svg";
import fila from "../assests/brand logos/fila-9-logo-svgrepo-com.svg";
import gucci from "../assests/brand logos/gucci-logo-svgrepo-com.svg";
import adidas from "../assests/brand logos/icons8-adidas-trefoil.svg";
import lenovo from "../assests/brand logos/icons8-lenovo.svg";
import msi from "../assests/brand logos/icons8-msi.svg";
import levi from "../assests/brand logos/levi-s-logo-svgrepo-com.svg";
import nike from "../assests/brand logos/nike-3-logo-svgrepo-com.svg";
import puma from "../assests/brand logos/puma-logo-svgrepo-com.svg";
import northface from "../assests/brand logos/the-north-face-1-logo-svgrepo-com.svg";
import sony from "../assests/brand logos/sony-2-logo-svgrepo-com.svg";
import Image from "next/image";

type Props = {};

function BrandsCarousel({}: Props) {
  return (
    <div className=" w-full  py-4  flex overflow-hidden  ">
      <div className="  flex items-center space-x-10  flex-nowrap animate-infinite-slider ">
        <Image
          loading="eager"
          src={apple}
          alt="Brand logo"
          className=" min-w-[100px]    aspect-3/2   grayscale object-contain"
        />
        <Image
          loading="eager"
          src={asus}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={dell}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={fila}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={gucci}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={adidas}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={lenovo}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={msi}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={levi}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={nike}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={puma}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={northface}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={sony}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
      </div>
      <div className=" flex space-x-10  items-center flex-nowrap animate-infinite-slider">
        <Image
          loading="eager"
          src={apple}
          alt="Brand logo"
          className=" min-w-[100px]    aspect-3/2   grayscale object-contain"
        />
        <Image
          loading="eager"
          src={asus}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={dell}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={fila}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={gucci}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={adidas}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={lenovo}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={msi}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={levi}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={nike}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={puma}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={northface}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
        <Image
          loading="eager"
          src={sony}
          alt="Brand logo"
          className="  min-w-[100px]    aspect-3/2   grayscale object-contain "
        />
      </div>
    </div>
  );
}
export default BrandsCarousel;
