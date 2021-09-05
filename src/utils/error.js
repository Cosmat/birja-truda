const ERROR_CODES = {
  EMAIL_NOT_FOUND: "Пользователь с таким email не был найден",
  INVALID_PASSWORD: "Пароль неверный",
  MISSING_EMAIL: "Пожалуйста введите почту",
  auth: "Пожалуйста войдите в систему",
  USER__BUSY: "Такой nick уже занят",
  USER_NOT_FOUND: "Пользователь не найден",
  PASSWORD_NOT_VALID: "Пароль не верен",
};

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Неизвестная ошибка";
}
