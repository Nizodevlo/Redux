import CtaButton from "@/components/ctaButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-x-[50px]">
      <div>
        <h1 className="text-4xl font-bold text-yellow-400 mb-5">
          Welcome to my redux projects documentation
        </h1>
        <p className="mb-5">
          Here I'm gonna show my experiences with redux and redux toolkit
        </p>
        <CtaButton />
      </div>
      <div>
        <img
          className="rounded-[20px]"
          src="https://placehold.co/600x400/purple/white?text=Redux+Projects&font=raleway"
        />
      </div>
    </div>
  );
}
