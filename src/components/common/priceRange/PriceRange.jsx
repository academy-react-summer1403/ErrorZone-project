import {cn, Slider} from "@nextui-org/react";

 function PriceRange({onchange}) {

  return (
<Slider
      size="md"
      // label="قیمت"
      maxValue={1000000000}
      step={50000}
      defaultValue={[0, 1000000000]}
      // formatOptions={{style: "currency", currency: "irt"}}
      onChange={(value) => onchange(value)}
      classNames={{
        base: "max-w-md gap-3",
        filler: "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
      }}
      renderThumb={({index, ...props}) => (
        <div
          {...props}
          className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
        >
          <span
            className={cn(
              "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
              index === 0
                ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600" // first thumb
                : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800", // second thumb
            )}
          />
        </div>
      )}
    />
  );
}
export default PriceRange;