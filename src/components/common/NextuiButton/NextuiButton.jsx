import {Button} from "@nextui-org/react";

const NextuiButton = ({className , type}) => {
  return (
    <Button type={type} className={className} color="primary" isLoading>
      Loading
    </Button>
  );
}

export default NextuiButton