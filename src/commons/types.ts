import { Request, Response } from 'express-serve-static-core';
export interface AuthorizedUser {
  phone: string;
  id: number;
  enterprise_id?: number | null;
  df_type_user_id?: number;
  role?: number;
  name?: string;
}

export interface FollowWhere {
  is_active: number;
  user_id?: number;
  product_id?: number;
  enterprise_id?: number
}

export interface RequestType extends Request {
  user?: { data: AuthorizedUser };
  enterprise_id?: number;
  getBaseServer(): string;
  getFullUrl(baseUrl?: string): string;
}
export interface ResponseType extends Response {}

export interface TypeObj {
  [key: string]: any;
}
export interface OrderType {
  // gift_id?: number;
  type_payment_id?: number;
  user_address_id?: number;
  carts?: {
    enterprise_id?: number;
    items?: {
      gift_id?: number;
      flashsale_id?: number;
      point?: number;
      total_discount?: number;
      note?: string;
      total_money?: number;
      cart_id?: number[];
      products?: {
        product_price_id?: number;
        quantity?: number;
      }[];
    }[];
  }[];
  total_price: number;
}
export interface TypeLayLog {
  latitude: number;
  longitude: number;
}
