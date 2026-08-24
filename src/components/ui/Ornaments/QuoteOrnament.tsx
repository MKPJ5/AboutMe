const Ornament = ({ quote }: { quote: string }) => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
        <span className="text-secondary text-2xl">✦</span>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
      </div>

      <p className="text-center font-serif text-xl text-[#A8A29E] italic md:text-2xl">
        &ldquo;{quote}.&rdquo;
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
        <span className="text-secondary text-2xl">✦</span>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
      </div>
    </div>
  );
};

export default Ornament;
