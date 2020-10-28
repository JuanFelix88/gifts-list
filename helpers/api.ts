import axios, { AxiosResponse } from 'axios'
export const uri = process.env.BACKEND_URL

export interface Items {
  _id: string
  name: string
  user: any
  category?: string
  loading: boolean
  selected: {
    number: any
  }
}

export interface Login {
  _id: string
  number: string
}

export async function getItems(
  phone: string | number
): Promise<AxiosResponse<Items[]>> {
  const response: AxiosResponse<Array<Items>> = await axios.get(
    `${uri}/items`,
    {
      headers: {
        number: phone
      }
    }
  )
  return response
}

export async function selectItem(
  id: string,
  phone: string
): Promise<AxiosResponse<Items[]>> {
  const response: AxiosResponse<Array<Items>> = await axios.get(
    `${uri}/select/${id}`,
    {
      headers: {
        number: phone
      },
      data: {}
    }
  )
  return response
}

export async function unselectItem(
  id: string,
  phone: string
): Promise<AxiosResponse<Items[]>> {
  const response: AxiosResponse<Array<Items>> = await axios.delete(
    `${uri}/select/${id}`,
    {
      headers: {
        number: phone
      }
    }
  )
  return response
}

export async function signIn(phone: string): Promise<AxiosResponse<Login>> {
  const response: AxiosResponse<Login> = await axios.post(
    `${uri}/sessions`,
    {
      number: phone
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return response
}

export async function addItem(
  name: string,
  phone: string,
  category: string
): Promise<AxiosResponse<Login>> {
  const response: AxiosResponse<Login> = await axios.post(
    `${uri}/items`,
    {
      name,
      category
    },
    {
      headers: {
        'Content-Type': 'application/json',
        number: phone
      }
    }
  )
  return response
}

export async function removeItem(
  id: string,
  phone: string
): Promise<AxiosResponse<void>> {
  const response: AxiosResponse<void> = await axios.delete(
    `${uri}/items/${id}`,
    {
      headers: {
        phone
      }
    }
  )
  return response
}
