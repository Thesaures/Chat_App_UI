import apiClient from '../Axios/apiClient';
type ExtendedCreateUserResponse = {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  detailsTask: object;
};
export async function useTaskDetails(
  lon: string,
  lat: string
): Promise<ExtendedCreateUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let detailsTask: object = {};
  try {
    const createUserResponse = await apiClient.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`
    );

    statusCode = createUserResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    detailsTask = createUserResponse.data.daily;
  } catch (error: any) {
    errorMessage = error.message;
  }
  return { success, statusCode, detailsTask, errorMessage };
}
