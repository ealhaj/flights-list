import { useAddFlightMutation } from "../../features/flights/store";
import { buildFormData } from "../form.utils";

export const useFlight = () => {
  const [addFlight, { error }] = useAddFlightMutation();

  return [
    async ({ code, capacity, departureDate, photo }) => {
      const flightPhoto = photo?.fileList[0]?.originFileObj || null;
      const flightInitialDetails = {
        code,
        capacity,
        departureDate: departureDate.format("YYYY-MM-DD"),
      };

      return addFlight({
        url: flightPhoto ? `/flights/withPhoto` : `/flights`,
        data: flightPhoto
          ? buildFormData({ ...flightInitialDetails, photo: flightPhoto })
          : flightInitialDetails,
      }).catch((err) => {});
    },
    {
      error,
    },
  ];
};
