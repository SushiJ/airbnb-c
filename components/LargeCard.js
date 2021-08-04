import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative min-w-[300px] h-96">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="w-64 mb-3 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-xl">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
