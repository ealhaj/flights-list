import { appApi } from "../../../api";

export const FlightsApi = appApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getFlights: builder.query({
      query: ({ page, pageSize }) => ({
        url: `/flights?page=${page}&size=${pageSize}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      transformResponse: (response) => {
        // adding key for mapping rows in antd table
        const flights = response.resources.map((flight) => ({
          ...flight,
          key: flight.id,
        }));
        response.resources = flights;

        return response;
      },
      providesTags: () => [{ type: "flights", id: "all" }],
    }),
    addFlight: builder.mutation({
      query: ({ url, data }) => {
        return {
          url,
          method: "POST",
          body: data,
          invalidateTags: [{ type: "flights", id: "all" }],
        };
      },
    }),
  }),
});

export const { useGetFlightsQuery, useAddFlightMutation } = FlightsApi;
