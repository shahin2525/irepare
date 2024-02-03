import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1 className="mb-8">Services that we provide.</h1>
        <p className="max-w-[80ch] mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement></BatteryReplacement>
        <ChipReplacement></ChipReplacement>
        <DataRecovery></DataRecovery>
        <div className="bg-red-500 h-[430px] rounded-md col-span-12"></div>
        <div className="bg-red-500 h-[430px] rounded-md col-span-12 lg:col-span-4"></div>
        <div className="bg-red-500 h-[430px] rounded-md col-span-12 lg:col-span-4"></div>
        <div className="bg-red-500 h-[430px] rounded-md col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
