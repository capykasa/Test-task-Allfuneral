import { AxiosInstance } from "axios";
import createCompaniesApi from "./companies";
import createContactsApi from "./contacts";
import { FlattenObjectKeys } from "@/utility/types/objects";
import createUserApi from "./user";

function createApi(http: AxiosInstance){
	return {
		user: createUserApi(http),
		companies: createCompaniesApi(http),
		contacts: createContactsApi(http)
	}
}

export default createApi

export type TApiInstance = ReturnType<typeof createApi>;
export type TApiInstanceKeys = FlattenObjectKeys<TApiInstance, true>