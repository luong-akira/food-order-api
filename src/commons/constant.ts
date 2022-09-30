export const IS_ACTIVE = {
  ACTIVE: 1,
  INACTIVE: 0,
};

export const GIFT_STATUS = {
  ACTIVE: 1, // hoạt động
  INACTIVE: 0, // không hoạt động
  // PENDING: 0, // chờ duyệt
  // USED: 1, // đã sử dụng
  // CANCELED: 2, // đã huỷ
};

export const PRODUCT_PRICE_STATUS = {
  AVAILABLE: 1,
  UNAVAILABLE: 0,
};

export const MEDIA_TYPE = {
  IMAGE: 1,
  VIDEO: 2,
  FILE: 3,
};

export const POST_STATUS = {
  ACTIVE: 1, // tạo thành công
  PENDING: 0, // đang khởi tạo
};

export const TOTAL_REVENUE = {
  ASC: 1, // tăng dần
  DESC: 0, // giảm dần
};

export const ORDER_STATUS = {
  PENDING: 1, // chờ xác nhận
  CONFIRMED: 2, // đã xác nhận
  SHIP: 3, // đang thực hiện - ko sử dụng
  SUCCCESS: 4, // hoàn thành
  CANCELED: 5, // huỷ
  DENY: 6, // từ chối
  CONFIRM_PAID: 7, // xác nhận thanh toán
};

export const PAYMENT_STATUS = {
  UNPAID: 1, // chờ thanh toán
  PAID: 2, // đã thanh toán
  NOT_PAID: 3, // từ chối thanh toán
  NCC_UNPAID: 4, // chờ xác nhận từ nhà bán hàng
  CUSTOMER_CANCELS: 5, // khách hàng hủy đơn
};

export const TIME = {
  TIME_START: 2592000000,
};
export const DF_TYPE_PAYMENT = {
  COD: 1, // Thanh toán khi nhận hàng
  PAYMENT: 2, // Chuyển khoản
  VNPAY: 3, // Thanh toán VNPAY
};

export const DF_TYPE_SHIP = {
  ENTERPRISE_SHIP: 1, // NCC tự vận chuyển
  // PAYMENT: 2, // Chuyển khoản
  // VNPAY: 3, // Thanh toán VNPAY
};

export const PRODUCT_STATUS = {
  ACTIVE: 1, // tạo thành công
  PENDING: 2, // đang khởi tạo
  INACTIVE: 0, //  dừng hoạt động
};

export const ENTERPRISE_STATUS = {
  DENY: -1, // từ chối
  INACTIVE: 0, // chờ duyệt
  ACTIVE: 1, // chấp nhận
  CANCELED: 2, // dừng hoạt động
};

export const ENTERPRISE_INTRODUCE = {
  INACTIVE: 0, // nhà bán hàng bình thường
  ACTIVE: 1, // NCC giới thiệu sản phẩm
};

export const GOOGLE_API_KEY = '';
export const GOONG_API_KEY = 'iNhcYX66IuFRkaIzQNVmXG1PjGecHbV6BLGdJ50y';

export const PLACE_TYPES = {
  PROVINCE: 'region',
  DISTRICT: 'locality',
  WARD: 'extended-address',
};

export const IS_READ = {
  READ: 1,
  NOT_READ: 0,
};

export const USER_TYPE = {
  ADMIN: 1,
  ENTERPRISE: 2,
  CUSTOMER: 3,
  ENTERPRISE_AND_CUSTOMER: 4,
};

export const FILTER_TYPE = {
  PRICE_MIN_MAX: 2, // Giá từ thấp đến caoORDER_STATUS
  PRICE_MAX_MIN: 1, // Giá từ cao đến thấp
  TIME_NEW_OLD: 1, // Tin đăng mới nhất
  TIME_OLE_NEW: 2, // Tin đăng cũ nhất
  BUY_MIN_MAX: 2, // Bán từ thấp đến cao
  BUY_MAX_MIN: 1, // Bán từ cao đến thấp
};

export const ROLE = {
  ADMIN: 1,
  ENTERPRISE: 2,
  AGENT: 3,
  USER: 4,
};

export const PRODUCT_MEDIA_TYPE = {
  IMAGE: 1,
  VIDEO: 2,
};

export const CATEGORY_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0,
};

export const BANNER_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
};
export const WORKER = {
  IS_WORKER: 1,
  NOT_WORKER: 0,
};

export const USER_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0,
};
export const CUSTOMER_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0,
};

