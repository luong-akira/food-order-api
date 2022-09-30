import { apiCode } from '@commons/constant';
import { string, number } from 'joi';

export interface AppError extends Error {
  message: string;
  code?: number;
}
export interface ErrorResponseModel {
  status: number;
  code: number | string;
  message?: string;
  // error: any;
  errors?: any;
  debug?: any;
}

export interface PagingModel {
  page: number;
  totalItemCount: number;
  limit: number;
  totalMoney?: number;
}

export interface SuccessResponseModel<T> {
  status: number;
  code: number;
  message?: string;

  data?: T;
}

export interface PagingResponseModel<T> extends SuccessResponseModel<T> {
  paging?: PagingModel;
}

export function withError(error: any, errors?: any): ErrorResponseModel {
  return {
    status: 0,
    code: error.code || apiCode.DB_ERROR.code,
    message: error.message || apiCode.DB_ERROR.message,
    debug: process.env.NODE_ENV === 'development' ? error : undefined,
    // error: error,
    errors,
  };
}

export function loginFalse<T>(data: T): SuccessResponseModel<T> {
  return {
    status: 1,
    code: 403,
    message: 'Tài khoản đang đăng nhập ở nơi khác',
    data,
  };
}
export const notFound = {
  status: 1,
  code: 404,
  message: 'Không tìm thấy sản sản phảm',
};

export const supplierNotFound = {
  status: 0,
  code: 404,
  message: 'Không tìm thấy danh mục',
};

export const valueDate = (message: string) => ({
  status: 1,
  code: 200,
  message,
});

export const unprocessableEntity = {
  status: 0,
  code: 422,
  message: 'Danh mục đã có sản phẩm',
};

export const successfulDelete = {
  status: 1,
  code: 200,
  message: 'Xóa thành công',
};

export function loginFail<T>(data: T): SuccessResponseModel<T> {
  return {
    status: 0,
    code: 200,
    message: 'Sai tài khoản hoặc mật khẩu',
    data,
  };
}

export function ErrorResponseModel<T>(err: { code: number; message: string }): SuccessResponseModel<T> {
  return {
    status: 0,
    code: err.code,
    message: err.message,
    data: null,
  };
}

export function withSuccess<T>(data: T): SuccessResponseModel<T> {
  return {
    status: 1,
    code: 1,
    message: 'Thành công',
    data,
  };
}
export function withSuccessOnError<T>(err: { code: number; message: string }): SuccessResponseModel<T> {
  return {
    status: 1,
    code: err.code,
    message: err.message,
    data: null,
  };
}
export function withFailed<T>(data?: T): SuccessResponseModel<T> {
  return {
    status: 0,
    code: 400,
    message: 'Thất bại',
    data,
  };
}

export function withPagingSuccess<T>(data: T, paging?: PagingModel): PagingResponseModel<T> {
  return {
    status: 1,
    code: 1,
    message: 'Thành công',
    data,
    paging,
  };
}
export function success<T>(message: string, data?: T): SuccessResponseModel<T> {
  return {
    status: 1,
    code: 200,
    message: message,
    data,
  };
}

export const badRequestMemberRankId = {
  status: 0,
  code: 400,
  message: 'không được phép cập nhận hạng',
};
export const badRequestMinPriceOrder = {
  status: 0,
  code: 400,
  message: 'không được phép cập nhận giá tiền thấp nhật',
};

export const badRequestTime = {
  status: 0,
  code: 400,
  message: 'Kiểu giá trị thời gian không đúng định dạng',
};

export const badRequestDiscountPercent = {
  status: 0,
  code: 400,
  message: 'Mã đã được kích hoạt không thể cập nhật số phầm trăm đơn hàng',
};

export const badRequestMaxDiscountPrice = {
  status: 0,
  code: 400,
  message: 'Mã đã được kích hoạt không thể cập nhật số tiền',
};

export const notFoundGift = {
  status: 0,
  code: 404,
  message: 'Không tìm thấy mã giảm giá',
};

export const badRequestStartDate = {
  status: 0,
  code: 400,
  message: 'Mã đã được kích hoạt không thể cập nhật ngày bắt đầu',
};

export const Success = {
  status: 1,
  code: 200,
  message: 'Cập nhật thành công',
};

export const badRequestQuantity = {
  status: 0,
  code: 400,
  message: 'Mã đã được kích hoạt không thể cập nhật số lượng',
};

export const statusBadRequest = {
  status: 0,
  code: 404,
  message: 'status không đúng định dạng',
};
