import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const SingleService = () => {
  const { serviceId } = useParams();
  const [services] = useServices();
  const matchedService = services.find((service) => service.id === serviceId);

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 my-20 p-6 md:p-10 shadow-2xl rounded-3xl">
      <div>
        <img
          className="h-60 md:h-96 block mx-auto"
          src={matchedService?.img}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl text-center font-medium capitalize my-6">
          {matchedService?.name}
        </h1>
        <p className="w-full md-p-0 md:w-2/3 md:mx-auto my-6 text-base md:text-xl">
          {matchedService?.description}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