export const MEMBER_RANK = {
  DEFAULT_POINT: 0,
  MEMBER: 1,
  SILVER: 2,
  GOLD: 3,
  DIAMOND: 4,
};
export const OBJECT_NOTIFICATION_TYPE = {
  ENTERPRISE: 1, // Thông báo NCC
  CUSTOMER: 0, // Thông báo khách hàng
  ADMIN: 2, // Thông báo khách hàng
};

export const TYPE_APP = {
  ENTERPRISE: 2, // Thông báo NCC
  CUSTOMER: 1, // Thông báo khách hàng
};

export const TYPE_NOTIFICATION = {
  ORDER: 1, // Thông báo thay đổi trạng thái đơn hàng
  ENTERPRISE_REQUEST: 2, // Thông báo yêu cầu trở thành NCC
  MESSAGE: 3, // Thông báo tin nhắn
  WALLET_TRANSACTION: 4, // Thông báo cộng/trừ điểm
  PAYMENT: 5, // Thông báo rút tiền
  LOGIN_OTHER_DEVICE: 6, // Đăng nhập thiết bị khác
  FLASHSALE: 7, // Thông báo flashsale
  NOTIFICATION: 8, // Thêm thông báo trên web admin
  BANNER: 9, // Thông báo banner
};

export const TYPE_WORKER = {
  INSTALL_REPAIR: 1, // Thợ lắp đặt sửa chữa
  CONSTRUCTOR: 2, // Dịch vụ máy móc xây dựng
  SERVICE: 3, // Dịch vụ thợ theo yêu cầu
};

export const SHIP_UNIT = {
  WEIGHT: 1, // Trọng lượng
  VOLUME: 2, // Thể tích
  LENGTH: 3, // Chiều cao/dài/rộng
  DISTANCE: 4, // Quãng đg vận chuyển
};

export const NOTI_ICON = {
  ORDER: 'icon-order.png',
  MESSAGE: 'icon-message.png',
  LIVESTREAM: 'icon-livestream.png',
  NOTI: 'icon-noti.png',
};

export const ONESIGNAL = {
  URL: 'https://onesignal.com/api/v1/notifications',
  APP_ID: process.env.APP_ID || 'c0893b8a-eba9-4e40-a5c2-b7f25433177f',
  AUTHORIZATION: process.env.AUTHORIZATION || 'MDhmMWMyMzgtNGYyNS00YTg0LWFkZDUtZThkMWNhYzZmMWFh',
  ANDROID_CHANNEL_ID: process.env.ANDROID_CHANNEL_ID || '90841aa0-2085-4e5d-a5c9-a97f2073d360',
  Heading: 'VietBuilding Thông báo',
};

export const SOUTH_TELECOM_DOMAIN = [
  'http://api-02.worldsms.vn/webapi/sendSMS',
  'https://api-02.worldsms.vn/webapi/sendSMS',
  'http://api-01.worldsms.vn/webapi/sendSMS',
  'https://api-01.worldsms.vn/webapi/sendSMS',
  'http://api-05.worldsms.vn/webapi/sendSMS',
  'https://api-05.worldsms.vn/webapi/sendSMS',
];

export const SMS_API_KEY = 'aG9hbmdraW1hcGk6Tk41bmhrNVk=';

export const OTP_TYPE = {
  REGISTER: 1, // Đăng ký
  FORGOT_PASSWORD: 2, // Quên mk
};

export const TRANSACTION_TYPE = {
  INTRODUCE: 1, // Giới thiệu bạn thành công
  DONE_ORDER: 2, // Hoàn thành đơn hàng
  REPAY: 3, // Hoàn tiền khi hủy đơn hàng
  WITHDRAW: 4, // Rút tiền
  MAKE_ORDER_WITH_ACCUMULATE: 5, // Dùng điểm tích lũy
  MAKE_ORDER_WITH_REPAY: 6, // Dùng điểm hoàn
  VNPAY_ORDER: 7, //Hoàn thành đơn hàng thanh toán vnpay
  NOT_WITHDRAW: 8, // Từ chối rút tiền
  ADMIN_PLUS_POINT: 9, // cộng điểm từ  nhà bán hàng
  REFUND: 10, // trừ điểm từ nhà bán hàng khi hủy/từ chối đơn hàng
};

export const CONFIG = {
  DATE_FORMAT: 'YYYY-DD-MM-DD',
  CRYPT_SALT: 10,
  PAGING_LIMIT: 100000,
  RESET_PASSWORD: 'Base123a@',
};
export const expirationTimeInSeconds = 900; //15p - email
export const expirationTimeInSecondsOTP = 300; //5p - otp

