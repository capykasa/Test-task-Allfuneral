import { AxiosInstance } from "axios";
import { FlattenObjectKeys } from "@/utility/types/objects";
import createCompaniesApi from "./companies";
import createContactsApi from "./contacts";
import createUserApi from "./user";
import createGalleryApi from "./gallery";

function createApi(http: AxiosInstance){
	return {
		user: createUserApi(http),
		companies: createCompaniesApi(http),
		contacts: createContactsApi(http),
		gallery: createGalleryApi(http)
	}
}

export default createApi

export type TApiInstance = ReturnType<typeof createApi>;
export type TApiInstanceKeys = FlattenObjectKeys<TApiInstance, true>