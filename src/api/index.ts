import { AxiosInstance } from "axios";
import createCompaniesApi from "./companies";
import createContactsApi from "./contacts";
import { FlattenObjectKeys } from "@/utility/types/objects";

function createApi(http: AxiosInstance){
	return {
		companies: createCompaniesApi(http),
		contacts: createContactsApi(http)
	}
}

export default createApi

export type TApiInstance = ReturnType<typeof createApi>;
export type TApiInstanceKeys = FlattenObjectKeys<TApiInstance, true>