export const AMAZON_CONFIG = {
  ACCESS_KEY: process.env.ACCESS_KEY || 'AKIAZRBB2X43P7TQP6OU',
  SECRET_KEY: process.env.SECRET_KEY || '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',
  REGION: process.env.REGION || 'ap-northeast-1',
  BUCKET: process.env.BUCKET || 'windsoftdev',
  AWS_URL: process.env.AWS_URL || 'https://windsoftdev.s3-ap-southeast-1.amazonaws.com',
  AWS_URL_IMAGE: 'https://windsoftdev.s3-ap-southeast-1.amazonaws.com/uploads/image/',
  AWS_URL_VIDEO: 'https://windsoftdev.s3-ap-southeast-1.amazonaws.com/uploads/video/',
};

export const EMAIL_ADDRESS = 'tpmartdemo@gmail.com';
export const EMAIL_PASSWORD = '123456Aa@';
export const APP_EMAIL_PASSWORD = 'vbglqecrotcsujze';

export class AppError extends Error {
  code: number;

  constructor(err: { code: number; message: string }) {
    super(err.message);
    this.code = err.code;
  }

  public with(message: string): AppError {
    this.message = message;
    return this;
  }
}

export const apiCode = {
  SUCCESS: { code: 1, message: 'Thành công' },
  ERROR_LATITIDE: { code: 400, message: 'Latitude không đúng định dạng' },
  ERROR_LONGITIDE: { code: 400, message: 'Longitude không đúng định dạng' },
  TOTAL_PRICE: { code: 400, message: 'Số tiền không được bỏ trống' },
  VNPAY_ERROR: { code: 400, message: 'Vui lòng kiểm trả lại thông tin' },
  ADDRESS_ERROR: { code: 404, message: 'Địa chỉ không tồn tại trong hệ thống' },
  TIME_ERROR: { code: 401, message: 'Thời gian không được quá 30 ngày' },
  DB_ERROR: { code: 2, message: 'Truy vấn lỗi' },
  OTP_FAIL: { code: 3, message: 'OTP không chính xác hoặc đã hết hiệu lực' },
  DELETE_IMAGE_ERROR: { code: 4, message: 'Lỗi xoá ảnh' },
  ACCOUNT_EXIST: { code: 5, message: 'Tài khoản đã tồn tại' },
  AMOUNT_PRODUCT_EXITS: {
    code: 99,
    message:
      'Số lượng bạn thêm vào giỏ hàng đã vượt quá số lượng còn lại. Bạn vui lòng giảm bớt số lượng để thêm vào giỏ hàng.',
  },
  QUANTITY_PRODUCT_EXITS: {
    code: 88,
    message:
      'Số lượng sản phẩm bạn thêm vào giỏ hàng hiện cửa hàng không đủ. Bạn vui lòng giảm bớt số lượng để tiếp tục đặt hàng.',
  },
  UPDATE_PRICE_PRODUCT_FLASHSALE: {
    code: 90,
    message:
      'Sản phẩm của bạn đã xác nhận tham gia flashsale hoặc đang trong khung giờ flashsale nên không được phép sửa',
  },
  PRODUCT_PRICE_NOT_FOUND: { code: 86, message: 'Sản phẩm đã ngưng bán' },
  ENTERPRISE_FLASHSALE_NOT_ADD: { code: 79, message: 'Nhà bán hàng đã tồn tại trong flashsale này' },
  FLASH_SALE_TIME_FALSE: {
    code: 85,
    message:
      'Thời gian tạo flashsale không hợp lệ hoặc đã có khung giờ flashsale trùng với khung giờ bạn đang thiết lập',
  },
  BANK_EXIST: { code: 200, message: 'Ngân hàng đã tồn tại trong hệ thống' },
  FLASH_SALE_LIST_PRODUCT_NOT_FOUND: {
    code: 85,
    message: 'Danh sách sản phẩm bạn chọn có sản phẩm đã bị xoá hoặc ngưng hoạt động, vui lòng cập nhật lại',
  },
  FLASH_SALE_NOT_CREATE_ORDER: {
    code: 86,
    message: 'Sản phẩm bạn mua trong thời gian flashsale đã kết thúc. Bạn vui lòng quay lại giỏ hàng và cập nhật lại',
  },
  GIFT_NOT_FOUNT: { code: 78, message: 'Mã khuyến mãi không tồn tại hoặc đã được sử dụng' },
  CATEGORY_NOT_CHANGE_STATUS: {
    code: 93,
    message: 'Không được phép ngưng hoạt động danh mục khi đã có Nhà bán hàng tham gia flashsale',
  },
  GIFT_ERROR: { code: 79, message: 'Mã khuyến mãi không tồn tại' },
  BANK_NUMBEM_ERROR: { code: 400, message: 'Số tài khoản không đúng định dạng' },
  BANK_NAME_ERROR: { code: 400, message: 'Tên không đúng định dạng' },
  REASON_REFSAL: { code: 400, message: 'Hãy nhập lý do từ chối' },
  BANK_ERROR: { code: 404, message: 'Ngân hàng không tồn tại trong hệ thống' },
  IS_ACTIVE: { code: 400, message: 'Mã active không đúng định dạng' },
  ERROR_NUMBER: { code: 400, message: 'Bad Request' },
  FLASHSALE_ENTERPRISE_EXIST: { code: 78, message: 'Yêu cầu không tồn tại' },
  FLASHSALE_NOT_UPDATE: {
    code: 78,
    message: 'Bạn không được phép sửa khi đang trong khung giờ flashsale',
  },
  FLASHSALE_NOT_UPDATE_ENTERPRISE: {
    code: 78,
    message: 'Bạn không được phép thêm nhà bán hàng khi đang trong khung giờ flashsale',
  },
  CATEGORY_EXIST: { code: 40, message: 'Tên danh mục đã tồn tại' },
  NO_CONTENT: { code: 204, message: 'Không thể thực hiện yêu cầu' },
  ENTERPRISE_NOT_FOUND: { code: 404, message: 'Nhà bán hàng không tồn tại trong hệ thống' },
  DUPLICATE_PRODUCT_IMPORT: {
    code: 404,
    message: 'Import thất bại, có sản phẩm trùng với sản phẩm thuộc Nhà bán hàng khác!',
  },
  ADMIN_NOT_FOUND: { code: 404, message: 'Không có quyền truy cập' },
  ENTERPRISE_MONEY: { code: 404, message: 'Số tiền trong tài khoản không đủ' },
  ENTERPRISE_ERROR: { code: 404, message: 'Vui lòng kiểm trả lại dữ liệu' },
  ENTERPRISE_PAYMENT: { code: 404, message: 'Không tìm thấy yêu cầu rút tiền' },
  ENTERPRISE_BANK: { code: 404, message: 'Thẻ ngân hàng không tồn tại trong hệ thông' },
  ENTERPRISE_EXIST: { code: 71, message: 'Nhà bán hàng đã tồn tại trong hệ thống' },
  ENTERPRISE_PRODUCT_EXIST: { code: 71, message: 'Đã tồn tại sản phẩm ở danh mục này' },
  ENTERPRISE_EXIST_PRODUCT: { code: 19, message: 'Không thể xóa nhà bán hàng đã có sản phẩm' },
  ENTERPRISE_EXIST_ORDERS: {
    code: 19,
    message: 'Không thể thay đổi trạng thái nhà bán hàng có đơn hàng chờ xác nhận hoặc đang giao',
  },
  CUSTOMER_EXIST_ORDERS: {
    code: 19,
    message: 'Không thể thay đổi trạng thái khách hàng có đơn hàng đang giao',
  },
  ENTERPRISE_EXIST_ORDER: { code: 19, message: 'Không thể xóa nhà bán hàng đã phát sinh giao dịch' },
  LEVEL_EXIST: { code: 40, message: 'Tên level đã tồn tại' },
  CATEGORY_NOT_EXIST: { code: 40, message: 'Danh mục không tồn tại' },
  ATTRIBUTE_NOT_EXIST: { code: 75, message: 'Bạn chỉ được thêm thuộc tính khi danh mục đó chưa có danh mục con' },
  CATEGORY_NOT_CREATE: { code: 75, message: 'Bạn chỉ được thêm danh mục con khi danh mục cha chưa có thuộc tính' },
  CATEGORY_NOT_UPDATE: { code: 75, message: 'Bạn chỉ được sửa danh mục con khi danh mục cha chưa có thuộc tính' },
  CATEGORY_ATTRIBUTE_NOT_EXIST: { code: 67, message: 'Đã tồn tại thuộc tính trong danh mục' },
  CATEGORY_PARENT_NOT_EXIST: { code: 50, message: 'Danh mục cha đã tồn tại danh mục con' },
  ATRRIBUTE_NOT_EXIST: { code: 40, message: 'Thuộc tính không tồn tại' },
  CATEGORY_ERROR: { code: 40, message: 'Danh mục đã tồn tại' },
  CATEGORY_NOT_DELETE: { code: 40, message: 'Không được phép xóa danh mục khi có sản phẩm' },
  ACCOUNT_NOT_FOUND: { code: 5, message: 'Tài khoản không tồn tại trong hệ thống' },
  ACCOUNT_FALSE: { code: 56, message: 'Bạn không được phép tạo tài khoản' },
  SERVICE_EXIST: { code: 5, message: 'Dịch vụ đã tồn tại' },
  LOGIN_FAIL: { code: 6, message: 'Sai tài khoản hoặc mật khẩu' },
  LOCK_ACCOUNT: { code: 7, message: 'Tài khoản của bạn đã khóa ' },
  EMAIL_EXIST: { code: 7, message: 'Email đã tồn tại trong hệ thống!' },
  LEVEL_NAME_EXIST: { code: 7, message: 'Hạng thành viên đã tồn tại trong hệ thống!' },
  CARD_NUMBER_EXIST: { code: 7, message: 'Số tài khoản đã tồn tại trong hệ thống!' },
  CARD_EXIST: { code: 404, message: 'Tài khoản không tồn tại trong hệ thống' },
  TAX_CODE_EXIST: { code: 7, message: 'Mã số thuế đã tồn tại trong hệ thống!' },
  TAX_CODE_NOTFOUND: { code: 7, message: 'Mã số thuế không tồn tại trong hệ thống!' },
  REFFREAL_CODE_NOT_EXIST: { code: 7, message: 'Mã giới thiệu không tồn tại trong hệ thống!' },
  OTP_FAIL_OVER: {
    code: 8,
    message: 'Bạn đã gửi OTP quá số lần cho phép vui lòng thử lại sau 5 phút',
  },
  ORDER_CHANGED: { code: 49, message: 'Đơn hàng đã bị hủy, không thể thay đổi trạng thái' },
  PAYMENT_CHANGED: { code: 49, message: 'Đơn hàng đã thanh toán, không thể thay đổi trạng thái' },
  NOT_PAID_ORDER: { code: 49, message: 'Đơn hàng chưa được thanh toán, không thể thay đổi trạng thái' },
  INVALID_PARAM: { code: 9, message: 'Tham số không hợp lệ' },
  EXP_OTP: { code: 10, message: 'OTP hết hiệu lực' },
  NOT_FOUND: { code: 11, message: 'Dữ liệu không tồn tại ' },
  STOKE_NOT_FOUND: { code: 42, message: 'Địa chỉ bạn thêm đã tồn tại ' },
  NOT_DELETE_CATEGORY_UCONNECT: {
    code: 11,
    message: 'Không được phép xóa danh mục',
  },
  DATA_EXIST: { code: 11, message: 'Dữ liệu đã tồn tại' },
  FB_ERROR: { code: 12, message: '' },
  UNAUTHORIZED: { code: 403, message: 'Không có quyền truy cập' },
  INVALID_ACCESS_TOKEN: { code: 403, message: 'Vui lòng đăng nhập' },
  ACCOUNT_EXITS: { code: 40, message: 'Phiên đăng nhập hết hạn' },
  INACTIVE_ACCOUNT: { code: 403, message: 'Tài khoản ngừng hoạt động. Vui lòng liên hệ với quản trị để được hỗ trợ.' },
  ALREADY_LOGIN: { code: 403, message: 'Tài khoản đang đăng nhập ở một thiết bị khác!' },
  INACTIVE_ACCOUNT_CUSTOM: {
    code: 1,
    message: 'Tài khoản ngừng hoạt động. Vui lòng liên hệ với quản trị để được hỗ trợ.',
  },
  NO_PERMISSION: { code: 13, message: 'Không có quyền thực hiện chức năng' },
  ACCOUNT_NOT_EXIST: { code: 14, message: 'Tài khoản không tồn tại' },
  EMAIL_NOT_EXIST: { code: 14, message: 'Email không tồn tại. Vui lòng liên hệ với quản trị để được hỗ trợ.' },
  UPDATE_USER_ERROR: { code: 15, message: 'Lỗi cập nhật tài khoản' },
  PAGE_ERROR: { code: 16, message: 'Lỗi truyền trang' },
  NOT_DELETE_SUPER_ADMIN: { code: 17, message: 'Không thế xóa super admin' },
  NOT_DELETE_FLASHSALE: {
    code: 91,
    message: 'Không thế xóa flashsale trong ngày hôm nay khi có nhà bán hàng đã chọn sản phẩm tham gia flashsale',
  },
  UPDATE_FAIL: { code: 18, message: 'Cập nhật không thành công' },
  DATA_NOT_EXIST: { code: 19, message: 'Dữ liệu không tồn tại' },
  IMPORT_FAIL: { code: 19, message: 'File excel không đúng định dạng, vui lòng kiểm tra và thử lại.' },
  AGENT_PRODUCT_NOT_EXIST: { code: 44, message: 'Không tồn tại sản phẩm mà bạn đã đăng kí' },
  PRODUCT_NOT_EXIST: { code: 404, message: 'Sản phẩm không tồn tại' },
  PRODUCT_NOT_FOUND: { code: 50, message: 'Sản phẩm đã ngưng bán' },
  PRODUCT_OUT_OF_STOCK: { code: 87, message: 'Sản phẩm hết hàng' },
  PRODUCT_NOT_EXIST_CART: {
    code: 98,
    message: 'Sản phẩm trong giỏ hàng đã được cập nhật, bạn vui lòng quay lại đặt hàng',
  },
  PRODUCT_FLASHSALE_NOT_CREATE: { code: 36, message: 'Bạn chỉ được mua một sản phẩm trong khung giờ flashsale ' },
  CUSTOMER_ISNT_OF_U: { code: 19, message: 'Khách hàng này không phải của bạn' },
  SHOP_ISNT_OF_U: { code: 19, message: 'Shop này không phải của bạn' },
  ORDER_NOT_EXIST: { code: 19, message: 'Đơn hàng không tồn tại' },
  ORDER_VNPAY_NOT_EXIST: { code: 19, message: 'Đơn hàng không tồn tại hoặc không hỗ trợ thanh toán vnpay' },
  ORDER_NOT_UPDATE: { code: 66, message: 'Đơn hàng trong trạng thái chờ xác nhận mới được sửa thông tin' },
  ORDER_NOT_DELETE: { code: 66, message: 'Đơn hàng trong trạng thái chờ xác nhận mới được xóa' },
  ORDER_NOT_UPDATE_SHOP: { code: 67, message: 'Danh sách đơn hàng bạn chọn phải là những đơn hàng chờ xác nhận' },
  ORDER_NOT_UPDATE_PENDING: { code: 67, message: 'Đơn hàng bạn chọn phải là đơn hàng chờ xác nhận' },
  ORDER_NOT_UPDATE_CONFIRM: { code: 67, message: 'Đơn hàng bạn chọn phải là đơn hàng đã xác nhận' },
  ORDER_NOT_UPDATE_SHIP: { code: 67, message: 'Đơn hàng bạn chọn phải là đơn hàng chờ đang giao' },
  ORDER_ERROR: { code: 400, message: 'Số tiền không hợp lệ' },
  MEMBER_NOT_UPDATE: { code: 66, message: 'Không thế sửa điểm đầu của hạng Thành viên' },
  DIAMOND_NOT_UPDATE: { code: 66, message: 'Không thế sửa điểm cuối của hạng Kim cương' },
  ORDER_NOT_FOUND: { code: 400, message: 'Đơn hàng không tồn tại trong hệ thống' },
  OFFER_NOT_EXIST: { code: 19, message: 'Đơn hàng không phải của bạn!' },
  ORDER_WAS_CANCEL: { code: 19, message: 'Đơn hàng đã bị hủy' },
  ORDER_STATUS_INVALID: { code: 9, message: 'Trạng thái đơn hàng không hợp lệ' },
  PAYMENT_STATUS_INVALID: { code: 9, message: 'Trạng thái thanh toán không hợp lệ' },
  SHIP_STATUS_INVALID: { code: 9, message: 'Trạng thái giao hàng không hợp lệ' },
  PASSWORD_FAIL: { code: 20, message: 'Mật khẩu cũ không chính xác' },
  UPLOAD_FAILED: { code: 21, message: 'Upload thất bại' },
  CATEGORY_NOT_FOUND: { code: 22, message: 'Danh mục không tồn tại ' },
  QUANTITY_FLASHSALE_ERROR: {
    code: 22,
    message: 'Số lượng sản phẩm trong khung giờ flashsale đã thay đổi bạn vui lòng quay lại giỏ hàng và cập nhật',
  },
  PRODUCT_FLASHSALE_NOT_FOUND: { code: 26, message: 'Sản phẩm không tồn tại trong khung giờ flashsale' },
  GIFT_EXITS: { code: 77, message: 'Mã giảm giá đã tồn tại trong hệ thống' },
  GIFT_NOT_DELETE: { code: 78, message: 'Mã giảm giá đã có người sử dụng nên không được phép xoá' },
  EXIST_OWNER: {
    code: 22,
    message: 'Bạn không thể thực hiện yêu cầu này do hồ sơ của bạn chưa được duyệt',
  },
  EXIST_TEAM_OWNER: {
    code: 36,
    message: 'Bạn không thể thực hiện yêu cầu này do hồ sơ chủ đội xe của bạn chưa được duyệt',
  },

  LOGIN_FAIL_OVER: {
    code: 23,
    message: 'Bạn đã đăng nhập sai quá số lần cho phép vui lòng thử lại sau 24h',
  },
  AMOUNT_NOT_FOUNT: {
    code: 64,
    message: 'Số lượng sản phẩm bạn thêm không được phép nhỏ hơn 0',
  },
  PRICE_OFFER_EXIST: { code: 24, message: 'Bạn đã báo giá cho đơn hàng này' },
  STOPPED_PRICE_OFFER: { code: 25, message: 'Đơn hàng đã ngừng nhận báo giá' },
  REQUEST_ACCEPTED: {
    code: 26,
    message: 'Yêu cầu đã được duyệt không thể thay đổi trạng thái',
  },
  TEAM_OWNER_EXIST_IN_PROJECT: {
    code: 27,
    message: 'Chủ đội xe đã tồn tại trong dự án',
  },
  UNFINISHED_PROFILE: {
    code: 28,
    message: 'Mời hoàn thành hồ sơ để thực hiện yêu cầu',
  },
  BRAND_NEW_VEHICLE_EXIST: {
    code: 29,
    message: 'Mã xe đã tồn tại vui lòng thử lại',
  },
  VEHICLE_CATEGORY_EXIST: {
    code: 29,
    message: 'Đã tồn tại loại xe này trong hệ thống.',
  },
  VEHICLE_BRAND_EXIST: {
    code: 29,
    message: 'Đã tồn tại hãng xe này trong hệ thống.',
  },
  INVALID_FILE: { code: 9, message: 'File không hợp lệ' },
  ERROR_BRAND: { code: 30, message: 'Đã tồn tại xe trong hãng xe' },
  ERROR_CATEGORY: { code: 30, message: 'Đã tồn tại xe trong danh mục xe' },
  ERROR_PRODUCT: { code: 30, message: 'Đã tồn tại sản phẩm trong danh mục' },
  PRODUCT_CATEGORY_EXISTS: {
    code: 30,
    message: 'Danh mục sản phẩm đã tồn tại',
  },
  STORE_EXISTS: { code: 30, message: 'Kho hàng đã tồn tại' },
  PRODUCT_EXISTS: { code: 30, message: 'Sản phẩm đã tồn tại' },
  INSURANCE_EXISTS: { code: 30, message: 'Bảo hiểm đã tồn tại' },
  PRODUCT_CART_EXISTS: {
    code: 30,
    message: 'Sản phẩm đã tồn tại trong giỏ hàng',
  },
  INVALID_PLACE: { code: 9, message: 'Địa chỉ không hợp lệ' },
  PRODUCT_NOT_EXISTS: { code: 9, message: 'Sản phầm không tồn tại' },
  VEHICLE_CATEGORY_ERROR: { code: 31, message: 'Loại xe không tồn tại' },
  VEHICLE_BRAND_ERROR: { code: 32, message: 'Hãng xe không tồn tại' },
  PROFILE_ERROR: {
    code: 33,
    message: 'Trong danh sách lựa chọn đã có hồ sơ chấp nhận hoặc từ chối',
  },
  RATE_ERROR: { code: 34, message: 'Bạn đã đánh giá bài viết này rồi' },
  ERROR_TIMEOUT: {
    code: 35,
    message: 'Thời gian cập nhật nhập mật khẩu mới đã hết',
  },
  ERROR_REPORT_TEAM_OWNER: {
    code: 40,
    message: 'Bạn đã báo xấu chủ đội xe rồi',
  },
  ERROR_REPORT_PROJECT_OWNER: {
    code: 41,
    message: 'Bạn đã báo xấu chủ dự án rồi',
  },
  USERNAME_EXIST: { code: 42, message: 'Số điện thoại đã tồn tại' },
  PHONE_EXIST: { code: 43, message: 'Số điện thoại đã tồn tại trong hệ thống!' },
  NAME_EXIST: { code: 43, message: 'Tên nhà bán hàng đã tồn tại trong hệ thống!' },
  PROFILE_EXIST: { code: 44, message: 'Vui lòng nhập đầy đủ thông tin ' },
  PRODUCT_SHIPPING: { code: 45, message: 'Các thông số vận chuyển phải nằm trong koangr từ 0 đến 5.000.000 ' },
  UNIT_SIPPING_EXITS: { code: 46, message: 'Bạn phải lựa chọn đơn vị vận chuyển ' },
  REGISTER_PRODUCT_EXITS: { code: 47, message: 'Bạn đã đăng kí sản phẩm này ' },
  REASON_AGENT_EXITS: { code: 48, message: 'Đại lý này không tồn tại ' },
  REVIEW_EXIT: { code: 49, message: 'Đơn hàng đã được đánh giá' },
  SHIP_MERCHANT_EXIT: { code: 50, message: 'Đơn vị ship bạn chọn không tồn tại' },
  ORDER_PRODUCT_EXIT: { code: 51, message: 'Sản phẩm không tồn tại trong đơn hàng' },
  AGENT_NOT_EXITS: { code: 52, message: 'Bạn phải đăng kí sản phẩm mới được sử dụng chức năng này' },
  DELETE_PRODUCT_ERROR: { code: 53, message: 'Sản phẩm đã có trong đơn hàng, xóa không thành công' },
  CHANGE_STATUS_PRODUCT_ERROR: {
    code: 57,
    message: 'Bạn không thể thay đổi trạng thái sản phẩm khi chưa hoàn thành hết đơn hàng',
  },
  CODE_PRODUCT_ERROR: { code: 54, message: 'Mã sản phẩm đã tồn tại vui lòng nhập mã khác' },
  LEVEL_ERROR: { code: 55, message: 'Nhà bán hàng bạn vừa đăng kí chưa cấu hình level' },
  LEVEL_NOT_EXITS: { code: 56, message: 'Bạn phải cấu hình level trước khi tạo giá sản phẩm' },
  WEB_URL_NOT_EXITS: { code: 57, message: 'Đường dẫn web đã rồn tại! Bạn bui lòng chọn đường dẫn khác' },
  WEB_AGENT_NOT_FOUNT: { code: 58, message: 'Đường dẫn khôg tồn tại' },
  BALANCE_NOT_ENOUGH: { code: 58, message: 'Số dư trong ví không đủ' },
  BALANCE_NOT_ENOUGH_CUSTOM: { code: 58, message: 'Số dư trong ví không đủ, không thể hủy đơn hàng' },
  INVALID_POINT: { code: 9, message: 'Điểm đầu/điểm cuối không hợp lệ' },
  ERROR_PRICE: { code: 409, message: 'Số tiền không hợp lệ' },
  INVALIDE_DATE: { code: 9, message: 'Bạn chỉ có thể tìm kiếm trong khoảng thời gian nhỏ hơn hoặc bằng 31 ngày!' },
  INVALID_SHIP_FEE: { code: 409, message: 'Có lỗi khi tính phí vận chuyển, vui lòng kiểm tra lại' },
  SUCCESS_MESSAGE: 'Follow thành công',
  SUCCESS_UPDATE: 'Hủy follow thành công',
};

