import { CarType } from "../types";

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_API_HOST,
  },
};
// Asenkron fonksiyonlarda işlemin geçerkleşmesi zaman aldığından kayanklı olarak return tipi her zaman PROMISE'tir. Bizim return ettiğimiz bir değer varsa o değerin tipinin Promise interface'ine generic olarak göndeririz.

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export async function fetchCars(paramsObj: FilterType): Promise<CarType[]> {
  const {
    limit = "5",
    make = "bmw",
    model = "m5",
    fuel_type = "",
    year = "",
  } = paramsObj;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m5&limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

  const response = await fetch(url, options);
  return await response.json();
}
