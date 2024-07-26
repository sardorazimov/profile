import NumberTicker from "@/components/magicui/number-ticker";

const Number = () => {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={10000} />
    </p>
  );
};

export default Number;