let SERVER_URL = '';
export function updateServerUrl(request): string {
  SERVER_URL = `${request.protocol}://${request.headers.host}`;
  return SERVER_URL;
}

export function getServerUrl(): string {
  return SERVER_URL;
}

export const IS_GIFT_ACTIVE = {
  ACTIVE: 1,
  INACTIVE: 0,
};
export const FLASH_SALE_STATUS = {
  ACTIVE: 1, // Hoạt động
  INACTIVE: 3, // Dừng hoạt động
  PENDING: 2, // Chờ hoạt động
};
export const FLASH_PRODUCT_STATUS = {
  ACTIVE: 1, // ĐÃ CHỌN SẢN PHẨM
  INACTIVE: 0, // CHƯA CHỌN SẢN PHẨM
};

export const FLASH_ENTERPRISE_STATUS = {
  ACTIVE: 1, // ĐÃ xác nhận
  INACTIVE: 0, // Chưa xác nhận
  CANCEL: 2, // Từ chối
};

export const TYPE_GIFTS = {
  ALL: 1, // toàn bộ khách hàng
  RANK: 0, // HẠNG thành viên
};

export const ORDER_HISTORY_UPDATE_TYPE = {
  CREATE_ORDER: 0, // Tạo hóa đơn
  PAID: 1, // Thanh toán
  SHIPING: 2, // Đang giao hàng
  SHIPED: 3, // Đã giao
};

export function getFullUrl(path?: string): string {
  if (!path) {
    return null;
  }

  if (!path.startsWith('http')) {
    return `${SERVER_URL}/${path}`;
  }
  return path;
}

export const message = {
  latlong: 'Không tìm thấy vị trí',
};
