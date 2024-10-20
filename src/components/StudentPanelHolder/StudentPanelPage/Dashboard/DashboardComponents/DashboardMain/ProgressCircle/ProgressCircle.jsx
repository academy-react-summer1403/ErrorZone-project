import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import { usequery } from "../../../../../../../core/services/api/reactQuery/useQuery";


const ProgressCircle = () => {
  const data = usequery('userInfo')
  return (
    <Card className="w-[240px] h-[240px] border border-blue bg-gray-700">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-small",
            indicator: "stroke-blue",
            track: "stroke-blue/10",
            value: "text-xl font-semibold text-white",
          }}
          value={data?.profileCompletionPercentage}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip>
      </CardFooter>
    </Card>
  );
}

export default ProgressCircle