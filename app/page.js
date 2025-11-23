import Image from "next/image";
import hero from "@/public/hero-image 1.png";

export default function Home() {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={hero} alt="Landscape picture" width={800} height={500} />
        <div>
          <h1 className="text-5xl font-bold">
            Discover what’s possible with 3D printing
          </h1>
          <p className="py-6">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <button className="btn btn-primary">Browse Models</button>
        </div>
        {/* <img src="/hero-image.png" width={350} /> */}
      </div>
    </div>
  );
}
