import { resolveAvailableUnit } from "@/lib/catalog/resolve";
import { insertBooking, type BookingRow } from "@/lib/db/bookings";
import {
  isOpenVisitDate,
  parseIsoDateOnly,
  resolveVisitToday,
} from "./dates";

const MAX_NAME = 80;
const MAX_PHONE = 32;
const MAX_BODY_BYTES = 4096;

export type BookingRequestBody = {
  complexId?: unknown;
  unitId?: unknown;
  date?: unknown;
  name?: unknown;
  phone?: unknown;
  dateConfirmed?: unknown;
  price?: unknown;
  role?: unknown;
};

export type BookingOk = { ok: true; booking: BookingRow };
export type BookingFail = { ok: false; error: string; status: number };

export function assertBodySize(rawLength: number): BookingFail | null {
  if (rawLength > MAX_BODY_BYTES) {
    return {
      ok: false,
      error: "Слишком большой запрос. Сократите данные и попробуйте снова.",
      status: 413,
    };
  }
  return null;
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(raw: string): string {
  return raw.replace(/[^\d+]/g, "");
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function createBookingFromRequest(
  body: BookingRequestBody,
): BookingOk | BookingFail {
  const complexId = asTrimmedString(body.complexId);
  const unitId = asTrimmedString(body.unitId);
  const date = asTrimmedString(body.date);
  const name = asTrimmedString(body.name);
  const phoneRaw = asTrimmedString(body.phone);

  // Client flags / price / role are ignored (M2).
  void body.dateConfirmed;
  void body.price;
  void body.role;

  if (!complexId || !unitId) {
    return {
      ok: false,
      error: "Не выбрана квартира для записи.",
      status: 400,
    };
  }

  const resolved = resolveAvailableUnit(complexId, unitId);
  if (!resolved) {
    return {
      ok: false,
      error: "Квартира недоступна для записи.",
      status: 404,
    };
  }

  if (!name) {
    return {
      ok: false,
      error: "Укажите имя.",
      status: 400,
    };
  }
  if (name.length > MAX_NAME) {
    return {
      ok: false,
      error: "Имя слишком длинное.",
      status: 400,
    };
  }

  if (!phoneRaw) {
    return {
      ok: false,
      error: "Укажите телефон.",
      status: 400,
    };
  }
  if (phoneRaw.length > MAX_PHONE) {
    return {
      ok: false,
      error: "Телефон слишком длинный.",
      status: 400,
    };
  }
  const phone = normalizePhone(phoneRaw);
  if (!isValidPhone(phone)) {
    return {
      ok: false,
      error: "Проверьте номер телефона.",
      status: 400,
    };
  }

  if (!parseIsoDateOnly(date)) {
    return {
      ok: false,
      error: "Некорректная дата.",
      status: 400,
    };
  }

  const today = resolveVisitToday();
  if (!isOpenVisitDate(date, today)) {
    return {
      ok: false,
      error: "Эта дата закрыта для записи. Выберите открытый день.",
      status: 400,
    };
  }

  const booking = insertBooking({
    complexId: resolved.complex.id,
    unitId: resolved.unit.id,
    visitDate: date,
    name,
    phone,
  });

  return { ok: true, booking };
}
