import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import { usequery } from "../../../../../../../core/services/api/reactQuery/useQuery";
import { PencilEdit01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";

const ProgressCircle = () => {
  const data = usequery("userInfo");
  return (
    <Card className="tablet:w-[250px] w-min mx-auto h-full border bg-gray-100 dark:bg-zinc-600 dark:text-white ">
      <div className="flex mt-2 ">
        <Chip
          classNames={{ 
            base: "",
            content: "text-black/90 font-DanaFaNum-600 tablet:text-sm text-xs " ,
          }}
          variant="bordered "
        >
          {" "}
          وضعیت اطلاعات حساب کاربری
        </Chip>
        <Link to="/StudentPanel/profile">
          <PencilEdit01Icon size={20} className="text-blue cursor-pointer dark:text-white" />
        </Link >
      </div>
      <CardBody className="justify-center items-center pb-0 ">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-small ",
            indicator: "stroke-[#facc15] ",
            track: "stroke-gray-400 ",
            value: "text-[32px] font-DanaFaNum-600 text-black ",
          }}
          value={data?.profileCompletionPercentage}
          strokeWidth={2}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0 ">
        <Chip
          classNames={{
            base: "",
            content: "text-black/90 font-DanaFaNum-600 tablet:text-sm text-xs ",
            
          }}
          variant="bordered "
        >
          {data?.profileCompletionPercentage === 100
            ? "اطلاعات حساب کاربری شما کامل است"
            : "اطلاعات حساب کاربری شما کامل نیست"}
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default ProgressCircle;
